import React from "react";
import Requests from "./requests";
import Header from "../header/header";
import Footer from "../footer/footer";
import FlashMessage from "../../shared/FlashMessagesList";

export default function Index() {
  return (
    <React.Fragment>
      <Header />
      <Requests />
      <FlashMessage />
      <Footer />
    </React.Fragment>
  );
}
