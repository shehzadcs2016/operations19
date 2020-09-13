import React from "react"
import Settings from "./accountSetting"
import Header from "../header/header"
import Footer from "../footer/footer"
import FlashMessage from "../../shared/FlashMessagesList"

export default function Index() {
  return (
    <React.Fragment>
      <Header />
      <Settings />
      <FlashMessage />
      <Footer />
    </React.Fragment>
  )
}
