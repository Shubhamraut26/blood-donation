import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Login = () =>

    <div className="container col-12">
        <div className="row">
            <div className="col">

            </div>
                        
            <div className="p-3 m-2 bg-secondary text-white col-5">
                <div class="row">
                    <div class="col">
                        <h1>Login</h1><br />
                    </div>
                </div>
                <Form>
                <div class="row">
                    <div class="col">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                        <Link to="/register">
                            <Button className="ml-4" variant="danger">Not Registered ?</Button>
                        </Link>
                    </div>
                </div>
                </Form>
            </div>
            <div className="col">

            </div>
        </div>
    </div>
