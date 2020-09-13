import React, { useEffect } from "react"

import { fetchClosedRequest } from "../actions"
import { makeSelectClosedServiceRequests } from "../selectors"
import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"
import ClosedRequest from "./SingleClosed"
import AvailableProjectsLoader from "../loaders"

function ClosedServiceRequest({
  closeServiceRequests,
  value,
  DispatchCLosedRequest,
}) {
  useEffect(() => {
    DispatchCLosedRequest()
  }, [value])

  return (
    <>
      {closeServiceRequests && closeServiceRequests.length > 0 ? (
        closeServiceRequests.map((close) => <ClosedRequest close={close} />)
      ) : (
        <AvailableProjectsLoader />
      )}
    </>
  )
}
const mapStateToProps = createStructuredSelector({
  closeServiceRequests: makeSelectClosedServiceRequests(),
})

const mapDispatchToProps = (dispatch) => ({
  DispatchCLosedRequest: () => {
    dispatch(fetchClosedRequest())
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClosedServiceRequest)
