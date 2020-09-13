import React, { useEffect, useState } from "react"
import { Card, CardBody } from "reactstrap"
import {
  Box,
  Typography,
  Tab,
  Tabs,
  AppBar,
  Button,
  Avatar,
} from "@material-ui/core"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { makeSelectPutOnHoldClient } from "../selectors"
import SinglePutOnHold from "./SinglePutOnHold"
import { fetchholdRequests, requestActivated } from "../actions"
import AvailableProjectsLoader from "../loaders"

function PutOnHold({
  dispatchFetchHoldRequest,
  hold,
  dispatchReactivateRequest,
}) {
  useEffect(() => {
    dispatchFetchHoldRequest()
  }, [])
  const onReactivate = (id) => {
    dispatchReactivateRequest({ id: id })
  }
  return (
    <React.Fragment>
      {hold.length > 0 ? (
        hold.map((hold) => (
          <SinglePutOnHold
            hold={hold}
            onReactivate={() => onReactivate(hold.id)}
          />
        ))
      ) : (
        <AvailableProjectsLoader />
      )}
    </React.Fragment>
  )
}

const mapStateToProps = createStructuredSelector({
  hold: makeSelectPutOnHoldClient(),
})
const mapDispatchToProps = (dispatch) => ({
  dispatchFetchHoldRequest: () => {
    dispatch(fetchholdRequests())
  },
  dispatchReactivateRequest: (id) => {
    dispatch(requestActivated(id))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(PutOnHold)
