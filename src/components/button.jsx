'use client'

import PropTypes from "prop-types"

const Button = ({
    className,
    variant,
    color,
    children,
}) => {
    return (
        <button className={`btn ${variant} ${className} `}>
            {children}
        </button>
    )
}

export default Button