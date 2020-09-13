import React, { useState } from "react"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import SelectMenu from "../SelectMenu"
import Avatar from "../../../images/avatar.png"
import shortid from "shortid"
import { makeStyles } from "@material-ui/core/styles"
import "../App.css"
const options = [
  { id: shortid.generate(), value: "Project Completed" },
  { id: shortid.generate(), value: "Freelancers no longer needed" },
  { id: shortid.generate(), value: "others" },
]
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    maxHeight: 300,
  },
}))
export default function SideBar() {
  const classes = useStyles()
  const [reasonPause, setReason] = useState("")

  const handleReasonPause = (e) => {
    setReason(e.target.value)
  }
  return (
    <>
      <div className=" col-lg-3 col-md-3 col-sm-3 col-xl-3">
        <div className="row">
          <SelectMenu
            required
            value={reasonPause}
            onChange={handleReasonPause}
            name="pauseReason"
            label="current candidates"
            labelWidth={220}
            options={options}
          />
          {/* div1 */}
          <List className={classes.root}>
            <ListItem>
              <ListItemText>
                <div>
                  <div className="candidate row pt-2">
                    <img src={Avatar} />
                    <div className="p-2">
                      <p>shehzad ahmed</p>
                    </div>
                  </div>
                  <div className="row">
                    <p>Service Request: Amazon management</p>
                  </div>
                </div>
                {/* div2 */}
                <div>
                  <div className="candidate row pt-2">
                    <img src={Avatar} />
                    <div className="p-2">
                      <p>shehzad ahmed</p>
                    </div>
                  </div>
                  <div className="row">
                    <p>Service Request: Amazon management</p>
                  </div>
                </div>
                {/* div3 */}
                <div>
                  <div className="candidate row pt-2">
                    <img src={Avatar} />
                    <div className="p-2">
                      <p>shehzad ahmed</p>
                    </div>
                  </div>
                  <div className="row">
                    <p>Service Request: Amazon management</p>
                  </div>
                </div>
                {/* div4 */}
                <div>
                  <div className="candidate row pt-2">
                    <img src={Avatar} />
                    <div className="p-2">
                      <p>shehzad ahmed</p>
                    </div>
                  </div>
                  <div className="row">
                    <p>Service Request: Amazon management</p>
                  </div>
                </div>
                <div>
                  <div className="candidate row pt-2">
                    <img src={Avatar} />
                    <div className="p-2">
                      <p>shehzad ahmed</p>
                    </div>
                  </div>
                  <div className="row">
                    <p>Service Request: Amazon management</p>
                  </div>
                </div>
              </ListItemText>
            </ListItem>
          </List>
        </div>
      </div>{" "}
      {/* div5 */}
    </>
  )
}
