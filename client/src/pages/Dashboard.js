// To highlight measure info such as: 
// total contribution so far 
// fines
// number of months contributed so far
// Loans taken 
// Interests paid so far 
// ... and to do the same for the mt house in general. 

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
                    <div className="jumbotron col-md-12 text-center" id="contribution">
                        <h1 className="display">Rwf <span id="totalRevenue">00.00</span></h1>
                        <p className="display">Total revenue from member contributions, fines and loans' interests as of today on <span id="date">...</span></p>
                        <small className = "bg-dark rounded text-light"><a href="#">Click here to go to the accounting center for accurate <strong>Net Cash Balance</strong></a></small>
                    </div>
                </div>
                <div className = "row">
                    <div className = "jumbotron col-md-4 text-center">
                        <h4 className = "display">Rwf<span id= "totalContr"></span>00.00</h4>
                        <p className = "display">From members' <strong>contributions</strong></p>
                        <small><a href = "#">See full list</a></small>
                    </div>
                    <div className = "jumbotron col-md-4 text-center">
                        <h4 className = "display">Rwf<span id= "totalFine"></span>00.00</h4>
                        <p className = "display">Total <strong>Fines</strong> for late payment of monthly contribution</p>
                        <small><a href = "#">See full list</a></small>
                    </div>
                    <div className = "jumbotron col-md-4 text-center">
                        <h4 className = "display">Rwf<span id= "totalInterest"></span>00.00</h4>
                        <p className = "display"><strong>Interest</strong> collected from loans</p>
                        <small><a href = "#">See full list</a></small>
                    </div>
                </div>
                <div className = "row">
                    <div className = "jumbotron col-md-4 text-center">
                        <h4 className = "display">Rwf<span id= "totalLoans"></span>00.00</h4>
                        <p className = "display"><strong>Loans</strong> issued to members</p>
                        <small><a href = "#">See full list</a></small>
                    </div>
                    <div className = "jumbotron col-md-4 text-center">
                        <h4 className = "display">00</h4>
                        <p className = "display">MT House <strong>Members</strong> as of to date</p>
                        <small><a href = "#">See full list</a></small>
                    </div>
                    <div className = "jumbotron col-md-4 text-center">
                        <h4 className = "display">00</h4>
                        <p className = "display"><strong>Months</strong> of contributions as of to date</p>
                        <small><a href = "#">See full list</a></small>
                    </div>
                </div>
            </div>
        )
    };
}

export default Dashboard;