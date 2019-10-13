import React, { Component } from "react";
import { Input, FormBtn, FormRow, TextArea } from "../components/form tools/form";
import API from "../utils/memberAPI/API";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, container, Container} from "../components/Grid";

class Account extends Component {
    // setting a state representing customer details
    state = {
        // members: [],
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
        API.getById(2) // to figure out how to insert the user id inside the getById API call
            .then(res => {
                this.setState({ 
                    // members: res.data
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    email: res.data.email,
                    phone: res.data.phone,
                    streetAddress: res.data.streetAddress,
                    city: res.data.city,
                    state: res.data.state,
                    country: res.data.country,
                    photo: res.data.photo
                 });
                console.log(res.data)
                })
            .catch(err => console.log(err));
    };


    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size = "sm-12">
                        <img src = "http://www.racemph.com/wp-content/uploads/2016/09/profile-image-placeholder.png" style = {{height: "180px", width: "200px", float: "left", clear: "both", marginRight: "20px" }}></img>
                        <br></br>
                        <div id = "details" style = {{float: "left"}}>
                            <h5>{this.state.firstName} {this.state.lastName}</h5>
                            <p>Phone: {this.state.phone}</p>
                            <p>Email: {this.state.email}</p>
                            <p>City: {this.state.city}</p> 
                            <br/>
                            <a class="btn btn-primary" href="#" role="button"><strong>Edit Your Profile</strong></a>
                        </div>
                        
                    </Col>
                    
                </Row>
               <hr/>
                

            </Container>

            // <div className = "container menu">
            //                   {/* button that links to a form to add a new member */}
            //                   <FormBtn data-target="#add-member" type="button" style={{ borderBottom: "solid", borderColor: "green" }}><a href= "/registration">Add Member</a> <span style={{ paddingLeft: "10px" }}>+</span></FormBtn> 
            // {this.state.members.length ? (
            // <div>
            //     {this.state.members.map(member => (
            //         <div className = "card">
            //             <div className = "card-body">
            //                 <h1 className = "card-title">{member.firstName}</h1>
            //                 <p>{member.lastName}</p>
            //                 <p>{member.phone}</p>
            //                 {/* <TextArea labeltext = "Add notes"></TextArea> */}
            //                 <FormBtn>View account</FormBtn>
            //             </div>
            //         </div>
            //     ))}
            // </div>
            //  ) : (
            // <h3>No Results to Display</h3>
            // )}
            // </div>
        );
    }
}
export default Account;