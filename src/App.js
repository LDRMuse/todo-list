import React from "react"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import { TodoList, Home, Login, Header, Footer } from "./components"

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
      </Switch>


      <Switch>
        <Route exact path="/todolist">
      <TodoList />
        </Route>
      </Switch>

      <Footer />
    </Router>

  )
}
