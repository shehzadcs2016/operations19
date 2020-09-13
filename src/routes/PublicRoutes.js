import React from "react"
import { Route } from "react-router-dom"

class PublicRoutes extends React.Component {
  constructor(props) {
    super(props)
    this.createRef = this.createRef.bind(this)
  }

  createRef(element) {
    // console.log(element);
  }

  render() {
    return (
      <div key="auth">
        <div className="auth-container" ref={this.createRef}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

const AuthLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <PublicRoutes {...matchProps}>
          <Component {...matchProps} />
        </PublicRoutes>
      )}
    />
  )
}

export default AuthLayoutRoute
