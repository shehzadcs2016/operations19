import React from "react"
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core"
import FormHelperText from "@material-ui/core/FormHelperText"

// const styles = theme => ({
//   select: {
//       '&:before': {
//           borderColor: color,
//       },
//       '&:after': {
//           borderColor: color,
//       }
//   },
//   icon: {
//       fill: color,
//   },
// });

export const SelectMenu = (props) => {
  const options = Object.entries(props.options) || []

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
  console.log(options, "options")
  return (
    <FormControl variant="outlined" className="w-100 pb-2">
      <InputLabel style={labelErr} required={isRequired}>
        {props.label}
      </InputLabel>
      <Select
        style={selectErr}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
        onBlur={props.onBlur}
        labelWidth={props.labelWidth}
        MenuProps={{
          disableScrollLock: true,
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((option, i) => {
          return (
            <MenuItem
              key={option["1"].id}
              value={countries ? option["1"].id : option["1"].name}
            >
              {option["1"].name}
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

export default SelectMenu
