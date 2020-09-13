import React from "react"
import { Button, MenuItem, Menu, Avatar } from "@material-ui/core"
import { Link, withRouter } from "react-router-dom"
import { connect } from "react-redux"

import { logoutAction } from "../../../../Redux/actions/logoutAction"

import "./menu.css"

function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <React.Fragment>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className="mr-xs-2 mr-sm-5 mb-1 ml-auto ml-sm-0"
      >
        <div className="text-white d-none d-md-block">
          {props.login.email || "Email"}
        </div>
        <div className=" d-sm-block d-md-none">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg">
            Avatar
          </Avatar>
        </div>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className="pr-0"
      >
        <MenuItem onClick={handleClose}>
          <Link to="/clients-manageSetting"> Setting</Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Link to="# " onClick={props.logoutAction}>
            Logout
          </Link>
        </MenuItem>
      </Menu>
    </React.Fragment>
  )
}

const mapStateToProps = ({ login, flashMessages }) => {
  return { login, flashMessages }
}

export default connect(mapStateToProps, { logoutAction })(
  withRouter(SimpleMenu)
)
