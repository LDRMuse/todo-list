import React from "react"
import * as Yup from 'yup'

import { useFormik } from "formik"

export const Login = () => {
  const validate = (values) => {
    const errors = {}

  //   if (!values.name) {
  //     errors.name = "Name is required!"
  //   }
  //   if (!values.email) {
  //     errors.email = "Email is required!"
  //   } else if (
  //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  //   ) {
  //     errors.email = "Doesn't look like email"
  //   }
  //   if (!values.pass) {
  //     errors.pass = "Password is required!"
  //   }

  //   return errors
  }

  const formik = useFormik({
    // This is like 'setState'
    initialValues: {
      email: "",
      name: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('invalid email').required('Email is required'),
      password: Yup.string().min(6).required('Password is required'),
    }),
    onSubmit: (values) => {
      // This is like utility fxn. that gathers all values
      console.log("submission", values)
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? (
        <p>{formik.errors.name}</p>
      ) : null}

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <p>{formik.errors.email}</p>
      ) : null}

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="pass"
        name="password"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.pass}
      />
      {formik.touched.password && formik.errors.password ? (
        <p>{formik.errors.password}</p>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  )
}
