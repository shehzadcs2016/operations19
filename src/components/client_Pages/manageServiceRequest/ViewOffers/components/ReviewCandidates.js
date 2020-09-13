import React, { useEffect } from "react"
import Avatar from "../../../images/avatar.png"
import SimpleTable from "./Table"
import AvailableProjectsLoader from "../../loaders"
import { useHistory } from "react-router"
import { Box, Typography, Tab, Tabs, AppBar, Button } from "@material-ui/core"
import { Link } from "react-router-dom"

function ReviewCandidate({ Offers }) {
  const { push } = useHistory()

  return (
    <div className="row">
      {Offers && Offers ? (
        <>
          <div className="col-xl-3 col-lg-3 col-md-3 ">
            <img src={Avatar} width={50} height={50} />
            <h5>{Offers.service_title}</h5>

            <Button
              onClick={() => push(`/merchant-profile?id=${Offers.id}`)}
              // variant="contained"
              className="mt-2"
              style={{
                backgroundColor: "#2dced4",
                color: "white",
              }}
            >
              View Offers
            </Button>
            <p>Location</p>
            <p>Merchant Reviews</p>
            <p>Contact Merchant:</p>
            <p>Project Management</p>
          </div>
          <div className="col-xl-9 col-lg-9 col-md-9 ">
            <div className="row">
              <SimpleTable services={Offers} />
            </div>
          </div>
        </>
      ) : (
        <AvailableProjectsLoader />
      )}
    </div>
  )
}
export default ReviewCandidate
