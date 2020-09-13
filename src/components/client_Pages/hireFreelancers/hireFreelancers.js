import React, { useEffect } from "react"
import HelpIcon from "@material-ui/icons/Help"
import PropTypes from "prop-types"
import SwipeableViews from "react-swipeable-views"
import { Link } from "react-router-dom"
import { useTheme } from "@material-ui/core/styles"
import "./stylesheet.css"
import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"
import PausedFreelancer from "./components/PauseFreelancer"
import ActiveFreelancer from "./components/ActiveFreelancer"
import CustomModal from "../../shared/modal"
import shortid from "shortid"
import {
  Box,
  Typography,
  Tab,
  Tabs,
  AppBar,
  Button,
  Avatar,
} from "@material-ui/core"
import { fetchActiveFreelancer } from "./actions"
import { makeSelectFreelancerActive } from "./selectors"
import { Card, CardBody, CardFooter } from "reactstrap"
import { Popover, Textfield, SelectMenu } from "../../shared/formComponents"

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

export const HireFreelancer = ({ DispatchActiveFreelancers }) => {
  const theme = useTheme()
  const [value, setValue] = React.useState(0)
  useEffect(() => {
    DispatchActiveFreelancers()
  }, [value])
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeIndex = (index) => {
    setValue(index)
  }

  return (
    <React.Fragment>
      <div className="container mt-5 pt-5">
        <div className="px-4">
          <h3 className="h3">
            <strong className="text-color ">Your hires</strong>
            <Button id="Popover1" type="button">
              <HelpIcon />
            </Button>
            <Popover target="Popover1" title="Manage your hires">
              <p>
                View and manage all of the virtual assistants, freelancers, and
                agencies that you've hired. Set weekly hour limits, pause work,
                and view contact information.
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
              // variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Active" {...a11yProps(0)} />
              <Tab label="Pause" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <ActiveFreelancer value={value} />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <PausedFreelancer value={value} />
            </TabPanel>
          </SwipeableViews>
        </div>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = createStructuredSelector({
  ActiveFreelancer: makeSelectFreelancerActive(),
})

const mapDispatchToProps = (dispatch) => ({
  DispatchActiveFreelancers: () => {
    dispatch(fetchActiveFreelancer())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(HireFreelancer)
