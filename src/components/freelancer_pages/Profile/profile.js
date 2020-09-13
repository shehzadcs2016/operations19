import React, { useState, useEffect } from "react"
import { Card, CardHeader, CardBody } from "reactstrap"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { Avatar, Button } from "@material-ui/core"
import EditIcon from "@material-ui/icons/Edit"

import { buttonStyle, getFormatedDate } from "../../../utils"
import axios from "../../../config/axios"
import { store } from "../../../Redux/store"
import AddDegreeModal from "./DegreeModal"
import ProjectModal from "./WorkHistoryModal"
import StarRatingComponent from "react-star-rating-component"

import {
  fetchFreelancerProfile,
  postReviewReply,
} from "../../client_Pages/hireFreelancers/actions"
import { makeSelectFreelancerProfile } from "../../client_Pages/hireFreelancers/selectors"
import ViewProfileLoader from "../../client_Pages/hireFreelancers/viewProfile/loader"
import ReviewCard from "../../client_Pages/hireFreelancers/viewProfile/components/reviewCard"
import Breakdown from "../../client_Pages/hireFreelancers/viewProfile/components/breakdown"

import ContactInfo from "../../client_Pages/hireFreelancers/viewProfile/components/contactInfo"
import ReviewReplyModal from "./components/modals/replyModal"
import ViewRepliesModal from "./components/modals/viewRepliesModal"
import AboutMe from "./components/modals/aboutModal"

import SwipeableViews from "react-swipeable-views";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Tabs,
  Tab,
  AppBar,
  Typography,
  Box,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ProfileTab from "./components/profileTab"
import ProfessionalInfoTab from "./components/professionalInfoTab"
import LinkedAccountsTab from "./components/linkedAccountsTab"
import MerchantReviewsTab from "./components/merchantReviewsTab"
import AccountSecurityTab from "./components/accountSecurityTab"
import ServiceMenuTab from "./components/serviceMenuTab"
import PortfolioTab from "./components/portfolioTab"
import FAQS from "./components/faqsTab"


export const Profile = (props) => {
  document.body.style = 'background: #f1f1f1;'
  const [modalAboutMe, setModalAboutMe] = useState(false)
  const [modalAddDegree, setModalAddDegree] = useState(false)
  const [modalAddProject, setModalAddProject] = useState(false)
  const [degree, setDegree] = useState(null)
  const [project, setProject] = useState(null)
  const [replyModalOpen, setReplyModalOpen] = useState(false)
  const [viewRepliesModalOpen, setViewRepliesModalOpen] = useState(false)
  const [reply, setReply] = React.useState("")
  const [reviewId, setReviewId] = React.useState(null)
  const [selectedReplies, setSelectedReplies] = React.useState(null)
  const [ismodalStatus, setismodalStatus] = useState(false)
  const [ReplyErr, setReplyErr] = useState("");
  
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      flexGrow: 1,
      // backgroundColor: theme.palette.background.paper,
    },
  }));
  const theme = useTheme();
  const classes = useStyles();
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }
  // const [degrees, setDegrees] = useState([
  //   {
  //     id: 1,
  //     school: "Dummy college",
  //     degree: "Bachelor of Fine Dummies",
  //     completed: "2014",
  //   },
  // ]);
  const [degrees, setDegrees] = useState([])
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "First Project",
      description:
        "Managed multiple Amazon stores. Upload listings, PPC and email marketing",
    },
  ])

  useEffect(() => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    getCertificates()
    getWorkHistory()
    props.dispatchFetchFreelancerProfile({
      profileId: store.getState().login.id,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const addAboutToggleModal = () => {

    setModalAboutMe(!modalAboutMe)
  }

  const addDegreeToggleModal = () => {
    setModalAddDegree(!modalAddDegree)
  }

  const addProjectToggleModal = () => {
    setModalAddProject(!modalAddProject)
  }

  // const getProject = async (e, id) => {
  //   const url = `project/task/edit/${id}`;
  //   try {
  //     const degreeData = await axios.get(url, {
  //       headers: { Authorization: `Bearer ${store.getState().login.token}` },
  //     });
  //     if (degreeData.data.data) {
  //       setProjects(degreeData.data.data);
  //       addProjectToggleModal(e);
  //     } else {
  //       props.addFlashMessage({
  //         type: "info",
  //         text:
  //           "Sorry can't fetch data right now please try agin some other time",
  //       });
  //     }
  //   } catch (err) {
  //     console.log("Project fetching err", err);
  //     props.addFlashMessage({
  //       type: "error",
  //       text:
  //         "Sorry can't fetch data right now please try agin some other time" +
  //         err,
  //     });
  //   }
  // };

  const getCertificates = async () => {
    try {
      const url = `freelancer/degreecertificates/${store.getState().login.id}`
      const { data } = await axios.get(url, {
        headers: { Authorization: `Bearer ${store.getState().login.token}` },
      })

      const degrees =
        data.data && data.data[0].freelance_degree_certificates
          ? data.data[0].freelance_degree_certificates
          : []

      if (Array.isArray(degrees)) {
        setDegrees(degrees)
      }
    } catch (err) {
      setDegrees([])
      console.log("errors @@@@: =>" + err, err)
    }
  }

  const getWorkHistory = async () => {
    try {
      const url = `freelancer/workhistories/${store.getState().login.id}`
      const { data } = await axios.get(url, {
        headers: { Authorization: `Bearer ${store.getState().login.token}` },
      })

      const workhistory =
        data.data && data.data[0].freelance_work_histories
          ? data.data[0].freelance_work_histories
          : []

      console.log("workhistories", workhistory)
      console.log("data===", data)
      if (Array.isArray(workhistory)) {
        setProjects(workhistory)
      }
    } catch (err) {
      // setDegrees([]);
      console.log("errors @@@@: =>" + err, err)
    }
  }

  const toggleReplyModal = (id) => {
    if(ismodalStatus===true){
    setismodalStatus(false)
    }
    setReviewId(id)
    if(ismodalStatus===false){
    setReplyModalOpen(!replyModalOpen)
    }
    setReplyErr("")
    setReply("")
  }
  const toggleViewRepliesModal = (selectedReplies) => {
    !viewRepliesModalOpen
      ? setSelectedReplies(selectedReplies)
      : setSelectedReplies(null)
    setViewRepliesModalOpen(!viewRepliesModalOpen)
  }

  const onReplyReview = () => {
    const validreply = validateReply();

    
    if (!validreply) {
      console.log("fill required field")
      return false;
    }
    props.dispatchPostReviewReply({
      client_review_id: reviewId,
      reply: reply,
    })
    setReplyModalOpen(false)
    setReply("")
  }

  const onReplyChange = (e) => {
    setReply(e.target.value)
  }

  if (!props.freelancerProfile)
    return (
      <div className="mt-5 pt-5 mx-3">
        <div className="row pb-3 px-3">
          <div className="offset-xl-2 col-xl-6 pb-3">
            <ViewProfileLoader />
          </div>
        </div>
      </div>
    )
  const {
    email,
    created_at,
    average_rating,
    total_reviews,
    freelance_aboutme: {
      aboutme,
      expertise,
      skills,
      profile_link,
      profile_image,
    },
    user_profile: {
      first_name,
      last_name,
      phone_number,
      skype_id,
      profile_image_folder_name,
    },
  } = props.freelancerProfile
  const validateReply = (e) => {
    // const isValid = /^[0-9\b]+$/.test(formData.completed)
  //  if(formData.completed && !isValid){
  //   setReplyErr("Year completed should contain digits only");
  //   return false;
  //  }
    if (reply.length < 1) {
      setReplyErr("required ");
      return false;
    }

    setReplyErr("");
    return true;
  };

  const degreeProps = { props, getCertificates }
  const workProps = { props, getWorkHistory }

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }
  
  return (
    <div className="mt-5 mx-3">
      <AppBar
        position="static"
        color="default"
        style={{
          backgroundColor: "#fff",
          color: "#666666",
          border: "none",
        }}
        >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          >
          <Tab
            label="Personal Info"
            {...a11yProps(0)}
            style={{
              fontWeight:"500",
              outline: "none",
            }}
          />
          <Tab
            label="Professional Info"
            {...a11yProps(1)}
            style={{
              fontWeight:"500",
              outline: "none",
            }}
          />
          <Tab
            label="Linked Accounts"
            {...a11yProps(2)}
            style={{
              fontWeight:"500",
              outline: "none",
            }}
          />
          <Tab
            label="Merchant Reviews"
            {...a11yProps(3)}
            style={{
              fontWeight:"500",
              outline: "none",
            }}
          />
          <Tab
            label="Account Security"
            {...a11yProps(4)}
            style={{
              fontWeight:"500",
              outline: "none",
            }}
          />
          <Tab
            label="Service Menu"
            {...a11yProps(5)}
            style={{
              fontWeight:"500",
              outline: "none",
            }}
          />
          <Tab
            label="Portfolio"
            {...a11yProps(6)}
            style={{
              fontWeight:"500",
              outline: "none",
            }}
          />
          <Tab
            label="FAQ's"
            {...a11yProps(7)}
            style={{
              fontWeight:"500",
              outline: "none",
            }}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChange}>
          <TabPanel className="p-0" value={value} index={0} dir={theme.direction}>
            <ProfileTab 
              profile_image_folder_name={profile_image_folder_name}
              profile_image={profile_image}
              first_name={first_name}
              last_name={last_name}
              average_rating={average_rating}
              total_reviews={total_reviews}
              created_at={created_at}
              aboutme={aboutme}
              expertise={expertise}
              skills={skills}
              profile_link={profile_link}
              freelancerProfile={props.freelancerProfile}
              dispatchFetchFreelancerProfile={props.dispatchFetchFreelancerProfile}
              aboutme_data={props.freelancerProfile.freelance_aboutme}
              user_profile={props.freelancerProfile.user_profile}
              modal={modalAboutMe}
              toggleModal={addAboutToggleModal}
            />
          </TabPanel>
          <TabPanel className="p-0" value={value} index={1} dir={theme.direction}>
          <ProfessionalInfoTab/>
          </TabPanel>
          <TabPanel className="p-0" value={value} index={2} dir={theme.direction}>
            <LinkedAccountsTab/>
          </TabPanel>
          <TabPanel className="p-0" value={value} index={3} dir={theme.direction}>
            <MerchantReviewsTab/>
          </TabPanel>
          <TabPanel className="p-0" value={value} index={4} dir={theme.direction}>
            <AccountSecurityTab/>
          </TabPanel>
          <TabPanel className="p-0" value={value} index={5} dir={theme.direction}>
            <ServiceMenuTab/>
          </TabPanel>
          <TabPanel className="p-0" value={value} index={6} dir={theme.direction}>
            <PortfolioTab/>
          </TabPanel>
          <TabPanel className="p-0" value={value} index={7} dir={theme.direction}>
            <FAQS />
          </TabPanel>
      </SwipeableViews>
      {/* <AboutMe
        modal={modalAboutMe}
        toggleModal={addAboutToggleModal}
        dispatchFetchFreelancerProfile={props.dispatchFetchFreelancerProfile}
        aboutme_data={props.freelancerProfile.freelance_aboutme}
        user_profile={props.freelancerProfile.user_profile}
<<<<<<< HEAD
      
        setismodalStatus={setismodalStatus}
        ismodalStatus={ismodalStatus}
      />
=======
      /> */}
>>>>>>> 7351fc68f16226ba46c5375b554d74b0f37bd253
      <AddDegreeModal
        modal={modalAddDegree}
        toggleModal={addDegreeToggleModal}
        extraProps={degreeProps}
        degree={degree}
        setismodalStatus={setismodalStatus}
        ismodalStatus={ismodalStatus}
      />
      <ProjectModal
        modal={modalAddProject}
        toggleModal={addProjectToggleModal}
        extraProps={workProps}
        project={project}
        setismodalStatus={setismodalStatus}
        ismodalStatus={ismodalStatus}
      />
      <ReviewReplyModal
        modal={replyModalOpen}
        reply={reply}
        handleChange={onReplyChange}
        toggleModal={toggleReplyModal}
        onPostReply={onReplyReview}
        validateReply={validateReply}
        ReplyErr={ReplyErr}
        setismodalStatus={setismodalStatus}
        ismodalStatus={ismodalStatus}
      />
      <ViewRepliesModal
        modal={viewRepliesModalOpen}
        toggleModal={toggleViewRepliesModal}
        selectedReplies={selectedReplies}
      />
      
      
      {/* <div className="row pb-3 px-3">
        <div className="offset-xl-2 w-100 col-xl-6 pb-3">
          <Card className="h-100">
            <CardHeader>
              <div className="clearfix">
                <h3 className="h4 float-left">
                  Past Projects and Work History
                </h3>
                <Button
                  variant="contained"
                  style={buttonStyle}
                  className="ml-0 mx-lg-auto mb-2 float-right"
                  onClick={(e) => {

                    setProject(false)
                    addProjectToggleModal(e)
                    setismodalStatus(false)

                  }}
                >
                  Add Project
                </Button>
              </div>
            </CardHeader>
            <CardBody>
              {projects.map((project) => {
                const {
                  id,
                  project_name,
                  project_description,
                  project_date,
                } = project
                return (
                  <div key={id} className="border-bottom py-2 clearfix">
                    <div className="float-left">
                      <h4 className="h5 font-weight-bold">{project_name}</h4>
                      <p>{project_description}</p>
                    </div>
                    <EditIcon
                      className="text-info float-right"
                      style={{ cursor: "pointer" }}
                      onClick={(e) => {
                        const projectData = {
                          id,
                          project_name,
                          project_date,
                          project_description,
                        }
                        setProject(projectData)
                    setismodalStatus(false)

                        addProjectToggleModal(e)
                      }}
                    />
                  </div>
                )
              })}
            </CardBody>
          </Card>
        </div>
        <div className=" col-xl-3 pb-3">
          <ContactInfo info={{ email, phone_number, skype_id }} />
        </div>
      </div>
      <div className="row pb-3 px-3">
        <div className="offset-xl-2 w-100 col-xl-6 pb-3">
          <Card className="h-100">
            <CardHeader>
              <div className="clearfix">
                <h3 className="h4 float-left">Degrees & Certifications</h3>
                <Button
                  variant="contained"
                  style={buttonStyle}
                  className="ml-0 mx-lg-auto mb-2 float-right"
                  onClick={(e) => {
                    setDegree(null)
                    addDegreeToggleModal(e)
                    setismodalStatus(false)
                  }}
                >
                  Add Degree/Certificate
                </Button>
              </div>
            </CardHeader>
            <CardBody>
              {degrees.map((degree) => {
                return (
                  <div key={degree.id} className="border-bottom py-2 clearfix">
                    <div className="float-left">
                      <h4 className="text-color h5 font-weight-bold">
                        {degree.school}
                      </h4>
                      <p>
                        <strong>{degree.degree}</strong>
                      </p>
                      <p>Completed: {degree.completed}</p>
                    </div>
                    <EditIcon
                      className="text-info float-right"
                      style={{ cursor: "pointer" }}
                      onClick={(e) => {
                        setDegree(degree)
                    setismodalStatus(false)
                    addDegreeToggleModal(e)
                      }}
                    />
                  </div>
                )
              })}
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="row pb-3 px-3">
        <div className="offset-xl-2 w-100 col-xl-6 pb-3">
          <Card className="h-100">
            <CardHeader>
              <div className="clearfix">
                <h3 className="h4 float-left">Reviews</h3>
              </div>
            </CardHeader>
            <CardBody>
              {props.freelancerProfile.client_reviews.map((review) => (
                <ReviewCard
                  key={`reviewCard-${review.id}`}
                  review={review}
                  withReplyButton
                  onReplyClick={toggleReplyModal}
                  onViewRepliesClick={toggleViewRepliesModal}
                  setismodalStatus={setismodalStatus}
                  ismodalStatus={ismodalStatus}
                />
              ))}
            </CardBody>
          </Card>
        </div>
        <div className="col-xl-3 pb-3">
          <Breakdown freelancerProfile={props.freelancerProfile} />
        </div>
      </div>
     */}
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  freelancerProfile: makeSelectFreelancerProfile(),
})
function mapDispatchToProps(dispatch) {
  return {
    dispatchFetchFreelancerProfile: (payload) =>
    dispatch(fetchFreelancerProfile(payload)),
    dispatchPostReviewReply: (payload) => dispatch(postReviewReply(payload)),
  }
}
// const mapStateToProps = ({ login, flashMessages }) => {
//   return { login, flashMessages };
// };

// export default connect(mapStateToProps, { addFlashMessage })(
//   withRouter(Profile)
// );
export default connect(mapStateToProps, mapDispatchToProps)(Profile)
