import React from "react"
import { Link, withRouter, NavLink } from "react-router-dom"
import Dropdown from "@material-ui/icons/ArrowDropDown";
import { makeStyles } from "@material-ui/core/styles"
import { connect } from "react-redux"
import SpeedIcon from "@material-ui/icons/Speed"
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
import MenuIcon from "@material-ui/icons/Menu"
import Menu from "./menu/menu"
import MenuExpension from "./MenuExpension"
import shortid from "shortid"
// import Button from "@material-ui/core/Button";
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
  const projects = [
    {
      id: shortid.generate(),
      title: "View the project board",
      link: "/freelancer-projects",
    },
    {
      id: shortid.generate(),
      title: "Manage your job requests",
      link: "/freelancer-requests",
    },
  ]
  const yourClients = [
    {
      id: shortid.generate(),
      title: "View your clients",
      link: "/freelancer-clients",
    },
  ]
  const billing = [
    {
      id: shortid.generate(),
      title: "View your earnings",
      link: "/freelancer-earnings",
    },
    {
      id: shortid.generate(),
      title: "View referral earnings",
      link: "/freelancer-referrals",
    },
  ]
  const helpLinks = [
    { id: shortid.generate(), title: "Help Center", link: "# " },
    { id: shortid.generate(), title: "Contact Us", link: "# " },
  ]
  const userLinks = [
    { id: shortid.generate(), title: "Settings", link: "/freelancer-settings" },
    { id: shortid.generate(), title: "Logout", link: "/login" },
  ]

  const links = [
    { id: shortid.generate(), title: "Projects", links: projects },
    { id: shortid.generate(), title: "Your clients", links: yourClients },
    { id: shortid.generate(), title: "Billing", links: billing },
    { id: shortid.generate(), title: "Help", links: helpLinks },
    { id: shortid.generate(), title: "Settings", links: userLinks },
  ]

  return (
    <div
      className={classesDrawer.list}
      role="presentation"
      onKeyDown={setDrawerHandler}
    >
      <List>
        <div className={classesEx.root}>
          <ListItem button onClick={setDrawerHandler}>
            <ListItemIcon>
              <SpeedIcon />
            </ListItemIcon>
            <ListItemText primary={"Dashboard"} />
          </ListItem>

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
  const classes = useStyles()

  const [drawer, setDrawer] = React.useState(false)

  const setDrawerHandler = () => {
    setDrawer(!drawer)
    console.log(drawer)
  }
  const logout = async () => {
    console.log("running.....")
    props.logoutAction()
  }

  return (
    // <React.Fragment>
    //   <AppBar
    //     position="static"
    //     className="index-nav fixed-it d-flex px-0 pt-0 sticky-top dashboard_navbar"
    //     style={{ backgroundColor: "#F9F9F9" }}
    //   >
    //     <div className="container">
    //       <div className="row ">
    //         <div className="col-lg-12">
    //           <div className="d-flex">
    //             <Toolbar className="pr-0">
    //               <IconButton
    //                 edge="start"
    //                 className={classes.menuButton}
    //                 aria-label="menu"
    //                 onClick={setDrawerHandler}
    //               >
    //                 <MenuIcon />
    //               </IconButton>
    //               <SwipeableDrawer
    //                 open={drawer}
    //                 onOpen={setDrawerHandler}
    //                 onClose={setDrawerHandler}
    //               >
    //                 <SideList setDrawerHandler={setDrawerHandler} />
    //               </SwipeableDrawer>
    //             </Toolbar>

    //             <span className="text-center d-flex w-100  ">
    //               <Link to="/freelancer-dashboard">
    //                 <Typography
    //                   variant="h6"
    //                   className="  pr-2 pr-lg-5"
    //                   style={{ paddingTop: "14px" }}
    //                 >
    //                   <img
    //                     className="company_logo"
    //                     src="images/logo-black.png"
    //                     alt=""
    //                   />
    //                 </Typography>
    //               </Link>
    //               <Link
    //                 className="  navbar_anchor active d-none d-md-block py-3 px-2 px-lg-3"
    //                 to="/freelancer-dashboard"
    //               >
    //                 Dashboard
    //               </Link>

    //               <Link
    //                 to="/freelancer-requests"
    //                 className=" navbar_anchor d-none d-md-block py-3 px-2 px-lg-3"
    //               >
    //                 Service Requests
    //               </Link>
    //               <Link
    //                 to="/freelancer-clients"
    //                 className=" navbar_anchor d-none d-md-block py-3 px-2 px-lg-3"
    //               >
    //                 Clients
    //               </Link>
    //               <Link
    //                 to="/freelancer-earnings"
    //                 className=" navbar_anchor d-none d-md-block py-3 px-2 px-lg-3"
    //               >
    //                 Earnings
    //               </Link>
    //               <Link
    //                 to="/freelancer-withdraw"
    //                 className=" navbar_anchor d-none d-md-block py-3 px-2 px-lg-3"
    //               >
    //                 WithDraw
    //               </Link>

    //               <Link
    //                 to="/freelancer-service-postings"
    //                 className=" navbar_anchor d-none d-md-block py-3 px-2 px-lg-3"
    //               >
    //                 Service Postings
    //               </Link>

    //               <Link
    //                 to="/freelancer-servicemenu"
    //                 className=" navbar_anchor d-none d-md-block py-3 px-2 px-lg-3"
    //               >
    //                 Service Menu
    //               </Link>
    //               <li className="nav-item dropdown navbar_anchor d-none d-md-block py-3 px-2 px-lg-3">
    //                 <NavLink
    //                   // className="nav-link"
    //                   to=" #More"
    //                   // activeClassName="active"
    //                   // exact={true}
    //                   data-toggle="dropdown"
    //                   aria-haspopup="true"
    //                   aria-expanded="false"
    //                   id="navbarDropdownMenuLink"
    //                   style={{ display: "inline-flex" }}
    //                 >
    //                   More
    //                   <Dropdown />
    //                 </NavLink>
    //                 <div
    //                   class="dropdown-menu"
    //                   aria-labelledby="navbarDropdownMenuLink"
    //                   > 

    //                   <NavLink
    //                     class="dropdown-item"
    //                     exact={true}
    //                     to="/freelancer-projects"
    //                     activeClassName="active"
    //                   >
    //                     Projects
    //                   </NavLink>
    //                   <NavLink
    //                     class="dropdown-item"
    //                     exact={true}
    //                     to="/freelancer-referrals"
    //                     activeClassName="active"
    //                   >
    //                     Referrals
    //                   </NavLink>
    //                 </div>
    //                 </li>
    //               <Menu logoutClick={logout} />
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </AppBar>
    // </React.Fragment>
    <header className="index-nav fixed-it d-flex px-0 pt-md-2 pt-0 sticky-top">
      <div className="container">
        <div className="row ">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg mb-md-2 mb-0 pr-0">
              <div className="navbar-brand d-none d-xl-block pt-3">
                <Link to="/freelancer-dashboard">
                  <img src="images/logo-black.png" alt="" />
                </Link>
              </div>
              <button
                className="navbar-toggler mt-3"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/freelancer-dashboard"
                      activeClassName="active"
                      exact={true}
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      exact={true}
                      to="/freelancer-requests"
                      activeClassName="active"
                    >
                      Service Requests
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/freelancer-clients"
                      activeClassName="active"
                      exact={true}
                    >
                      Clients
                    </NavLink>
                  </li>
                  <li className="nav-item ">
                    <NavLink
                      className="nav-link"
                      to="/freelancer-earnings"
                      exact={true}
                      activeClassName="active"
                    // data-toggle="dropdown"
                    // aria-haspopup="true"
                    // aria-expanded="false"
                    >
                      Earnings
                    </NavLink>
                  </li>
                  <li className="nav-item ">
                    <NavLink
                      className="nav-link"
                      to="/freelancer-withdraw"
                      exact={true}
                      activeClassName="active"
                    // data-toggle="dropdown"
                    // aria-haspopup="true"
                    // aria-expanded="false"
                    >
                      WithDraw
                    </NavLink>
                  </li>
                  <li className="nav-item ">
                    <NavLink
                      className="nav-link"
                      to="/freelancer-service-postings"
                      exact={true}
                      activeClassName="active"
                    // data-toggle="dropdown"
                    // aria-haspopup="true"
                    // aria-expanded="false"
                    >
                      Service Postings
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link"
                      to=" #More"
                      activeClassName="active"
                      exact={true}
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      id="navbarDropdownMenuLink"
                      style={{ display: "inline-flex" }}
                    >
                      More
                      <Dropdown />
                    </NavLink>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >

                      <NavLink
                        class="dropdown-item"
                        exact={true}
                        to="/freelancer-projects"
                        activeClassName="active"
                      >
                        Projects
                      </NavLink>
                      <NavLink
                        class="dropdown-item"
                        exact={true}
                        to="/freelancer-referrals"
                        activeClassName="active"
                      >
                        Referrals
                      </NavLink>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="profile_logo">
                <div class="dropdown nav-item dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img className="mr-1" src="img/dispute/profile-logo.png" alt="" /> <div className="profile_name">George J.</div> <i class="fas fa-chevron-down ml-1"></i>
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {/* <a class="dropdown-item" href="#">Another action</a> */}
                    {/* <a class="dropdown-item" href="#">Something else here</a> */}
                      <NavLink
                        class="dropdown-item"
                        exact={true}
                        to="/freelancer-servicemenu"
                        activeClassName="active"
                      >
                        Account Setup
                      </NavLink>
                      <NavLink
                        class="dropdown-item"
                        exact={true}
                        to="/freelancer-settings"
                        activeClassName="active"
                      >
                        Account Settings
                      </NavLink>
                      <NavLink
                        class="dropdown-item"
                        exact={true}
                        to="# "
                        activeClassName="active"
                        onClick={props.logoutAction}
                      >
                        Logout
                      </NavLink>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* <div className="col-lg-3 col-sm-12 mt-xl-2 mt-lg-0  mt-3 d-flex ml-auto pl-0"> */}

      {/* </div> */}
    </header>
  )
}

const mapStateToProps = ({ login, flashMessages }) => {
  return { login, flashMessages }
}

export default connect(mapStateToProps, { logoutAction })(
  withRouter(ButtonAppBar)
)
