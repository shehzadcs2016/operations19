import React from "react";
import { connect } from "react-redux";

import BodyUserProfile from "./ProfileBody";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import { redirectToClient } from "../../../../utils";
import FlashMessage from "../../../shared/FlashMessagesList";

export const ManageSeting = (props) => {
  React.useEffect(() => {
    redirectToClient(props);
  }, [props]);

  return (
    <React.Fragment>
      <Header />
      <BodyUserProfile />
      <FlashMessage />
      <Footer />
    </React.Fragment>
  );
};

const mapStateToProps = ({ login, flashMessages }) => {
  return { login, flashMessages };
};

export default connect(mapStateToProps)(ManageSeting);
