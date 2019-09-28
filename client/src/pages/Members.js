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

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.firstname && this.state.lastname && this.state.email && this.state.streetAddress && this.state.phone && this.state.city) {
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
                    this.loadMembers();
                    this.setState({
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        streetAddress: "",
                        city: "",
                        state: "",
                        country: "",
                        photo: ""
                    });
                    console.log(res)})
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div className = "container menu">
                              {/* button that toggles a form to add a new member */}
                              <FormBtn data-toggle="collapse" data-target="#add-member" type="button" style={{ borderBottom: "solid", borderColor: "green" }}>Add Member <span style={{ paddingLeft: "10px" }}>+</span></FormBtn>

{/* form to add a new member */}
<div
    id="add-member"
    className="collapse"
>
    <form>
        <FormRow>
            <Input name="firstName" colspecs="form-group col-sm-3" placeholder="your first name (required)" id="firstname" labeltext="First Name" value={this.state.firstName}
                onChange={this.handleInputChange} />
            <Input name="lastName" placeholder="your last name. ex. Habimana (required)" colspecs="form-group col-sm-3" id="lastname" labeltext="Last name" value={this.state.lastName}
                onChange={this.handleInputChange} />
            <Input name="email" placeholder="enter email(required)" colspecs="form-group col-sm-2" id="email" labeltext="Your email" type="email" value={this.state.email}
                onChange={this.handleInputChange} />
            <Input name="phone" placeholder="enter phone (required)" colspecs="form-group col-sm-2" id="phone" labeltext="Phone Number" type="number" value={this.state.phone}
                onChange={this.handleInputChange} />
            <Input name="streetAddress" placeholder="your street address" colspecs="form-group col-sm-2" id="streetaddress" labeltext="Street Address" value={this.state.streetAddress}
                onChange={this.handleInputChange} />
            <Input name="city" placeholder="enter district" colspecs="form-group col-sm-2" id="city" labeltext="District" value={this.state.city}
                onChange={this.handleInputChange} />
            <Input name="state" placeholder="enter province" colspecs="form-group col-sm-2" id="state" labeltext="Province" value={this.state.state}
                onChange={this.handleInputChange} />
            <Input name="country" placeholder="Your country" colspecs="form-group col-sm-2" id="country" labeltext="Your country" value={this.state.country}
                onChange={this.handleInputChange} />
            <Input name="photo" placeholder="link to your photo" colspecs="form-group col-sm-2" id="photo" labeltext="Link to your photo" value={this.state.photo}
                onChange={this.handleInputChange} />
        </FormRow>
        <FormBtn type="submit" btndetails={"btn btn-success"}
            disabled={!(this.state.firstname && this.state.lastname && this.state.email && this.state.streetAddress && this.state.phone && this.state.city)}
            onClick={this.handleFormSubmit}>Submit</FormBtn>
    </form>
</div>  
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
// {this.state.books.length ? (
//     <List>
//       {this.state.books.map(book => (
//         <ListItem key={book._id}>
//           <Link to={"/books/" + book._id}>
//             <strong>
//               {book.title} by {book.author}
//             </strong>
//           </Link>
//           <DeleteBtn onClick={() => this.deleteBook(book._id)} />
//         </ListItem>
//       ))}
//     </List>
//   ) : (
//     <h3>No Results to Display</h3>
//   )}

export default Menu;