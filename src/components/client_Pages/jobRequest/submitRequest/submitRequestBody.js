import React, { useState, useEffect } from "react"
import HelpIcon from "@material-ui/icons/Help"
import { Button, LinearProgress, makeStyles } from "@material-ui/core"
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
} from "../../../shared/formComponents"
import { SelectMenu } from "./SelectMenu"
import "./stylesheet.css"
// import * as data from "./submitRequestData";
import addFlashMessage from "../../../../Redux/actions/flashMessages"
import axios from "../../../../config/axios"
import { store } from "../../../../Redux/store"
import { queryParam } from "../../../../utils"
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
    service_frequency: "",
    service_frequency_other: "",

    client_category_id: "",
    client_sub_category_id: "",

    project_id: null,
    client_skills: "",
    project_detail: "",

    budget: "",
    hourly_rates: [],
    hourly_rate_other: "",
    comments: "",

    client_location: "",
    client_location_other: "",
    client_location_comments: "",

    client_project_duration: "",
    client_project_duration_other: "",
    client_project_duration_comments: "",

    hours_of_freelancer_required: "",
    hours_of_freelancer_required_comments: "",

    client_schedule: "",
    client_schedule_specific_hrs: "",
    // client_schedule_other: "",
    // client_schedule_comments: "",

    freelancer_availability_weekend: "",
    freelancer_availability_weekend_other: "",
    freelancer_availability_weekend_comments: "",

    freelancer_availability_call: "",
    freelancer_availability_call_other: "",
    freelancer_availability_call_comments: "",

    quickly_project_completion: "",
    quickly_project_completion_other: "",
    quickly_project_completion_comments: "",

    introduction_to_freelancer: "",
    introduction_to_freelancer_other: "",
    introduction_to_freelancer_comments: "",
  }
  const [formData, setFormData] = useState({
    ...blankData,
    comments: "",
    // client_location: "3",
    // client_location_comments: "clients location comments",
    // client_project_duration: "2",
    // client_project_duration_comments: "project duration comments",
  })

  const [displayOFN, setDisplayOFN] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showHourlyRateOther, setShowHourlyRateOther] = useState(false)
  const [clientLocationOther, setClientLocationOther] = useState(false)
  const [projectDurationOther, setProjectDurationOther] = useState(false)
  const [clientScheduleOther, setClientScheduleOther] = useState(false)
  const [weekendAvailabilityOther, setWeekendAvailabilityOther] = useState(
    false
  )
  const [callAvailabilityOther, setCallAvailabilityOther] = useState(false)
  const [projectCompletionOther, setProjectCompletionOther] = useState(false)
  const [introToFreelancer, setIntroToFreelancer] = useState(false)
  const classes = useStyles()
  const [hourly_rates_data, setHourly_rate_data] = useState([])
  const [categories, setCategories] = useState([])
  const [sub_categories, setSubCategories] = useState([])
  const [frequency_of_service, setService_frequency_options] = useState([])
  const [client_location_data, setClient_location_options] = useState([])
  const [
    client_project_duration_data,
    setClient_project_duration_options,
  ] = useState([])
  const [client_schedule_data, setClient_schedule_options] = useState([])
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
      .get("client/listcategory", {
        headers: { Authorization: `Bearer ${store.getState().login.token}` },
      })
      .then((res) => {
        console.log("categories data", res.data.data)
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

        const hourly_rate_keys = Object.keys(res.data.data["hourly_rate"])
        setHourly_rate_data(
          hourly_rate_keys.map((key) => {
            return {
              value: key,
              label: res.data.data["hourly_rate"][key],
              isChecked: false,
            }
          })
        )

        const client_location_keys = Object.keys(
          res.data.data["client_location"]
        )
        setClient_location_options(
          client_location_keys.map((key) => {
            return {
              value: key,
              label: res.data.data["client_location"][key],
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

        const client_schedule_keys = Object.keys(
          res.data.data["client_schedule"]
        )
        setClient_schedule_options(
          client_schedule_keys.map((key) => {
            return {
              value: key,
              label: res.data.data["client_schedule"][key],
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
          console.log("::::::::", res.data.data[0])
          if (res.data.data && res.data.data.length) {
            const data = res.data.data[0]
            const {
              client_availibility,
              client_budget,
              client_preference,
              client_service,
            } = data
            let keys = []
            client_budget.map((data) => {
              const key = Object.keys(data["hourly_rate"])
              keys.push(key[0])
            })
            // setHourly_rate_data(
            //   hourly_rates_data.map(checkbox=>{
            //     console.log("checkbox",checkbox)
            //     return checkbox;
            //   })
            // )
            console.log("===hourly_rates_data", hourly_rates_data)
            // setHourly_rate_data(
            //   hourly_rates_data.map(data=>{
            //     console.log("======",data)
            //     let checked = false;
            //     if(data.value in keys){
            //       checked = true;
            //     }
            //     return {
            //       value: data.value, label: data.label, isChecked: checked,
            //     }
            //   })
            // );
            setFormData({
              ...blankData,
              description_attachment: data.description_attachment,
              client_category_id: client_service.client_category_id || "",
              client_sub_category_id:
                client_service.client_sub_category_id || "",

              service_title: client_service.service_title || "",
              service_frequency:
                client_service.service_frequency.toString() || "",
              service_frequency_other:
                client_service.service_frequency_other || "",

              budget: client_budget[0].budget || "",
              project_id: projectId,
              // budget: 10,
              client_skills: data.client_skills,
              project_detail: data.project_detail,

              hourly_rates: keys,
              hourly_rate_other: client_budget[0].hourly_rate_other || "",
              comments: client_budget[0].comments || "",

              client_location: Object.keys(data.client_location)[0],
              client_location_other: data.client_location_other || "",
              client_location_comments: data.client_location_comments || "",

              client_project_duration: Object.keys(
                client_availibility.client_project_duration
              )[0],
              client_project_duration_other:
                client_availibility.client_project_duration_other || "",
              client_project_duration_comments:
                client_availibility.client_project_duration_comments || "",

              hours_of_freelancer_required:
                client_availibility.hours_of_freelancer_required || "",
              hours_of_freelancer_required_comments:
                client_availibility.hours_of_freelancer_required_comments || "",

              client_schedule: Object.keys(
                client_availibility.client_schedule
              )[0],
              // client_schedule_specific_hrs: data.client_schedule_specific_hrs.toString(),
              // client_schedule_other:
              //   client_availibility.client_schedule_other || "",
              // client_schedule_comments: client_availibility.client_schedule_comments || "",

              freelancer_availability_weekend: Object.keys(
                client_availibility.freelancer_availability_weekend
              )[0],
              freelancer_availability_weekend_other:
                client_availibility.freelancer_availability_weekend_other || "",
              freelancer_availability_weekend_comments:
                client_availibility.freelancer_availability_weekend_comments ||
                "",

              freelancer_availability_call: Object.keys(
                client_availibility.freelancer_availability_call
              )[0],
              freelancer_availability_call_other:
                client_availibility.freelancer_availability_call_other || "",
              freelancer_availability_call_comments:
                client_availibility.freelancer_availability_call_comments || "",

              quickly_project_completion: Object.keys(
                client_preference.quickly_project_completion
              )[0],
              quickly_project_completion_other:
                client_preference.quickly_project_completion_other || "",
              quickly_project_completion_comments:
                client_preference.quickly_project_completion_comments || "",

              introduction_to_freelancer: Object.keys(
                client_preference.introduction_to_freelancer
              )[0],
              introduction_to_freelancer_other:
                client_preference.introduction_to_freelancer_other || "",
              introduction_to_freelancer_comments:
                client_preference.introduction_to_freelancer_comments || "",
            })

            // console.log("res", res.data.data[0]);
            if (client_service.client_category_id) {
              selectMenuHandler(client_service.client_category_id)
            }

            // frequency_of_service.map(data=>{
            //   if
            // })
            setShowHourlyRateOther(client_budget[0].hourly_rate === 9)
            setClientLocationOther(data.client_location === 4)
            setClientLocationOther(data.client_location === 4)
            setProjectDurationOther(
              client_availibility.client_project_duration === 4
            )
            setClientScheduleOther(client_availibility.client_schedule === 4)
            setWeekendAvailabilityOther(
              client_availibility.freelancer_availability_weekend === 3
            )
            setCallAvailabilityOther(
              client_availibility.freelancer_availability_call === 3
            )

            setProjectCompletionOther(
              client_preference.quickly_project_completion === 5
            )
            setIntroToFreelancer(
              client_preference.introduction_to_freelancer === 3
            )
          }
          setIsLoading(false)
        } catch (err) {
          setIsLoading(false)
          console.log("async error: =>", err)
        }
      })()
    }

    // axios.get("project/billing/2", {
    //     headers: { Authorization: `Bearer ${store.getState().login.token}` },
    //   })
    //   .then((data) => {
    //     console.log("project data", data.data);
    //   })
    //   .catch((err) => console.log("errDDD", err));
    // axios.get("freelancer/workhistory/61", {
    //     headers: { Authorization: `Bearer ${store.getState().login.token}` },
    //   })
    //   .then((data) => {
    //     console.log("Freelancer Workhistory data", data.data);
    //   })
    //   .catch((err) => console.log("errDDD" + err, err.data));
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    // return;

    // try {
    //   const clientData = await axios.get("freelancer/request/60", {
    //     headers: { Authorization: `Bearer ${store.getState().login.token}` },
    //   });
    //   console.log("clientData.data => ", clientData.data);
    // } catch (e) {
    //   console.log("error:", e);
    // }
    // return;

    try {
      const { project_id } = formData
      const headers = {
        headers: { Authorization: `Bearer ${store.getState().login.token}` },
      }
      let res
      if (project_id) {
        const url = `project/update/${project_id}`
        // const url = `client/editrequest/65`;
        console.log("UPdate data:", formData)
        res = await axios.patch(url, formData, headers)
        // console.log("updated response", updateres);
        // return;
      } else {
        // formData['budget']= "10";
        // formData['hours_of_freelancer_required']="10";
        // formData['service_category'] = 1;
        // formData['service_subcategory'] = 1;
        // formData['service_title'] = 'Dummy title';
        // formData['service_frequencys'] = [1];
        // formData['service_frequency_other'] = 'other frequency'
        console.log(formData, "shehzad")
        res = await axios.post("project", formData, headers)
      }

      const { data } = res
      // const message = {type: 'success' text: ''}
      if (data && data.status !== 200) {
        props.addFlashMessage({ type: "error", text: data.message })
      } else if (data && data.status === 200) {
        props.addFlashMessage({ type: "success", text: data.message })
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
      const res = await axios.get(`client/listsubcategory/${value}`, {
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
    // console.log("checked", checked);
    // console.log("value", value);
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
    const hourly_rate = formData.hourly_rates
    if (checked) {
      hourly_rate.push(value)
    } else {
      var index = hourly_rate.indexOf(value)
      if (index !== -1) hourly_rate.splice(index, 1)
    }
    console.log("hourly_rates", hourly_rate)
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
                        name="client_category_id"
                        value={formData.client_category_id}
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
                      {formData.client_category_id ? (
                        <SelectMenu
                          name="client_sub_category_id"
                          value={formData.client_sub_category_id}
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
              <Card
                className="mb-3"
                // style={{ boxShadow: "0px 2px 5px 0px black " }}
              >
                <CardBody>
                  <h5 className="pb-3 font-weight-bold">
                    What skill(s) does the freelancer need to have?
                  </h5>
                  <Textfield
                    name="client_skills"
                    label="Skills Level"
                    value={formData.client_skills}
                    required
                    onChange={setValues}
                  />
                  <h5 className="pb-3">
                    Here are examples other clients have used:
                  </h5>
                  <ul className="ml-5">
                    <li>Amazon expert needed for managing PPC campaigns.</li>
                    <li>Need a web designer to create my Shopify store.</li>
                    <li>Experienced writer to create 5 articles per week.</li>
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
                    name="project_detail"
                    onChange={setValues}
                    value={formData.project_detail}
                    multiline
                    rows="4"
                    required
                  />
                  <div className="pull-right">
                    <UploadSingleFile
                      label=" Attach File"
                      name="description_attachment"
                      onChange={fileChange}
                    />
                  </div>
                  <div className="pull-right">
                    <p>{displayOFN && <p>{displayOFN} </p>}</p>
                  </div>
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
                    value={formData.budget}
                    onChange={(value) =>
                      setFormData({ ...formData, budget: value })
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
                        name="hourly_rates"
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
                      name="hourly_rate_other"
                      label="Hourly rates Others"
                      value={formData.hourly_rate_other}
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
                    options={client_location_data}
                    onChange={(event) => {
                      setClientLocationOther(event.target.value === "4")
                      setValues(event)
                    }}
                    value={formData.client_location}
                    name="client_location"
                    label="Do you have a preference where the service provider is located?"
                    required
                  />
                  {clientLocationOther && (
                    <Textfield
                      name="client_location_other"
                      label="Location"
                      value={formData.client_location_other}
                      onChange={setValues}
                    />
                  )}

                  <Textfield
                    name="client_location_comments"
                    label="Comments (optional)"
                    value={formData.client_location_comments}
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
              <h4 className="text-color my-4 d-flex align-items-center h4">
                <EventAvailableIcon />
                Availability
              </h4>
              <Card className="mb-3">
                <CardBody>
                  <RadioButton
                    options={client_project_duration_data}
                    value={formData.client_project_duration}
                    onChange={(event) => {
                      setProjectDurationOther(event.target.value === "4")
                      setValues(event)
                    }}
                    name="client_project_duration"
                    label="How long do you need the freelancer for?"
                  />
                  {projectDurationOther && (
                    <Textfield
                      name="client_project_duration_other"
                      label="How long do you need the freelancer for?"
                      value={formData.client_project_duration_other}
                      onChange={setValues}
                    />
                  )}
                  <Textfield
                    name="client_project_duration_comments"
                    value={formData.client_project_duration_comments}
                    label="Comments (optional)"
                    onChange={setValues}
                  />
                  <h5 className="pb-3">
                    How many hours/days per week do you need the freelancer?
                  </h5>{" "}
                  <Textfield
                    name="hours_of_freelancer_required"
                    label=" "
                    value={formData.hours_of_freelancer_required}
                    onChange={setValues}
                    required
                  />
                </CardBody>
              </Card>

              <Card className="mb-3">
                <CardBody>
                  <h5 className="pb-3 font-weight-bold">
                    Communication Schedule
                  </h5>
                  <RadioButton
                    options={client_schedule_data}
                    onChange={(event) => {
                      // setClientScheduleOther(event.target.value === "4");
                      setValues(event)
                    }}
                    name="client_schedule"
                    value={formData.client_schedule}
                    label="What are your Communication preferences with service providers?*"
                  />
                  {formData.client_schedule === "2" ? (
                    <Textfield
                      name="client_schedule_specific_hrs"
                      label=" "
                      value={formData.client_schedule_specific_hrs}
                      onChange={setValues}
                      required
                    />
                  ) : null}
                  {/* {clientScheduleOther && (
                    <Textfield
                      name="client_schedule_other"
                      label="What are your scheduling preferences for the freelancer?"
                      value={formData.client_schedule_other}
                      onChange={setValues}
                    />
                  )} */}
                  {/* <Textfield
                    name="client_schedule_comments"
                    label="Comments (optional)"
                    value={formData.client_schedule_comments}
                    onChange={setValues}
                  /> */}
                </CardBody>
              </Card>

              <Card className="mb-3">
                <CardBody>
                  <RadioButton
                    options={freelancer_availability_weekend_data}
                    onChange={(event) => {
                      setWeekendAvailabilityOther(event.target.value === "3")
                      setValues(event)
                    }}
                    name="freelancer_availability_weekend"
                    value={formData.freelancer_availability_weekend}
                    label="Does the freelancer need to have availability on weekends?*"
                  />
                  {weekendAvailabilityOther && (
                    <Textfield
                      name="freelancer_availability_weekend_other"
                      label="Does the freelancer need to have availability on weekends?"
                      value={formData.freelancer_availability_weekend_other}
                      onChange={setValues}
                    />
                  )}
                  <Textfield
                    name="freelancer_availability_weekend_comments"
                    label="Comments (optional)"
                    value={formData.freelancer_availability_weekend_comments}
                    onChange={setValues}
                  />
                </CardBody>
              </Card>

              <Card className="mb-3">
                <CardBody>
                  <RadioButton
                    options={freelancer_availability_call_data}
                    onChange={(event) => {
                      setCallAvailabilityOther(event.target.value === "3")
                      setValues(event)
                    }}
                    name="freelancer_availability_call"
                    value={formData.freelancer_availability_call}
                    label="Does the freelancer need to be able to have audio and video calls with you, customers, or clients?*"
                  />
                  {callAvailabilityOther && (
                    <Textfield
                      name="freelancer_availability_call_other"
                      label="Does the freelancer need to be able to have audio and video calls with you, customers, or clients?"
                      value={formData.freelancer_availability_call_other}
                      onChange={setValues}
                    />
                  )}
                  <Textfield
                    name="freelancer_availability_call_comments"
                    label="Comments (optional)"
                    value={formData.freelancer_availability_call_comments}
                    onChange={setValues}
                  />
                </CardBody>
              </Card>
            </div>
            <div className="w-100" id="introductionPreferences">
              <h4 className="text-color my-4 d-flex align-items-center h4">
                <ContactSupportIcon />
                Introduction preferences
              </h4>
              <Card className="mb-3">
                <CardBody>
                  <RadioButton
                    options={quickly_project_completion_data}
                    onChange={(event) => {
                      setProjectCompletionOther(event.target.value === "5")
                      setValues(event)
                    }}
                    name="quickly_project_completion"
                    value={formData.quickly_project_completion}
                    label="How Quickly do you need these Service(s) complete?*"
                  />
                  {projectCompletionOther && (
                    <Textfield
                      name="quickly_project_completion_other"
                      label="How Quickly do you need these Service(s) complete??"
                      value={formData.quickly_project_completion_other}
                      onChange={setValues}
                    />
                  )}
                  <Textfield
                    name="quickly_project_completion_comments"
                    label="Comments (optional)"
                    value={formData.quickly_project_completion_comments}
                    onChange={setValues}
                  />
                </CardBody>
              </Card>

              <Card className="mb-3">
                <CardBody>
                  <RadioButton
                    options={introduction_to_freelancer_data}
                    value={formData.introduction_to_freelancer}
                    onChange={(event) => {
                      setIntroToFreelancer(event.target.value === "3")
                      setValues(event)
                    }}
                    name="introduction_to_freelancer"
                    label="How would you like to be introduced to the freelancer?*"
                  />
                  {introToFreelancer && (
                    <Textfield
                      name="introduction_to_freelancer_other"
                      label="How would you like to be introduced to the freelancer?"
                      value={formData.introduction_to_freelancer_other}
                      onChange={setValues}
                    />
                  )}
                  <Textfield
                    name="introduction_to_freelancer_comments"
                    label="Comments (optional)"
                    value={formData.introduction_to_freelancer_comments}
                    onChange={setValues}
                  />
                </CardBody>
              </Card>
              <div className="post-job-btn w-100 text-center mb-5">
                <button className=" button-ymp" type="submit">
                  {/* <img src={require(`../../../../assets/spinner.svg`)} alt="refresh_icon" /> */}
                  Submit
                </button>
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

// export default connect(mapStateToProps, { addFlashMessage, loginAction })(
//   withRouter(Login)
// );
