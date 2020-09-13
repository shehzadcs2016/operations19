import React from "react";
import Referrals from "./referrals";
import Header from "../header/header";
import Footer from "../footer/footer";

export default function Index() {
  return (
    <React.Fragment>
      <Header />
      <Referrals />
      <Footer />
    </React.Fragment>
  );
}
