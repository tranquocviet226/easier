import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ placeholder }) => {
  return (
    <input placeholder={placeholder} />
  )
}

export default Input

Input.protoTypes = {
  placeholder: PropTypes.string,
}

Input.defaultProps = {
  placeholder: '',
}
