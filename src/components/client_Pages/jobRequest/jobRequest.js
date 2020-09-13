import React from "react";
import { createStructuredSelector } from 'reselect';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import HelpIcon from "@material-ui/icons/Help";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import { makeSelectOpenRequests, makeSelectClosedRequests } from '../dashboard/selectors';
import { loadRequests } from '../dashboard/actions';
import { requestOpenTicket, setTicketId } from './actions';
import Loader from './loader';

import { Box, Typography, Tab, Tabs, AppBar, Button } from "@material-ui/core";
import {
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { Popover } from "../../shared/formComponents";
import OpenRequestCard from './components/openRequestsCard';
import ClosedRequestCard from './components/closedRequestCard';
import "./stylesheet.css";

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

export const JobRequest = ({
  openRequests,
  closedRequests, 
  dispatchLoadRequests,
  dispatchRequestOpenTicket,
  dispatchSetTicketId, 
  history
}) => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [modal, setModal] = React.useState(false);

  React.useEffect(() => {
    dispatchLoadRequests();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const toggleModal = () => setModal(!modal);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const onToggleModalClick = (id) => {
    dispatchSetTicketId(id);
    toggleModal()
  }

  const onReopenTicket = () => {
    dispatchRequestOpenTicket();
  }

  const onViewCandidatesClick = (ticketid, title) => {
    history.push(`/clients-viewCandidates?ticketId=${ticketid}&title=${title}`);
  }
  console.log("open requests are ", openRequests)
  return (
    <div className="container mt-5 pt-5">
      <div className="px-4">
        <h2 className="h2">
          <strong className="text-color ">Manage your job request</strong>
          <Button id="Popover1" type="button">
            <HelpIcon />
          </Button>
          <Popover target="Popover1" title="What's next?">
            <p>View all requests that you've submitted on this page.</p>
            <p>
              As you're introduced to freelancers, click the Manage Request to
              view their information and take action on the request.
            </p>
          </Popover>
        </h2>
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
            <Tab label="Open Jobs" {...a11yProps(0)} />
            <Tab label="Closed Jobs" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            {
              openRequests.length > 0 ? openRequests.map((item) => <OpenRequestCard request={item} key={`request_${item.id}`} onViewCandidatesClick={onViewCandidatesClick}/>):<Loader />
            }
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
          {
              closedRequests.length > 0 ? closedRequests.map((item) => <ClosedRequestCard request={item} key={`request_${item.id}`} toggleModal={onToggleModalClick}/>):<div style={{textAlign:'center'}}><p>No closed Job requests</p></div>
          }
          </TabPanel>
        </SwipeableViews>
      </div>
      <div>
        <Modal isOpen={modal} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>
            Are you sure you want to reopen this ticket?
          </ModalHeader>
          <ModalBody>
            <p>By clicking this button, your ticket will be re-opened.</p>
            <Button
              variant="contained"
              style={{ backgroundColor: "#2dced4", color: "white" }}
              onClick={onReopenTicket}
            >
              Reopen Ticket
            </Button>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};


const mapStateToProps = createStructuredSelector({
  openRequests: makeSelectOpenRequests(),
  closedRequests: makeSelectClosedRequests(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatchLoadRequests: () => dispatch(loadRequests()),
    dispatchRequestOpenTicket: () => dispatch(requestOpenTicket()),
    dispatchSetTicketId: (payload) => dispatch(setTicketId(payload))
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(JobRequest));
