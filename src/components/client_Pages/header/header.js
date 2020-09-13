import React from "react"
import { Link, withRouter } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import SpeedIcon from "@material-ui/icons/Speed"
import shortid from "shortid"
import { connect } from "react-redux"
import MenuIcon from "@material-ui/icons/Menu"
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  List,
  SwipeableDrawer,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core"

import Menu from "./menu/menu"
import MenuExpension from "./MenuExpension"
import { logoutAction } from "../../../Redux/actions/logoutAction"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const usStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))

const SideList = (props) => {
  const classesEx = usStyles()
  const classesDrawer = useStyles()
  const { setDrawerHandler } = props
  const yourRequestsLinks = [
    {
      id: shortid.generate(),
      title: "Submit a Request",
      link: "/clients-submitrequests",
    },
    {
      id: shortid.generate(),
      title: "Manage Your Requests",
      link: "/clients-requests",
    },
  ]
  const yourHiresLinks = [
    {
      id: shortid.generate(),
      title: "View Your Hires",
      link: "/clients-viewCandidates",
    },
    { id: shortid.generate(), title: "View Weekly Billing Chart", link: "# " },
  ]
  const billingLinks = [
    {
      id: shortid.generate(),
      title: "Manage Payments and Invoices",
      link: "# ",
    },
    { id: shortid.generate(), title: "Get Affiliate Links", link: "# " },
  ]
  const helpLinks = [
    { id: shortid.generate(), title: "Help Center", link: "# " },
    { id: shortid.generate(), title: "Contact Us", link: "# " },
  ]
  const userLinks = [
    {
      id: shortid.generate(),
      title: "Settings",
      link: "/clients-manageSetting",
    },
    { id: shortid.generate(), title: "Logout", link: "# " },
  ]

  const links = [
    {
      id: shortid.generate(),
      title: "Your Requests",
      links: yourRequestsLinks,
    },
    { id: shortid.generate(), title: "Your Hires", links: yourHiresLinks },
    { id: shortid.generate(), title: "Billing", links: billingLinks },
    { id: shortid.generate(), title: "Help", links: helpLinks },
    { id: shortid.generate(), title: "Usman Sharif", links: userLinks },
  ]

  return (
    <div
      className={classesDrawer.list}
      role="presentation"
      onKeyDown={setDrawerHandler}
    >
      <List>
        <div className={classesEx.root}>
          <Link to="/clients-dashboard" className="text-dark">
            <ListItem button onClick={setDrawerHandler}>
              <ListItemIcon>
                <SpeedIcon />
              </ListItemIcon>
              <ListItemText primary={"Dashboard"} />
            </ListItem>
          </Link>

          {links.map(({ id, title, links }) => (
            <MenuExpension
              key={id}
              title={title}
              drawerHandler={setDrawerHandler}
              links={links}
            />
          ))}
        </div>
      </List>
    </div>
  )
}

function ButtonAppBar(props) {
  const logout = async () => {
    console.log("running.....")
    props.logoutAction()
  }

  const classes = useStyles()

  const [drawer, setDrawer] = React.useState(false)

  const setDrawerHandler = () => {
    setDrawer(!drawer)
    console.log(drawer)
  }

  return (
    <React.Fragment>
      <AppBar
        position="static"
        className="p-0"
        style={{ backgroundColor: "#1886C5" }}
      >
        <div className="d-flex">
          <Toolbar className="pr-0">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={setDrawerHandler}
            >
              <MenuIcon />
            </IconButton>
            <SwipeableDrawer
              open={drawer}
              onOpen={setDrawerHandler}
              onClose={setDrawerHandler}
            >
              <SideList setDrawerHandler={setDrawerHandler} />
            </SwipeableDrawer>
          </Toolbar>

          <span className="text-center d-flex w-100">
            <Link to="">
              <Typography
                variant="h6"
                className="text-white pr-2 "
                style={{ paddingTop: "14px" }}
              >
                FreeeUp
              </Typography>
            </Link>
            <Link
              className="text-white d-none d-md-block py-3 px-3 "
              to="/clients-dashboard"
            >
              Dashboard
            </Link>
            <Link
              to="/clients-requests"
              className=" text-white d-none d-md-block py-3 px-3"
            >
              Requests
            </Link>
            <Link
              to="/clients-hireFreelancer"
              className=" text-white d-none d-md-block py-3 px-3"
            >
              Freelancers
            </Link>
            <Link
              to="/clients-service_requests"
              className=" text-white d-none d-md-block py-3 px-3"
            >
              Submit A Service Request
            </Link>
            <Link
              to="/clients-manage_service_requests"
              className=" text-white d-none d-md-block py-3 px-3"
            >
              Service Requests
            </Link>
            <Link
              className="text-white d-none d-md-block py-3 px-3"
              to="/clients-manage_merchants"
            >
              Merchants
            </Link>
            <Link to="# " className=" text-white d-none d-md-block py-3 px-3">
              Billing
            </Link>
            <Link
              to="#"
              className=" text-white d-none d-sm-block py-3 ml-auto mr-3"
            >
              Help
            </Link>
            <Menu logoutClick={logout} />
          </span>
        </div>
      </AppBar>
    </React.Fragment>
  )
}

const mapStateToProps = ({ login, flashMessages }) => {
  return { login, flashMessages }
}

export default connect(mapStateToProps, { logoutAction })(
  withRouter(ButtonAppBar)
)

// export default connect(mapStateToProps, { loginAction })(ButtonAppBar);
