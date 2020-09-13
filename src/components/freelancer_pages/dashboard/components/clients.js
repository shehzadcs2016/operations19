import React, {useEffect, useState} from 'react';
import { Card, CardHeader, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import SwipeableViews from "react-swipeable-views";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core"

const Clients = (props) => {
  const { TabPanel, a11yProps, clientsData, clientsCount } = props;
  const [value, setValue] = useState(0);
  const [showActiveClients, setActiveClients] = React.useState([]);
  const [showInactiveClients, setInactiveClients] = React.useState([]);

  React.useEffect(() => {
    if (clientsData){
      try{
        setActiveClients(clientsData.active.slice(0,clientsCount))
      }
      catch(error){
        setActiveClients(clientsData.active)
      }
      try{
        setInactiveClients(clientsData.inactive.slice(0,clientsCount))
      }
      catch(error){
        setInactiveClients(clientsData.inactive)
      }
    }

  }, [clientsData])
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = useTheme();

  return (
    <Card className="mb-3" >
      <CardHeader className="d-flex flex-column flex-md-row service_req_dash">
        <h3 className="h4 mb-0"> Clients </h3>
        <Link className="ml-auto arrow_width" to="/freelancer-clients" > View All </Link>
      </CardHeader>
      <CardBody className="p-0">
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
            // variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab
              label="Active"
              {...a11yProps(11)}
              style={{
                fontWeight: "700",
                outline: "none",
              }}
            />
            <Tab
              label="Inactive"
              {...a11yProps(22)}
              style={{
                fontWeight: "700",
                outline: "none",
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
              <div className="row">
                {showActiveClients ? showActiveClients.map((client, index)=>{
                  return(
                    <div key={"clients"+index}className="col-md-6 tabscontect_color">
                      <div className="row">
                        <div className="col-md-3 pb-2">
                          <Avatar
                            alt="Profile"
                            src={`http://3.211.37.133/${client.user_profile.profile_image_folder_name}${client.user_profile.user_profile_image}`}
                            style={{ width: "60px", height: "60px" }}
                            className="mx-auto mx-0"
                          />
                        </div>
                        <div className="col-md-9">
                        <div className="row">
                         <div className="col-md-7">
                            <h3><strong>{client.user_profile.company_name}</strong></h3>
                          <p className="content2">{client.user_profile.full_name}</p>
                          <p className="content3">{client.user_profile.address}</p>
                         </div>
                          <div className="col-md-5 mt-2">
                            <Link 
                              className="perposal_color2 float-right"
                              to={{
                                  pathname:"/freelancer-clients",
                                  state: { "dashActiveSelectedUser": client,
                                            "dashInActiveSelectedUser": null
                                          },
                                  }} 
                            >
                              Message
                            </Link> 
                          </div>
                        </div>
                        </div>
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
                {showInactiveClients ? showInactiveClients.map((client, index)=>{
                  return(
                    <div key={"clients"+index} className="col-md-6 tabscontect_color">
                      <h3><strong>{client.user_profile.company_name}</strong></h3>
                      <p className="content2">{client.user_profile.full_name}</p>
                      <p className="content3">{client.user_profile.address}</p>
                      <div className="col-md-12 mt-2 p-0">
                        <Link 
                          className="perposal_color2 float-right"
                          to={{
                              pathname:"/freelancer-clients",
                              state: { "dashInActiveSelectedUser": client,
                                        "dashActiveSelectedUser": null, 
                                      },
                              }} 
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

export default Clients;