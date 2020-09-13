import React, { useState, useEffect } from "react"
import DropDownMenu from "../../../shared/dropdownMenu"
import { isEmpty } from "../../../../utils"
import ServiceButton from "../../../shared/serviceButton"
import { SelectMenu } from "../../../shared/SelectMenu"
import {
  RadioButton,
  UploadFiles,
  PasswordField,
  CustomSelect,
  CustomTextfield,
} from "../../../shared/formComponents"
function AddPortfolio(props) {
  const {
    count,
    onEducationDelete,

    addEducation,
    title_options,
    yearofgraduation_options,
    countries,
    // handleCategoryMenu,
  } = props

  const [Review, setReview] = useState({
    reviewer_name: "",
    review: "",
    link: "",
  })
  const [show, sethide] = useState(false)
  const [showon, sethideon] = useState(true)

  // console.log(Education, "memejjksaasnkjasn")

  const handleDelete = () => {
    sethideon(!showon)
    sethide(!show)
    onEducationDelete(Review)
  }
  const handleReview = () => {
    sethide(!show)
    addEducation(Review)
  }
  const handleReviewMenu = (e) => {
    // .replace(/[^A-Za-z]/gi, "")
    let value = e.target.value
    setReview({ ...Review, [e.target.name]: value })
  }
  // alert(count)
  if (showon === true) {
    return (
      <>
        <div className="col-md-12 pb-3">
          <div className="row">
            <div className="col-md-12 ">
              <label>Project Title </label>
              <CustomTextfield
                required
                name="reviewer_name"
                value={Review.reviewer_name}
                onChange={handleReview}
                // onBlur={validateSkill}
                // error={profRequiredFields.skills ? true : false}
                // helperText={profRequiredFields.skills}
              />
            </div>

            <div className="col-md-12">
              <label>Project Overview*</label>
              <div class="form-group">
                <textarea
                  name="review"
                  value={Review.review}
                  onChange={handleReview}
                  class="form-control rounded-0"
                  id="exampleFormControlTextarea2"
                  rows="3"
                  // onBlur={validateDesc}
                  // error={aboutRequiredFields.description ? true : false}
                  // helperText={aboutRequiredFields.description}
                ></textarea>
              </div>
            </div>
            {/* ) : null} */}
          </div>
        </div>{" "}
        <div className="col-md-12 text-right ">
          {/* <div className="row"> */}
          <ServiceButton value={"Add"} onClick={handleReview} />
          {show === true ? (
            <ServiceButton value={"Delete"} onClick={handleDelete} />
          ) : (
            ""
          )}
          {/* </div> */}
        </div>
      </>
    )
  } else {
    return <div></div>
  }
}
export const MemoPortfolio = React.memo(AddPortfolio)
