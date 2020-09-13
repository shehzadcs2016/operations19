import React from "react";
import {
  FormControlLabel,
  Checkbox,
  FormHelperText,
  FormControl,
} from "@material-ui/core";

export const CheckBox = (props) => {
  return (
    <React.Fragment>
      <FormControl error={props.error} className="mr-auto">
        <FormControlLabel
          control={
            <Checkbox
              required={props.required ? true : false}
              onChange={props.onChange}
              value={props.value}
              color="primary"
              id={props.id}
            />
          }
          label={props.label}
          className="w-100"
        />
        <FormHelperText>{props.helperText}</FormHelperText>
      </FormControl>
      <br />
    </React.Fragment>
  );
};

export default CheckBox;
