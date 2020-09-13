import React, { useState } from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useTheme } from "@material-ui/core/styles";
import { Box, Typography} from "@material-ui/core";
import { makeSelectServicesRequests, makeFreelancerInActiveServices } from '../dashboard/selectors';
import { loadFreelancerServices, loadFreelancerInActiveServices } from '../dashboard/actions';
import Services from "../dashboard/components/services";


export const Requests = ({
  dispatchFreelancerServices,
  dispatchFreelancerInActiveServices,
  freelancerServices,
  inActiveServicesData,
}) => {
  const theme = useTheme()
  React.useEffect(() => {
    dispatchFreelancerServices();
    dispatchFreelancerInActiveServices();
  }, [])

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
  return (
    <section id="Requests">
      <div className="container my-5 Service_Requests_tabs_shadow">
        <h4 className="h4 mb-4">Service Requests</h4>
        <Services
          servicesData={freelancerServices}
          inActiveServices={inActiveServicesData}
          TabPanel={TabPanel} a11yProps={a11yProps} theme={theme}
          hideViewAll={true}
        />
      </div>
    </section>
  )
}

const mapStateToProps = createStructuredSelector({
  freelancerServices: makeSelectServicesRequests(),
  inActiveServicesData: makeFreelancerInActiveServices(),
});
function mapDispatchToProps(dispatch) {
  return {
    dispatchFreelancerServices: () => dispatch(loadFreelancerServices()),
    dispatchFreelancerInActiveServices: () => dispatch(loadFreelancerInActiveServices()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Requests)
