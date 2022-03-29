import { Fragment } from "react";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import './Login.css';

export const Login = () => {

    const formInitialSchema = {
     
      email: '',
      password: '',
     
     
  }

  const formValidationSchema = yup.object().shape({
     
      email: yup.string().required('Email is required').email("Please enter Valid email"),
      password: yup.string().required('Password is required'),
     
      website: yup.string().required('Website is required'),
      comment: yup.string().required('Comment is required'),
      termsAndCond: yup.boolean().oneOf([true], "Terms and condition is required"),
     
  });



    const handleFormSubmit = (values) => {
        console.log("Submitted values", values)
    }

    return (
        <Fragment>
            <div className="content">

            <div className=" container-sm mt-1 pt-5  " >
               

                <div className="col-md-5 offset-md-2 card shadow p-3">
                    <Formik initialValues={formInitialSchema}
                        validationSchema={formValidationSchema}
                        onSubmit={(values => handleFormSubmit(values))}>
                        {({ values }) =>
                            <Form>
                               <div className="col-md-5">
                             <center> <h1 className="text-center ">Login</h1></center> 
          
                </div>
                                
                                <div className="col-md-12 mt-4">
                                    <Field type="text"
                                        name="email"
                                        placeholder="Enter your Email"
                                        className="form-control" />
                                    <p className="text-danger">
                                        <ErrorMessage name="email" />
                                    </p>
                                </div>
                               

                                <div className="col-md-12 mt-4">
                                    <Field type="password"
                                        name="Password"
                                        placeholder="Enter your Password"
                                        className="form-control" />
                                    <p className="text-danger">
                                        <ErrorMessage name="password" />
                                    </p>
                                </div>

                               

                               


                                <div className="col-md-12 mt-4">
                                  <center>
                                    <button className="btn btn-primary btn-block "
                                        type="submit"
                                    >
                                        Login
                                    </button>
                                    </center>
                                </div>


                            </Form>
                        }

                    </Formik>
                </div>


            </div>
<<<<<<< HEAD
            <div className="p-3 m-2 bg-secondary text-white col-5">
                <form>
                    <h1>Login</h1><br />
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <button variant="primary" type="submit">
                        Login
                    </button>
                    <Link to="/register">
                        <button className="ml-4" variant="danger">Not Registered ?</button>
                    </Link>
                </form>
=======
>>>>>>> 5758bd9dcc737b90e37b4dbb743b96779e00250e
            </div>


        </Fragment >

    )
}

