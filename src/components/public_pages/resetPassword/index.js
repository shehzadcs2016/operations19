import React from "react";
import { connect } from "react-redux";
// import Header from "../shared/Header";
import ResetPwdBody from "./ResetPwdBody";

export const ResetPassword = (props) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
       <div className="w3layouts-main">  
        <div className="bg-layer">
          {/* <Header /> */}
          <ResetPwdBody />
        </div>
      </div>
    </React.Fragment>
  );
};

export default connect(null)(ResetPassword);
