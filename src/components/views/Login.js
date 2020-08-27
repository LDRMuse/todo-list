import React from "react"
import * as Yup from 'yup'

import { Formik, Field, Form, ErrorMessage } from "formik"

export const Login = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        name: "",
        password: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('invalid email').required('Email is required'),
        password: Yup.string().min(6).required('Password is required'),
      })}
      onSubmit={(values) => {
        console.log("submission", values)
        {/* setSubmitting(false) */ }
      }}
    >

      <Form>
        <label htmlFor="name">Name</label>
        <Field name="name" type="text" />
        <ErrorMessage name="name" />

        <label htmlFor="email">Email</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />

        <label htmlFor="password">Password</label>
        <Field name="password" type="password" />
        <ErrorMessage name="password" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}
