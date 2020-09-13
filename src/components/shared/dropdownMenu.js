import React from "react"
import { FormControl, Select, MenuItem } from "@material-ui/core"
import FormHelperText from "@material-ui/core/FormHelperText"

export function CustomSelect(props) {
  const options = props.options || []
  const isRequired = props.required || false
  const countries = props.cr || false
  const selectErr = {}
  const labelErr = {}
  if (props.error) {
    selectErr.border = "1px solid red"
    selectErr.color = "#061232"
    // { border: "1px solid red", color: "red" }
    labelErr.color = "#061232"
  }
console.log(options,"options")
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
              key={option.value}
              value={option.value}
              className="text-capitalize"
            >
              {option.label}
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
