import { put, takeLatest, select } from "redux-saga/effects"
import {
  makeSelectAuthToken,
  makeSelectRequestIndexByID,
  makeSelectRequests,makeSelectUserID
} from "../../client_Pages/dashboard/selectors"
import { makeSelectTicketId, makeSelectCandidates } from "./selectors"

import axios from "../../../config/axios"
import { BASE_URL_API } from "../../../config/constants"
import {
  fetchEditProfile,
  loadEditProfile,
  fetchServiceProposal,
  loadServiceProposal,
  fetchMilestone,
  loadMilestone,
  DeleteServiceProposal,
  loadDeleteServiceProposal,
  fetchProposedServices,
  loadProposedServices,
  LoadAddServiceProposal,
  FetchSingleproposedService,
  loadSingleServiceProposal,
  LoadDeleteMilestone,
  LoadDeleteProposedService,
  LoadDeleteProposalService,addsinglePortfolio,
  fetchallPortfolios ,
  portfoliosLoadedall,
  UpdateServiceProposal,
  addMileStone,
  FetchServiceMenu,
  loadServiceMenu,
  FetchSingleServiceMenu,LoadMerchantReviews,fetchMerchantReviews,
  loadSingleServiceMenu,LoadsingleMerchantReview,fetchsingleMerchantReview,LoadAddaccounts,
  FetchSinglemenuService,LoadUPDATEPortfolio,LoadUPDATEFaq  ,LoadAddReview,LoaddeleteReview,LoadupdateReview as LoadupdateReviewAction,
  deletePortfolio as deletePortfolioAction,deleteFaq,fetchSingleFaqs,LoadedSingleFaq,LoadAddEmail as loadAddEmailAction,
  loadSinglemenuService,UpdateServiceMenu,LoadDeleteServiceMenu,LoadDeletemenuservice,LoadAddServiceMenu,FetchSinglePortfolio,loadSinglemenuPortfolio,createFaq,faqsLoaded,fetchFaqs
} from "./actions"

function* loadAddEmail(action) {
  
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.get(
      `http://3.211.37.133/api/email/resend?email=${action.payload.email}`,
      // {params:{email:action.payload.email}},
      headers
    )
  
    if (response.data.status === 200) {
      // yield put({ type: portfoliosLoadedall().type, payload: response.data.data })
      yield put({
        type: "ADD_FLASH_MESSAGE",
        message: { type: "success", text: "email added successfully" },
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



function* loadAddSocialAccounts(action) {
  
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.post(
      `${BASE_URL_API}freelancer/linked-accounts`,
      action.payload.form_data,
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

function* LoadupdateReview(action) {
  
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.post(
      `${BASE_URL_API}freelancer/update-merchant-review/${action.payload.id}`,
      action.payload.form_data,
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

function* loadupdatePortfolio(action) {
  
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.post(
      `${BASE_URL_API}freelancer/update-portfolio/${action.payload.id}`,
      action.payload.form_data,
      headers
    )
  
    if (response.data.status === 200) {
      // yield put({ type: portfoliosLoadedall().type, payload: response.data.data })
      yield put({
        type: "ADD_FLASH_MESSAGE",
        message: { type: "success", text: "Portfolio updated successfully" },
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
function* loadUpdateFAQAction(action) {
  // alert(action.payload.id)
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.post(
      `${BASE_URL_API}freelancer/faq/${action.payload.id}`,
      action.payload.form_data,
      headers
    )
  
    if (response.data.status === 200) {
      // yield put({ type: portfoliosLoadedall().type, payload: response.data.data })
      yield put({
        type: "ADD_FLASH_MESSAGE",
        message: { type: "success", text: "Portfolio updated successfully" },
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

function* loaddeletePortfolio(action) {
  
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.get(
      `${BASE_URL_API}freelancer/delete-portfolio/${action.payload.id}`,
    
      headers
    )
  
    if (response.data.status === 200) {
      // yield put({ type: portfoliosLoadedall().type, payload: response.data.data })
      yield put({
        type: "ADD_FLASH_MESSAGE",
        message: { type: "success", text: "Portfolio deleted successfully" },
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
function* addCloseMilestone(action) {
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.post(
      `${BASE_URL_API}freelancer/proposed-service/add-milestone`,
      action.payload.form_data,
      headers
    )
    
    if (response.data.status === 200) {
      // yield put({ type: portfoliosLoadedall().type, payload: response.data.data })
      yield put({
        type: "ADD_FLASH_MESSAGE",
        message: { type: "success", text: "MileStone Added" },
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

function* UpdateCloseServiceMenu(action) {
  
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.post(
      `${BASE_URL_API}freelancer/update-servicemenu/${action.payload.id}`,
      action.payload.form_data,
      headers
    )
  
    if (response.data.status === 200) {
      // yield put({ type: portfoliosLoadedall().type, payload: response.data.data })
      yield put({
        type: "ADD_FLASH_MESSAGE",
        message: { type: "success", text: "Service menu updated" },
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


function* UpdateCloseServiceProposal(action) {
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.post(
      `${BASE_URL_API}freelancer/update-service-proposal/${action.payload.id}`,
      action.payload.form_data,
      headers
    )
    
    if (response.data.status === 200) {
      // yield put({ type: portfoliosLoadedall().type, payload: response.data.data })
      yield put({
        type: "ADD_FLASH_MESSAGE",
        message: { type: "success", text: "Portfolio Added" },
      })
    } 
    else{
      yield put({
        type: "ADD_FLASH_MESSAGE",
        message: { type: "error", text: "Portfolio cannot added" },
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

function* addClosePortfolio(action) {
  
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.post(
      `${BASE_URL_API}freelancer/portfolio`,
      action.payload.form_data,
      headers
    )
    console.log(response,"response portfolio")
    if(response.data.status===200){
      yield put({
        type: "ADD_FLASH_MESSAGE",
        message: { type: "success", text: "Portfolio Added" },
      })
    }
    
      // yield put({ type: portfoliosLoadedall().type, payload: response.data.data })
  
    
  } catch (e) {
    // do nothing for now
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: { type: "error", text: "Network failure. Please try again" },
    })
  }
}


function* SaveProposalMenu(action) {
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.post(
      `${BASE_URL_API}freelancer/save-service-proposal`,
      action.payload.form_data,
      headers
    )
    // console.log(response, "responseeeee")
    if (response.data.status === 200) {
      yield put({
        type: "ADD_FLASH_MESSAGE",
        message: {
          type: "success",
          text: "Proposal save successfully",
        },
      })
    } else {
      yield put({
        type: "ADD_FLASH_MESSAGE",
        message: {
          type: "info",
          text: "Proposal didn,t save successfully",
        },
      })
    }
  } catch (error) {
    console.log(error, "errrsss")
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: { type: "error", text: "Network failure. Please try again" },
    })
  }
}
function* loadClosedPortfolio() {
  // alert(action.payload.id)
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }

    const response = yield axios.get(
      `${BASE_URL_API}freelancer/get-all-projects`,
      headers
    )
    
    console.log(response, "response saga portfolio")
    yield put({
      type: portfoliosLoadedall().type,
      payload: response.data.project_list,
    })
  } catch (error) { 
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: {
        type: "error",
        error: error,
        text: "Network failure.please try again",
      },
    })
  }
}

function* FetchClosedSingleportfolio(action) {
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    

    const response = yield axios.get(
      `${BASE_URL_API}freelancer/edit-portfolio/${action.payload.id}`,
      headers
    )
    console.log(response, "response saga")
    yield put({
      type: loadSinglemenuPortfolio().type,
      payload: response.data.data,
    })
  } catch (error) {
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: {
        type: "error",
        error: error,
        text: "Network failure.please try again",
      },
    })
  }
}

function* FetchClosedSinglemenuService(action) {
  // alert(action.payload.id)
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }

    const response = yield axios.get(
      `${BASE_URL_API}freelancer/edit-servicemenu-service/${action.payload.id}`,
      headers
    )
    console.log(response, "response saga")
    yield put({
      type: loadSinglemenuService().type,
      payload: response.data.service,
    })
  } catch (error) {
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: {
        type: "error",
        error: error,
        text: "Network failure.please try again",
      },
    })
  }
}

function* FetchClosedfetchFaqs() {
  // alert(action.payload.id)
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }

    const response = yield axios.get(
      `${BASE_URL_API}freelancer/faqs`,
      headers
    )
    // console.log(response, "response saga")
    yield put({
      type: faqsLoaded().type,
      payload: response.data.data,
    })
  } catch (error) {
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: {
        type: "error",
        error: error,
        text: "Network failure.please try again",
      },
    })
  }
}

function* FetchClosedSingleServiceProposal(action) {
  // alert(action.payload.id)
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }

    const response = yield axios.get(
      `${BASE_URL_API}freelancer/edit-proposed-service/${action.payload.id}`,
      headers
    )
    console.log(response, "response saga")
    yield put({
      type: loadSingleServiceProposal().type,
      payload: response.data.data,
    })
  } catch (error) {
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: {
        type: "error",
        error: error,
        text: "Network failure.please try again",
      },
    })
  }
}

function* FetchEditMerchantReviews(action) {
  
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }

    const response = yield axios.get(
      `${BASE_URL_API}freelancer/edit-merchant-review/${action.payload.id}`,
      headers
    )
    console.log(response,"responseweewwewe")
  
      // yield put({ type: portfoliosLoadedall().type, payload: response.data.data })
      yield put({
        type: LoadsingleMerchantReview().type,
        payload: response.data,
      })
      yield put({
        type: "ADD_FLASH_MESSAGE",
        message: { type: "success", text: "Merchant  fetched successfully" },
      })
    
    
    
  } catch (error) {
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: {
        type: "error",
        error: error,
        text: "Network failure.please try again",
      },
    })
  }
}

function* FetchClosedEditFaq(action) {
  
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }

    const response = yield axios.get(
      `${BASE_URL_API}freelancer/edit-faq/${action.payload.id}`,
      headers
    )
    
    if (response.data.status === 200) {
      // yield put({ type: portfoliosLoadedall().type, payload: response.data.data })
      yield put({
        type: LoadedSingleFaq().type,
        payload: response.data.faq,
      })
      yield put({
        type: "ADD_FLASH_MESSAGE",
        message: { type: "success", text: "faq datA fetched successfully" },
      })
    }
    
    
  } catch (error) {
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: {
        type: "error",
        error: error,
        text: "Network failure.please try again",
      },
    })
  }
}

function* loadcreateFaq(action) {
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.post(
      `${BASE_URL_API}freelancer/faq`,
      action.payload.form_data,
      headers
    )
    // console.log(response, "responseeeee")
    if (response.data.status === 200) {
      yield put({
        type: "ADD_FLASH_MESSAGE",
        message: {
          type: "success",
          text: "Faq save successfully",
        },
      })
    } else {
      yield put({
        type: "ADD_FLASH_MESSAGE",
        message: {
          type: "info",
          text: "Faq didn,t save successfully",
        },
      })
    }
  } catch (error) {
    console.log(error, "errrsss")
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: { type: "error", text: "Network failure. Please try again" },
    })
  }
}

function* loaddeleteFaq(action) {
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    // alert(token)
    const response = yield axios.get(
      `${BASE_URL_API}freelancer/faq/${action.payload.id}`,
      headers
    )
    // console.log(response, "responseeeee")
    if (response.data.status === 200) {
      yield put({
        type: "ADD_FLASH_MESSAGE",
        message: {
          type: "success",
          text: "Faq deleted successfully",
        },
      })
    } else {
      yield put({
        type: "ADD_FLASH_MESSAGE",
        message: {
          type: "info",
          text: "Faq didn,t deleted successfully",
        },
      })
    }
  } catch (error) {
    console.log(error, "errrsss")
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: { type: "error", text: "Network failure. Please try again" },
    })
  }
}


function* fetchEditServiceMenu(action) {
  
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.get(
      `${BASE_URL_API}freelancer/edit-servicemenu/${action.payload.id}`,
      headers
    )
    console.log(response, "response saga")
    yield put({
      type: loadSingleServiceMenu().type,
      payload: response.data.service_menu,
    })
  } catch (error) {
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: {
        type: "error",
        error: error,
        text: "Network failure.please try again",
      },
    })
  }
}

function* fetchClosedProposedServices(action) {
  // alert(action.payload.id)
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.get(
      `${BASE_URL_API}freelancer/edit-service-proposal/${action.payload.id}`,
      headers
    )
    console.log(response, "response saga")
    yield put({
      type: loadProposedServices().type,
      payload: response.data.data,
    })
  } catch (error) {
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: {
        type: "error",
        error: error,
        text: "Network failure.please try again",
      },
    })
  }
}

function* fetchClosedServiceRequest(action) {
  const user_id = yield select(makeSelectUserID())
  // alert(user_id)
  try {
    const token = yield select(makeSelectAuthToken())
    // alert(token)
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.get(
      `${BASE_URL_API}freelancer/edit-profile/${action.payload.id}`,
      headers
    )
    yield put({
      type: loadEditProfile().type,
      payload: response.data.data,
    })
  } catch (error) {
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: {
        type: "error",
        error: error,
        text: "Network failure.please try again",
      },
    })
  }
}


function* LOADDeleteMerchantreview(action) {
  // alert(action.payload.id)
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
  
    const response = yield axios.get(
      `${BASE_URL_API}freelancer/delete-merchant-review/${action.payload.id}`,
      headers
    )
  if(response.status===200){
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: {
        type: "success",
        text: " Merchant review is deleted Successfully",
      },
    })
  }

  } catch (error) {
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: {
        type: "error",
        error: error,
        text: "Network failure.please try again",
      },
    })
  }
}

function* LOADAddMerchantreview(action) {
  // alert(action.payload.id)
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
  
    const response = yield axios.post(
      `${BASE_URL_API}freelancer/merchant-review`,
      action.payload.form_data,
      headers
    )
  if(response.status===200){
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: {
        type: "success",
        text: " Merchant review is added Successfully",
      },
    })
  }

  } catch (error) {
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: {
        type: "error",
        error: error,
        text: "Network failure.please try again",
      },
    })
  }
}



function* AddCloseServiceMenu(action) {
  // alert(action.payload.id)
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
  
    const response = yield axios.post(
      `${BASE_URL_API}freelancer/servicemenu`,
      action.payload.form_data,
      headers
    )
  if(response.status===200){
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: {
        type: "success",
        text: " service Menu is add Successfully",
      },
    })
  }

  } catch (error) {
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: {
        type: "error",
        error: error,
        text: "Network failure.please try again",
      },
    })
  }
}

function* DeleteCloseMenuService(action) {
  // alert(action.payload.id)
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.get(
      `${BASE_URL_API}freelancer/delete-servicemenu-service/${action.payload.id}`,
      headers
    )
  if(response.data.status===200){
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: {
        type: "success",
        text: "Menu services is deleted Successfully",
      },
    })
  }
 
  } catch (error) {
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: {
        type: "error",
        error: error,
        text: "Network failure.please try again",
      },
    })
  }
}


function* DeleteCloseServiceMenu(action) {
  // alert(action.payload.id)
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
  
    const response = yield axios.get(
      `${BASE_URL_API}freelancer/delete-servicemenu/${action.payload.id}`,
      headers
    )
  if(response.data.status===200){
   
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: {
        type: "success",
        text: "Service Menu is deleted Successfully",
      },
    })
  }
  } catch (error) {
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: {
        type: "error",
        error: error,
        text: "Network failure.please try again",
      },
    })
  }
}

function* DeleteCloseProposalService(action) {
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
  
    const response = yield axios.get(
      `${BASE_URL_API}freelancer/delete-service-proposal/${action.payload.id}`,
      headers
    )
  
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: {
        type: "success",
        text: "Proposal Service is deleted Successfully",
      },
    })
  } catch (error) {
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: {
        type: "error",
        error: error,
        text: "Network failure.please try again",
      },
    })
  }
}
function* DeleteCloseProposedService(action) {
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
  
    const response = yield axios.get(
      `${BASE_URL_API}freelancer/delete-proposed-service/${action.payload.id}`,
      headers
    )
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: {
        type: "success",
        text: "Proposed Service is deleted Successfully",
      },
    })
  } catch (error) {
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: {
        type: "error",
        error: error,
        text: "Network failure.please try again",
      },
    })
  }
}


function* DeleteCloseMilestone(action) {
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.get(
      `${BASE_URL_API}freelancer/service-proposal/delete-milestone/${action.payload.id}`,
      headers
    )
   
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: {
        type: "success",
        text: "Milestone is deleted Successfully",
      },
    })
  } catch (error) {
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: {
        type: "error",
        error: error,
        text: "Network failure.please try again",
      },
    })
  }
}
function* fetchDeleteServiceProposal(action) {
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    
    const response = yield axios.get(
      `${BASE_URL_API}freelancer/delete-service-proposal/${action.payload.id}`,
      headers
    )
   
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: {
        type: "success",
        text: "Service Proposal is deleted Successfuully",
      },
    })
  } catch (error) {
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: {
        type: "error",
        error: error,
        text: "Network failure.please try again",
      },
    })
  }
}
function* fetchClosedServiceProposal() {
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.get(
      `${BASE_URL_API}freelancer/saved-service-proposals`,
      headers
    )
    yield put({
      type: loadServiceProposal().type,
      payload: response.data.data,
    })
  } catch (error) {
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: {
        type: "error",
        error: error,
        text: "Network failure.please try again",
      },
    })
  }
}
function* fetchclosedMerchantReviews() {
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.get(
      `${BASE_URL_API}freelancer/merchant-reviews`,
      headers
    )
    
    yield put({
      type: LoadMerchantReviews().type,
      payload: response.data.data,
    })
  } catch (error) {
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: {
        type: "error",
        error: error,
        text: "Network failure.please try again",
      },
    })
  }
}

function* fetchClosedServiceMenu() {
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.get(
      `${BASE_URL_API}freelancer/saved-service-menu`,
      headers
    )
    
    yield put({
      type: loadServiceMenu().type,
      payload: response.data.data,
    })
  } catch (error) {
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: {
        type: "error",
        error: error,
        text: "Network failure.please try again",
      },
    })
  }
}

function* fetchClosedMilestone(action) {
  try {
    const token = yield select(makeSelectAuthToken())
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const response = yield axios.get(
      `${BASE_URL_API}freelancer/edit-milestone/${action.payload.id}`,
      headers
    )
    yield put({
      type: loadMilestone().type,
      payload: response.data.data,
    })
  } catch (error) {
    yield put({
      type: "ADD_FLASH_MESSAGE",
      message: {
        type: "error",
        error: error,
        text: "Network failure.please try again",
      },
    })
  }
}

export default function* EditProfileSaga() {
  yield takeLatest(fetchEditProfile().type, fetchClosedServiceRequest)
  yield takeLatest(fetchServiceProposal().type, fetchClosedServiceProposal)
  yield takeLatest(fetchMilestone().type, fetchClosedMilestone)
  yield takeLatest(DeleteServiceProposal().type, fetchDeleteServiceProposal)
  yield takeLatest(fetchProposedServices().type, fetchClosedProposedServices)
  yield takeLatest(LoadAddServiceProposal().type, SaveProposalMenu)

  yield takeLatest(LoadDeleteMilestone().type, DeleteCloseMilestone)
  yield takeLatest(LoadDeleteProposedService().type, DeleteCloseProposedService)
  yield takeLatest(LoadDeleteProposalService().type, DeleteCloseProposalService)
  yield takeLatest(
    FetchSingleproposedService().type,
    FetchClosedSingleServiceProposal
  )
  yield takeLatest(
    UpdateServiceProposal().type,
    UpdateCloseServiceProposal
  )

  yield takeLatest(
    addsinglePortfolio().type,
    addClosePortfolio
  )
  
  yield takeLatest(
    addMileStone().type,
    addCloseMilestone
  )
  yield takeLatest(
    fetchallPortfolios().type,
    loadClosedPortfolio
  )
  yield takeLatest(
    FetchServiceMenu().type,
    fetchClosedServiceMenu
  )
  yield takeLatest(
    fetchMerchantReviews().type,
    fetchclosedMerchantReviews
  )
  yield takeLatest(
    FetchSingleServiceMenu().type,
    fetchEditServiceMenu
  )
  yield takeLatest(
    FetchSinglemenuService().type,
    FetchClosedSinglemenuService
  )
  yield takeLatest(
    UpdateServiceMenu().type,
    UpdateCloseServiceMenu
  )
  yield takeLatest(
    LoadDeleteServiceMenu().type,
    DeleteCloseServiceMenu
  )
  yield takeLatest(
    LoadDeletemenuservice().type,
    DeleteCloseMenuService
  )
  yield takeLatest(
    LoadAddServiceMenu().type,
    AddCloseServiceMenu
  )
  yield takeLatest(
    FetchSinglePortfolio().type,
    FetchClosedSingleportfolio
  )
  yield takeLatest(
    createFaq().type,
    loadcreateFaq
  )
  yield takeLatest(
    deleteFaq().type,
    loaddeleteFaq
  )
  yield takeLatest(
    fetchFaqs().type,
    FetchClosedfetchFaqs
  )
  yield takeLatest(
    fetchSingleFaqs().type,
    FetchClosedEditFaq
  )
  yield takeLatest(deletePortfolioAction().type, loaddeletePortfolio)
  yield takeLatest(LoadUPDATEPortfolio().type, loadupdatePortfolio)
  yield takeLatest(LoadUPDATEFaq().type, loadUpdateFAQAction)
  yield takeLatest(LoadAddReview().type, LOADAddMerchantreview)
  
  yield takeLatest(loadAddEmailAction().type, loadAddEmail)
  yield takeLatest(fetchsingleMerchantReview().type, FetchEditMerchantReviews)
  yield takeLatest(LoaddeleteReview().type, LOADDeleteMerchantreview)
  yield takeLatest(LoadAddaccounts().type, loadAddSocialAccounts)
  yield takeLatest(LoadupdateReviewAction().type, LoadupdateReview)

}



