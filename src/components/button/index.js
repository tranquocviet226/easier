import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const Button = ({
  children,
  onClick,
  disabled,
  outline,
  className,
  ...rest
}) => {
  return (
    <button
      className={` ${outline ? 'button__outline' : 'button'} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}

Button.protoTypes = {
  children: PropTypes.element,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  className: PropTypes.string,
}

Button.defaultProps = {
  children: <></>,
  onClick: () => { },
  disabled: false,
  outline: false,
  className: '',
}

export default Button
