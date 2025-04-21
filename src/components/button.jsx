'use client'

import PropTypes from "prop-types"

const Button = ({

    className,
    variant,
    children,

}) => {

    const baseClass = 'w-full max-w-max min-w-[150px] h-11 px-4 border border-transparent rounded-lg font-sans font-medium text-base transition-all duration-300'

    const variantClasses = {
        accent: 'bg-accent text-black border-transparent hover:bg-accent-hover hover:text-black-dark',
        accentOutline: 'bg-transparent text-accent border-accent hover:text-accent-hover hover:border-accent-hover',
        accentText: 'bg-transparent text-accent border-transparent hover:text-accent-hover',
        primary: 'bg-blue-500 text-white hover:bg-blue-600',
        primaryOutline: '',
        primaruText: '',
        secondary: 'bg-gray-500 text-white hover:bg-gray-600',
        outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
        text: 'text-blue-500 hover:text-blue-600'
    };


    return (
        <button className={`${baseClass} ${variantClasses[variant] || variantClasses.accentText} ${className}`}>
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