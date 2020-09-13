import React from "react";
import BodyProfile from "./profile";
import Header from "../header/header";
import Footer from "../footer/footer";
import FlashMessage from "../../shared/FlashMessagesList";

const Profile = () => {
  return (
    <React.Fragment>
      <Header />
      <BodyProfile />
      <FlashMessage />
      <Footer />
    </React.Fragment>
  );
};

export default Profile;
