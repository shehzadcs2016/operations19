import {
    put, takeLatest,throttle, select, all
  } from 'redux-saga/effects';
import axios from "../../../config/axios";
import { BASE_URL_API } from '../../../config/constants';
import { makeSelectAuthToken } from '../../client_Pages/dashboard/selectors';
import { fetchAvailableClientServices as fetchAvailableClientServicesAction,
          loadedAvailableClientServices,
          requestClientService as requestClientServiceAction,
          fetchSearchResults as fetchSearchResultsAction,
          fetchClientServicesFilterData as fetchClientServicesFilterDataAction,
          loadLocationFilterData, loadedCategoryFilterData, fetchSubCategoryFilterData as fetchSubCategoryFilterDataAction,
          loadedSubCategoryFilterData,
          fetchServiceProposals as fetchServiceProposalsAction,
          serviceProposalsLoaded,
        } from './actions';
import {makeSelectClientAvailableServices} from "./selectors"


function* fetchClientServicesFilterData(){
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
    yield put({ type: loadLocationFilterData().type, payload: response.data.data["client_location"] })
  }
  catch (e){
      // do nothing for now
      console.log("===ERROR====",e)
      yield put({type:'ADD_FLASH_MESSAGE', message:{type:'error', text:'Network failure. Please try again'}})
    }
  try{
    const token = yield select(makeSelectAuthToken());
    const headers = {
        headers: { Authorization: `Bearer ${token}` },
      };
    const response = yield axios.get(
      `${BASE_URL_API}client/listcategory`,
      headers
    );
    yield  put({ type: loadedCategoryFilterData().type, payload: response.data.data })
      // put({ type: loadedSubCategoryFilterData().type, payload: response.data.data["hourly_rate"] }),
  }
  catch (e){
      // do nothing for now
      console.log("===ERROR====",e)
      yield put({type:'ADD_FLASH_MESSAGE', message:{type:'error', text:'Network failure. Please try again'}})
    }
}

function* fetchClientSubCategoryFilterData(action){
  // fetching data of search filters 
  const categoryId = action.payload.categoryId
  try{
    const token = yield select(makeSelectAuthToken());
    const headers = {
        headers: { Authorization: `Bearer ${token}` },
      };
    const response = yield axios.get(
      `${BASE_URL_API}client/listsubcategory/${categoryId}`,
      headers
    );
    yield put({ type: loadedSubCategoryFilterData().type, payload: response.data.data })
  }
  catch (e){
      // do nothing for now
      console.log("===ERROR====",e)
      yield put({type:'ADD_FLASH_MESSAGE', message:{type:'error', text:'Network failure. Please try again'}})
    }
}

function* fetchAvailableClientServices(){
  try{
      const token = yield select(makeSelectAuthToken());
      const headers = {
          headers: { Authorization: `Bearer ${token}` },
        };
      const response = yield axios.get(
        `${BASE_URL_API}client/available/services`,
        headers
      );
      yield put({ type: loadedAvailableClientServices().type, payload: response.data.data });
  }
  catch (e){
    // do nothing for now
    yield put({type:'ADD_FLASH_MESSAGE', message:{type:'error', text:'Network failure. Please try again'}})
  }
}
  
function* requestClientService(action){
  try{
      const token = yield select(makeSelectAuthToken());
      let serviceProposals =  yield select(makeSelectClientAvailableServices());
      console.log("======================================>>")
      console.log(serviceProposals)
      const headers = {
          headers: { Authorization: `Bearer ${token}` },
        };
      const response = yield axios.post(
        `${BASE_URL_API}freelancer/request-ticket/${action.payload.id}`,
        {
          service_proposal_id : action.payload.service_proposal_id,
          reason_for_this_job: action.payload.reason_for_this_job,
        },
        headers
      );
      if(response.data.status === 200){
        const updatedServiceProposals = serviceProposals.filter((proposal) => {
          return proposal.id !== action.payload.id
        })
        
        yield put({type:'ADD_FLASH_MESSAGE', message:{type:'success', text:'Project requested successfully'}})
        yield put({ type: loadedAvailableClientServices().type, payload: updatedServiceProposals });
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
  
function* fetchClientServiceSearchResults(action){
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
        `${BASE_URL_API}client/search/posts?${queryString}`,
        headers
      );
        yield put({ type: loadedAvailableClientServices().type, payload: response.data.data });
  }
  catch (e){
      // do nothing for now
      console.log("===ERROR====",e)
      yield put({type:'ADD_FLASH_MESSAGE', message:{type:'error', text:'Network failure. Please try again'}})
  }
}

function* fetchServiceProposals(){
  try{
      const token = yield select(makeSelectAuthToken());
      const headers = {
          headers: { Authorization: `Bearer ${token}` },
        };
      const response = yield axios.get(
        `${BASE_URL_API}freelancer/saved-service-proposals`,
        headers
      );
      yield put({ type: serviceProposalsLoaded().type, payload: response.data.data.service_proposals });
  }
  catch (e){
    // do nothing for now
    yield put({type:'ADD_FLASH_MESSAGE', message:{type:'error', text:'Network failure. Please try again'}})
  }
}

export default function* FreelancerClientAvailableServicesSaga() {
  yield takeLatest(fetchAvailableClientServicesAction().type, fetchAvailableClientServices);
  yield takeLatest(fetchSubCategoryFilterDataAction().type, fetchClientSubCategoryFilterData);
  yield takeLatest(requestClientServiceAction().type, requestClientService);
  yield takeLatest(fetchClientServicesFilterDataAction().type, fetchClientServicesFilterData);
  yield takeLatest(fetchServiceProposalsAction().type, fetchServiceProposals);
  yield throttle(1000,fetchSearchResultsAction().type, fetchClientServiceSearchResults);
}