import React from "react"
import { connect } from "react-redux"
import { Link, withRouter } from "react-router-dom"
import { Button, MenuItem, Menu, Avatar } from "@material-ui/core"

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
  console.log("menu props are ", props)
  return (
    <React.Fragment>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className="user_profile_avatar mb-1 ml-auto ml-sm-0 mr-lg-3"
      >
        <div className=" d-none d-md-block">{props.login.email || "Email"}</div>
        <div className=" d-sm-block d-md-none">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg">
            J
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
        <Link to="/freelancer-settings">
          <MenuItem onClick={handleClose}>Setting</MenuItem>
        </Link>
        <Link to="/freelancer-profile">
          <MenuItem onClick={handleClose}>Profile</MenuItem>
        </Link>
        <Link to="/freelancer-servicemenu">
          <MenuItem onClick={handleClose}>Service Menu</MenuItem>
        </Link>
        <Link to="# " onClick={props.logoutAction}>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Link>
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
