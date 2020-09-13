import React from "react";
import { connect } from "react-redux";

import Profile from "./Profile";
import Services from "./Services";
import PhoneCall from "./PhoneCall";
import Footer from "../shared/Footer";
import HowItwork from "./HowItwork";
import Aboutus from "./Aboutus";
import Header from "../shared/Header";
import Hero from "./Hero";
import Seen from "./SeenOn";
import AsSeenOn from "./AsSeenOn";
import InDemandServices from "./InDemandServices";
import addFlashMessage from "../../../Redux/actions/flashMessages";

import FlashMessage from "../../shared/FlashMessagesList";

const Home = (props) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Header />
      <FlashMessage />
      <Hero />
      <Seen />
      <Aboutus />
      <HowItwork />
      <AsSeenOn />  
      <InDemandServices/>
      {/* <Profile />  
      <PhoneCall />
      <Services /> */}
      <Footer />
    </React.Fragment>
  );
};

const mapStateToProps = ({ login, flashMessages }) => {
  return { login, flashMessages };
};
export default connect(mapStateToProps, { addFlashMessage })(Home);
// export default Home;
