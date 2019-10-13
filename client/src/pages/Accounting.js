import React, { Component } from "react";
import {Link} from "react-router-dom";
import ReactDOM from "react-dom";
import { Route, Redirect } from "react-router";
import { Input, FormBtn, FormRow, TextArea } from "../components/form tools/form";
import { Container, Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/memberAPI/API"; 

class Accounting extends Component {

    state = {};

    render () {
        return (
            <Container>
                <Jumbotron >
                    <h1 className = "display">Accounting Center</h1>
                    <FormBtn>Add Account</FormBtn> 
                    <FormBtn>Record a transaction</FormBtn>
                </Jumbotron>
                <Row>
                    <Col size = "md-6">
                        <table className="table table-striped" id = "inflows">
                            <thead>
                            <tr>
                                <th>Detail</th>
                                <th>Amount (Rwf)</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Contributions</td>
                                    <td id="contrAmount"></td>
                                </tr>
                                <tr>
                                    <td>Fines</td>
                                    <td id="fineAmount"></td>
                                </tr>
                                <tr>
                                    <td>Interest from loans</td>
                                    <td id="InterAmount"></td>
                                </tr>
                                <tr>
                                    <td>Others</td>
                                    <td id="otherAmount"></td>
                                </tr>
                                <tr>
                                    <td><strong>Total Inflows</strong></td>
                                    <td id="totalInflow"></td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>
                    <Col size = "md-6">
                        <table className="table table-striped" id = "outflows">
                            <thead>
                            <tr>
                                <th>Detail</th>
                                <th>Amount (Rwf)</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Communication</td>
                                    <td id="comAmount"></td>
                                </tr>
                                <tr>
                                    <td>Bank charges</td>
                                    <td id="bchargeAmount"></td>
                                </tr>
                                <tr>
                                    <td>transport</td>
                                    <td id="transAmount"></td>
                                </tr>
                                <tr>
                                    <td>Loan</td>
                                    <td id="loanAmount"></td>
                                </tr>
                                <tr>
                                    <td>Others</td>
                                    <td id="otherAmount"></td>
                                </tr>
                                <tr>
                                    <td><strong>Total outflows</strong></td>
                                    <td id="totalOutflow"></td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>
        )
    };
}

export default Accounting;