import { put, takeLatest, select, call } from "redux-saga/effects";
import { makeSelectAuthToken, makeSelectPortfolios, makeSelectFaqs, makeSelectReviews} from "./selectors";
import axios from "../../../config/axios";
import { BASE_URL_API } from "../../../config/constants";
import {
  addPortfolio as addPortfolioAction,
  fetchPortfolios as fetchPortfoliosAction,
  portfoliosLoaded,
  deletePortfolio as deletePortfolioAction,
  createFaq as createFaqAction,
  fetchFaqs as fetchFaqsAction,
  faqsLoaded,LoadAddaccounts,
  deleteFaq as deleteFaqAction,
  fetchReviews as fetchReviewsAction,
  reviewsLoaded,
  deleteReview as deleteReviewAction, 
  addReview as addReviewAction
  // fetchServiceMenu as fetchServiceMenuAction,
} from "./actions";
import { store } from "../../../Redux/store"


function* loadAddSocialAccounts(action) {
  
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.post(
      `${BASE_URL_API}freelancer/linked-accounts`,
      action.payload.account,
      headers
    )
  
    if (response.data.status === 200) {
      // yield put({ type: portfoliosLoadedall().type, payload: response.data.data })
      yield put({
        type: "ADD_FLASH_MESSAGE",
        message: { type: "success", text: "Account added successfully" },
      })
    } 
  } catch (e) {
    // do nothing for now
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: { type: "error", text: "Network failure. Please try again" },
    })
  }
}
// portfolio saga start from here
function* fetchPortfolios() {
  try{
    const userId = store.getState().login.id;

      const token = yield select(makeSelectAuthToken());
      // const ticketId = yield select(makeSelectTicketId());
      const headers = {
          headers: { Authorization: `Bearer ${token}` },
        };
      const response = yield axios.get(
        `${BASE_URL_API}freelancer/edit-profile/${userId}`,
        headers
      );
      console.log("response ", response);
      yield put({ type: portfoliosLoaded().type, payload: response.data.data.profile_projects, });
  }
  catch (e){
      // do nothing for now
      yield put({type:'ADD_FLASH_MESSAGE', message:{type:'error', text:'Network failure. Please try again'}})
  }
}

function* deletePortfolio(action) {
  try{
      const token = yield select(makeSelectAuthToken());
      const headers = {
          headers: { Authorization: `Bearer ${token}` },
        };
      const response = yield axios.get(
        `${BASE_URL_API}freelancer/delete-portfolio/${action.payload.id}`,
        headers
      );
      if (response.status===200){
        yield call(fetchPortfolios);
        yield put({type:'ADD_FLASH_MESSAGE', message:{type:'success', text:'Project Deleted'}})
      }
  }
  catch (e){
      // do nothing for now
      yield put({type:'ADD_FLASH_MESSAGE', message:{type:'error', text:'Network failure. Please try again'}})
  }
}

function* addPortfolio(action) {
  
  try {
    const portfoliosData = yield select(makeSelectPortfolios())
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.post(
      `${BASE_URL_API}freelancer/portfolio`,
      action.payload,
      headers
    )
    if (response.data.status === 200) {
      yield put({ type: portfoliosLoaded().type, payload: response.data.data })
      yield put({ type: portfoliosLoaded().type, payload: [...portfoliosData, response.data.data] })
      yield put({
        type: "ADD_FLASH_MESSAGE",
        message: { type: "success", text: "Portfolio Added" },
      })
    } 
  } catch (e) {
    // do nothing for now
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: { type: "error", text: "Network failure. Please try again" },
    })
  }
}

// portfolio saga end here

// faq saga start from here
function* fetchFaqs() {
  try{
    const token = yield select(makeSelectAuthToken());
    const headers = {
        headers: { Authorization: `Bearer ${token}` },
      };
    const response = yield axios.get(
      `${BASE_URL_API}freelancer/faqs`,
      headers
    );
    yield put({ type: faqsLoaded().type, payload: response.data.data, });
  }
  catch (e){
      // do nothing for now
      yield put({type:'ADD_FLASH_MESSAGE', message:{type:'error', text:'Network failure. Please try again'}})
  }
}

function* deleteFaq(action) {
  try{
      const token = yield select(makeSelectAuthToken());
      const headers = {
          headers: { Authorization: `Bearer ${token}` },
        };
      const response = yield axios.get(
        `${BASE_URL_API}freelancer/faq/${action.payload.id}`,
        headers
      );
      if (response.status===200){
        yield call(fetchFaqs);
        yield put({type:'ADD_FLASH_MESSAGE', message:{type:'success', text:'Faq Deleted'}})
      }
  }
  catch (e){
      // do nothing for now
      yield put({type:'ADD_FLASH_MESSAGE', message:{type:'error', text:'Network failure. Please try again'}})
  }
}

function* createFaq(action) {
  try {
    const faqData = yield select(makeSelectFaqs())
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.post(
      `${BASE_URL_API}freelancer/faq`,
      action.payload,
      headers
    )
    if (response.data.status === 200) {
      yield put({ type: faqsLoaded().type, payload: response.data.data })
      yield put({ type: faqsLoaded().type, payload: [...faqData, response.data.data] })
      yield put({
        type: "ADD_FLASH_MESSAGE",
        message: { type: "success", text: "Faq Created" },
      })
    } 
  } catch (e) {
    // do nothing for now
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: { type: "error", text: "Network failure. Please try again" },
    })
  }
}

// faq saga end here

// service menu saga start
function* fetchServiceMenu() {
  // not in use yet
  try{
    const token = yield select(makeSelectAuthToken());
    const headers = {
        headers: { Authorization: `Bearer ${token}` },
      };
    const response = yield axios.get(
      `${BASE_URL_API}freelancer/faqs`,
      headers
    );
    // yield put({ type: serviceMenuLoaded().type, payload: response.data.data, });
  }
  catch (e){
      // do nothing for now
      yield put({type:'ADD_FLASH_MESSAGE', message:{type:'error', text:'Network failure. Please try again'}})
  }
}
// service menu saga end


// review saga start from here
function* createReview(action) {
  console.log("<><><>form data====<><><>",action.payload)
  try {
    const reviewsData = yield select(makeSelectReviews())
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.post(
      `${BASE_URL_API}freelancer/merchant-review`,
      action.payload,
      headers
    )
    if (response.data.status === 200) {
      // yield put({ type: reviewsLoaded().type, payload: response.data.data })
      yield put({ type: reviewsLoaded().type, payload: [...reviewsData, response.data.data] })
      yield put({
        type: "ADD_FLASH_MESSAGE",
        message: { type: "success", text: "Review Created" },
      })
    } 
  } catch (e) {
    // do nothing for now
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: { type: "error", text: "Network failure. Please try again" },
    })
  }
}
function* fetchReviews() {
  try{
    const token = yield select(makeSelectAuthToken());
    const headers = {
        headers: { Authorization: `Bearer ${token}` },
      };
    const response = yield axios.get(
      `${BASE_URL_API}freelancer/merchant-reviews`,
      headers
    );
    yield put({ type: reviewsLoaded().type, payload: response.data.data.merchant_reviews, });
  }
  catch (e){
      // do nothing for now
      yield put({type:'ADD_FLASH_MESSAGE', message:{type:'error', text:'Network failure. Please try again'}})
  }
}

function* deleteReview(action) {
  try{
      const token = yield select(makeSelectAuthToken());
      const headers = {
          headers: { Authorization: `Bearer ${token}` },
        };
      const response = yield axios.get(
        `${BASE_URL_API}freelancer/delete-merchant-review/${action.payload.id}`,
        headers
      );
      if (response.status===200){
        yield call(fetchReviews);
        yield put({type:'ADD_FLASH_MESSAGE', message:{type:'success', text:'Review Deleted'}})
      }
  }
  catch (e){
      // do nothing for now
      yield put({type:'ADD_FLASH_MESSAGE', message:{type:'error', text:'Network failure. Please try again'}})
  }
}
//review saga ends here


export default function* JobRequestsSaga() {
  //portfolio
  yield takeLatest(addPortfolioAction().type, addPortfolio)
  yield takeLatest(fetchPortfoliosAction().type, fetchPortfolios)
  yield takeLatest(deletePortfolioAction().type, deletePortfolio)
  //faqs
  yield takeLatest(createFaqAction().type, createFaq)
  yield takeLatest(fetchFaqsAction().type, fetchFaqs)
  yield takeLatest(deleteFaqAction().type, deleteFaq)
  //reviews
  yield takeLatest(addReviewAction().type, createReview)
  yield takeLatest(fetchReviewsAction().type, fetchReviews)
  yield takeLatest(deleteReviewAction().type, deleteReview)
  //service menu
  // yield takeLatest(fetchServiceMenuAction().type, fetchServiceMenu)
  yield takeLatest(LoadAddaccounts().type, loadAddSocialAccounts)

}
