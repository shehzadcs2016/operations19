import React from "react";
import { Avatar, Button } from "@material-ui/core"
import { Card, CardHeader, CardBody } from "reactstrap"
import StarRatingComponent from "react-star-rating-component"
import { getFormatedDate } from "../../../../utils"


const accountSecurityTab = (props) => {
    return(
        <>
            <div className="row pb-3 px-3">
              <div className="offset-xl-2 col-xl-8 pb-3 p-3 bg-white">
                <div className="col-md-12 pb-3">
                    <h4 className="h5 font-weight-bold">Account Security</h4>
                </div>
               </div>
            
            </div>
        </>
    )
}

export default accountSecurityTab;