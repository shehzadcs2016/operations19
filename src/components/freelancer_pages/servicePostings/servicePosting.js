import { connect } from 'react-redux';
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import SearchField from '../components/searchField';
import { createStructuredSelector } from 'reselect';
import { Box, Typography } from "@material-ui/core";
import { makeSelectClientAvailableServices, makeSelectSearchResult, 
  makeSelectLocationFilterData, makeSelectCategoryFilterData, makeSelectSubCategoryFilterData, makeSelectIsLoading } from './selectors';
import { fetchAvailableClientServices, requestClientService, fetchSearchResults, 
  fetchClientServicesFilterData, fetchSubCategoryFilterData } from './actions';
import ListServices from './components/listServices';
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

export const ServicePosting = (
  {
    dispatchFetchClientServicesFilterData,
    dispatchFetchAvailableClientServices,
    dispatchFetchSearchResults,
    availableClientServices,
    locationFilterData,
    categoryFilterData,
    dispatchfetchSubCategoryFilterData,
    subCategoryFilterData,
    isLoading,
  }
) => {

  const buttons = ['Amazon', 'Shopify', 'Visual Assistant', 'Ads', 'Blog', 'SEO', "Marketing", "Ecommerce", 'Design', 'Wordpress']

  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [searchValue, setSearchValue] = useState("");

  React.useEffect(() => {
    dispatchFetchAvailableClientServices();
    dispatchFetchClientServicesFilterData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  let isLoader= <AvailableProjectsLoader />;
  React.useEffect(() => {
    if (isLoading === false){
      isLoader = null
    }else if(isLoading === true){
      isLoader = <AvailableProjectsLoader />
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading])

  const handleClearFilters = () => {
    setLocation("");
    setCategory("");
    setSubCategory("");
    getSearchResults(searchValue, "", "", "")
  }

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
    getSearchResults(searchValue, category, subCategory, event.target.value)
  };
  
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    dispatchfetchSubCategoryFilterData({
      categoryId:event.target.value
    })
    getSearchResults(searchValue, event.target.value, subCategory, location)
  };

  const handleSubCategoryChange = (event) => {
    setSubCategory(event.target.value);
    getSearchResults(searchValue, category, event.target.value, location )
  };

  const onSearchFieldChange = (event) => {
    console.log("Dispatching search")
    setSearchValue(event.target.value);
    getSearchResults(event.target.value, category, subCategory, location)
  };

  const getSearchResults = (searchValue, category, subCategory, location) => {
    dispatchFetchSearchResults({
      search: searchValue,
      category_id: category,
      subcategory_id: subCategory,
      location_id: location,
    })
  };

  const onButtonClick = (buttonText) => {
    setSearchValue(buttonText);
    getSearchResults(buttonText, location, subCategory)
  };

  return (
    <section id="Projects" className="dashboard_color">
      <div className="container">
        <div className="row">
          <div className="col-md-12 p-5 project_page_css">
            <div className="dashboard_heading">
              <h2 className="h2">
                Service Postings
              <Button id="Popover1">
                </Button>
              </h2>
            </div>
            <SearchField onSearchFieldChange={onSearchFieldChange}
              buttons={buttons}
              onButtonClick={onButtonClick}
              searchValue={searchValue}
              filters={true}
              // locationFilterData={locationFilterData}
              // hourlyRateFilterData={hourlyRateFilterData}
              location={location}
              sortByBudget={subCategory}
              handleLocationChange={handleLocationChange}
              handleSortByBudgetChange={handleSubCategoryChange}
            />
            <div className="row">
              <div className="col-md-8">
                {/* {availableClientServices.length > 0 ?
                  <ListServices
                    activeProjects={availableClientServices}
                  />
                  : isLoader} */}
                {isLoading === false ?
                  <ListServices
                    activeProjects={availableClientServices}
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
                      <h5 className="filler_heading"> Category </h5>
                      <Select
                        className="w-100"
                        variant="outlined"
                        value={category}
                        onChange={handleCategoryChange}
                      >
                        {categoryFilterData ?
                          categoryFilterData.map(data => {
                            return <MenuItem key={data.id} value={data.id}>{data.category_name}</MenuItem>
                          })
                          : null}
                      </Select>
                    </div>
                    {subCategoryFilterData.length>0 ?
                      <div className="w-100 pb-3">
                        <h5 className="filler_heading"> Sub Category </h5>
                        <Select
                          className="w-100"
                          variant="outlined"
                          value={subCategory}
                          onChange={handleSubCategoryChange}
                        >
                          { subCategoryFilterData.map(data => {
                            return <MenuItem key={data.id} value={data.id}>{data.subcategory_name}</MenuItem>
                          })}
                        </Select>
                      </div>
                    : null}
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
  availableClientServices: makeSelectClientAvailableServices(),
  searchResult: makeSelectSearchResult(),
  locationFilterData: makeSelectLocationFilterData(),
  categoryFilterData: makeSelectCategoryFilterData(),
  subCategoryFilterData: makeSelectSubCategoryFilterData(),
  isLoading: makeSelectIsLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatchFetchAvailableClientServices: () => dispatch(fetchAvailableClientServices()),
    dispatchFetchClientServicesFilterData: () => dispatch(fetchClientServicesFilterData()),
    dispatchFetchSearchResults: (payload) => dispatch(fetchSearchResults(payload)),
    dispatchfetchSubCategoryFilterData: (payload) => dispatch(fetchSubCategoryFilterData(payload))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ServicePosting);