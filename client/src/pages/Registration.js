import React, { Component } from "react";
import {Link} from "react-router-dom";
import ReactDOM from "react-dom";
import { Route, Redirect } from "react-router"
import { Input, FormBtn, FormRow, TextArea } from "../components/form tools/form";
import API from "../utils/memberAPI/API";
import Success from "./success"

class Registration extends Component {
    // setting a state representing customer details
    state = {
        members: [],
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        streetAddress: "",
        city: "",
        state: "",
        country: "",
        photo: ""
    };
    
    saveMember = (memberData) => {
        API.saveMember(memberData)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    success = () => {
        return (
                ReactDOM.render(<Success/>, document.getElementById("add-member"))
        )
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.firstName && this.state.lastName && this.state.email && this.state.streetAddress && this.state.phone && this.state.city) {
            API.saveMember({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                streetAddress: this.state.streetAddress,
                phone: this.state.phone,
                city: this.state.city,
                state: this.state.state,
                country: this.state.country,
                photo: this.state.photo
            })
                .then(res => {
                    this.success();
                    this.setState({
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        streetAddress: "",
                        city: "",
                        state: "",
                        country: "",
                        photo: "",
                    });
                    console.log(res)})
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div className = "jumbotron registration">

{/* form to add a new member */}
{/* send a success message after successful registration */}
<div
    id="add-member"
    className="container text center"
    ref = "add-member"
>
    <form>
            <Input name="firstName" colspecs="form-group" placeholder="your first name (required)" id="firstname" labeltext="First Name" value={this.state.firstName}
                onChange={this.handleInputChange} />
            <Input name="lastName" placeholder="your last name. ex. Habimana (required)" colspecs="form-group" id="lastname" labeltext="Last name" value={this.state.lastName}
                onChange={this.handleInputChange} />
            <Input name="email" placeholder="enter email(required)" colspecs="form-group" id="email" labeltext="Your email" type="email" value={this.state.email}
                onChange={this.handleInputChange} />
            <Input name="phone" placeholder="enter phone (required)" colspecs="form-group" id="phone" labeltext="Phone Number" type="number" value={this.state.phone}
                onChange={this.handleInputChange} />
            <Input name="streetAddress" placeholder="your street address" colspecs="form-group" id="streetaddress" labeltext="Street Address" value={this.state.streetAddress}
                onChange={this.handleInputChange} />
            <Input name="city" placeholder="enter district" colspecs="form-group" id="city" labeltext="District" value={this.state.city}
                onChange={this.handleInputChange} />
            <Input name="state" placeholder="enter province" colspecs="form-group" id="state" labeltext="Province" value={this.state.state}
                onChange={this.handleInputChange} />
            <Input name="country" placeholder="Your country" colspecs="form-group" id="country" labeltext="Your country" value={this.state.country}
                onChange={this.handleInputChange} />
            <Input name="photo" placeholder="link to your photo" colspecs="form-group" id="photo" labeltext="Link to your photo" value={this.state.photo}
                onChange={this.handleInputChange} />
        <FormBtn type="submit" btndetails={"btn btn-success"}
            disabled={!(this.state.firstName && this.state.lastName && this.state.email && this.state.streetAddress && this.state.phone && this.state.city)}
            onClick={this.handleFormSubmit}>Submit</FormBtn>
    </form>
</div>
            </div>
        );
    }
}

export default Registration;