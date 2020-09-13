import React from "react";
import Earnings from "./earnings";
import Header from "../header/header";
import Footer from "../footer/footer";

export default function Index() {
  return (
    <React.Fragment>
      <Header />
      <Earnings />
      <Footer />
    </React.Fragment>
  );
}
