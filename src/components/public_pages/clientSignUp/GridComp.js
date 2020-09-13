import React from "react";
import { Grid, Typography } from "@material-ui/core";

export default function GridComp(props) {
  return (
    <React.Fragment>
      <Grid item xs={6}>
        <Typography gutterBottom>{props.label}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography gutterBottom>
          {props.children}
          {props.value}
        </Typography>
      </Grid>
    </React.Fragment>
  );
}
