import React, { useState, useEffect } from "react"
import DropDownMenu from "../../../shared/dropdownMenu"
import { isEmpty } from "../../../../utils"
import ServiceButton from "../../../shared/serviceButton"
import { SelectMenu } from "../../../shared/SelectMenu"

function AddLanguage(props) {
  const {
    validateLanguages,
    langaugesErr,
    languages_options,
    proficiency_level_options,
    onDelete,
    addLanguage,
    setLanguage,
    validateProficiency,
    language,
    ProficiencyErr,
    count,
    setCount,
    // handleLangaugeMenu,
  } = props

  const [memolanguage, setmemolanguage] = useState({
    language_id: "",
    proficiency_level: "",
  })
  const [show, sethide] = useState(false)
  const [showon, sethideon] = useState(true)

  // console.log(memolanguage, "memejjksaasnkjasn")

  const handleDelete = () => {
    sethideon(!showon)
    sethide(!show)
    onDelete(memolanguage)
  }
  const handleLanguage = () => {
    sethide(!show)

    addLanguage(memolanguage)
  }
  const validaterLanguages = () => {
    validateLanguages()
  }
  const validaterProficiency = () => {
    validateProficiency()
  }
  const handleLangaugeMenu = (e) => {
    // .replace(/[^A-Za-z]/gi, "")
    let value = e.target.value

    setLanguage({ ...language, [e.target.name]: value })
    if (
      memolanguage.language_id === "" &&
      memolanguage.proficiency_level === ""
    ) {
      setCount(count + 1)
    }
    setmemolanguage({ ...memolanguage, [e.target.name]: value })
  }
  // alert(count)
  if (showon === true) {
    return (
      <>
        <div className="col-md-5 mt-2 ">
          <label>Languages*</label>
          <SelectMenu
            name="language_id"
            value={memolanguage.language_id}
            onChange={handleLangaugeMenu}
            onBlur={validaterLanguages}
            error={langaugesErr}
            labelWidth={160}
            options={languages_options}
            cr={true}
          />
        </div>
        <div className="col-md-5 mt-2">
          <label>Level of Proficiency *</label>

          <DropDownMenu
            name="proficiency_level"
            value={memolanguage.proficiency_level}
            onChange={handleLangaugeMenu}
            onBlur={validaterProficiency}
            error={ProficiencyErr}
            labelWidth={160}
            options={proficiency_level_options}
            cr={true}
          />
        </div>
        <div className="col-md-2 text-right  pt-5">
          {/* <div className="row"> */}
          <label></label>
          {show === false ? (
            <ServiceButton value={"Add"} onClick={handleLanguage} />
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
export const MemoLanguage = React.memo(AddLanguage)
