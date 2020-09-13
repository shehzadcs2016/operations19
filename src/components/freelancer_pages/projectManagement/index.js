import React from "react";
import ProjectManagement from "./projectManagement";
import Header from "../header/header";
import Footer from "../footer/footer";

export default function Index() {
  return (
    <React.Fragment>
      <Header />
      <ProjectManagement />
      <Footer />
    </React.Fragment>
  );
}
