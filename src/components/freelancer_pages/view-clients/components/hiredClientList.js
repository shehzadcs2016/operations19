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
import { fetchClients, requestHold, fetchViewRequests } from "../actions"
import { makeSelectAvailablehiredClient } from "../selectors"
import { connect } from "react-redux"
import AvailableProjectsLoader from "../loaders"
import HiredClient from "./SinglehiredClient"
function HiredClients({
  client,
  availableClients,
  dispatchHoldRequest,
  value,
}) {
  useEffect(() => {
    availableClients()
  }, [value])

  const OnHold = (id) => {
    dispatchHoldRequest({ id: id })
  }
  return (
    <React.Fragment>
      {client.length > 0 ? (
        client.map((client) => (
          <HiredClient
            client={client}
            onHoldRequest={() => OnHold(client.id)}
          />
        ))
      ) : (
        <AvailableProjectsLoader />
      )}
    </React.Fragment>
  )
}
const mapStateToProps = createStructuredSelector({
  client: makeSelectAvailablehiredClient(),
})

const mapDispatchToProps = (dispatch) => ({
  availableClients: () => {
    dispatch(fetchClients())
  },
  dispatchHoldRequest: (payload) => {
    dispatch(requestHold(payload))
  },
  dispatchViewRequest: (payload) => {
    dispatch(fetchViewRequests(payload))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(HiredClients)
