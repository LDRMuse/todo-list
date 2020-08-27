import React from 'react'
import { useFormik } from 'formik'

export const Login = () => {

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Name is required"
    } if (!values.email) {
      errors.email = "Email is required"
    } if (!values.password) {
      errors.password = "Password is required"
    }
    return errors
  }



  const formik = useFormik({
    initialValues: {
      // just like setState
      email: '',
      name: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      // this is like utility function that gathers all VALUES
      console.log('submission', values)
    }
  })



  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email</label>
      <input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email}
      />
      {formik.errors.email ? <p>{formik.errors.email}</p> : null}
      <label htmlFor="name">Name</label>
      <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name}
       />
      {formik.errors.name ? <p>{formik.errors.name}</p> : null}
      <label htmlFor="password">Password</label>
      <input type='password' id='password' name='password' onChange={formik.handleChange} value={formik.values.password}
       />
      {formik.errors.password ? <p>{formik.errors.password}</p> : null}
      <button type="submit">Submit</button>
    </form>
  )
}
