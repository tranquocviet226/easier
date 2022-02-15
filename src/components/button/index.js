import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

/**
 * XXXXXXXXXXXXXXXXXXXX
 */
export const Button = ({ className, children }) => {
  return <button className={className}>{children}</button>
}

Button.propTypes = {
  /**
   * YYYYYYYYYYYYYYYYYYYY
   */
  children: PropTypes.element,
  /**
   * ZZZZZZZZZZZZZZZZZZZZZ
   */
  className: PropTypes.string,
}

Button.defaultProps = {
  children: <></>,
  className: '',
}
