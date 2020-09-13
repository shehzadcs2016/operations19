import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import clsx from "clsx"
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Radio,
} from "@material-ui/core"
import shortid from "shortid"

export const RadioButton = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    icon: {
      borderRadius: "50%",
      width: 16,
      height: 16,
      boxShadow:
        "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
      backgroundColor: "#f5f8fa",
      backgroundImage:
        "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
      "$root.Mui-focusVisible &": {
        outline: "2px auto rgba(19,124,189,.6)",
        outlineOffset: 2,
      },
      "input:hover ~ &": {
        backgroundColor: "#ebf1f5",
      },
      "input:disabled ~ &": {
        boxShadow: "none",
        background: "rgba(206,217,224,.5)",
      },
    },
    checkedIcon: {
      backgroundColor: "#2954CC",
      backgroundImage:
        "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
      "&:before": {
        display: "block",
        width: 16,
        height: 16,
        backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      },
      "input:hover ~ &": {
        backgroundColor: "#2954CC",
      },
    },
  }))
  const { options } = props || []
  const required = props.required ? true : false
  function StyledRadio(props) {
    const classes = useStyles()

    return (
      <Radio
        className={classes.root}
        disableRipple
        color="default"
        checkedIcon={
          <span className={clsx(classes.icon, classes.checkedIcon)} />
        }
        icon={<span className={classes.icon} />}
        {...props}
      />
    )
  }

  return (
    <FormControl component="fieldset" required={required} className="w-100">
      <FormLabel component="legend">{props.label}</FormLabel>
      <RadioGroup
        // defaultValue={options[0].value}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
        id={props.label}
        row
      >
        {options.map((option) => {
          return (
            <FormControlLabel
              key={shortid.generate()}
              value={option.value}
              // checked={option.value ? true : false}
              control={<StyledRadio />}
              className="text-capitalize"
              label={option.label || option.value}
            />
          )
        })}
      </RadioGroup>
    </FormControl>
  )
}

export default RadioButton
