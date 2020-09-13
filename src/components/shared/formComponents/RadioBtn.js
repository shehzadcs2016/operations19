import React from 'react'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, makeStyles } from '@material-ui/core'
import clsx from 'clsx'


export const useStyles = makeStyles(theme => ({
    root: {
        "&:hover": {
            backgroundColor: "transparent"
        },
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: 200
        }
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
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
            outlineOffset: 2
        },
        "input:hover ~ &": {
            backgroundColor: "#ebf1f5"
        },
        "input:disabled ~ &": {
            boxShadow: "none",
            background: "rgba(206,217,224,.5)"
        }
    },
    checkedIcon: {
        backgroundColor: "#137cbd",
        backgroundImage:
            "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
        "&:before": {
            display: "block",
            width: 16,
            height: 16,
            backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
            content: '""'
        },
        "input:hover ~ &": {
            backgroundColor: "#106ba3"
        }
    }
}));

function StyledRadio(props) {
    const classes = useStyles();

    return (
        <Radio
            className={classes.root}
            disableRipple
            color="default"
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
            {...props}
        />
    );
}


export function RadioBtn(props) {

    return (
        <FormControl component="fieldset" required>
            <FormLabel component="legend">
                {props.title || "no title"}
            </FormLabel>
            <RadioGroup>
                <FormControlLabel
                    value="Referral"
                    control={<StyledRadio />}
                    label="Referral"
                />
                <FormControlLabel
                    value="Google"
                    control={<StyledRadio />}
                    label="Google"
                />
                <FormControlLabel
                    value="Upwork"
                    control={<StyledRadio />}
                    label="Upwork"
                />
                <FormControlLabel
                    value="other"
                    control={<StyledRadio />}
                    label="Other"
                />
            </RadioGroup>
        </FormControl>
    )
}

export default RadioBtn;