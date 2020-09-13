import React from "react"
import { connect } from "react-redux"

import Profile from "./profile"
import Header from "../../header/header"
import Footer from "../../footer/footer"
import { redirectToClient } from "../../../../utils"
// import FlashMessage from "../../../shared/FlashMessages";

export const MerchantProfile = (props) => {
  React.useEffect(() => {
    redirectToClient(props)
  }, [props])

  return (
    <React.Fragment>
      <Header />
      <Profile />
      <Footer />
    </React.Fragment>
  )
}

const mapStateToProps = ({ login, flashMessages }) => {
  return { login, flashMessages }
}

export default connect(mapStateToProps)(MerchantProfile)
