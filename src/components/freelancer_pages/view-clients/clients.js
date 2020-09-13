import React, { useEffect } from "react"
import PropTypes from "prop-types"
import SwipeableViews from "react-swipeable-views"
import { useTheme } from "@material-ui/core/styles"
import CustomModal from "../../shared/modal"
import { Box, Typography, Tab, Tabs, AppBar, Button } from "@material-ui/core"
import { Popover } from "../../shared/formComponents"
import { createStructuredSelector } from "reselect"
import { fetchClients, loadSearchClients } from "./actions"
import { makeSelectAvailablehiredClient } from "./selectors"
import { connect } from "react-redux"
import PutOnHold from "./components/putOnHold"
import Hired from "./components/hiredClientList"
import PausedByClient from "./components/pausedByClient"
import { makeSelectClientsRequests } from '../dashboard/selectors';
import { loadFreelancerClients } from '../dashboard/actions';
import ClientsTab from "./components/clientsTab"
import {
  useParams, useLocation
} from "react-router-dom";


function TabPanel(props) {
  const { children, value, index, ...other } = props

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
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  }
}

export const ViewClients = (props) => {
  const { client, dispatchSearchClients,
    dispatchFreelancerClients,
    freelancerClients, dashSelectedUser } = props;
  const theme = useTheme();
  const [value, setValue] = React.useState(0)
  const [modalContact, setModalContact] = React.useState(false)
  const [showActiveClients, setActiveClients] = React.useState([]);
  const [showInactiveClients, setInactiveClients] = React.useState([]);
  const [showActiveClientSelected, setActiveClientSelected] = React.useState({});
  const [showInactiveClientSelected, setInactiveClientSelected] = React.useState({});
  // const {dashSelectedUser} = useParams();
    const location = useLocation()
  const contactTogglModal = () => {
    setModalContact(!modalContact)
  }

  const selectActivehandler = (client)=>{
    setActiveClientSelected(client);
  }
  const selectInactivehandler = (client)=>{
    setInactiveClientSelected(client);
  }
  
  useEffect(() => {
    dispatchFreelancerClients()
  }, [])
  
  useEffect((props) => {
    if (freelancerClients){
      setActiveClients(freelancerClients.active)
      setInactiveClients(freelancerClients.inactive)

      if (location.state){
        if (location.state.dashActiveSelectedUser){
          setActiveClientSelected(location.state.dashActiveSelectedUser);
        }
        if (location.state.dashInActiveSelectedUser){
          setInactiveClientSelected(location.state.dashInActiveSelectedUser);
        }
      } 
      else {
        setActiveClientSelected(freelancerClients.active[0] || {});
        setInactiveClientSelected(freelancerClients.inactive[0] || {});
      }
    }
    // if (freelancerClients){
    // }
    // if (showInactiveClients.length>0){
    // }
  }, [value, freelancerClients])

  const searchHandle = (data) => {
    dispatchSearchClients({
      searchQuery: data,
    })
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeIndex = (index) => {
    setValue(index)
  }

  return (
    <section id="clients" className="padding_set_profile dashboard_color p-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 custom_tabs tabs_border">
              <div className="w-100 mb-4 dashboard_heading ">
                <h2>Clients</h2>
              </div>
              <AppBar
                position="static"
                color="default"
                style={{
                  backgroundColor: "transparent",
                  color: "#666666",
                  border: "none",
                  "boxShadow": "none",
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
            </div>
          </div>
        </div>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChange}
        >
          <TabPanel className="p-0" value={value} index={0} dir={theme.direction}>
            <ClientsTab showActiveClients={showActiveClients}
             selecthandler={selectActivehandler} 
             showActiveClientSelected={showActiveClientSelected}
             inactive={false}
             searchHandle={searchHandle}
             value={value}
             />
          </TabPanel>
          <TabPanel className="p-0" value={value} index={1} dir={theme.direction}>
            <ClientsTab showInactiveClients={showInactiveClients} 
              selecthandler={selectInactivehandler} 
              showInactiveClientSelected={showInactiveClientSelected}
              inactive={true}
              value={value}
              />
          </TabPanel>
        </SwipeableViews>
      </section>
  )
}
const mapStateToProps = createStructuredSelector({
  client: makeSelectAvailablehiredClient(),
  freelancerClients: makeSelectClientsRequests(),
})

const mapDispatchToProps = (dispatch) => ({
  dispatchFreelancerClients: () => dispatch(loadFreelancerClients()),
  // availableClients: () => { dispatch(fetchClients())},
  dispatchSearchClients: (payload) => { dispatch(loadSearchClients(payload)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewClients)
