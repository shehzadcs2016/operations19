import React, { useEffect } from "react"
import HelpIcon from "@material-ui/icons/Help"
import PropTypes from "prop-types"
import SwipeableViews from "react-swipeable-views"
import { Link } from "react-router-dom"
import { useTheme } from "@material-ui/core/styles"
import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"
import { makeSelectOffers } from "../../selectors"
import { fetchClientServices } from "../../actions"
import { getFormatedDate, queryParam } from "../../../../../utils"

import AvailableProjectsLoader from "../../loaders"
import OpenFreelancer from "../../components/OpenFreelancer"
import {
  Box,
  Typography,
  Tab,
  Tabs,
  AppBar,
  Button,
  Avatar,
} from "@material-ui/core"
import { Card, CardBody, CardFooter } from "reactstrap"
import {
  Popover,
  Textfield,
  SelectMenu,
} from "../../../../shared/formComponents"
import ReviewCandidate from "./ReviewCandidates"

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

export const ManageServiceRequests = (props) => {
  const theme = useTheme()
  const [value, setValue] = React.useState(0)

  useEffect(() => {
    // var paramId = props.match.params.id
    const projectId = queryParam("id")

    // alert(paramId)
    props.DispatchReviewCandidate(projectId)
  }, [value])
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeIndex = (index) => {
    setValue(index)
  }

  return (
    <React.Fragment>
      <div className="container ">
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
              <Tab label="hired" {...a11yProps(0)} />
              <Tab label="Review Candidates" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <OpenFreelancer value={value} />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              {props.Offers && props.Offers ? (
                <ReviewCandidate Offers={props.Offers} />
              ) : (
                <AvailableProjectsLoader />
              )}
            </TabPanel>
          </SwipeableViews>
        </div>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = createStructuredSelector({
  Offers: makeSelectOffers(),
})

const mapDispatchToProps = (dispatch) => ({
  DispatchReviewCandidate: (id) => {
    dispatch(fetchClientServices(id))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageServiceRequests)
