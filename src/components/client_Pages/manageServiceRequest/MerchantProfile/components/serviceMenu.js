import React, { useEffect, useState } from "react"
import axios from "../../../../../config/axios"

import { store } from "../../../../../Redux/store"
import { SelectMenu } from "./SelectMenu"
import { connect } from "react-redux"
import addFlashMessage from "../../../../../Redux/actions/flashMessages"

function ServiceMenu() {
  const blankData = {
    description_attachment: "",
    service_title: "",
    service_description: "",

    service_category: "",
    service_subcategory: "",

    project_id: null,

    fixed_price_budget: "",
    hourly_price_range_budget: [],
  }
  const [formData, setFormData] = useState({
    ...blankData,
    comments: "",
    // location_of_service_providers: "3",
    // location_of_service_providers_comments: "clients location comments",
    // client_project_duration: "2",
    // client_project_duration_comments: "project duration comments",
  })

  const [hourly_rates_data, setHourly_rate_data] = useState([])
  const [categories, setCategories] = useState([])
  const [sub_categories, setSubCategories] = useState([])
  const [data, setData] = useState([])
  const selectMenuHandler = async (value) => {
    if (value) {
      const res = await axios.get(`freelancer/getsubcategories/${value}`, {
        headers: {
          Authorization: `Bearer ${store.getState().login.token}`,
        },
      })
      setSubCategories(
        res.data.data.map((d) => {
          return {
            id: d.id,
            name: d.subcategory_name,
          }
        })
      )
    }
  }

  const setValues = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(formData, "::", e)
  }
  useEffect(() => {
    axios
      .get("freelancer/getcategories", {
        headers: {
          Authorization: `Bearer ${store.getState().login.token}`,
        },
      })
      .then((res) => {
        console.log(res, "responseeeeee")
        setCategories(
          res.data.data.map((d) => {
            return {
              id: d.id,
              name: d.category_name,
            }
          })
        )
      })
      .catch((err) => console.log("Categories error =>", err))

    axios
      .get(`freelancer/services`, {
        headers: {
          Authorization: `Bearer ${store.getState().login.token}`,
        },
        params: {
          category_id: 1,
          subcategory_id: 1,
        },
      })
      .then((res) => {
        console.log(res, "responseeeeee")
        setData(res.data.data)
      })
      .catch((err) => console.log("services error =>", err))
  }, [sub_categories])
  console.log(data, "datasss")
  return (
    <div className="container">
      <div className="col-md-12 col-sm-12">
        <div
          className="col-md-4 col-sm-12 pb-3"
          style={{ display: "inline-block" }}
        >
          <SelectMenu
            name="service_category"
            value={formData.service_category}
            // onChange={selectMenuHandler}
            onChange={(e) => {
              setValues(e)
              selectMenuHandler(e.target.value)
            }}
            label="Select"
            labelWidth={45}
            options={categories}
            cr={true}
          />
        </div>
        <div className="col-md-4 col-sm-12" style={{ display: "inline-block" }}>
          {formData.service_category ? (
            <SelectMenu
              name="service_subcategory"
              value={formData.service_subcategory}
              onChange={setValues}
              label="Select Sub Category"
              labelWidth={150}
              options={sub_categories}
              cr={true}
            />
          ) : null}
        </div>
        {formData.service_subcategory !== "" ? (
          <div className="col-md-12 col-sm-12">
            <h1>hello</h1>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}
const mapStateToProps = ({ login, flashMessages }) => {
  return { login, flashMessages }
}
export default connect(mapStateToProps, { addFlashMessage })(ServiceMenu)
