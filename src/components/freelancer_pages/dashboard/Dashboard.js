import React, { useEffect } from "react";
import {
  Button,
  Typography,
  Box,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Card, CardHeader, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import "date-fns";

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectClientsRequests, makeSelectServicesRequests, makeSelectReviewsRequests,makeFreelancerInActiveServices } from './selectors';
import { loadFreelancerClients, loadFreelancerServices, loadFreelancerInActiveServices } from './actions';
import Clients from './components/clients';
import Services from './components/services';
import ProjectManagement from './components/projectManagement';
import Reviews from './components/reviews';

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
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export const Dashboard = (props) => {
  console.log("DASHBOARD PROPS: ", props.freelancerDashboardClients, props.freelancerProfile)
  useEffect(() => {
    props.dispatchFreelancerClients();
    props.dispatchFreelancerServices();
    props.dispatchFreelancerInActiveServices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      flexGrow: 1,
    },
  }));
  
  const theme = useTheme();
  const classes = useStyles();
  
  return (
    <section id="Dashboard" className="dashboard_color">
      <div className="container p-5">
        <div className="row mx-0 ">
          <div className="col-xl-8 col-lg-8 dashboard_heading main_heading">
            {props.freelancerProfile ? <h2 className="h4 text_grey">Welcome,<strong> {props.freelancerProfile[0].user_profile.first_name} {props.freelancerProfile[0].user_profile.last_name}</strong></h2> : null}
          </div>
        </div>
        <div className="row mx-0 mt-2">
          <div className="col-md-9 col-sm-12 custom_tabs" >
            <div className="row">
              <div className="col-md-12">
                <Card className="my-3 card_heading_dash">
                  <CardHeader className="d-flex flex-column flex-md-row ">
                    <h3 className="h4 m-0 main_h">
                      <strong>Total Net Earnings</strong> (Fixed Price & Hourly)
                    </h3>
                    <Link className="ml-auto arrow_width" to="/freelancer-earnings" >View All</Link>
                  </CardHeader>
                  <CardBody>
                    <div className="row">
                      <div className="col-md-3 mt-2 earning_detail border_right text-center">
                        <h5>Total Net Earnings</h5>
                        <h5>This Week</h5>
                        <h3>$1,600</h3>
                      </div>
                      <div className="col-md-3 mt-2 earning_detail border_right text-center">
                        <h5>Total Net Earnings</h5>
                        <h5>This Month</h5>
                        <h3>$5,000</h3>
                      </div>
                      <div className="col-md-3 mt-2 earning_detail border_right text-center">
                        <h5>Total Net Earnings</h5>
                        <h5>Year to date</h5>
                        <h3>$30,00</h3>
                      </div>
                      <div className="col-md-3 mt-2 earning_detail text-center">
                        <h5>Total Net Earnings</h5>
                        <h5>Last Year - 2019</h5>
                        <h3>$85,00</h3>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
              <div className="col-md-12">
                <div className={classes.root} >
                  <Services TabPanel={TabPanel} a11yProps={a11yProps} theme={theme}
                    servicesData={props.freelancerDashboardServices}
                    inActiveServices={props.inActiveServicesData}
                    servicesCount={2}
                  />
                  <Clients TabPanel={TabPanel} a11yProps={a11yProps} theme={theme}
                    clientsData={props.freelancerDashboardClients}
                    clientsCount={2}
                  />
                  <ProjectManagement />
                  <Reviews limit={2}/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-3">
            <Card className="mb-3 service_req_dash">
              <CardHeader className="d-flex">
                <h3 className="h5 m-0">Guidelines</h3>
                <Button id="Popover4" className="info_icon p-0 ">
                </Button>
              </CardHeader>
              <CardBody className="border_bottom right_sidesection pt-3">
                <h5 className="mb-3 h6 text_grey" to="#">
                Getting Started With Operations19
                </h5>
                <p>
                Serious growth for serious professionals.
                </p>
                <Link className="h6 font-weight-bold text-primary" to="#">
                Review Our Guidelines
                </Link>
              </CardBody>
              <CardBody className="border_bottom right_sidesection">
                <button className="radius_button_num">1</button>
                <h5 className="mb-3 h6 text_grey" to="#">
                Browse Service Postings
                </h5>
                <p>
                Browse service postings in e-commerce, marketing, business, development & more.
                </p>
                <Link className="h6 font-weight-bold text-primary" to="#">
                View All
                </Link>
              </CardBody>
              <CardBody className="border_bottom right_sidesection">
              <button className="radius_button_num">2</button>

                <h5 className="mb-3 h6 text_grey" to="#">
                Submit Your Proposal
                </h5>
                <p>
                Apply to job postings that you can confidently execute. Create & submit your proposal
                </p>
                <Link className="h6 font-weight-bold text-primary" to="#">
                Read More About How To Submit Your Proposal Here
                </Link>
              </CardBody>
              <CardBody className="border_bottom right_sidesection">
              <button className="radius_button_num">3</button>

                <h5 className="mb-3 h6 text_grey" to="#">
                Getting Started With Your Clients
                </h5>
                <p>
                Keep communication clear & deliver ontime.
                </p>
                <Link className="h6 font-weight-bold text-primary" to="#">
                View Our Guide On Getting Started, Maintaining & Growing Your Clients
                </Link>
              </CardBody>
              <CardBody className="border_bottom right_sidesection">
              <button className="radius_button_num">4</button>

                <h5 className="mb-3 h6 text_grey" to="#">
                Getting Paid Through Operations19
                </h5>
                <p>
                Withdraw your earnings through Paypal 0r Payoneer.
                </p>
                <Link className="h6 font-weight-bold text-primary" to="#">
                Read More About Payment Withdrawls Here
                </Link>
              </CardBody>
            </Card>
            <Card className="mb-3  service_req_dash">
              <CardHeader className="d-flex ">
                <h3 className="h5 m-0"> Contact Us</h3>
              </CardHeader>
              <CardBody className="service_req_dash5">
                {/* <img src="images/freelancermeetupmanila2018-2.jpg" alt="" /> */}
                <h5 className="mb-3 mt-2  text_grey h6">
                  Contact the Support Team 7 days a week. We're always
                  available to help in growing your digital business!
                </h5>
                <h5 className="h6 text_grey mb-2 border_top pt-2">
                  <strong>E-mail:</strong>
                  <Link className="h6 text-primary ml-2 linkfont_size" to="#">
                    Support@FreeeUp.com
                  </Link>
                </h5> 
                <h5 className="h6 pt-2 mt-3 border_top text_grey">Start a Live Chat at any time!</h5>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = createStructuredSelector({
  freelancerDashboardClients: makeSelectClientsRequests(),
  freelancerDashboardServices: makeSelectServicesRequests(),
  freelancerProfile: makeSelectReviewsRequests(),
  inActiveServicesData: makeFreelancerInActiveServices(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatchFreelancerClients: () => dispatch(loadFreelancerClients()),
    dispatchFreelancerServices: () => dispatch(loadFreelancerServices()),
    dispatchFreelancerInActiveServices: () => dispatch(loadFreelancerInActiveServices()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);