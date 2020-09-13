import React from "react";
import Reviews from "./reviews";
import Header from "../header/header";
import Footer from "../footer/footer";
import FlashMessage from "../../shared/FlashMessagesList";


export default function Index() {
  return (
    <React.Fragment>
      <Header />
      <Reviews />
      <FlashMessage />
      <Footer />
    </React.Fragment>
  );
}
