import React from "react"
import { connect } from "react-redux"

import Merchants from "./merchants"
import Header from "../header/header"
import Footer from "../footer/footer"
import { redirectToClient } from "../../../utils"
import FlashMessage from "../../shared/FlashMessagesList"

export const ManageMerchants = (props) => {
  React.useEffect(() => {
    redirectToClient(props)
  }, [props])

  return (
    <React.Fragment>
      <Header />
      <Merchants />
      <Footer />
      <FlashMessage />
    </React.Fragment>
  )
}

const mapStateToProps = ({ login, flashMessages }) => {
  return { login, flashMessages }
}

export default connect(mapStateToProps)(ManageMerchants)
