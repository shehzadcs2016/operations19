import React from "react";
import Projects from "./projects";
import Header from "../header/header";
import Footer from "../footer/footer";
import FlashMessage from "../../shared/FlashMessagesList";

export default function Index() {
  return (
    <React.Fragment>
      <Header />
      <Projects />
      <FlashMessage />      
      <Footer />
    </React.Fragment>
  );
}
