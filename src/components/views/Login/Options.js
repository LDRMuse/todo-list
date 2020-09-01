// have an account? when name shows
// create account? when login shows
// needs a new component with loginMode passed as props,
//needs login handler and need create handler
// forgot password on both modes

import React from 'react'
import PropTypes from 'prop-types'

export const Options = ({loginMode}) => {

  return (<button className='button'>
    {loginMode ? "Create An Account?" : "Already Have An Account?"}
  </button>
  )

}

Options.propTypes = {
  loginMode: PropTypes.bool,
}

Options.defaultProps = { loginMode: false}
