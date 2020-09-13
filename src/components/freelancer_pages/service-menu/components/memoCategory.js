import React, { useState, useEffect } from "react"
import DropDownMenu from "../../../shared/dropdownMenu"
import { isEmpty } from "../../../../utils"
import ServiceButton from "../../../shared/serviceButton"
import { SelectMenu } from "../../../shared/SelectMenu"

function AddCategory(props) {
  const {
    count,
    onDelete,
    categories,
    sub_categories,
    addCategory,
    selectMenuHandler,
    setcategory,
    category,
    validateCategory,
    CategoryErr,
    validatesubCategory,
    subCategoryErr,
    // handleCategoryMenu,
  } = props

  const [memoCategory, setmemoCategory] = useState({
    category_id: "",
    sub_category_id: "",
  })
  const [show, sethide] = useState(false)
  const [showon, sethideon] = useState(true)

  // console.log(memoCategory, "memejjksaasnkjasn")

  const handleDelete = () => {
    sethideon(!showon)
    sethide(!show)
    onDelete(memoCategory)
  }
  const handleCategory = () => {
    // if (memoCategory.category_id && memoCategory.sub_category_id) {
    sethide(!show)
    addCategory(memoCategory)
    // } else {
    //   validateCategory()
    // }
  }

  const handleCategoryMenu = (e) => {
    // .replace(/[^A-Za-z]/gi, "")
    let value = e.target.value
    setcategory({ ...category, [e.target.name]: value })

    setmemoCategory({ ...memoCategory, [e.target.name]: value })
  }
  const validateMemoCategory = () => {
    validateCategory()
  }
  const validateMemosubCategory = () => {
    validatesubCategory()
  }
  // alert(count)
  if (showon === true) {
    return (
      <>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-6 " style={{ display: "inline-block" }}>
              <label>Categories that You have expertise in*</label>
              <SelectMenu
                name="category_id"
                value={memoCategory.category_id}
                onBlur={validateMemoCategory}
                error={CategoryErr}
                onChange={(e) => {
                  handleCategoryMenu(e)
                  selectMenuHandler(e.target.value)
                }}
                label="Select"
                labelWidth={45}
                options={categories}
                cr={true}
              />
            </div>

            {memoCategory.category_id ? (
              <>
                <div className="col-md-6" style={{ display: "inline-block" }}>
                  <label>Subcategories that You have expertise in*</label>

                  <SelectMenu
                    name="sub_category_id"
                    value={memoCategory.sub_category_id}
                    onChange={handleCategoryMenu}
                    onBlur={validateMemosubCategory}
                    error={subCategoryErr}
                    label="Select Sub Category"
                    labelWidth={150}
                    options={sub_categories}
                    cr={true}
                  />
                </div>
              </>
            ) : null}
          </div>
        </div>{" "}
        <div className="col-md-12 text-right ">
          {/* <div className="row"> */}
          {show === false ? (
            <ServiceButton value={"Add"} onClick={handleCategory} />
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
export const MemoCategory = React.memo(AddCategory)
