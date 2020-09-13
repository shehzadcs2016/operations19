import React from 'react';
import { Card, CardHeader, CardBody } from "reactstrap";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { getFormatedDate } from '../../../../utils/index'
import SwipeableViews from "react-swipeable-views";
import { Tabs, Tab, AppBar } from "@material-ui/core";


const Services = (props) => {

  const { TabPanel, a11yProps, theme, servicesData, inActiveServices, servicesCount} = props;
  const [value, setValue] = React.useState(0);
  const [showActiveServices, setActiveServices] = React.useState([]);
  const [showInactiveServices, setInactiveServices] = React.useState([]);
  const [heading, setHeading]=React.useState(`${servicesData.length} Active Requests`)
  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (props.hideViewAll){
      if (newValue === 1){
        setHeading(`${inActiveServices.length} Inactive Requests`)
      }
      else{
        setHeading(`${servicesData.length} Active Requests`)
      }
    }
  };

  React.useEffect(() => {
    if (props.hideViewAll){
      if (value === 1){
        setHeading(`${inActiveServices.length} Inactive Requests`)
      }
      else{
        setHeading(`${servicesData.length} Active Requests`)
      }
    }
    if (servicesData){
      try{
        setActiveServices(servicesData.slice(0,servicesCount))
      }
      catch(error){
        setActiveServices(servicesData)
      }
    }
    if(inActiveServices){
      try{
        setInactiveServices(inActiveServices.slice(0,servicesCount))
      }
      catch(error){
        setInactiveServices(inActiveServices)
      }
    }
  }, [servicesData,inActiveServices])

  return (
    <Card className="mb-3">
      <CardHeader className="d-flex flex-column flex-md-row service_req_dash">
        <h3 className="h4 mb-0">
          {props.hideViewAll ? heading : "Service Requests"}
        </h3>
        {props.hideViewAll ? null :<Link className="ml-auto arrow_width" to="/freelancer-requests" > View All </Link>}
        
      </CardHeader>
      <CardBody className="p-0 tabs_border">
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
            aria-label="full width tabs example"
            
          >
            <Tab
              label="Active"
              {...a11yProps(0)}
              style={{
                fontWeight: "700",
              }}
            />
            <Tab
              label="Inactive"
              {...a11yProps(1)}
              style={{
                fontWeight: "700",
              }}
            />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChange}
        >
          <TabPanel className="p-0" value={value} index={0} dir={theme.direction}>
            <div className="container">
              <div className="row ">
                {showActiveServices ? showActiveServices.map((service, index)=>{
                  return(
                    <div key={"service"+index} className="col-md-12 tabscontect_color">
                      <h3>{service.client_service_request.service_title}</h3>
                      <p className="content2">Open-Ticket: {service.client_service_request.ticket}</p>
                      <p className="content3">Created on: {getFormatedDate(service.created_at)}</p>
                      <div className="col-md-12 mt-2 p-0">
                        <button className="perposal_color float-left">
                          {Object.values(service.proposal_status)[0]}
                        </button>
                        <Link 
                          className="perposal_color2 float-right"
                          to="/freelancer-clients"
                        >
                          Message
                        </Link> 
                      </div>
                    </div>
                  )
                })
                : null}
              </div>
            </div>
          </TabPanel>
          <TabPanel className="p-0" value={value} index={1} dir={theme.direction}>
            <div className="container">
              <div className="row">
                {showInactiveServices ? showInactiveServices.map((service, index)=>{
                  return(
                    <div key={"service"+index} className="col-md-12 tabscontect_color">
                      <h3>{service.client_service.service_title}</h3>
                      <p className="content2">Open-Ticket: {service.client_service_request.ticket}</p>
                      <p className="content3">Created on: {getFormatedDate(service.created_at)}</p>
                      <div className="col-md-12 mt-2 p-0">
                        <button className="perposal_color float-left">{Object.values(service.proposal_status)[0]}</button>
                        <Link 
                          className="perposal_color2 float-right"
                          to="/freelancer-clients"
                        >
                          Message
                        </Link> 
                      </div>
                    </div>
                  )
                })
                : null}
              </div>
            </div>
          </TabPanel>
        </SwipeableViews>
      </CardBody>
    </Card>
    )
}

export default Services;