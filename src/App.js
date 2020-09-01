import React from "react"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import { TodoList, Home, Login, Header, Footer, Four04 } from "./components"

import "./App.scss"

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>

        <Route exact={true} path="/login">
          <Header />
          <Login />
        </Route>

        <Route exact path="/todolist">
          <TodoList />
        </Route>
      </Switch>

      <Route>
        <Header />
        <Four04 />
      </Route>
      <Footer />
    </Router>

  )
}
