import React from "react"
import { FormControl, Select, MenuItem } from "@material-ui/core"
import FormHelperText from "@material-ui/core/FormHelperText"

export const CustomSelect = (props) => {
  const options = props.options || []
  const isRequired = props.required || false
  const countries = props.cr || false
  const selectErr = {}
  const labelErr = {}
  if (props.error) {
    selectErr.border = "1px solid red"
    selectErr.color = "red"
    // { border: "1px solid red", color: "red" }
    labelErr.color = "red"
  }

  return (
    <FormControl variant="outlined" className="w-100 pb-2">
      <Select
        style={selectErr}
        label={props.label}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
        onBlur={props.onBlur}
        MenuProps={{
          disableScrollLock: true,
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((option) => {
          return (
            <MenuItem
              className="text-capitalize"
              key={option.id}
              value={countries ? option.id : option.name}
            className="text-capitalize">
              {option.name}
            </MenuItem>
          )
        })}
      </Select>
      {props.error && (
        <FormHelperText error={true}>{props.error}</FormHelperText>
      )}
    </FormControl>
  )
}

export default CustomSelect
