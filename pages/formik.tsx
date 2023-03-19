import Layout from "../components/layout"
import { useFormik } from "formik"
// import { useState } from "react";

const Formik = () => {

    // const validate = (values: { firstName: string | any[]; lastName: string | any[]; email: string; }) => {
    //     const errors = {};
    //     if (!values.firstName) {
    //       errors.firstName = 'Required';
    //     } else if (values.firstName.length > 15) {
    //       errors.firstName = 'Must be 15 characters or less';
    //     }
      
    //     if (!values.lastName) {
    //       errors.lastName = 'Required';
    //     } else if (values.lastName.length > 20) {
    //       errors.lastName = 'Must be 20 characters or less';
    //     }
      
    //     if (!values.email) {
    //       errors.email = 'Required';
    //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //       errors.email = 'Invalid email address';
    //     }
      
    //     return errors;
    // };
// ----------------------------------------------------
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
    });
    return (
      <Layout>
      <section className="mb-4 bg-slate-400">
        <form onSubmit={formik.handleSubmit} className="grid justify-center">
            {/* ------- */}
            <label htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
            />
            {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
            {/* ------- */}
            <label htmlFor="lastName">Last Name</label>
            <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
            />
            {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

            {/* -------- */}
            <label htmlFor="email">Email Address</label>
            <input 
            id="email"
            name="email"
            type="email" 
            onChange={formik.handleChange}
            value={formik.values.email}
            />
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}

            <button className="bg-green-100" type="submit">Submit</button>
        </form>
    </section>
    </Layout>
    )
  }
  
  export default Formik