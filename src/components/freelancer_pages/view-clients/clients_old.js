import React, { useEffect } from "react"
import HelpIcon from "@material-ui/icons/Help"
import PropTypes from "prop-types"
import SwipeableViews from "react-swipeable-views"
import { useTheme } from "@material-ui/core/styles"
import CustomModal from "../../shared/modal"
import { Box, Typography, Tab, Tabs, AppBar, Button } from "@material-ui/core"
import { Popover } from "../../shared/formComponents"

import { createStructuredSelector } from "reselect"
import { fetchClients } from "./actions"
import { makeSelectAvailablehiredClient } from "./selectors"
import { connect } from "react-redux"

import PutOnHold from "./components/putOnHold"
import Hired from "./components/hiredClientList"
import PausedByClient from "./components/pausedByClient"

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

const ContactModal = (props) => {
  console.log(props, "props")
  return (
    <CustomModal {...props} title="Contact Information">
      <div>
        <p className="pb-2">
          Get in touch with De Castro through one of the following contact
          methods.
        </p>
        <p className="pb-2">
          <strong>Email:</strong> freeeup.mdecastro@gmail.com
        </p>
        <p className="pb-2">
          <strong>Phone:</strong> 639152025580
        </p>
        <p className="pb-2">
          <strong>Skype:</strong> nicavia
        </p>
        <p className="pb-2">
          If you have any issues getting in touch with a candidate, let us know
          and we'll be glad to help!
        </p>
      </div>
    </CustomModal>
  )
}

export const ViewClients = ({ availableClients, client }) => {
  const theme = useTheme()
  const [value, setValue] = React.useState(0)

  const [modalContact, setModalContact] = React.useState(false)

  const contactTogglModal = () => {
    setModalContact(!modalContact)
  }
  useEffect(() => {
    availableClients()
  }, [value])
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeIndex = (index) => {
    setValue(index)
  }

  // console.log(listOfClients, "clients")
  return (
    <React.Fragment>
      <ContactModal modal={modalContact} toggleModal={contactTogglModal} />
      <div className="container mt-5 ">
        <div className="px-4">
          <h3 className="h2 pt-4">
            <strong className="text-color">Your clients</strong>
            <Button id="Popover1" type="button">
              <HelpIcon />
            </Button>
            <Popover target="Popover1" title="Manage your clients">
              <p>View all clients you've been hired by.</p>
              <br />
              <p>
                Hired: Clients you have been hired by and can currently bill.
              </p>
              <br />
              <p>
                Paused: Clients that have paused you so you can't bill hours.
              </p>
              <br />
              <p>
                Put On Hold: Clients you removed from your Active list. Add back
                at any time.
              </p>
            </Popover>
          </h3>
        </div>
        <div className="w-100">
          <AppBar
            position="static"
            color="default"
            style={{
              boxShadow: "none",
              backgroundColor: "white",
              borderBottom: "solid 1px lightgray",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              aria-label="scrollable auto tabs example"
            >
              <Tab label="Hired" {...a11yProps} />
              <Tab label="Paused by Client" {...a11yProps} />
              <Tab label="Put On Hold" {...a11yProps} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <Hired value={value} />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <PausedByClient value={value} />
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <PutOnHold value={value} />
            </TabPanel>
          </SwipeableViews>
        </div>
      </div>
    </React.Fragment>
  )
}
const mapStateToProps = createStructuredSelector({
  client: makeSelectAvailablehiredClient(),
})

const mapDispatchToProps = (dispatch) => ({
  availableClients: () => {
    dispatch(fetchClients())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewClients)
