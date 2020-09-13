import React from "react"
import { connect } from "react-redux"

import ServiceRequests from "./ServiceRequest"
import Header from "../header/header"
import Footer from "../footer/footer"
import { redirectToClient } from "../../../utils"
import FlashMessage from "../../shared/FlashMessagesList"

export const SubmitRequest = (props) => {
  React.useEffect(() => {
    redirectToClient(props)
  }, [props])

  return (
    <React.Fragment>
      <Header />
      <ServiceRequests />
      <Footer />
      <FlashMessage />
    </React.Fragment>
  )
}

const mapStateToProps = ({ login, flashMessages }) => {
  return { login, flashMessages }
}

export default connect(mapStateToProps)(SubmitRequest)
