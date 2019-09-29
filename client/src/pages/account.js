import React, { Component } from "react";
import { Input, FormBtn, FormRow, TextArea } from "../components/form tools/form";
import API from "../utils/memberAPI/API";

class Member extends Component {
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
        componentDidMount() {
        this.loadMembers();
    };


    loadMembers = () => {
        API.getById(1)
            .then(res =>
                this.setState({ members: res.data })
                //console.log(res.data)
            )
            .catch(err => console.log(err));
    };


    render() {
        return (
            <div className = "container menu">
                              {/* button that links to a form to add a new member */}
                              <FormBtn data-target="#add-member" type="button" style={{ borderBottom: "solid", borderColor: "green" }}><a href= "/registration">Add Member</a> <span style={{ paddingLeft: "10px" }}>+</span></FormBtn> 
            {this.state.members.length ? (
            <div>
                {this.state.members.map(member => (
                    <div className = "card">
                        <div className = "card-body">
                            <h1 className = "card-title">{member.firstName}</h1>
                            <p>{member.lastName}</p>
                            <p>{member.phone}</p>
                            {/* <TextArea labeltext = "Add notes"></TextArea> */}
                            <FormBtn>View account</FormBtn>
                        </div>
                    </div>
                ))}
            </div>
             ) : (
            <h3>No Results to Display</h3>
            )}
            </div>
        );
    }
}
export default Member;