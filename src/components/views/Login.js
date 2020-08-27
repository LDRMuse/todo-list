import React from "react"
import * as Yup from 'yup'

import { Formik } from "formik"

export const Login = () => {
  return (
    <Formik
    initialValues={{
      email: "",
      name: "",
      password: "",
    }}
    valiationSchema={Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('invalid email').required('Email is required'),
      password: Yup.string().min(6).required('Password is required'),
    })}
    onSubmit={(values) => {
      console.log("submission", values)
      {/* setSubmitting(false) */}
    }}
    >
    {(formik) => (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        {...formik.getFieldProps('name')}
      />
      {formik.touched.name && formik.errors.name ? (
        <p>{formik.errors.name}</p>
      ) : null}

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        {...formik.getFieldProps('email')}
      />
      {formik.touched.email && formik.errors.email ? (
        <p>{formik.errors.email}</p>
      ) : null}

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="pass"
        {...formik.getFieldProps('password')}
      />
      {formik.touched.password && formik.errors.password ? (
        <p>{formik.errors.password}</p>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  )}
    </Formik>
  )


}
