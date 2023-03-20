import Layout from "../components/layout"
import { useFormik } from "formik"
// import { useState } from "react";

const Formik = () => {
// ----------------------------------------------------
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
          window.location.reload()
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