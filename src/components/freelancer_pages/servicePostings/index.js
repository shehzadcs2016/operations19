import React from "react";
import ServicePosting from "./servicePosting";
import Header from "../header/header";
import Footer from "../footer/footer";
import FlashMessage from "../../shared/FlashMessagesList"

export default function Index() {
  return (
    <React.Fragment>
      <Header />
      <ServicePosting />
      <FlashMessage/>
      <Footer />
    </React.Fragment>
  );
}
