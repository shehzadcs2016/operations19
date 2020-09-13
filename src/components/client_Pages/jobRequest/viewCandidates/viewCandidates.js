import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { connect } from 'react-redux';
import { withRouter, Redirect } from "react-router";
import { createStructuredSelector } from 'reselect';
import { useTheme } from "@material-ui/core/styles";
import { Tab, Tabs,AppBar } from "@material-ui/core";
import ReviewCandidatesTab from './components/Tabs/reviewCandidatesTab';
import NotHiredTab from './components/Tabs/notHiredTab';
import HiredTab from './components/Tabs/hiredTab';
import EditJobRequestTab from './components/Tabs/editJobRequestTab';
import ContactModal from './components/Models/contactModal';
import NegotiateRateModal from './components/Models/negotiateRateModal';
import PassOptionModal from './components/Models/passOptionModal';
import HourlyRateModal from './components/Models/hourlyRateModal';
import CloseRequestModal from './components/Models/closeRequestModal';
import HiringTips from './components/hiringTips';
import ContactUs from './components/contactUs';
import TabPanel from './components/tabPanel';
import PageHeading from './components/pageHeading';
import { fetchCandidates, hireAtHourlyRate } from '../actions';
import { makeSelectNotHiredCandidated, makeSelectHiredCandidated,
         makeSelectDidNotHireCandidated, makeSelectCandidates } from '../selectors';


TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export const ViewCandidates = ({
  dispatchFetchCandidates,
  dispatchHireAtHourlyRate,
  notHiredCandidates,
  hiredCandidates,
  didNotHireCandidates,
  candidates,
  location,
  match
  }) => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const [modalContact, setModalContact] = React.useState(false);
  const [modalNegotiateRate, setModalNegotiateRate] = React.useState(false);
  const [modalPassOption, setModalPassOption] = React.useState(false);
  const [modalHourlyRate, setModalHourlyRate] = React.useState(false);
  const [modalCloseRequest, setModalCloseRequest] = React.useState(false);
  const [selectedCandidate, setSelectedCandidate] = React.useState(null);
  const [requestTitle, setRequestTitle] = React.useState('');
  const [ticketId, setTicketId] = React.useState('');
  const [targetCandidate, setTargetCandidate] = React.useState(null);

  React.useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    const params = new URLSearchParams(location.search);
    setRequestTitle(params.get('title'));
    setTicketId(params.get('ticketId'));
    dispatchFetchCandidates({
      ticketId: params.get('ticketId')
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const contactTogglModal = (id) => {
    setModalContact(!modalContact);
    setSelectedCandidate(
      filterCandidates(id)
    );
  };
  const filterCandidates = (id) => {
    let filteredCandidate = null
    console.log("candidates to be filtered are ", candidates, id)
    candidates.forEach((candidate) => {
      if(candidate.user.id === id){
        filteredCandidate =  candidate;
      }
    })
    console.log("filtered is ====>>>", filteredCandidate)
    return filteredCandidate;
  }
  const negotiateRateTogglModal = () => {
    setModalNegotiateRate(!modalNegotiateRate);
  };
  const passOptionTogglModal = () => {
    setModalPassOption(!modalPassOption);
  };
  const hourlyRateTogglModal = (candidateDetails) => {
    candidateDetails['client_project_id'] = ticketId;
    candidateDetails['project_title'] = requestTitle;
    setModalHourlyRate(!modalHourlyRate);
    setTargetCandidate(candidateDetails);
  };
  const closeRequestTogglModal = () => {
    setModalCloseRequest(!modalCloseRequest);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onHireAtHourlyRate = () => {
    dispatchHireAtHourlyRate(targetCandidate);
    setModalHourlyRate(!modalHourlyRate);
  }

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  if(requestTitle===null || ticketId === null){
    return <Redirect to='/clients-dashboard'/>
  }
  console.log("notHiredCandidates hire555655", notHiredCandidates)
  return (
    <React.Fragment>
      <ContactModal modal={modalContact} toggleModal={contactTogglModal}
      selectedCandidate={selectedCandidate}
      />
      <NegotiateRateModal
        modal={modalNegotiateRate}
        toggleModal={negotiateRateTogglModal}
      />
      <PassOptionModal
        modal={modalPassOption}
        toggleModal={passOptionTogglModal}
      />
      <HourlyRateModal
        modal={modalHourlyRate}
        toggleModal={hourlyRateTogglModal}
        selectedCandidate={targetCandidate}
        onHireCandidate = {onHireAtHourlyRate}
      />
      <CloseRequestModal
        modal={modalCloseRequest}
        toggleModal={closeRequestTogglModal}
      />
      <div className="container mt-5 pt-5 px-2">
        {/* <div className="offset-xl-2 col-xl-8 px-0"> */}
        <PageHeading heading={`${requestTitle}`}/>

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
              <Tab label="Review Candidates" {...a11yProps(0)} />
              <Tab label="Did not hire" {...a11yProps(1)} />
              <Tab label="Hired" {...a11yProps(2)} />
              <Tab label="Edit Job Request" {...a11yProps(3)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}>
              
            <ReviewCandidatesTab value={value} index={0} dir={theme.direction} contactTogglModal={contactTogglModal}
            candidates={notHiredCandidates}
            negotiateRateTogglModal={negotiateRateTogglModal}
            passOptionTogglModal={passOptionTogglModal}
            hourlyRateTogglModal={hourlyRateTogglModal} />

            <NotHiredTab value={value} index={1} dir={theme.direction} contactTogglModal={contactTogglModal}
            candidates={didNotHireCandidates}
            negotiateRateTogglModal={negotiateRateTogglModal}
            passOptionTogglModal={passOptionTogglModal}
            hourlyRateTogglModal={hourlyRateTogglModal} />

            <HiredTab value={value} index={2} dir={theme.direction} contactTogglModal={contactTogglModal} 
            candidates={hiredCandidates}
            />
            
            <EditJobRequestTab value={value} id={ticketId} index={3} dir={theme.direction}
            closeRequestTogglModal={closeRequestTogglModal} />
            
          </SwipeableViews>
        </div>
        <div className="row mx-0 px-2">
          <HiringTips/>
          <ContactUs />
        </div>
      </div>
      {/* </div> */}
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  notHiredCandidates: makeSelectNotHiredCandidated(),
  hiredCandidates: makeSelectHiredCandidated(),
  didNotHireCandidates: makeSelectDidNotHireCandidated(),
  candidates: makeSelectCandidates()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatchFetchCandidates: (paylaod) => dispatch(fetchCandidates(paylaod)),
    dispatchHireAtHourlyRate: (payload) => dispatch(hireAtHourlyRate(payload))
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewCandidates));