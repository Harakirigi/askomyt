'use client'

import PropTypes from "prop-types"

const Button = ({

    className = '',
    variant = 'primary',
    children,

}) => {

    const baseClass = ''


    return (
        <button className={`w-full max-w-max min-w-[150px] h-11 border border-transparent rounded-lg font-sans font-medium text-base transition-all duration-300 ${variant} ${className}`}>
            {children}
        </button>
    )
}

export default Button