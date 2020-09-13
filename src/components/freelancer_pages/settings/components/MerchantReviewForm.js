import React from 'react';
import ServiceButton from "../../../shared/serviceButton"
import {
  CustomTextfield,
} from "../../../shared/formComponents"
export default function ReviewForm({
    tempReviewData,handleFormChange,isEmpty,reviewErrs,handleupdateReview,isButtonLoading
}){
    const handleAddReview=()=>{
        handleupdateReview()
    }
    return(
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
              onBlur={isEmpty}
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
          {isButtonLoading===false? 
            <ServiceButton value={"Update Review"} onClick={handleAddReview} />:<ServiceButton value={"loading...."}  />
          }
        </div>
      </>
    )
}