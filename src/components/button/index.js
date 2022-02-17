import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './style.scss'

/**
 * XXXXXXXXXXXXXXXXXXXX
 */
const Button = ({ className, children }) => {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <button className={className} onClick={() => setIsClicked(!isClicked)}>
      {isClicked ? 'Clicked' : children}
    </button>
  )
}

Button.propTypes = {
  /**
   * YYYYYYYYYYYYYYYYYYYY
   */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /**
   * ZZZZZZZZZZZZZZZZZZZZZ
   */
  className: PropTypes.string,
}

Button.defaultProps = {
  children: <></>,
  className: '',
}

export default Button
