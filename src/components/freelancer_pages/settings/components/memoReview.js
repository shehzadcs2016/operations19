import React, { useState,useEffect } from "react"
import ServiceButton from "../../../shared/serviceButton"
import {
  CustomTextfield,
} from "../../../shared/formComponents"
import { isEmpty } from "../../../../utils"

import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { createStructuredSelector } from 'reselect';
import ReviewForm from './MerchantReviewForm'
import { LoadAddReview ,fetchMerchantReviews,fetchsingleMerchantReview,LoadupdateReview,LoaddeleteReview} from "../actions";
import { makeSelectMerchantReviews ,makeSelectEditMerchantReviews} from "../selectors";
import CloseIcon from '@material-ui/icons/Close';
import validator from 'validator';
export const MemoReview = (props) => {
  const {
    reviewErrs,
    setReviewErr,
    MerchantValidateForm,
    msg,MerchantReviews,dispatchFetchMerchantReviews,dispatchEditReviews,EditMerchant,dispatchUpdateReview,dispatchDeleteReview,isButtonLoading,setisButtonLoading
  }=props
  const blankData = {
    reviewer_name: "",
    review: "",
    link: "",
  }
  // console.log(msg,"reviewErrs")
  const [isDisable, setIsDisable] = React.useState(false)
  const [flag, setflag] = React.useState(false)

	const [editid, seteditid] = React.useState('')
  

  const [tempReviewData, setTempReviewData] = useState(blankData)
  const [reviewData, setReviewData] = useState([])
  const validateLink = ()=>{
    const value = tempReviewData.link;
    if (!value){
      setReviewErr({...reviewErrs,link:"Required"})
      return false
    }
    if(!validator.isURL(value)){
      setReviewErr({...reviewErrs,link:"Invalid Link"})
      return false
    }else{
      setReviewErr({...reviewErrs,link:""})
    }
  }
  const Empty = (e) => {
    if (!e.target.value){
      setReviewErr({...reviewErrs,[e.target.name]:"Required"})
    }else{
      setReviewErr({...reviewErrs,[e.target.name]:""})
    }
  }
  useEffect(()=>{
    if(EditMerchant && EditMerchant){
      
      const {name,id,
      comment,
      link}=EditMerchant;
      seteditid(id)
      setTempReviewData({
        reviewer_name:name,
        review:comment,
        link:link
      })
    }
  },[props.EditMerchant])
  useEffect(()=>{
    dispatchFetchMerchantReviews()
  },[])
  const setEmptyValuesReq = () => {

    let obj = {}
    const eml=validateLink()
    Object.keys(tempReviewData).map((key) => {
      if (tempReviewData[key].toString().trim() === ""){
        obj[key]="Required"
      }
    
    });
    if(!eml){
      const msg = "Invalid Link!"
      setReviewErr({ ...reviewErrs, link: msg })
    }
    else{
      return setReviewErr(obj)
    }
    
    
  }

  const handleAddReview = () =>{
    setEmptyValuesReq()
    
    if (tempReviewData.reviewer_name && tempReviewData.link && tempReviewData.review){
        setReviewData([...reviewData, {
          reviewer_name:tempReviewData.reviewer_name,
          link: tempReviewData.link, review:tempReviewData.review,
        }])
        MerchantValidateForm(tempReviewData)
      setTempReviewData(blankData)
    }else{
      setEmptyValuesReq()
    }
  }

  const handleFormChange = (e) => {
    let value = e.target.value
    setTempReviewData({ ...tempReviewData, [e.target.name]: value })
  }

  const handleDelete = (index) => {
    const array = [...reviewData]
    array.splice(index, 1);
    setReviewData(array)
  }
const handleDeleteReview=(id)=>{
  dispatchDeleteReview({id:id})
  
}
const handleeditReview=(id)=>{
	setflag(!flag)

  dispatchEditReviews({id:id})
  
}
const handleupdateReview=()=>{
  setisButtonLoading(true)
  const {reviewer_name,link,review}=tempReviewData
    const form_data = new FormData()
   
      form_data.append("reviewer_name", reviewer_name)
      form_data.append("link", link)
      form_data.append("review", review)
  dispatchUpdateReview({id:editid,form_data:form_data})
  setisButtonLoading(false)
}
  return (
      <div className="w-100   pb-5 mx-auto form_control_divs row">
        <div className="col-md-12">
          <div className="w-100 pt-3">
            <h2 className="h2 titles__main-title">
              <strong>Merchant Reviews</strong>
            </h2>
          </div>
        </div>
        <div className="col-md-12">
          <p className="murchant_review_p">
          Reviews are a critical part of any business. Do you have website reviews that you would like to include on your profile? Reviews that belong to your website can be added to your profile to get you started .
          </p>
          <h5 className="mt-4 mb-2">
            <b>Important notes about initial reviews:</b>
          </h5>
          <ul className="notes_list" style={{ listStyleType: "circle" }}>
          <li>
          You cannot add reviews from external website like Google, Trustpilot or Yelp.
            </li>
            <li>
            Each review requires a link for verification.
            </li>
            <li>
            All new accounts will be allowed to add up to 5 reviews only.
            </li>
            <li>All additional reviews will need to be generated through transactions on Operations19 only.
            </li>
          </ul>
        </div>
        <div className="col-md-12">
          <hr />
        </div>
        {flag===false?
        <>
        <div className="col-md-12 pb-3">
          <div className="row">
            <div className="col-md-6 ">
              <label>Reviewer Name*</label>
              <CustomTextfield
                required
                name="reviewer_name"
                value={tempReviewData.reviewer_name}
                onChange={handleFormChange}
                onBlur={Empty}
                error={reviewErrs.reviewer_name ? true : false}
                helperText={reviewErrs.reviewer_name}
              />
            </div>
            <div className="col-md-6 ">
              <label>Link to Review*</label>

              <CustomTextfield
                required
                type="url"
                name="link"
                value={tempReviewData.link}
                onChange={handleFormChange}
                onBlur={validateLink}
                error={reviewErrs.link ? true : false}
                helperText={reviewErrs.link}
              />
            </div>
            <div className="col-md-12 text_area_back_color">
              <label>Review*</label>
              <div class="form-group">
                <CustomTextfield
                  multiline
                  row="3"
                  name="review"
                  value={tempReviewData.review}
                  onChange={handleFormChange}
                  onBlur={Empty}
                  error={reviewErrs.review ? true : false}
                  helperText={reviewErrs.review}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 text-right">
          {isButtonLoading===true? 
            <ServiceButton value={"loading..."}  />:
            <ServiceButton value={"Add Review"} onClick={handleAddReview} />
          }
        </div>
        </>
        :<ReviewForm
        tempReviewData={tempReviewData}
        handleFormChange={handleFormChange}
        Empty={Empty}
        reviewErrs={reviewErrs}
        handleupdateReview={handleupdateReview}
        isButtonLoading={isButtonLoading}
        />
}
       

        <div className="col-md-12 mt-5 recently_added_project">
            <h4 className="mb-4">Recently Added Reviews</h4>
            {reviewData ?
                reviewData.map((data,index) => {
                    return (
                        <div key={"reviews-" + index} className="row mt-3">
                          
                            <div className="col-md-8">
                                <div className="w-100">
                                    <h5>{data.reviewer_name}</h5>
                                </div>
                                <div className="w-100 text-muted mt-1">
                                    <p>{data.review}</p>
                                </div>
                            </div>
                            <div class="col-md-4 text-right">
                                {/* <button
                                    className="murchant_reviews_del"
                                    value={"Edit"}
                                    onClick={(index) => {
                                        setIsDisable(true)
                                        handleeditReview(index)
                                    }}
                                    disabled={isDisable}
                                >
                                    Edit
                            </button> */}
                            <button
                                    className="murchant_reviews_del"
                                    value={"Delete"}
                                    onClick={(index) => {
                                        setIsDisable(true)

                                        handleDelete(index)
                                    }}
                                    disabled={isDisable}
                                >
                                    Delete
                            </button>
                            </div>
                        </div>
                    )
                })
                : null}
            {MerchantReviews ?
                MerchantReviews.merchant_reviews.map((data) => {
                    return (
                        <div key={`review-${data.id}`} className="row mt-3">
                          
                            <div className="col-md-8">
                                <div className="w-100">
                                    <h5>{data.name}</h5>
                                </div>
                                <div className="w-100 text-muted mt-1">
                                    <p>{data.comment}</p>
                                </div>
                            </div>
                            <div class="col-md-4 text-right">
                                <button
                                    className="murchant_reviews_del"
                                    value={"Edit"}
                                    onClick={() => {
                                        setIsDisable(true)
                                        handleeditReview(data.id)
                                    }}
                                    disabled={isDisable}
                                >
                                    Edit
                            </button>
                            <button
                                    className="murchant_reviews_del"
                                    value={"Delete"}
                                    onClick={() => {
                                        setIsDisable(true)
                                        handleDeleteReview(data.id)
                                    }}
                                    disabled={isDisable}
                                >
                                    Delete
                            </button>
                            </div>
                        </div>
                    )
                })
                : null}
        </div>
      </div>

    )
}
// 
const mapStateToProps = createStructuredSelector({

  MerchantReviews: makeSelectMerchantReviews(),
  EditMerchant:makeSelectEditMerchantReviews()
});


function mapDispatchToProps(dispatch) {
return {
  dispatchFetchMerchantReviews: (payload) => dispatch(fetchMerchantReviews(payload)),
  dispatchEditReviews: (payload) => dispatch(fetchsingleMerchantReview(payload)),
  dispatchUpdateReview: (payload) => dispatch(LoadupdateReview(payload)),
  dispatchDeleteReview: (payload) => dispatch(LoaddeleteReview(payload)),




};
}

export default (connect(mapStateToProps, mapDispatchToProps)(MemoReview));