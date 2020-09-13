import React from "react"
import { TextField } from "@material-ui/core"

export const CustomTextfield = (props) => {
  return (
    <TextField
      placeholder={props.placeholder}
      variant="outlined"
      type={props.type}
      className="col-md-12 pb-2"
      onChange={props.onChange}
      name={props.name}
      {...props}
    />
  )
}

export default CustomTextfield
