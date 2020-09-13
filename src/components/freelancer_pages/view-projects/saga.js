import {
    put, takeLatest,throttle, select, all
  } from 'redux-saga/effects';
  import axios from "../../../config/axios";
  import { BASE_URL_API } from '../../../config/constants';
  import { makeSelectAuthToken, makeSelectUserID } from '../../client_Pages/dashboard/selectors';
  import { fetchActiveProjects as fetchActiveProjectsAction,
           loadedActiveProjects,
           fetchRecruitingProjects as fetchRecruitingProjectsAction,
           loadedRecruitingProjects,
           requestProject as requestProjectAction,
           fetchSearchResults as fetchSearchResultsAction,
           fetchProjectsFilterData as fetchProjectsFilterDataAction,
           loadLocationFilterData, loadHourlyRateFilterData,
          } from './actions';
  import { makeSelectActiveProjects, makeSelectRecruitingProjects } from './selectors';
  
  function* fetchRecruitingProjects(){
    try{
        const token = yield select(makeSelectAuthToken());
        const headers = {
            headers: { Authorization: `Bearer ${token}` },
          };
        const response = yield axios.get(
          `${BASE_URL_API}project/closed/list`, //project/closed/list
          headers
        );
        yield put({ type: loadedRecruitingProjects().type, payload: response.data.data, });
    }
    catch (e){
        // do nothing for now
        yield put({type:'ADD_FLASH_MESSAGE', message:{type:'error', text:'Network failure. Please try again'}})
    }
  }
  
  function* fetchActiveProjects(){
    try{
        const token = yield select(makeSelectAuthToken());
        const headers = {
            headers: { Authorization: `Bearer ${token}` },
          };
        const response = yield axios.get(
          `${BASE_URL_API}project/available/list`,
          headers
        );
        // yield put({type:'ADD_FLASH_MESSAGE', message:{type:'success', text:'Projects Loaded'}})
        yield put({ type: loadedActiveProjects().type, payload: response.data.data, });
    }
    catch (e){
        // do nothing for now
        yield put({type:'ADD_FLASH_MESSAGE', message:{type:'error', text:'Network failure. Please try again'}})
    }
  }
  
  function* requestProject(action){
    try{
        const token = yield select(makeSelectAuthToken());
        const user_id = yield select(makeSelectUserID());
        let projects = null;
        if (action.payload.status === "closed"){
          projects = yield select(makeSelectRecruitingProjects());
        } else {
          projects = yield select(makeSelectActiveProjects());
        }
        
        const headers = {
            headers: { Authorization: `Bearer ${token}` },
          };
        const response = yield axios.post(
          `${BASE_URL_API}freelancer/request`,
          {
            client_project_id: action.payload.projectId,
            // client_project_id: "1",
            desire_rate : action.payload.desireRate,
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
            yield put({ type: loadedRecruitingProjects().type, payload: updatedProjects, });
          } else {
            yield put({ type: loadedActiveProjects().type, payload: updatedProjects, });
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
         if (typeof(action.payload[key]) === "string" ){
            if (action.payload[key].trim() !== "" ){
                return queryParams.push(encodeURIComponent(key)+ '='+encodeURIComponent(action.payload[key].trim()));
            }
            else{
                return ''
            }
        }
        else if(action.payload[key]){
            return queryParams.push(encodeURIComponent(key)+ '='+encodeURIComponent(action.payload[key]));
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
        // yield put({ type: loadedActiveProjects().type, payload: response.data.data.slice(0,3), });
        yield all([
          put({ type: loadedActiveProjects().type, payload: response.data.data }),
          put({ type: loadedRecruitingProjects().type, payload: response.data.data }),
      ]);
    }
    catch (e){
        // do nothing for now
        console.log("===ERROR====",e)
        yield put({type:'ADD_FLASH_MESSAGE', message:{type:'error', text:'Network failure. Please try again'}})
    }
  }

  function* fetchProjectSearchFilterData(){
    // fetching data of search filters 
    try{
      const token = yield select(makeSelectAuthToken());
      const headers = {
          headers: { Authorization: `Bearer ${token}` },
        };
      const response = yield axios.get(
        `${BASE_URL_API}constant/arrays`,
        headers
      );
      yield all([
        put({ type: loadLocationFilterData().type, payload: response.data.data["client_location"] }),
        put({ type: loadHourlyRateFilterData().type, payload: response.data.data["hourly_rate"] }),
    ]);
  }
  catch (e){
      // do nothing for now
      console.log("===ERROR====",e)
      yield put({type:'ADD_FLASH_MESSAGE', message:{type:'error', text:'Network failure. Please try again'}})
  }
}
  
  export default function* FreelancerRequestSaga() {
    yield takeLatest(fetchRecruitingProjectsAction().type, fetchRecruitingProjects);
    yield takeLatest(fetchActiveProjectsAction().type, fetchActiveProjects);
    yield takeLatest(requestProjectAction().type, requestProject);
    yield takeLatest(fetchProjectsFilterDataAction().type, fetchProjectSearchFilterData);
    yield throttle(1500,fetchSearchResultsAction().type, fetchProjectSearchResults);
  }