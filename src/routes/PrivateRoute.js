import React from "react"
import { Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = rest.login

  return (
    <Route
      {...rest}
      render={(props) => {
        return isLoggedIn ? (
          <>
            <Component {...props} />
          </>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }}
    />
  )
}

const mapStateToProps = (state) => {
  return { login: state.login }
}

export default connect(mapStateToProps)(PrivateRoute)
