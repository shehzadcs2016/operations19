import React from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import shortid from 'shortid'

export const Dropdown = (props) => {
    const countries = [
        { id: shortid.generate(), value: 'pakistan', title: 'Pakistan' },
        { id: shortid.generate(), value: 'united kingdon', title: 'United Kingdon' },
        { id: shortid.generate(), value: 'afghanistan', title: 'Afghanistan' },
    ]
    const labelWidth = props.labelWidth || 310;

    return (
        <FormControl required variant="outlined" className="col-md-12 pb-2">
            <InputLabel id="demo-simple-select-outlined-label" >
                {props.title}
            </InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={props.value}
                onChange={props.onChange}
                labelWidth={labelWidth}
                MenuProps={{ disableScrollLock: true }}
            >
                <MenuItem value=""><em>None</em></MenuItem>
                {countries.map(country => {
                    const { id, value, title } = country;
                    return <MenuItem key={id} value={value}>{title}</MenuItem>
                })}
            </Select>
        </FormControl>
    )
}
export default Dropdown;