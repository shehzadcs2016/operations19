import React from "react";
import { connect } from "react-redux";

import BodyJobRequest from "./jobRequest";
import Header from "../header/header";
import Footer from "../footer/footer";
import FlashMessage from "../../shared/FlashMessages";
import { redirectToClient } from "../../../utils";

export const JobRequest = (props) => {
  React.useEffect(() => {
    redirectToClient(props);
  }, [props]);

  return (
    <React.Fragment>
      <Header />
      <BodyJobRequest />
      {/* <FlashMessage /> */}
      <Footer />
    </React.Fragment>
  );
};

const mapStateToProps = ({ login, flashMessages }) => {
  return { login, flashMessages };
};

export default connect(mapStateToProps)(JobRequest);
