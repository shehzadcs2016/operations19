import React, { useState, useEffect } from "react"
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
import { createStructuredSelector } from "reselect"
import { fetchPausedByRequests, requestHold } from "../actions"
import { makeSelectPausedByClient } from "../selectors"
import { connect } from "react-redux"
import AvailableProjectsLoader from "../loaders"
import Paused from "./SinglePausedByClient"
function PausedByClient({
  paused,
  availablePausedBYClient,
  value,
  dispatchHoldRequest,
}) {
  useEffect(() => {
    availablePausedBYClient()
  }, [value])
  const OnHold = (id) => {
    dispatchHoldRequest({ id: id })
  }
  return (
    <React.Fragment>
      {paused.length > 0 ? (
        paused.map((paused) => (
          <Paused client={paused} onHoldRequest={() => OnHold(paused.id)} />
        ))
      ) : (
        <AvailableProjectsLoader />
      )}
    </React.Fragment>
  )
}
const mapStateToProps = createStructuredSelector({
  paused: makeSelectPausedByClient(),
})

const mapDispatchToProps = (dispatch) => ({
  availablePausedBYClient: () => {
    dispatch(fetchPausedByRequests())
  },
  dispatchHoldRequest: (payload) => {
    dispatch(requestHold(payload))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(PausedByClient)
