import React from "react"
import ServiceMenu from "./servicemenu"
import Header from "../header/header"
import Footer from "../footer/footer"
import FlashMessage from "../../shared/FlashMessagesList"

export default function Index() {
  return (
    <React.Fragment>
      <Header />
      <ServiceMenu />
      <FlashMessage />
      <Footer />
    </React.Fragment>
  )
}
