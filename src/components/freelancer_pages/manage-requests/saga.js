import { put, takeLatest,throttle, select, all } from 'redux-saga/effects';
import axios from "../../../config/axios";
import { BASE_URL_API } from '../../../config/constants';
import { makeSelectAuthToken, makeSelectUserID } from '../../client_Pages/dashboard/selectors';
import { fetchAvailableProjects as fetchAvailableProjectsAction,
         loadedAvailableProjects,
         fetchClosedProjects as fetchClosedProjectsAction,
         loadedClosedProjects,
         requestProject as requestProjectAction,
         fetchSearchResults as fetchSearchResultsAction
        } from './actions';
import { makeSelectAvailableProjects, makeSelectClosedProjects } from './selectors';

function* fetchClosedProjects(){
  try{
      const token = yield select(makeSelectAuthToken());
      const headers = {
          headers: { Authorization: `Bearer ${token}` },
        };
      const response = yield axios.get(
        `${BASE_URL_API}project/closed/list`,
        headers
      );
      yield put({ type: loadedClosedProjects().type, payload: response.data.data, });
  }
  catch (e){
      // do nothing for now
      yield put({type:'ADD_FLASH_MESSAGE', message:{type:'error', text:'Network failure. Please try again'}})
  }
}

function* fetchAvailableProjects() {
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.get(
      `${BASE_URL_API}freelancer/projects`,
      headers
    )
    yield put({
      type: loadedAvailableProjects().type,
      payload: response.data.data,
    })
  } catch (e) {
    // do nothing for now
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: { type: "error", text: "Network failure. Please try again" },
    })
  }
}

function* requestProject(action){
  try{
      const token = yield select(makeSelectAuthToken());
      const user_id = yield select(makeSelectUserID());
      let projects = null;
      if (action.payload.status === "closed"){
        projects = yield select(makeSelectClosedProjects());
      } else {
        projects = yield select(makeSelectAvailableProjects());
      }
      const headers = {
          headers: { Authorization: `Bearer ${token}` },
        };
      const response = yield axios.post(
        `${BASE_URL_API}freelancer/request`,
        {
          client_project_id: action.payload.projectId,
          desire_rate: action.payload.desireRate,
          freelancer_note: action.payload.freelancerNote,
          status: action.payload.status,
          feedback: action.payload.feedback,
          user_id: user_id
        },
        headers
      );
      if(response.data.status === 200){
        const updatedProjects = projects.filter((project) => {
          return project.id !== action.payload.projectId
        })
        if (action.payload.status === "closed"){
          yield put({ type: loadedClosedProjects().type, payload: updatedProjects, });
        } else {
          yield put({ type: loadedAvailableProjects().type, payload: updatedProjects, });
        }
        yield put({type:'ADD_FLASH_MESSAGE', message:{type:'success', text:'Project requested successfully'}})
      }
      else{
        yield put({type:'ADD_FLASH_MESSAGE', message:{type:'info', text:'Project could not be requested'}})
      }
  }
  catch (e){
      // do nothing for now
      console.log(">>>>error>>>.",e)
      yield put({type:'ADD_FLASH_MESSAGE', message:{type:'error', text:'Network failure. Please try again'}})
  }
}

function* fetchProjectSearchResults(action){

  try{
    const queryParams=[];
     Object.keys(action.payload).map((key) =>{
       if (action.payload[key].trim() !== "" ){
         return queryParams.push(encodeURIComponent(key)+ '='+encodeURIComponent(action.payload[key].trim()));
       }
       else{
         return ''
       }
    })
    const queryString = queryParams.join('&');
      const token = yield select(makeSelectAuthToken());
      const headers = {
          headers: { Authorization: `Bearer ${token}` },
        };
      const response = yield axios.get(
        `${BASE_URL_API}freelancer/search?${queryString}`,
        headers
      );
      // yield put({ type: loadedAvailableProjects().type, payload: response.data.data.slice(0,3), });
      yield all([
        put({ type: loadedAvailableProjects().type, payload: response.data.data }),
        put({ type: loadedClosedProjects().type, payload: response.data.data }),
    ]);
  }
  catch (e){
      // do nothing for now
      console.log("===ERROR====",e)
      yield put({type:'ADD_FLASH_MESSAGE', message:{type:'error', text:'Network failure. Please try again'}})
  }
}

export default function* FreelancerManageRequestSaga() {
  yield takeLatest(fetchClosedProjectsAction().type, fetchClosedProjects);
  yield takeLatest(fetchAvailableProjectsAction().type, fetchAvailableProjects);
  yield takeLatest(requestProjectAction().type, requestProject);
  yield throttle(1000,fetchSearchResultsAction().type, fetchProjectSearchResults);
}
