import React, { useEffect } from "react"

import { fetchOpenRequest } from "../actions"
import { makeSelectOpenServiceRequests } from "../selectors"
import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"
import SingleOpenServiceRequests from "./singleOpen"
import AvailableProjectsLoader from "../loaders"

function OpenRequests({ DispatchOpenRequests, OpenServiceRequests, value }) {
  useEffect(() => {
    DispatchOpenRequests()
  }, [value])

  return (
    <>
      {OpenServiceRequests && OpenServiceRequests.length > 0 ? (
        OpenServiceRequests.map((open) => (
          <SingleOpenServiceRequests open={open} />
        ))
      ) : (
        <AvailableProjectsLoader />
      )}
    </>
  )
}

const mapStateToProps = createStructuredSelector({
  OpenServiceRequests: makeSelectOpenServiceRequests(),
})

const mapDispatchToProps = (dispatch) => ({
  DispatchOpenRequests: () => {
    dispatch(fetchOpenRequest())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(OpenRequests)
