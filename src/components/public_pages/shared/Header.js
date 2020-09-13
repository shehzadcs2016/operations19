import React from "react";
import { Link, NavLink  } from "react-router-dom";
import Dropdown from "@material-ui/icons/ArrowDropDown";
const Header = (props) => {
  const pathname = window.location.pathname.replace("/", "")
  console.log("window.location.pathname", pathname)

  const link =
    pathname === "freelance-signup" ? (
      <Link className="nav-link   px-0" to="clients-signup">
        Apply Client
      </Link>
    ) : (
      <Link className="nav-link   px-0" to="freelance-signup">
        Apply Freelancer
      </Link>
    )

  return (
    <header className="index-nav fixed-it d-flex px-0 pt-md-2 pt-0 sticky-top">
      <div className="container">
        <div className="row ">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg mb-md-2 mb-0 pr-0">
              <div className="navbar-brand d-none d-xl-block pt-3">
                <Link to="/">
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
                <ul className="navbar-nav ml-auto border_right">
                  {/* <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/"
                      activeClassName="active"
                      exact={true} 
                    >
                      Home
                    </NavLink>
                  </li> */}
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      exact={true}
                      to="/top-rated"
                      activeClassName="active"
                    >
                      Top-Rated Professionals
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link"
                      to=" #about"
                      activeClassName="active"
                      exact={true}
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      id="navbarDropdownMenuLink"
                      style={{ display: "inline-flex" }}
                    >
                      About
                      <Dropdown />
                    </NavLink>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <NavLink
                        class="dropdown-item"
                        exact={true}
                        to="/about-us"
                        activeClassName="active"
                      >
                        About Us
                      </NavLink>
                      <NavLink
                        class="dropdown-item"
                        exact={true}
                        to="/how-it-works-for-clients"
                        activeClassName="active"
                      >
                        How It works for Clients
                      </NavLink>
                      <NavLink
                        class="dropdown-item"
                        exact={true}
                        to="/how-it-works-for-professionals"
                        activeClassName="active"
                      >
                        How It works for Professionals
                      </NavLink>
                      <NavLink
                        class="dropdown-item"
                        exact={true}
                        to="/available-services"
                        activeClassName="active"
                      >
                        Available Services
                      </NavLink>
                      <NavLink
                        class="dropdown-item"
                        exact={true}
                        to="/solutions"
                        activeClassName="active"
                      >
                        Solutions
                      </NavLink>

                      <NavLink
                        class="dropdown-item"
                        exact={true}
                        to="/Book-services"
                        activeClassName="active"
                      >
                        Book Services
                      </NavLink>
                    </div>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="apply-as-pro"
                      activeClassName="active"
                      exact={true}
                    >
                      Apply as A Pro
                    </NavLink>
                  </li>
                  {/* <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link"
                      to=" #blog"
                      activeClassName="active"
                      exact={true}
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      id="navbarDropdownMenuLink"
                      style={{ display: "inline-flex" }}
                    >
                      Blog
                      <Dropdown />
                    </NavLink>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <NavLink
                        class="dropdown-item"
                        exact={true}
                        to="/blog"
                        activeClassName="active"
                      >
                        Blog
                      </NavLink>
                      <NavLink
                        class="dropdown-item"
                        exact={true}
                        to="/blog-overview"
                        activeClassName="active"
                      >
                        Blog Overview
                      </NavLink>
                    </div>
                  </li> */}
                  <li className="nav-item ">
                    <NavLink
                      className="nav-link"
                      to=" #"
                      exact={true}
                      activeClassName="active"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Post a Service Request
                    </NavLink>
                  </li>
                </ul>
                <ul class="navbar-nav">
                  {/* <li className=" nav-item  ">{link}</li> */}
                  <li className=" nav-item ">
                    <NavLink
                      className="nav-link login_nav_btn"
                      exact={true}
                      to="/login"
                      activeClassName="active"
                    >
                      Log In
                    </NavLink>
                  </li>
                  {/* <li className=" nav-item ">
                    <NavLink
                      className="nav-link signup_nav_btn"
                      exact={true}
                      to="/login"
                      activeClassName="active"
                    >
                      Sign Up
                    </NavLink>
                  </li> */}
                  <a class="fm_custom_btn landing signup_nav_btn" href="#">Sign Up</a>
                </ul>
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

export default Header
