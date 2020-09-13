import { put, takeLatest, select,call } from "redux-saga/effects";
import { makeSelectAuthToken } from "../../../client_Pages/dashboard/selectors";
import axios from "../../../../config/axios";
import { BASE_URL_API } from "../../../../config/constants";
import { loadFreelancerReviews as loadFreelancerReviewsAction, freelancerReviewsLoaded,
          postPublicReply as postPublicReplyAction      
} from "../actions";
import { store } from "../../../../Redux/store";

function* loadFreelancerReviews() {
  try {
    const token = yield select(makeSelectAuthToken());
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const id = store.getState().login.id
    const response = yield axios.get(
      `${BASE_URL_API}freelancer/profile/${id}`,
      headers
    );
    console.log("---- FreelancerReviewsSaga Reviews SAGA: ",response.data.data);
    yield put({ type: freelancerReviewsLoaded().type, payload: response.data.data });
  } catch {
  }
}

function* postPublicReply(action) {
  try {
    const token = yield select(makeSelectAuthToken());
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = yield axios.post(
      `${BASE_URL_API}client/review/reply`,
      {
        reply: action.payload.reply,
        client_review_id: action.payload.client_review_id,
      }
      ,
      headers
    );
    console.log(">>>> postPublicReplySaga: ",response.data.data);
    const id = store.getState().login.id
    const response2 = yield axios.get(
      `${BASE_URL_API}freelancer/profile/${id}`,
      headers
      );
      yield put({type:'ADD_FLASH_MESSAGE', message:{type:'success', text:'Reply posted successfully'}})
      yield put({ type: freelancerReviewsLoaded().type, payload: response2.data.data });
  } catch {
  }
}

export default function* FreelancerReviewsSaga() {
  yield takeLatest(loadFreelancerReviewsAction().type, loadFreelancerReviews);
  yield takeLatest(postPublicReplyAction().type, postPublicReply);
}
