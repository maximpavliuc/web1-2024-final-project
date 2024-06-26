import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./common/header/Header"

function App() {
  return (
    <>
      <Router>
        <Header />
          <Route path='/' exact>
            <Pages/>
          </Route>
      </Router>
    </>
  )
}

export default App;
