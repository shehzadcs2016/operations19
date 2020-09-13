import React from "react"
import { connect } from "react-redux"

import BodyViewOffers from "./viewOffers"
import Header from "../../header/header"
import Footer from "../../footer/footer"
import { redirectToClient } from "../../../../utils"
// import FlashMessage from "../../../shared/FlashMessages";

export const ViewProfile = (props) => {
  React.useEffect(() => {
    redirectToClient(props)
  }, [props])

  return (
    <React.Fragment>
      <Header />
      <BodyViewOffers />
      <Footer />
    </React.Fragment>
  )
}

const mapStateToProps = ({ login, flashMessages }) => {
  return { login, flashMessages }
}

export default connect(mapStateToProps)(ViewProfile)
