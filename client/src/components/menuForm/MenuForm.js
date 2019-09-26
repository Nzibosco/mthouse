// import React, { Component } from "react";
// import { Input, FormBtn, FormRow, TextArea } from "../form tools/form";
// import API from "../../utils/API";

// class CustomerForm extends Component {
//     // setting a state representing customer details
//     state = {
//         menu: "",
//         name: "",
//         image: "",
//         detail: "",
//         price: "",
//     };

//     componentDidMount() {
//         this.loadMenu();
//     }

//     loadMenu = () => {
//         API.getMenu()
//             .then(res =>
//                 this.setState({ menu: res.data })
//             )
//             .catch(err => console.log(err));
//     };

//     // saveCustomer = (customerData) => {
//     //     API.saveCustomer(customerData)
//     //         .then(res => {
//     //             console.log(res);
//     //         })
//     //         .catch(err => console.log(err));
//     // };

//     // handleInputChange = event => {
//     //     const { name, value } = event.target;
//     //     this.setState({
//     //         [name]: value
//     //     });
//     // };

//     // handleFormSubmit = event => {
//     //     event.preventDefault();
//     //     if (this.state.firstname && this.state.lastname && this.state.email && this.state.address) {
//     //         API.saveCustomer({
//     //             firstname: this.state.firstname,
//     //             lastname: this.state.lastname,
//     //             email: this.state.email,
//     //             address: this.state.address,
//     //             phone: this.state.phone
//     //         })
//     //             .then(res => {
//     //                 this.loadCustomers();
//     //                 this.setState({
//     //                     firstname: "",
//     //                     lastname: "",
//     //                     email: "",
//     //                     address: "",
//     //                     phone: ""
//     //                 });
//     //                 console.log(res)})
//     //             .catch(err => console.log(err));
//     //     }
//     // };

//     render() {
//         return (
//             <div className="container menu">
//                 {this.state.menu.map(dish => (
//                     <div className = "card" key = {dish.id}>
//                         <div className = "card-body">
//                             <h1 className = "card-title">{dish.name}</h1>
//                             <p>{dish.detail}</p>
//                             <h1>${dish.price}</h1>
//                             <TextArea labeltext = "Add notes"></TextArea>
//                             <FormBtn>Order</FormBtn>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         );
//     }
// }

// export default CustomerForm;