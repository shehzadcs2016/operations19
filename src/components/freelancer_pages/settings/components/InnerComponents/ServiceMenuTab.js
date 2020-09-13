import React, { useState, useEffect } from "react"

import HelpIcon from "@material-ui/icons/Help"
import PropTypes from "prop-types"
import SwipeableViews from "react-swipeable-views"
import { useTheme } from "@material-ui/core/styles"
import { Box, Typography, Tab, Tabs, AppBar, Button } from "@material-ui/core"

import ServiceMenu from "./ServiceMenu"
import ServiceProposal from "./ServiceProposal"
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

function ServiceTab({
  handleChange,
  formData,
  responseData,
  frquency_options,
  categories,setFormData,
  selectMenuHandler,
  Service_type_options,
  sub_categories,validateServiceName
}) {
  const theme = useTheme()
  const [value, setValue] = React.useState(0)

  const [menu, setmenu] = useState(false)
  const [proposalmenu, setproposalmenu] = useState(false)

  const handleMenu = () => {
    setmenu(!menu)
  }
  const handleproposal = () => {
    setproposalmenu(!proposalmenu)
  }
  const handleTab = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeIndex = (index) => {
    setValue(index)
  }
  console.log(formData, "milestoneData")

  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-md-8 col-sm-10 col-xs-6">
          <p>
            Add all of your available services to your service menu.Clients will
            be able to browse and make purchases directly from you
          </p>
        </div>
        <div className="col-lg-6 col-md-4 col-sm-2 col-xs-6 text-right">
          {value === 0 ? (
            <Button
              type="button"
              class="btn service_add_btn "
              onClick={handleMenu}
            >
              Create a Service Menu
            </Button>
          ) : (
            <Button
              type="button"
              class="btn service_add_btn "
              onClick={handleproposal}
            >
              Create a Service Proposal
            </Button>
          )}
        </div>
      </div>
      <div className="container-fluid p-0 mt-4 service_menu_table_padding">
        <div className="w-100">
          <AppBar
            position="static"
            color="default"
            style={{
              boxShadow: "none",
              backgroundColor: "white",
              borderBottom: "solid 1px lightgray",
              padding: "0px",
            }}
          >
            <Tabs
              value={value}
              onChange={handleTab}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              aria-label="scrollable auto tabs example"
            >
              <Tab label="Service Menu" {...a11yProps} />
              <Tab label="Service Proposal" {...a11yProps} />
            </Tabs>
          </AppBar>

          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <>
              <TabPanel value={value} index={0} dir={theme.direction}>
                <ServiceMenu
                  formData={formData}
                  responseData={responseData}
                  menu={menu}
                  handleChange={handleChange}
                  validateServiceName={validateServiceName}
                  frquency_options={frquency_options}
                  categories={categories}
                  selectMenuHandler={selectMenuHandler}
                  sub_categories={sub_categories}
                  setFormData={setFormData}
                />
              </TabPanel>
            </>

            <TabPanel value={value} index={1} dir={theme.direction}>
              <ServiceProposal
                formData={formData}
                responseData={responseData}
                menu={proposalmenu}
                Service_type_options={Service_type_options}
                handleChange={handleChange}
                frquency_options={frquency_options}
                categories={categories}
                selectMenuHandler={selectMenuHandler}
                sub_categories={sub_categories}
                setFormData={setFormData}
              />
            </TabPanel>
          </SwipeableViews>
        </div>
      </div>
    </>
  )
}
export default ServiceTab
