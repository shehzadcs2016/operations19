import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom"
import { routes } from "./routes"
import PrivateRoute from "./routes/PrivateRoute"
import { connect } from "react-redux"
import addFlashMessage from "./Redux/actions/flashMessages"
import shortid from "shortid"

const App = (props) => {
  return (
    <Router>
      <Switch>
        {routes.map((route) => {
          return route.ispublic ? (
            <Route
              exact
              path={route.path}
              component={withRouter(route.component)}
              key={shortid.generate()}
            />
          ) : (
            <PrivateRoute
              exact
              path={route.path}
              component={withRouter(route.component)}
              key={shortid.generate()}
            />
          )
        })}
      </Switch>
    </Router>
  )
}

export default connect(null, { addFlashMessage })(App)
