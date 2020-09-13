import React from "react";
import Dashboard from "./Dashboard";
import Header from "../header/header";
import Footer from "../footer/footer";
import { connect } from "react-redux";
import FlashMessage from "../../shared/FlashMessagesList";

function Index(props) {
  return (
    <React.Fragment>
      <Header />
      <Dashboard />
		  <FlashMessage />
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