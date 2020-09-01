// have an account? when name shows
// create account? when login shows
// needs a new component with loginMode passed as props,
//needs login handler and need create handler
// forgot password on both modes

import React from 'react'
import PropTypes from 'prop-types'

export const Options = ({ loginMode, handler }) => {

return (
  <div>
    <button className='button mt-4 ml-2' onClick={handler}>
      {loginMode ? "Create An Account?" : "Already Have An Account?"}
    </button>
<br></br>
    {loginMode ? (
      <button className='button mt-4 ml-2'> Forgot Password? </button>) : null}
  </div>
  )
}

Options.propTypes = {
  loginMode: PropTypes.bool,
  handler: PropTypes.func,
}

Options.defaultProps = { loginMode: false }
