import React from "react";
import { capitalizeFirstLetter } from "../../../utils";
import { TextField } from "@material-ui/core";

export const Textfield = props => {
  const label = capitalizeFirstLetter(props.label || props.name);

  return (
    <TextField
      label={label}
      placeholder={label}
      variant="outlined"
      className="col-md-12 pb-2"
      onChange={props.onChange}
      name={props.name}
      {...props}
    />
  );
};

export default Textfield;
