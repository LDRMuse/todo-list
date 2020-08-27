import React from "react"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import { TodoList, Home, Login } from "./components"

import "./App.scss"

export const App = () => {
  return (
    <Router>
      <Route exact={true} path="/">
        <Home />
      </Route>
      <Switch>
        <Route exact={true} path="/login">
          <Login />
        </Route>
      </Switch>


      <Switch>
        <Route exact path="/todolist">
                {/* TODO: Move this behind 'login' system. */}
      <TodoList />
        </Route>
      </Switch>
    </Router>

  )
}
