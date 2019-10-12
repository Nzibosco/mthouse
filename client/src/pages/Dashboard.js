// To highlight measure info such as: 
// total contribution so far 
// fines
// number of months contributed so far
// Loans taken 
// Interests paid so far 
// ... and to do the same for the mt house in general. 

import React from "react";
import React, { Component } from "react";
import {Link} from "react-router-dom";
import ReactDOM from "react-dom";
import { Route, Redirect } from "react-router";
import { Input, FormBtn, FormRow, TextArea } from "../components/form tools/form";
import API from "../utils/memberAPI/API"; 

class Dashboard extends Component {

    state = {};

    render () {
        return (
            <div className = "container">
                <div className = "row">
                    <div className = "col-md-12" id= "contribution">
                        <h1 className = "display">Rwf <span id= "totalContr">00.00</span></h1>
                        <h3 className = "display">Total revenue from member contributions, fines and loans' interests as of today on <span id = "date">...</span></h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;