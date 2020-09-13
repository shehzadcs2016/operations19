import React from "react";
import { connect } from "react-redux";

import Dashboard from "./Dashboard";
import Header from "../header/header";
import Footer from "../footer/footer";
import { redirectToClient } from "../../../utils";

function Index(props) {
  React.useEffect(() => {
    redirectToClient(props);
  }, [props]);

  return (
    <React.Fragment>
      <Header />
      <Dashboard />
      <Footer />
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    login: state.login,
    flashMessages: state.flashMessages,
  };
};

export default connect(mapStateToProps)(Index);
