import React from "react";
import Jumbotron from "../components/Jumbotron";

class Success extends component {
    // functions for API calls will go here
    // ..... 

    render () {
        return (
            <Jumbotron>
                <h1 className = "display"> Successfully registered</h1>
                <p className = "lead"><a href = "/account">Go to your account now</a></p>
            </Jumbotron>
        );
    }
};

export default Success;