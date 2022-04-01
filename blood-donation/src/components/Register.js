import React from 'react'
import { Form, Button} from "react-bootstrap";
import { Link } from 'react-router-dom';

export const Register = () =>

    <div class="container col-12">
        <div class="p-3 m-2 bg-secondary text-white row">
            <div class="col">

            </div>
            <div className="col-7">
                <div class="row">
                    <div class="col">
                        <h1>Registration</h1><br />
                    </div>
                </div>
                <Form>
                    <div class="row">
                        <div className="col">
                            <Form.Group className="mb-3" controlId="formBasicFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter First Name" />
                            </Form.Group>
                        </div>
                    </div>
                    <div class="row">
                        <div className="col">
                            <Form.Group className="mb-3" controlId="formBasicLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Last Name" />
                            </Form.Group>
                        </div>
                    </div>

                    <div class="row">
                        <div className="col">
                            <Form.Group className='mb-3' controlId="formGridBloodGroup" >
                                <Form.Label>Gender</Form.Label>
                                <Form.Select class="col-8" defaultValue="Choose..." >
                                    <option>Choose Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                    </div>

                    <div class="row">
                        <div className="col">
                            <Form.Group className="mb-3" controlId="formBasicAge">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="number" placeholder="Enter Age" />
                            </Form.Group>
                        </div>
                    </div>

                    <div class="row">
                        <div className="col">
                            <Form.Group className='mb-3' controlId="formGridBloodGroup" >
                                <Form.Label>Blood Group</Form.Label>
                                <Form.Select class="col-8" defaultValue="Choose..." >
                                    <option>Choose Blood Group</option>
                                    <option value="A+ve">A +ve</option>
                                    <option value="A-ve">A -ve</option>
                                    <option value="B+ve">B +ve</option>
                                    <option value="B-ve">B -ve</option>
                                    <option value="AB+ve">AB +ve</option>
                                    <option value="AB-ve">AB -ve</option>
                                    <option value="O+ve">O +ve</option>
                                    <option value="O-ve">O -ve</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                    </div>

                    <div class="row">
                        <div className="col">
                            <Form.Group className="mb-3" controlId="formBasicMobile">
                                <Form.Label>Mobile</Form.Label>
                                <Form.Control type="number" placeholder="Enter Mobile Number" />
                            </Form.Group>
                        </div>
                    </div>
                    <div class="row">
                        <div className="col">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>E-Mail</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email" />
                            </Form.Group>
                        </div>
                    </div>

                    <div class="row">
                        <div className="col-md-4">
                            <Form.Group className='m-2'>
                                <Form.Label>State</Form.Label>
                                <Form.Select>
                                    <option>Choose State</option>
                                    <option value="state1">State 1</option>
                                    <option value="state2">State 2</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                        <div className="col-md-4">
                            <Form.Group className='m-2'>
                                <Form.Label>District</Form.Label>
                                <Form.Select>
                                    <option>Choose District</option>
                                    <option value="district1">District 1</option>
                                    <option value="district2">District 2</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                        <div className="col-md-4">
                            <Form.Group className='m-2'>
                                <Form.Label>City</Form.Label>
                                <Form.Select>
                                    <option>Choose City</option>
                                    <option value="city1">City 1</option>
                                    <option value="city2">City 2</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                    </div>
                    <div class="row">
                        <div className="col">
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            <Link to="/login">
                                <Button className="ml-4" variant="danger">Already Registered ?</Button>
                            </Link>
                        </div>
                    </div>
                </Form>
            </div>

            <div class="col">

            </div>
        </div>
    </div>
