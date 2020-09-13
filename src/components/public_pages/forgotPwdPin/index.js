import React from "react";
import { connect } from "react-redux";
import Header from "../shared/Header";
import ForgotPwdPinBody from "./Body";
import FlashMessage from "../../shared/FlashMessagesList";

const Index = (props) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Header />
      <ForgotPwdPinBody />
      <FlashMessage />
    </React.Fragment>
  );
};

export default connect(null)(Index);
