import { Fragment } from "react";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import './Register.css';

export const Register = () => {

    const formInitialSchema = {
      name: '',
      email: '',
      password: '',
      dob:'',
      blood:'',
      gender:'',
      mobile:'',
      country:'',
      state:'',
      city:'',
     
  }

  const formValidationSchema = yup.object().shape({
      name: yup.string().required('Name is required'),
      email: yup.string().required('Email is required').email("Please enter Valid email"),
      password: yup.string().required('Password is required'),
      confirmPassword: yup.string().oneOf([yup.ref('password')], "Passwords don't match").required('Confirm Password is required'),
      website: yup.string().required('Website is required'),
      comment: yup.string().required('Comment is required'),
      termsAndCond: yup.boolean().oneOf([true], "Terms and condition is required"),
      dob: yup.string().required('dob is required'),
      blood: yup.string().required('Blood-group is required'),
      country: yup.string().required('Country is required'),
      state: yup.string().required('State is required'),
      city: yup.string().required('City is required'),
      gender: yup.string().required('Gender is required'),
      mobile: yup.string().required('Mobile is required'),
      dob: yup.string().required('date of birth is required'),
  });



    const handleFormSubmit = (values) => {
        console.log("Submitted values", values)
    }

    return (
        <Fragment>
          <div className="content">

            <div className=" container-sm mt-1  " >
               

                <div className="col-md-5 offset-md-2 card shadow p-3">
                    <Formik initialValues={formInitialSchema}
                        validationSchema={formValidationSchema}
                        onSubmit={(values => handleFormSubmit(values))}>
                        {({ values }) =>
                            <Form>
                               <div className="col-md-5">
                             <center> <h1 className="text-center ">Register</h1></center> 
          
                </div>
                                <div className="col-md-12 mt-3">
                                    <Field type="text"
                                        name="name"
                                        placeholder="Enter your  Full Name"
                                        className="form-control" />

                                    <p className="text-danger">
                                        <ErrorMessage name="name" />
                                    </p>
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
                                    <Field type="date"
                                        name="dob"
                                        placeholder="Enter your age"
                                        className="form-control" />
                                    <p className="text-danger">
                                        <ErrorMessage name="dob" />
                                    </p>
                                </div>
                                <div className="col-md-12 mt-4">
                                    <Field component="select" name="gender"
                                        className={"form-control"}>
                                        <option value="" disabled>Please select your gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </Field>
                                    <p className="text-danger">
                                        <ErrorMessage name="gender" />
                                    </p>
                                </div>
                                <div className="col-md-12 mt-4">
                                    <Field component="select" name="blood"
                                        className={"form-control"}>
                                        <option value="0">Please select your blood-group</option>
                                        <option value="1">A+</option>
                                        <option value="2">A-</option>
                                        <option value="3">B+</option>
                                        <option value="4">B-</option>
                                        <option value="5">O+</option>
                                        <option value="6">O-</option>
                                        <option value="7">AB+</option>
                                        <option value="8">AB-</option>
                                    </Field>
                                    <p className="text-danger">
                                        <ErrorMessage name="blood" />
                                    </p>
                                </div>
                                <div className="col-md-12 mt-4">
                                    <Field component="select" name="Country"
                                        className={"form-control"}>
                                        <option value="0">Please select your Country</option>
                                        <option value="1">America</option>
                                        <option value="2">Austrailiya</option>
                                        
    					                            <option value="3">Brazil</option>
    					<option value="4">Bhutan</option>
    					<option value="5">China</option>
    					<option value="6">India</option>
    					<option value="7">Pakistan</option>
    					<option value="8">Sri-Lanka</option>
                                    </Field>
                                    <p className="text-danger">
                                        <ErrorMessage name="country" />
                                    </p>
                                </div>
                                <div className="col-md-12 mt-4">
                                    <Field component="select" name="State"
                                        className={"form-control"}>
                                        <option value="0">Please select your State</option>
                                        <option value="1">America</option>
    					<option value="2">Austrailya</option>
    					<option value="3">Brazil</option>
    					<option value="4">Bhutan</option>
    					<option value="5">China</option>
    					<option value="6">India</option>
    					<option value="7">Pakistan</option>
    					<option value="8">Sri-Lanka</option>
                                    </Field>
                                    <p className="text-danger">
                                        <ErrorMessage name="state" />
                                    </p>
                                </div>
                                <div className="col-md-12 mt-4">
                                    <Field component="select" name="State"
                                        className={"form-control"}>
                                        <option value="0">Please select your city</option>
                                        <option value="1">America</option>
    					<option value="2">Austrailya</option>
    					<option value="3">Brazil</option>
    					<option value="4">Bhutan</option>
    					<option value="5">China</option>
    					<option value="6">India</option>
    					<option value="7">Pakistan</option>
    					<option value="8">Sri-Lanka</option>
                                    </Field>
                                    <p className="text-danger">
                                        <ErrorMessage name="city" />
                                    </p>
                                </div>
                                


                               


                                <div className="col-md-12 mt-4">
                                    <Field type="number"
                                        name="password"
                                        placeholder="Enter your mobile number"
                                        className="form-control" />
                                    <p className="text-danger">
                                        <ErrorMessage name="mobile" />
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
                                        Submit 
                                    </button>
                                    </center>
                                </div>


                            </Form>
                        }

                    </Formik>
                </div>


            </div>
            </div>


        </Fragment >

    )
}

