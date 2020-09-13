import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import Checkbox from "@material-ui/core/Checkbox"
import AvailableProjectsLoader from "../../loaders"

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

export default function SimpleTable({ services }) {
  if (services.freelancer_offers && services.freelancer_offers.length > 0) {
    return (
      <TableContainer component={Paper}>
        <Table
          className={useStyles.table}
          aria-label="simple table"
          size={"small"}
        >
          <TableHead>
            <TableRow>
              <TableCell>Select</TableCell>
              <TableCell align="right">Services</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Fixed price fee</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {services.freelancer_offers[0].freelancer_service.map((service) => (
              <TableRow>
                <TableCell align="right">
                  <Checkbox />
                </TableCell>
                <TableCell align="right">{service.service_title}</TableCell>

                <TableCell align="right">{service.description}</TableCell>
                <TableCell align="right">{service.fixed_price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  } else {
    return AvailableProjectsLoader
  }
}
