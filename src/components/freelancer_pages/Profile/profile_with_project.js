import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { Avatar, Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { buttonStyle } from "../../../utils";
import axios from "../../../config/axios";
import { store } from "../../../Redux/store";
import { addFlashMessage } from "../../../Redux/actions/flashMessages";
import AddDegreeModal from "./DegreeModal";
import ProjectModal from "./ProjectModal";

export const Profile = (props) => {
  const [modalAddDegree, setModalAddDegree] = useState(false);
  const [modalAddProject, setModalAddProject] = useState(false);
  const [degree, setDegree] = useState(null);
  const [project, setProject] = useState(null);

  const [degrees, setDegrees] = useState([
    {
      id: 1,
      school: "Dummy college",
      degree: "Bachelor of Fine Dummies",
      completed: "2014",
    },
  ]);
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "First Project",
      description:
        "Managed multiple Amazon stores. Upload listings, PPC and email marketing",
    },
  ]);

  useEffect(() => {
    axios
      .get("project/task/1", {
        headers: { Authorization: `Bearer ${store.getState().login.token}` },
      })
      .then((res) => {
        console.log("res.data^^^^^^", res.data);
      })
      .catch(console.log);

    (async () => {
      /** change that url to all degree certificates route */
      const url = `freelancer/degreecertificate/${store.getState().login.id}`;
      try {
        const degreeData = await axios.get(url, {
          headers: { Authorization: `Bearer ${store.getState().login.token}` },
        });
        if (Array.isArray(degreeData.data.data)) {
          setDegrees(degreeData.data.data);
        }
      } catch (err) {}
    })();
  }, []);

  const addDegreeToggleModal = () => {
    setModalAddDegree(!modalAddDegree);
  };

  const addProjectToggleModal = () => {
    setModalAddProject(!modalAddProject);
  };

  const getDegree = async (e, id) => {
    const url = `freelancer/degreecertificate/${id}`;
    try {
      const degreeData = await axios.get(url, {
        headers: { Authorization: `Bearer ${store.getState().login.token}` },
      });
      if (degreeData.data.data) {
        setDegree(degreeData.data.data);
      }
    } catch (err) {}
    addDegreeToggleModal(e);
  };

  const getProject = async (e, id) => {
    const url = `project/task/edit/${id}`;
    try {
      const degreeData = await axios.get(url, {
        headers: { Authorization: `Bearer ${store.getState().login.token}` },
      });
      if (degreeData.data.data) {
        setProjects(degreeData.data.data);
        addProjectToggleModal(e);
      } else {
        props.addFlashMessage({
          type: "info",
          text:
            "Sorry can't fetch data right now please try agin some other time",
        });
      }
    } catch (err) {
      console.log("Project fetching err", err);
      props.addFlashMessage({
        type: "error",
        text:
          "Sorry can't fetch data right now please try agin some other time" +
          err,
      });
    }
  };

  return (
    <div className="mt-5  mx-3">
      <AddDegreeModal
        modal={modalAddDegree}
        toggleModal={addDegreeToggleModal}
        extraProps={props}
        degree={degree}
      />
      <ProjectModal
        modal={modalAddProject}
        toggleModal={addProjectToggleModal}
        extraProps={props}
        project={project}
      />
      <div className="row pb-3 px-3">
        <div className="offset-xl-2 col-xl-6">
          <Button
            variant="contained"
            style={{ backgroundColor: "#2dced4", color: "white" }}
          >
            Edit Your Profile
          </Button>
        </div>
      </div>
      <div className="row pb-3 px-3">
        <div className="offset-xl-2 col-xl-6 pb-3">
          <Card className="h-100">
            <CardBody>
              <div className="row">
                <div className="col-md-4 pb-4 ">
                  <Avatar
                    alt="Profile"
                    src="/images/person3.jpg"
                    style={{ width: "180px", height: "180px" }}
                    className="mx-auto mx-0"
                  />
                </div>
                <div className="col-md-6 pb-4 pt-0 pt-lg-3">
                  <h4 className="text-color pb-2 h2">
                    Monica Olivia De Castro
                  </h4>
                  <p className="pb-2">
                    <strong>Philippines</strong>
                  </p>
                  <p>
                    Joined the FreeeUp Marketplace on 2018-01-29T17:10:41.000Z
                  </p>
                </div>
                <div className="col-md-12 pb-3">
                  <h4 className="h5 font-weight-bold">About</h4>
                  <p style={{ fontSize: "17px" }}>
                    I'm a Graphic Designer with 10 years of experience. My
                    background includes online and print designs. I have strong
                    computer proficiencies in Adobe Photoshop, Lightroom, Adobe
                    Illustrator, Adobe InDesign, MS Word, MS Excel and MS
                    Powerpoint.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className=" col-xl-2 pb-3">
          <Card className="h-100">
            <CardHeader>
              <h3 className="h4">Details</h3>
            </CardHeader>
            <CardBody>
              <h5 className=" pb-2">
                <strong>Expertise:</strong>
              </h5>
              <p className="pb-2">Graphic Designer</p>

              <h5 className=" pb-2">
                <strong>Skills:</strong>
              </h5>
              <p className="pb-2">
                Graphic Designs, Social Media Graphic Designs, Facebook Ads
                Design, Google Ads Designs, Print Designs, GIF Designs, Photo
                Editing, Amazon Graphic Designs (Product, Lifestyle, A+ Content,
                EBS and Brand Pages)
              </p>
              <h5 className=" pb-2">
                <strong>Links:</strong>
              </h5>
              <Link to="">
                https://www.dropbox.com/s/zqkgp30ouw2pe8m/MDeCastroFolio.pdf?dl=0
              </Link>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="row pb-3 px-3">
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
                    setProject(null);
                    addProjectToggleModal(e);
                  }}
                >
                  Add Project
                </Button>
              </div>
            </CardHeader>
            <CardBody>
              {projects.map((project) => {
                return (
                  <div key={project.id} className="border-bottom py-2 clearfix">
                    <div className="float-left">
                      <h4 className="h5 font-weight-bold">{project.name}</h4>
                      <p>{project.description}</p>
                    </div>
                    <EditIcon
                      className="text-info float-right"
                      style={{ cursor: "pointer" }}
                      onClick={(e) => getProject(e, project.id)}
                    />
                  </div>
                );
              })}
            </CardBody>
          </Card>
        </div>
        <div className=" col-xl-2  pb-3">
          <Card className="h-100">
            <CardHeader>
              <h3 className="h4">Contact Information</h3>
            </CardHeader>
            <CardBody>
              <h5 className=" pb-2">
                <strong>Email:</strong>
              </h5>
              <p className="pb-2">example@gmail.com</p>

              <h5 className=" pb-2">
                <strong>Skype:</strong>
              </h5>
              <p className="pb-2">nicavia</p>
            </CardBody>
          </Card>
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
                    setDegree(null);
                    addDegreeToggleModal(e);
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
                      onClick={(e) => getDegree(e, degree.id)}
                    />
                  </div>
                );
              })}
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ login, flashMessages }) => {
  return { login, flashMessages };
};

export default connect(mapStateToProps, { addFlashMessage })(
  withRouter(Profile)
);
