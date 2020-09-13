import React, { useState, useEffect } from "react"
import HelpIcon from "@material-ui/icons/Help"
import {
  Button,
  LinearProgress,
  makeStyles,
  CircularProgress,
} from "@material-ui/core"
import { Card, CardBody } from "reactstrap"
import AssignmentIcon from "@material-ui/icons/Assignment"
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn"
import AddLocationIcon from "@material-ui/icons/AddLocation"
import EventAvailableIcon from "@material-ui/icons/EventAvailable"
import ContactSupportIcon from "@material-ui/icons/ContactSupport"
import { connect } from "react-redux"
import CurrencyInput from "react-currency-input"

import {
  Popover,
  Textfield,
  CheckBox,
  RadioButton,
  UploadSingleFile,
} from "../../shared/formComponents"

import { SelectMenu } from "./SelectMenu"
import "./stylesheet.css"
// import * as data from "./submitRequestData";
import addFlashMessage from "../../../Redux/actions/flashMessages"
import axios from "../../../config/axios"
import { store } from "../../../Redux/store"
import { queryParam } from "../../../utils"
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}))

const SubmitRequestBody = (props) => {
  const blankData = {
    description_attachment: "",
    service_title: "",
    service_description: "",

    service_category: "",
    service_subcategory: "",

    service_frequency: "",
    // client_service_status: "",
    service_frequency_other: "",
    service_time: "",
    service_time_other: "",
    project_id: null,

    fixed_price_budget: "",
    hourly_price_range_budget: [],
    comments: "",

    location_of_service_provider: "",
    location_of_service_provider_other: "",
    location_of_service_provider_comments: "",

    communication_schedule: "",
    communication_schedule_other: "",
  }
  const [formData, setFormData] = useState({
    ...blankData,
    comments: "",
    // location_of_service_providers: "3",
    // location_of_service_providers_comments: "clients location comments",
    // client_project_duration: "2",
    // client_project_duration_comments: "project duration comments",
  })

  const [displayOFN, setDisplayOFN] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showHourlyRateOther, setShowHourlyRateOther] = useState(false)
  const [clientLocationOther, setClientLocationOther] = useState(false)
  var [isbuttonLoading, setIsbuttonLoading] = useState(false)

  const classes = useStyles()
  const [hourly_rates_data, setHourly_rate_data] = useState([])
  const [categories, setCategories] = useState([])
  const [sub_categories, setSubCategories] = useState([])
  const [frequency_of_service, setService_frequency_options] = useState([])

  const [time_service, setService_time_options] = useState([])

  const [
    location_of_service_providers_data,
    setlocation_of_service_providers_options,
  ] = useState([])
  const [
    client_project_duration_data,
    setClient_project_duration_options,
  ] = useState([])
  const [
    communication_schedules_data,
    setcommunication_schedules_options,
  ] = useState([])
  const [
    freelancer_availability_call_data,
    setFreelancer_availability_call_options,
  ] = useState([])
  const [
    freelancer_availability_weekend_data,
    setFreelancer_availability_weekend_options,
  ] = useState([])
  const [
    quickly_project_completion_data,
    setQuickly_project_completion_options,
  ] = useState([])
  const [
    introduction_to_freelancer_data,
    setIntroduction_to_freelancer_options,
  ] = useState([])

  useEffect(() => {
    const projectId = queryParam("id")
    // const projectId = "34";

    axios
      .get("client/getcategories", {
        headers: { Authorization: `Bearer ${store.getState().login.token}` },
      })
      .then((res) => {
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
      .get("constant/arrays", {
        headers: { Authorization: `Bearer ${store.getState().login.token}` },
      })
      .then((res) => {
        const service_frequency_keys = Object.keys(
          res.data.data["service_frequency"]
        )
        setService_frequency_options(
          service_frequency_keys.map((key) => {
            return {
              value: key,
              label: res.data.data["service_frequency"][key],
            }
          })
        )

        const service_time_keys = Object.keys(res.data.data["service_time"])
        setService_time_options(
          service_time_keys.map((key) => {
            return {
              value: key,
              label: res.data.data["service_time"][key],
            }
          })
        )

        const hourly_price_range_keys = Object.keys(
          res.data.data["hourly_price_range_budgets"]
        )
        setHourly_rate_data(
          hourly_price_range_keys.map((key) => {
            return {
              value: key,
              label: res.data.data["hourly_price_range_budgets"][key],
              isChecked: false,
            }
          })
        )

        const location_of_service_providers_keys = Object.keys(
          res.data.data["location_of_service_providers"]
        )
        setlocation_of_service_providers_options(
          location_of_service_providers_keys.map((key) => {
            return {
              value: key,
              label: res.data.data["location_of_service_providers"][key],
            }
          })
        )

        const client_project_duration_keys = Object.keys(
          res.data.data["client_project_duration"]
        )
        setClient_project_duration_options(
          client_project_duration_keys.map((key) => {
            return {
              value: key,
              label: res.data.data["client_project_duration"][key],
            }
          })
        )

        const communication_schedules_keys = Object.keys(
          res.data.data["communication_schedules"]
        )
        setcommunication_schedules_options(
          communication_schedules_keys.map((key) => {
            return {
              value: key,
              label: res.data.data["communication_schedules"][key],
            }
          })
        )

        const freelancer_availability_call_keys = Object.keys(
          res.data.data["freelancer_availability_call"]
        )
        setFreelancer_availability_call_options(
          freelancer_availability_call_keys.map((key) => {
            return {
              value: key,
              label: res.data.data["freelancer_availability_call"][key],
            }
          })
        )

        const freelancer_availability_weekend_keys = Object.keys(
          res.data.data["freelancer_availability_weekend"]
        )
        setFreelancer_availability_weekend_options(
          freelancer_availability_weekend_keys.map((key) => {
            return {
              value: key,
              label: res.data.data["freelancer_availability_weekend"][key],
            }
          })
        )

        const quickly_project_completion_keys = Object.keys(
          res.data.data["quickly_project_completion"]
        )
        setQuickly_project_completion_options(
          quickly_project_completion_keys.map((key) => {
            return {
              value: key,
              label: res.data.data["quickly_project_completion"][key],
            }
          })
        )

        const introduction_to_freelancer_keys = Object.keys(
          res.data.data["introduction_to_freelancer"]
        )
        setIntroduction_to_freelancer_options(
          introduction_to_freelancer_keys.map((key) => {
            return {
              value: key,
              label: res.data.data["introduction_to_freelancer"][key],
            }
          })
        )
      })
      .catch((err) => console.log("Constant error =>", err))

    if (projectId) {
      setIsLoading(true)
      ;(async () => {
        try {
          const url = `freelancer/request/${projectId}`
          const res = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${store.getState().login.token}`,
            },
          })
          if (res.data.data && res.data.data.length) {
            const data = res.data.data[0]
            const { client_availibility, client_budget, client_service } = data
            let keys = []
            client_budget.map((data) => {
              const key = Object.keys(data["hourly_price_range_budgets"])
              keys.push(key[0])
            })

            setFormData({
              ...blankData,
              description_attachment: data.description_attachment,
              service_category: client_service.service_category || "",
              service_subcategory: client_service.service_subcategory || "",

              service_title: client_service.service_title || "",
              service_frequency:
                client_service.service_frequency.toString() || "",
              // client_service_status:
              //   client_service.client_service_status.toString() || "",

              service_frequency_other:
                client_service.service_frequency_other || "",

              fixed_price_budget: client_budget[0].fixed_price_budget || "",
              project_id: projectId,
              // budget: 10,
              service_description: data.service_description,

              hourly_price_range_budget: keys,
              hourly_price_range_budget_other:
                client_budget[0].hourly_price_range_budget_other || "",
              comments: client_budget[0].comments || "",

              location_of_service_provider: Object.keys(
                data.location_of_service_providers
              )[0],
              location_of_service_provider_other:
                data.location_of_service_providers_other || "",

              communication_schedule: Object.keys(
                client_availibility.communication_schedules
              )[0],
              communication_schedule: data.communication_schedules_other.toString(),
              communication_schedule_other:
                client_availibility.communication_schedules_other || "",
              // communication_schedules_comments: client_availibility.communication_schedules_comments || "",
            })

            if (client_service.service_category) {
              selectMenuHandler(client_service.service_category)
            }
            setShowHourlyRateOther(
              client_budget[0].hourly_price_range_budget === 9
            )
            setClientLocationOther(data.location_of_service_providers === 4)
            setClientLocationOther(data.location_of_service_providers === 4)
          }
          setIsLoading(false)
        } catch (err) {
          setIsLoading(false)
          console.log("async error: =>", err)
        }
      })()
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsbuttonLoading(true)
    try {
      const { project_id } = formData

      const headers = {
        headers: {
          Authorization: `Bearer ${store.getState().login.token}`,
        },
      }
      const id = store.getState().login.id
      // alert(id)
      // alert(store.getState().login.token)

      let res
      if (project_id) {
        const url = `client/client-service-request/${project_id}`
        console.log("UPdate data:", formData)
        res = await axios.patch(url, formData, headers)
      } else {
        formData["client_id"] = id
        console.log(formData, "shhehzad")

        res = await axios.post(
          "client/client-service-request",
          formData,
          headers
        )
      }

      const { data } = res
      if (data && data.status !== 200) {
        props.addFlashMessage({ type: "error", text: data.message })
      } else if (data && data.status === 200) {
        props.addFlashMessage({ type: "success", text: data.message })
        setIsbuttonLoading(false)

        setFormData(blankData)
        setHourly_rate_data(
          hourly_rates_data.map((checkBox) => {
            checkBox.isChecked = false
            return checkBox
          })
        )
      } else {
        props.addFlashMessage({
          type: "error",
          text: "Some internal error occured, please try again later.",
        })
      }
    } catch (err) {
      console.log("Form submission error:=> " + err, err)
    }
  }

  const setValues = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(formData, "::", e)
  }

  const fileChange = (e) => {
    let name = e.target.name
    const file = e.target.files[0]
    setDisplayOFN(file.name)
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (e) => {
      setFormData({ ...formData, [name]: e.target.result })
    }
  }

  const selectMenuHandler = async (value) => {
    if (value) {
      const res = await axios.get(`client/getsubcategories/${value}`, {
        headers: { Authorization: `Bearer ${store.getState().login.token}` },
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

  const handleCheckBox = async (e) => {
    // e.target.checked = false;
    const { checked, value } = e.target
    // console.log("checked", checked)
    // console.log("value", value)
    // console.log("label", e.target.label);
    // checked other
    if (value === "9") {
      setShowHourlyRateOther(checked)
    }

    setHourly_rate_data(
      hourly_rates_data.map((checkBox) => {
        if (checkBox.value === value) {
          checkBox.isChecked = checked
          console.log(checkBox.value, e.target.value)
        }
        return checkBox
      })
    )

    // // const hourly_rate = checked ? value : "";
    // // setFormData({ ...formData, hourly_rate: hourly_rate });
    // // uncomment when horuly rate is fixed to array from backend
    const hourly_rate = formData.hourly_price_range_budget
    if (checked) {
      hourly_rate.push(value)
    } else {
      var index = hourly_rate.indexOf(value)
      if (index !== -1) hourly_rate.splice(index, 1)
    }
  }

  if (isLoading) {
    return (
      <div className="FreelanceRequest">
        <div className="row mt-5 pt-md-5 mx-0">
          <div className={classes.root}>
            <LinearProgress />
            <LinearProgress color="secondary" />
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="container FreelanceRequest">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="row mt-5 pt-md-5 mx-0">
          <div className=" col-md-12 mx-auto px-0">
            <div>
              <h2 className="h2">
                <strong className="text-color">
                  {formData.project_id ? "Update" : "Create"} your request
                </strong>
                <Button id="Popover1" type="button">
                  <HelpIcon className="text-color" />
                </Button>
                <Popover
                  target="Popover1"
                  title="Tips to complete your request"
                >
                  <ul className="px-2 FreelanceRequest">
                    <li>Be as thorough as possible</li>
                    <li>
                      If you don't know the answer, answer to the best of your
                      ability and leave your dilemma in the comments box.
                    </li>
                  </ul>
                </Popover>
              </h2>
              {/* <button
                onClick={(e) => {
                  e.preventDefault();
                  console.log(formData);
                }}
              >
                Check state
              </button> */}
            </div>
            <div className="w-100" id="projectDetails">
              <h4 className="text-color my-4 text-bottom d-flex align-items-center h4">
                <AssignmentIcon /> Project details
              </h4>
              <Card className="mb-3">
                <CardBody>
                  <h5 className="pb-3 font-weight-bold">
                    Select the Category &amp; Subcategory for The Service(s) You
                    need
                  </h5>
                  <p className="pb-3">
                    For example: If you are looking for Shopify services, Choose
                    the Category E-Commerce, then Choose Subcategory Shopify.
                  </p>
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
                    <div
                      className="col-md-4 col-sm-12"
                      style={{ display: "inline-block" }}
                    >
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
                  </div>

                  <p className="pt-3">
                    Not Sure or Cant find your category/ Sub category? No
                    Worries. Leave it Blank and continue with job post.
                  </p>
                </CardBody>
              </Card>

              <Card
                className="mb-3"
                // style={{ boxShadow: "0px 2px 5px 0px black " }}
              >
                <CardBody>
                  <h5 className="pb-3 font-weight-bold">
                    Create Title for the Service You need
                  </h5>
                  <Textfield
                    name="service_title"
                    label="Service Title"
                    value={formData.service_title}
                    required
                    onChange={setValues}
                  />
                  <h5 className="pb-3">
                    Below are Examples of what other Members Have Used:
                  </h5>
                  <ul className="ml-5">
                    <li>Amazon Central Related Tasks</li>
                    <li>Amazon PPC Management</li>
                    <li>General Account Management For Shopify</li>
                  </ul>
                </CardBody>
              </Card>

              <Card className="mb-3">
                <CardBody>
                  <h5 className="pb-3 font-weight-bold">
                    Service Description for The Service You need
                  </h5>
                  <p className="pb-3">
                    Please provide a detailed explanation for the service you
                    need
                  </p>
                  <Textfield
                    label="Job Description"
                    name="service_description"
                    onChange={setValues}
                    value={formData.service_description}
                    multiline
                    rows="4"
                    required
                  />
                  {/* <div className="pull-right">
                    <UploadSingleFile
                      label=" Attach File"
                      name="description_attachment"
                      onChange={fileChange}
                    />
                  </div> */}
                  <div className=" pull-right pt-3 ">
                    <div className="row input-group ">
                      {displayOFN ? (
                        <div className="">
                          <span className="input-group-text">{displayOFN}</span>
                        </div>
                      ) : (
                        ""
                      )}

                      <div className="custom-file pt-4 mt-1  ml-2">
                        <UploadSingleFile
                          label=" Attach File"
                          name="description_attachment"
                          onChange={fileChange}
                        />
                      </div>
                    </div>
                  </div>
                  {/* <div className="pull-right">
                    <p>{displayOFN && <p>{displayOFN} </p>}</p>
                  </div> */}
                  <h5 className="pb-3">A good description includes:</h5>
                  <ul className="ml-5">
                    <li>Your expectations of the work</li>
                    <li>Skillset required</li>
                    <li>More about your business</li>
                    <li>Anything you believe is important</li>
                  </ul>
                </CardBody>
              </Card>
              <Card className="mb-3">
                <CardBody>
                  <h5 className="pb-3 font-weight-bold">
                    Frequency of the service(s)
                  </h5>
                  <RadioButton
                    options={frequency_of_service}
                    value={formData.service_frequency}
                    onChange={setValues}
                    name="service_frequency"
                    label="How often does this service(s) need to be executed?"
                  />

                  <Textfield
                    name="service_frequency_other"
                    label="Other"
                    value={formData.service_frequency_other}
                    onChange={setValues}
                  />
                </CardBody>
              </Card>

              <Card className="mb-3">
                <CardBody>
                  <h5 className="pb-3 font-weight-bold">service Time (s)</h5>
                  <RadioButton
                    options={time_service}
                    value={formData.service_time}
                    onChange={setValues}
                    name="service_time"
                    label="How Quickly do you need these Service(s) complete?"
                  />

                  <Textfield
                    name="service_time_other"
                    label="Other"
                    value={formData.service_time_other}
                    onChange={setValues}
                  />
                </CardBody>
              </Card>
            </div>
            <div className="w-100" id="yourBudget">
              <h4 className="text-color my-4 d-flex align-items-center h4">
                <MonetizationOnIcon />
                Your budget
              </h4>
              <Card className="mb-3">
                <CardBody>
                  <h5 className="pb-3 font-weight-bold">
                    What is your budget?
                  </h5>
                  <p className="pb-3">
                    Depending on your service request, merchants will send you
                    proposals via fixed Price or Per Hour.
                  </p>
                  <p className="font-weight-bold">A. Fixed Price Budget:</p>
                  <CurrencyInput
                    className="form-control"
                    prefix="$ "
                    precision={0}
                    allowNegative={false}
                    allowEmpty={true}
                    value={formData.fixed_price_budget}
                    onChange={(value) =>
                      setFormData({ ...formData, fixed_price_budget: value })
                    }
                  />
                  <p className="pb-3">
                    Are you unsure of your fixed price budget? That’s OK. Leave
                    it blank and we will send you options.
                  </p>
                </CardBody>
              </Card>

              <Card className="mb-3">
                <CardBody>
                  <h5 className="pb-3 font-weight-bold">
                    B. What is your hourly price range budget for this
                    freelancer? Check all that apply.
                  </h5>
                  {hourly_rates_data.map((rates) => {
                    return (
                      <CheckBox
                        key={rates.value}
                        name="hourly_price_range_budget"
                        onChange={handleCheckBox}
                        value={rates.value}
                        label={rates.label}
                        required
                        checked={rates.isChecked}
                        // checked={rates.value in formData.hourly_rates}
                      />
                    )
                  })}

                  {showHourlyRateOther && (
                    <Textfield
                      name="hourly_price_range_budget_other"
                      label="Hourly rates Others"
                      value={formData.hourly_price_range_budget_other}
                      onChange={setValues}
                    />
                  )}

                  <Textfield
                    name="comments"
                    label="Comments (optional)"
                    value={formData.comments}
                    onChange={setValues}
                  />
                  <h5 className="pb-3">
                    Different levels of freelancers on the FreeeUp Marketplace:
                  </h5>
                  <ul className="ml-5">
                    <li>
                      Basic: Outside of the US. Perfect for businesses with
                      processes already in place.
                    </li>
                    <li>
                      Mid: Specialists that can take projects off your plate
                      with their own processes.
                    </li>
                    <li>
                      Expert: Consultants and strategists helping you organize
                      and expand.
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </div>
            <div className="w-100" id="location">
              <h4 className="text-color my-4 d-flex align-items-center h4">
                <AddLocationIcon />
                Location
              </h4>
              <Card className="mb-3">
                <CardBody>
                  <RadioButton
                    options={location_of_service_providers_data}
                    onChange={(event) => {
                      setClientLocationOther(event.target.value === "4")
                      setValues(event)
                    }}
                    value={formData.location_of_service_provider}
                    name="location_of_service_provider"
                    label="Do you have a preference where the service provider is located?"
                    required
                  />
                  {clientLocationOther && (
                    <Textfield
                      name="location_of_service_provider_other"
                      label="Location"
                      value={formData.location_of_service_provider_other}
                      onChange={setValues}
                    />
                  )}

                  <Textfield
                    name="location_of_service_provider_comments"
                    label="Comments (optional)"
                    value={formData.location_of_service_provider_comments}
                    onChange={setValues}
                  />
                  <h5 className="pb-3">
                    Things to remember when choosing location:
                  </h5>
                  <ul className="ml-5">
                    <li>All Service Providers have strong English skills.</li>
                    <li>
                      US, UK, and CA Service Providers ussually have higher
                      rates.
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </div>
            <div className="w-100" id="availability">
              <Card className="mb-3">
                <CardBody>
                  <h5 className="pb-3 font-weight-bold">
                    Communication Schedule
                  </h5>
                  <RadioButton
                    options={communication_schedules_data}
                    onChange={(event) => {
                      // setClientScheduleOther(event.target.value === "4");
                      setValues(event)
                    }}
                    name="communication_schedule"
                    value={formData.communication_schedule}
                    label="What are your Communication preferences with service providers?*"
                  />
                  {formData.communication_schedule === "2" ? (
                    <Textfield
                      name="communication_schedule_other"
                      label=" "
                      value={formData.communication_schedule_other}
                      onChange={setValues}
                      required
                    />
                  ) : null}
                </CardBody>
              </Card>
            </div>
            <div className="w-100" id="introductionPreferences">
              <div className="post-job-btn w-100 text-center mb-5">
                {isbuttonLoading ? (
                  <CircularProgress size={26} />
                ) : (
                  <Button
                    type="submit"
                    // disabled={
                    //   price.length === 0 ||
                    //   title.length === 0 ||
                    //   category.length === 0 ||
                    //   photo.length === 0
                    // }
                    size="large"
                    variant="contained"
                    color="primary"
                    // fullWidth
                    // className={classes.createAccountButton}
                  >
                    Submit Service
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = ({ login, flashMessages }) => {
  return { login, flashMessages }
}
export default connect(mapStateToProps, { addFlashMessage })(SubmitRequestBody)
