import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <section className="hero has-text-centered">
        <div className="hero-body">
          <div className="container">
          <h1 className="title"><Link to="/">Todo List!</Link></h1>
            <h2 className="subtitle">A list of things to do</h2>
          </div>
        </div>

    </section>
  )
}
