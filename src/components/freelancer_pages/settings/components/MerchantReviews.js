import React, { useState, useEffect } from "react"
import { Button, Avatar } from "@material-ui/core"
import {
  RadioButton,
  UploadFiles,
  PasswordField,
  CustomSelect,
  CustomTextfield,
} from "../../../shared/formComponents"
import { createStructuredSelector } from 'reselect';

import axios from "../../../../config/axios"
import { store } from "../../../../Redux/store"
import { BASE_URL_API } from "../../../../config/constants"
import ReviewMemo from './memoReview'
import { MemoReview } from "../../service-menu/components/memoReview"
import { addFlashMessage } from "../../../../Redux/actions/flashMessages"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { LoadAddReview ,fetchMerchantReviews} from "../actions";
import { makeSelectMerchantReviews } from "../selectors";

function Reviews(props) {
  const { responseData,setIsbuttonLoading,ServiceButton,dispatchAddMerchantReview,} = props
  const [reviewErrs, setReviewErr] = useState({
    reviewer_name: "",
    link: "",
    review: "",
  })
  const [isButtonLoading, setisButtonLoading] = React.useState(false)

  const MerchantValidateForm = (reviewData) => {
    // console.log(reviewData,"swhnkqwuhoii")
    setisButtonLoading(true)
    const {reviewer_name,link,review}=reviewData
    const form_data = new FormData()
   
      form_data.append("reviewer_name", reviewer_name)
      form_data.append("link", link)
      form_data.append("review", review)
    dispatchAddMerchantReview({form_data:form_data})
    setisButtonLoading(false)
  }
  
  // console.log(reviewData,"reviewData jbihu")
  return (
    <div className="container">
    <div className="row">
      <div className="col-lg-8  m-auto account_setting_body_color p-3">
    <ReviewMemo
    setReviewErr={setReviewErr}
    reviewErrs={reviewErrs}
    reviewer_name={reviewErrs.reviewer_name}
    MerchantValidateForm={MerchantValidateForm}
    isButtonLoading={isButtonLoading}
    setisButtonLoading={setisButtonLoading}
  />
        
  </div>
  </div>
  </div>
  )
}



// const mapStateToProps = createStructuredSelector({

//   MerchantReviews: makeSelectMerchantReviews(),

// });


function mapDispatchToProps(dispatch) {
return {
  dispatchAddMerchantReview: (payload) => dispatch(LoadAddReview(payload)),
  // dispatchUpdatePortfolios: (payload) => dispatch(LoadUPDATEPortfolio(payload)),


};
}

export default (connect(null, mapDispatchToProps)(Reviews));