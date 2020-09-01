import React, { useState } from "react"
import * as Yup from 'yup'

import { Formik, Field, Form, ErrorMessage } from "formik"

import { useLocation } from "react-router-dom"

import { Options } from './Options'

export const Login = () => {
  const location = useLocation();
  const [loginMode, setLoginMode] = useState(location.search.includes("login"))
  const [forgotMode, setForgotMode] = useState(false)


  const handleToggle = (event) => {
    if (event.target.textContent.includes('Forgot')) {
      setForgotMode((prev) => !prev)
    } else {
      setForgotMode(false)
      setLoginMode((prev) => !prev)
    }
  }

  return (
    <section className='has-text-centered mt-6'>
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

        <Form className='has-text-centered mt-6'>
          {loginMode ? (
            <div className='field'>
              <h1 className='title'>Login</h1>
              <label htmlFor="name">Name</label>
              <div className='control'>
                <Field className='mt-3' name="name" type="text" />
                <p className='help is-danger'>
                  <ErrorMessage name="name" />
                </p>
              </div>
            </div>
          ) : <h1 className='title'>Get Started</h1>}


          <div className='field'>
            <label htmlFor="email">Email</label>
            <div className='control'>
              <Field className='mt-3' name="email" type="text" />
              <p className='help is-danger'>
                <ErrorMessage name="email" />
              </p>
            </div>
          </div>

          {!forgotMode ? <div className='field'>
            <label htmlFor="password">Password</label>
            <div className='control'>
              <Field className='mt-3' name="password" type="password" />
              <p className='help is-danger'>
                <ErrorMessage name="password" />
              </p>
            </div>
          </div> : null}


          <button className="button is-primary" type="submit">Submit</button>
        </Form>
      </Formik>
      <Options loginMode={loginMode} handler={handleToggle} forgotMode={forgotMode} />
    </section>
  )
}
