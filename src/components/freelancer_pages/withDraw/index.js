import React from "react";
import WithDraw from "./withDraw";
import Header from "../header/header";
import Footer from "../footer/footer";

export default function Index() {
  return (
    <React.Fragment>
      <Header />
      <WithDraw />
      <Footer />
    </React.Fragment>
  );
}
