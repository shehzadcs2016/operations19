import { connect } from 'react-redux';
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import SearchField from '../components/searchField';
import { createStructuredSelector } from 'reselect';
import { Box, Typography, Tab, Tabs, AppBar } from "@material-ui/core";
import {
  makeSelectActiveProjects, makeSelectRecruitingProjects,
  makeSelectHourlyRateFilter, makeSelectLocationFilter, makeSelectIsLoading
} from './selectors';
import { fetchActiveProjects, fetchRecruitingProjects, requestProject, fetchSearchResults, fetchProjectsFilterData } from './actions';
import ActiveProjects from './components/activeProjects';
import RecruitingProjects from './components/recruitingProjects';
import AvailableProjectsLoader from '../manage-requests/loaders';
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { Card, CardHeader, CardBody } from 'reactstrap';


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

export const Projects = (
  {
    dispatchFetchActiveProjects,
    dispatchFetchRecruitingProjects,
    dispatchRequestProject,
    dispatchFetchSearchResults,
    activeProjects,
    recruitingProjects,
    dispatchFetchFilterData,
    locationFilterData,
    hourlyRateFilterData,
    isLoading,
  }
) => {

  const buttons = ['Amazon', 'Shopify', 'Visual Assistant', 'Ads', 'Blog', 'SEO', "Marketing", "Ecommerce", 'Design', 'Wordpress']

  const theme = useTheme();
  const [location, setLocation] = useState("");
  const [sortByBudget, setSortByBudget] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [value, setValue] = React.useState(0);

  const handleClearFilters = () => {
    setLocation("");
    setSortByBudget("");
    getSearchResults(searchValue, "", "")
  }

  React.useEffect(() => {
    dispatchFetchActiveProjects();
    // dispatchFetchRecruitingProjects();
    dispatchFetchFilterData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
    getSearchResults(searchValue, event.target.value, sortByBudget)
  };

  const handleSortByBudgetChange = (event) => {
    setSortByBudget(event.target.value);
    getSearchResults(searchValue, location, event.target.value)
  };
  const onRequestProject = (projectId, desireRate, freelancerNote, status, feedBack) => {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>", projectId, desireRate, freelancerNote, status, feedBack)
    dispatchRequestProject({
      projectId: projectId,
      desireRate: desireRate,
      freelancerNote: freelancerNote,
      status: status,
      feedBack: feedBack,
    })
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const onSearchFieldChange = (event) => {
    console.log("Dispatching search")
    setSearchValue(event.target.value);
    getSearchResults(event.target.value, location, sortByBudget)
    // dispatchFetchSearchResults({
    //   search: event.target.value,
    //   location_id: location,
    //   hourly_rate_id: sortByBudget
    // })
  };

  const getSearchResults = (searchValue, location, sortByBudget) => {
    dispatchFetchSearchResults({
      search: searchValue,
      location_id: location,
      hourly_rate_id: sortByBudget
    })
  };

  const onButtonClick = (buttonText) => {
    setSearchValue(buttonText);
    getSearchResults(buttonText, location, sortByBudget)
  };

  return (
    <section id="Projects" className="dashboard_color">
      <div className="container">
        <div className="row">
          <div className="col-md-12 p-5 project_page_css">
            <div className="dashboard_heading">
              <h2 className="h2">
                Projects
              <Button id="Popover1">
                </Button>
              </h2>
            </div>
            <SearchField onSearchFieldChange={onSearchFieldChange}
              buttons={buttons}
              onButtonClick={onButtonClick}
              searchValue={searchValue}
              filters={true}
              locationFilterData={locationFilterData}
              hourlyRateFilterData={hourlyRateFilterData}
              location={location}
              sortByBudget={sortByBudget}
              handleLocationChange={handleLocationChange}
              handleSortByBudgetChange={handleSortByBudgetChange}
            />
            <div className="row">
              <div className="col-md-8">
                {/* {activeProjects.length > 0 ?
                  <ActiveProjects
                    activeProjects={activeProjects}
                    onRequestProject={onRequestProject}
                  />
                  : <AvailableProjectsLoader />} */}
                {isLoading === false ?
                  <ActiveProjects
                    activeProjects={activeProjects}
                    onRequestProject={onRequestProject}
                  />
                  : <AvailableProjectsLoader />}
              </div>
              {/* search filters */}
              <div className="col-md-4">
                <Card>
                  <CardHeader className="card_heading_dash">
                    <h3 className="h4 m-0 main_h"><strong>Filters</strong></h3>
                  </CardHeader>
                  <CardBody>
                    <div className="w-100 pb-3">
                      <h5 id="location-label" className="filler_heading"> Location </h5>
                      <Select
                        id="location"
                        value={location}
                        variant="outlined"
                        className="w-100"
                        onChange={handleLocationChange}
                      >
                        {locationFilterData ?
                          Object.keys(locationFilterData).map(key => {
                            return <MenuItem key={key} value={key}>{locationFilterData[key]}</MenuItem>
                          })
                          : null}
                      </Select>
                    </div>

                    <div className="w-100 pb-3">
                      <h5 className="filler_heading"> Sort by budget </h5>
                      <Select
                        className="w-100"
                        variant="outlined"
                        id="sort-by-budget"
                        value={sortByBudget}
                        onChange={handleSortByBudgetChange}
                      >
                        {hourlyRateFilterData ?
                          Object.keys(hourlyRateFilterData).map(key => {
                            return <MenuItem key={key} value={key}>{hourlyRateFilterData[key]}</MenuItem>
                          })
                          : null}
                      </Select>
                    </div>
                    <div className="w-100 text-center">
                      <button
                        className="fillter_button_side"
                        onClick={handleClearFilters}
                      >
                        Clear Filters
                      </button>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = createStructuredSelector({
  activeProjects: makeSelectActiveProjects(),
  recruitingProjects: makeSelectRecruitingProjects(),
  locationFilterData: makeSelectLocationFilter(),
  hourlyRateFilterData: makeSelectHourlyRateFilter(),
  isLoading: makeSelectIsLoading(),
});

function mapDispatchToProps(dispatch) {
  return {

    dispatchFetchRecruitingProjects: () => dispatch(fetchRecruitingProjects()),
    dispatchFetchFilterData: () => dispatch(fetchProjectsFilterData()),
    dispatchFetchActiveProjects: () => dispatch(fetchActiveProjects()),
    dispatchRequestProject: (payload) => dispatch(requestProject(payload)),
    dispatchFetchSearchResults: (payload) => dispatch(fetchSearchResults(payload))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Projects);