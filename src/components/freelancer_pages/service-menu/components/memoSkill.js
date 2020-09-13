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
function AddSkill(props) {
  const {
    onDelete,
    expierence_level,
    addSkill,
    validateSkill,
    profRequiredFields,
    setskills,
    skills,
    is_hear_about_us,
    // handleCategoryMenu,
  } = props

  const [memoSkill, setmemoSkill] = useState({
    title: "",
    proficiency_level: "",
  })
  const [show, sethide] = useState(false)
  const [showon, sethideon] = useState(true)

  // console.log(memoCategory, "memejjksaasnkjasn")

  const handleDelete = () => {
    sethideon(!showon)
    sethide(!show)
    onDelete(memoSkill)
  }
  const handleSkill = () => {
    sethide(!show)
    addSkill(memoSkill)
  }
  const handleskillMenu = (e) => {
    // .replace(/[^A-Za-z]/gi, "")
    let value = e.target.value
    setskills({ ...skills, [e.target.name]: value })
    setmemoSkill({ ...memoSkill, [e.target.name]: value })
  }
  const validateMemoSkill = () => {
    validateSkill()
  }
  // alert(count)
  if (showon === true) {
    return (
      <>
        <div className="col-md-12 mt-3">
          <div className="row">
            <div className="col-md-6">
              <label>
                List the Skills related to the Services you're offering*
              </label>

              <CustomTextfield
                required
                name="title"
                value={memoSkill.title}
                onChange={handleskillMenu}
                onBlur={validateMemoSkill}
                error={profRequiredFields.title ? true : false}
                helperText={profRequiredFields.title}
              />
            </div>

            <div className="col-md-6 ">
              <label>Your Expierence level*</label>

              <RadioButton
                error={is_hear_about_us ? true : false}
                options={expierence_level}
                onChange={handleskillMenu}
                name="proficiency_level"
                value={memoSkill.proficiency_level}
                error={is_hear_about_us ? true : false}
                helperText={is_hear_about_us}
              />
              {is_hear_about_us && (
                <p className="MuiFormHelperText-root MuiFormHelperText-contained Mui-error Mui-required">
                  {is_hear_about_us}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="col-md-12 text-right ">
          {/* <div className="row"> */}
          {show === false ? (
            <ServiceButton value={"Add"} onClick={handleSkill} />
          ) : (
            ""
          )}
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
export const MemoSkill = React.memo(AddSkill)
