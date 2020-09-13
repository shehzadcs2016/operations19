import React from "react";
import {
  OutlinedInput,
  InputAdornment,
  IconButton,
  InputLabel,
  FormControl
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

export const MaskedInput = props => {
  const { title, formData } = props;

  const value =
    title.toLowerCase() === "password"
      ? formData.password
      : formData.confirmPassword;
  const name =
    title.toLowerCase() === "password" ? "password" : "confirmPassword";
  const onclick =
    title.toLowerCase() === "password"
      ? props.showPassword
      : props.showConfirmPassword;

  return (
    <React.Fragment>
      <FormControl className="w-100 pb-2" variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">
          {props.title}
        </InputLabel>
        <OutlinedInput
          type={formData.showPassword ? "text" : "password"}
          value={value}
          onChange={props.formChangeHandler}
          name={name}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={onclick}
                onMouseDown={props.handleMouseDownPassword}
                edge="end"
              >
                {formData.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
        />
      </FormControl>
    </React.Fragment>
  );
};

export default MaskedInput;
