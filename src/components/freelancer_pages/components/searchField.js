import React from "react";
import { CustomTextfield } from "../../shared/formComponents";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from '@material-ui/core/InputAdornment';

const searchField = (props)=>{
    return(
    <>
        <div className="my-3 w-100">
            <div>
                <CustomTextfield
                    name="search requests"
                    placeholder="Search"
                    value={props.searchValue}
                    onChange={(e) => {props.onSearchFieldChange(e)}}
                    required
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start" className="bg-white">
                            <SearchIcon />
                        </InputAdornment>
                        ),
                    }}
                />
                {props.buttons ?
                    <div className="lebel_group_butn"><p>Popular :</p>
                        {
                            props.buttons.map((buttonText,key)=>{
                                return (
                                    <button
                                    key={`search-buttons-${key}`}
                                    className="smart_button_REct m-2"
                                    variant="contained"
                                    color="default"
                                    onClick={()=>props.onButtonClick(buttonText)}
                                    >{buttonText}
                                    </button>
                                )
                            })
                        }
                    </div>
                : null}
            </div>
        </div>
    </>
    )
}

export default searchField;