import React, {useState} from "react"
import * as Yup from 'yup'

import { Formik, Field, Form, ErrorMessage } from "formik"

import {useLocation} from "react-router-dom"

import {Options} from './Options'

export const Login = () => {
const location = useLocation();
const [loginMode, setLoginMode] = useState(location.search.includes("login"))

  return (
    <section className='has-text-centered mt-6'>
      <h1 className='title'>Login</h1>
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
            <label htmlFor="name">Name</label>
            <div className='control'>
              <Field className='mt-3' name="name" type="text" />
              <p className='help is-danger'>
                <ErrorMessage name="name" />
              </p>
            </div>
          </div>
        ) : null }


          <div className='field'>
            <label htmlFor="email">Email</label>
            <div className='control'>
              <Field className='mt-3' name="email" type="text" />
              <p className='help is-danger'>
                <ErrorMessage name="email" />
              </p>
            </div>
          </div>

          <div className='field'>
            <label htmlFor="password">Password</label>
            <div className='control'>
              <Field className='mt-3' name="password" type="password" />
              <p className='help is-danger'>
                <ErrorMessage name="password" />
              </p>
            </div>
          </div>

          <button className="button is-primary" type="submit">Submit</button>
        </Form>
      </Formik>
      <Options />
    </section>
  )
}
