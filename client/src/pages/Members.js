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
        API.getMembers()
            .then(res =>
                this.setState({ members: res.data })
                //console.log(res.data)
            )
            .catch(err => console.log(err));
    };



//     loadMenu = () => {
//         API.getMenu()
//             .then(res => {
//                 var newData = this.state.dishes.concat([res.data]);  
// this.setState({dishes: newData})
//                 // this.setState({ dishes: res, name: "", image: "", detail: "", price: ""});
//                 console.log(newData);
//             }
//             )
//             .catch(err => console.log(err));
//     };

    // saveMember = (memberData) => {
    //     API.saveMember(memberData)
    //         .then(res => {
    //             console.log(res);
    //         })
    //         .catch(err => console.log(err));
    // };

    // handleInputChange = event => {
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: value
    //     });
    // };

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     if (this.state.firstName && this.state.lastName && this.state.email && this.state.streetAddress && this.state.phone && this.state.city) {
    //         API.saveMember({
    //             firstName: this.state.firstName,
    //             lastName: this.state.lastName,
    //             email: this.state.email,
    //             streetAddress: this.state.streetAddress,
    //             phone: this.state.phone,
    //             city: this.state.city,
    //             state: this.state.state,
    //             country: this.state.country,
    //             photo: this.state.photo
    //         })
    //             .then(res => {
    //                 this.loadMembers();
    //                 this.setState({
    //                     firstName: "",
    //                     lastName: "",
    //                     email: "",
    //                     phone: "",
    //                     streetAddress: "",
    //                     city: "",
    //                     state: "",
    //                     country: "",
    //                     photo: ""
    //                 });
    //                 console.log(res)})
    //             .catch(err => console.log(err));
    //     }
    // };

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