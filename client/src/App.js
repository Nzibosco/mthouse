import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Nav from "./components/nav";
import Registration from "./pages/Registration";
import Account from "./pages/account";
import Success from "./pages/success";
import Dashboard from "./pages/Dashboard";
import Accounting from "./pages/Accounting";



function App() {
return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/member" component={Members} />
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/member/:id" component={Account} />
          <Route exact path = "/success" component = {Success}/>
          <Route exact path = "/dashboard" component = {Dashboard}/>
          <Route exact path = "/accounting" component = {Accounting}/>
        </Switch>
      </div>
    </Router>
   );
}

 export default App;
