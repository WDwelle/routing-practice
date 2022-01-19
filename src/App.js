import './App.css';
import React from "react";
import Home from './components/Home';
import Str from './components/Str';
import { BrowserRouter, Route, Switch } from "react-router-dom";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

        <Route exact path="/home">
            <Home/>
          </Route>

          <Route exact path="/:string">
            <Str/>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
