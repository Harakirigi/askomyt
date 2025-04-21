'use client'

import PropTypes from "prop-types"

const Button = ({
    className,
    variant,
    color,
    children,
}) => {
    return (
        <button className={`btn ${variant} ${className} w-8 h-11 bg-accent text-black`}>
            {children}
        </button>
    )
}

export default Button