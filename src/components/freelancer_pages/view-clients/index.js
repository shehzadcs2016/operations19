import React from "react"
import Clients from "./clients"
import Header from "../header/header"
import Footer from "../footer/footer"
import FlashMessage from "../../shared/FlashMessagesList"

export default function Index() {
  return (
    <React.Fragment>
      <Header />
      <Clients />
      <FlashMessage />
      <Footer />
    </React.Fragment>
  )
}
