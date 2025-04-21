'use client'

import PropTypes from "prop-types"

const Button = ({

    className,
    variant,
    children,

}) => {

    const baseClass = 'w-full max-w-max min-w-[150px] h-11 border border-transparent rounded-lg font-sans font-medium text-base transition-all duration-300'

    const variantClasses = {
        accent: 'bg-accent text-black hover:bg-accent-hover hover:text-black-dark',
        primary: 'bg-blue-500 text-white hover:bg-blue-600',
        secondary: 'bg-gray-500 text-white hover:bg-gray-600',
        outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
        text: 'text-blue-500 hover:text-blue-600'
    };


    return (
        <button className={`${baseClass} ${variantClasses[variant] || variantClasses.primary} ${className}`}>
            {children}
        </button>
    )
}

Button.propTypes = {
    className: PropTypes.string,
    variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'text']),
    children: PropTypes.node.isRequired,
};

export default Button