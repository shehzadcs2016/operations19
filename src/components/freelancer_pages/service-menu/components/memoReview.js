import React, { useState } from "react"
import ServiceButton from "../../../shared/serviceButton"
import {
  CustomTextfield,
} from "../../../shared/formComponents"
import validator from 'validator';
import CloseIcon from '@material-ui/icons/Close';
import ShowAddedReviews from "./showAddedReviews";
import {addReview} from "../actions";
import { connect } from "react-redux"

export const MemoReview = ({
  dispatchAddReview,
  reviewErrs,
  setReviewErr,
  setReviewData,
  reviewData,
  msg
}) => {
  
  const blankData = {
    reviewer_name: "",
    review: "",
    link: "",
  }
  console.log(msg,"reviewErrs")
  const [tempReviewData, setTempReviewData] = useState(blankData)

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

  const isEmpty = (e) => {
    if (!e.target.value){
      setReviewErr({...reviewErrs,[e.target.name]:"Required"})
    }else{
      setReviewErr({...reviewErrs,[e.target.name]:""})
    }
  }

  const setEmptyValuesReq = () => {
    let obj = {}
    Object.keys(tempReviewData).map((key) => {
      if (tempReviewData[key].toString().trim() === ""){
        obj[key]="Required"
      }
      return obj
    });
    return setReviewErr(obj)
  }

  const handleAddReview = () =>{
    setEmptyValuesReq()
    validateLink(tempReviewData.link)
    if (tempReviewData.reviewer_name && tempReviewData.link && tempReviewData.review && reviewErrs.link === ""){
        setReviewData([...reviewData, {
          reviewer_name:tempReviewData.reviewer_name,
          link: tempReviewData.link, review:tempReviewData.review,
        }])
        const form_data = new FormData()
        // form_data.append("merchant_reviews[]", JSON.stringify(tempReviewData))
        form_data.append("reviewer_name", tempReviewData.reviewer_name)
        form_data.append("review", tempReviewData.review)
        form_data.append("link", tempReviewData.link)

        dispatchAddReview(form_data)
        setTempReviewData(blankData)

    }else{
      setEmptyValuesReq()
      validateLink(tempReviewData.link)
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

  return (
      <div className="w-100   pb-5 mx-auto form_control_divs row">
        <div className="col-md-12">
          <div className="w-100 pt-3">
            <h2 className="h2 titles__main-title">
               Merchant Reviews 
            </h2>
          </div>
        </div>
        <div className="col-md-12">
          <p className="murchant_review_p">
          Reviews are a critical part of any business. Do you have website reviews that you would like to include on your profile? Reviews that belong to your website can be added to your profile to get you started .
          </p>
          <h5 className="mt-4 mb-2 murchan_review_heading">
            Important notes about initial reviews: 
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
        <div className="col-md-12 pb-3">
          <div className="row">
            <div className="col-md-6 ">
              <label>Reviewer Name*</label>
              <CustomTextfield
                required
                name="reviewer_name"
                value={tempReviewData.reviewer_name}
                onChange={handleFormChange}
                onBlur={isEmpty}
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
                onBlur={validateLink }
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
                  onBlur={isEmpty}
                  error={reviewErrs.review ? true : false}
                  helperText={reviewErrs.review}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 text-right">
            <ServiceButton value={"Add Review"} onClick={handleAddReview} />
        </div>

        {/* <div className="col-md-12 mt-5 recently_added_project">
          <div className="w-100 mb-4">
            <h4> Saved Reviews </h4>
          </div> */}
          {/* {
            reviewData.map((data, index)=>{

              return(
                <div key={"reviews-" + index} className="w-100 ">
                <div className="w-100">
                  <h5 className="heading_p"> {data.reviewer_name} </h5>
                  <p className="heading_p_content">"{data.review}"</p>
                </div>
                <div className="w-100 text-right">
                  <ServiceButton value={"Delete"} deleteClass="murchant_reviews_del"  onClick={(index)=>handleDelete(index)}/>
                  <CloseIcon className="pull-right text-muted cursor-pointer" onClick={(index)=>handleDelete(index)} />
                </div>
                </div>
              )
            })
          } */}
        {/* </div> */}

        <ShowAddedReviews/>

      </div>

    )
}

 
function mapDispatchToProps(dispatch) {
	return {
	  dispatchAddReview: (payload) => dispatch(addReview(payload)),
	};
 }
 
 export default (connect(null, mapDispatchToProps)(MemoReview));
