import React from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

export const PasswordField = props => {
  const error = props.error || false;
  return (
    <FormControl className="w-100 pb-2" variant="outlined">
      {props.hideLabel === true ? null
        : <InputLabel htmlFor="outlined-adornment-password" required error={error}>
        {props.label}
        </InputLabel>
      }
      <OutlinedInput
        error={error}
        type={props.show ? "text" : "password"}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        name={props.name}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={props.handleClickShowPassword}
              onMouseDown={props.handleMouseDownPassword}
              edge="end"
              tabIndex="-1"
            >
              {props.show ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        labelWidth={props.labelWidth}
      />

      {props.helperText && (
        <p style={{ color: "red", fontSize: "12px", paddingLeft: "12px" }}>
          {props.helperText}
        </p>
      )}
    </FormControl>
  );
};

export default PasswordField;
