import React, { useEffect } from "react"

import { fetchActiveFreelancer } from "../actions"
import { makeSelectFreelancerActive } from "../selectors"
import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"
import SingleActive from "./singleActive"
import AvailableProjectsLoader from "../loaders"

function ActiveFreelancer({
  DispatchActiveFreelancers,
  ActiveFreelancer,
  value,
}) {
  useEffect(() => {
    DispatchActiveFreelancers()
  }, [value])

  return (
    <>
      {ActiveFreelancer.length > 0 ? (
        ActiveFreelancer.map((active) => <SingleActive active={active} />)
      ) : (
        <AvailableProjectsLoader />
      )}
    </>
  )
}

const mapStateToProps = createStructuredSelector({
  ActiveFreelancer: makeSelectFreelancerActive(),
})

const mapDispatchToProps = (dispatch) => ({
  DispatchActiveFreelancers: () => {
    dispatch(fetchActiveFreelancer())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ActiveFreelancer)
