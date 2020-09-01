import PropTypes from "prop-types"
import React from "react"

export const AddForm = ({ handler }) => {
  return (
    <form className="mt-4" onSubmit={handler}>
      <div className="field">
        <div className="control">
          <input
            className="input is-primary has-text-centered"
            type="text"
            placeholder="Enter a new Todo Item"
          />
        </div>
      </div>
      <div className='has-text-centered'>
        <button className="button is-primary">Add It!</button>
      </div>
    </form>
  )
}

AddForm.propTypes = { handler: PropTypes.func }
