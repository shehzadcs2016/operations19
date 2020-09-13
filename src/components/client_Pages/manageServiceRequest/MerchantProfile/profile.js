import React, { useEffect } from "react"
import HelpIcon from "@material-ui/icons/Help"
import PropTypes from "prop-types"
import SwipeableViews from "react-swipeable-views"
import { Link } from "react-router-dom"
import { useTheme } from "@material-ui/core/styles"
import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"
import ClosedFreelancer from "../components/ClosedFreelancer"
import OpenFreelancer from "../components/OpenFreelancer"
import {
  Box,
  Typography,
  Tab,
  Tabs,
  AppBar,
  Button,
  Avatar,
} from "@material-ui/core"
import AvailableProjectsLoader from "../loaders"

import { Card, CardBody, CardFooter } from "reactstrap"
import { Popover, Textfield, SelectMenu } from "../../../shared/formComponents"
import About from "./components/about"
import FAQ from "./components/faq"
import ServiceMenu from "./components/serviceMenu"
import { makeSelectMerchants, makeSelectServiceMenu } from "../selectors"
import { fetchmerchantProfile, fetchServiceMenu } from "../actions"
import { getFormatedDate, queryParam } from "../../../../utils"
import Reviews from "./components/Reviews"
import Contact from "./components/Contact"

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

export const Profile = ({
  DispatchmerchantProfile,
  DispatchServiceMenu,
  serviceMenu,
  Merchant,
}) => {
  const theme = useTheme()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeIndex = (index) => {
    setValue(index)
  }

  useEffect(() => {
    // var paramId = props.match.params.id
    const projectId = queryParam("id")

    // alert(paramId)
    DispatchmerchantProfile(projectId)
    DispatchServiceMenu()
  }, [value])

  return (
    <React.Fragment>
      <div className="container p-6">
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
              // variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="About the Merchant" {...a11yProps(0)} />
              <Tab label="Service Menu" {...a11yProps(1)} />
              <Tab label="FAQ" {...a11yProps(2)} />
              <Tab label="Reviews" {...a11yProps(3)} />
              <Tab label="Contact Merchant" {...a11yProps(4)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              {Merchant && Merchant ? (
                <About value={value} Merchant={Merchant} />
              ) : (
                <AvailableProjectsLoader />
              )}
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              {serviceMenu && serviceMenu ? (
                <ServiceMenu value={value} />
              ) : (
                <AvailableProjectsLoader />
              )}
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <FAQ value={value} />
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
              <Reviews value={value} />
            </TabPanel>
            <TabPanel value={value} index={4} dir={theme.direction}>
              <Contact value={value} />
            </TabPanel>
          </SwipeableViews>
        </div>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = createStructuredSelector({
  Merchant: makeSelectMerchants(),
  serviceMenu: makeSelectServiceMenu(),
})

const mapDispatchToProps = (dispatch) => ({
  DispatchmerchantProfile: (id) => {
    dispatch(fetchmerchantProfile(id))
  },
  DispatchServiceMenu: () => {
    dispatch(fetchServiceMenu())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
