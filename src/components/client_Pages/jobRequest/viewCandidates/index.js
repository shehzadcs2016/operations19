import React from "react";
import { connect } from "react-redux";

import BodyViewCandidates from "./viewCandidates";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import { redirectToClient } from "../../../../utils";
// import FlashMessage from "../../../shared/FlashMessages";

export const ViewCandidates = (props) => {
  React.useEffect(() => {
    redirectToClient(props);
  }, [props]);

  return (
    <React.Fragment>
      <Header />
      <BodyViewCandidates />
      {/* <FlashMessage /> */}
      <Footer />
    </React.Fragment>
  );
};

const mapStateToProps = ({ login, flashMessages }) => {
  return { login, flashMessages };
};

export default connect(mapStateToProps)(ViewCandidates);
