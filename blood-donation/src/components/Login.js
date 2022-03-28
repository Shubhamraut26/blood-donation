import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Login = () =>

    <div classNameName="container">
        <div className="row">
            <div className="col">

            </div>
            <div className="p-3 m-2 bg-secondary text-white col-5">
                <Form>
                    <h1>Login</h1><br />
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <Link to="/register">
                        <Button className="ml-4" variant="danger">Not Registered ?</Button>
                    </Link>
                </Form>
            </div>
            <div className="col">

            </div>
        </div>
    </div>