import React from "react"
import { connect } from "react-redux"

import BodyHireFreelancer from "./hireFreelancers"
import Header from "../header/header"
import Footer from "../footer/footer"
import { redirectToClient } from "../../../utils"
import FlashMessage from "../../shared/FlashMessagesList"

export const HireFreelancer = (props) => {
  React.useEffect(() => {
    redirectToClient(props)
  }, [props])

  return (
    <React.Fragment>
      <Header />
      <BodyHireFreelancer />
      <FlashMessage />
      <Footer />
    </React.Fragment>
  )
}

const mapStateToProps = ({ login, flashMessages }) => {
  return { login, flashMessages }
}

export default connect(mapStateToProps)(HireFreelancer)
