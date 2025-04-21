'use client'

import PropTypes from "prop-types"

const Button = ({

    className,
    variant,
    children,
    icon,

}) => {

    const baseClass = 'w-full max-w-max min-w-[150px] h-11 flex justify-center items-center gap-2 px-4 border border-transparent rounded-lg font-sans font-medium text-base transition-all duration-300'

    const variantClasses = {
        accent: 'bg-accent text-black border-transparent hover:bg-accent-hover hover:text-black-dark uppercase font-bold',
        accentOutline: 'bg-transparent text-accent border-accent hover:text-accent-hover hover:border-accent-hover uppercase font-bold',
        accentText: 'bg-transparent text-accent border-transparent hover:text-accent-hover uppercase font-bold',
        
        primary: 'bg-white text-black border-transparent hover:bg-white-200 hover:text-black-dark',
        primaryOutline: 'bg-transparent text-white border-white hover:text-white-200 hover:border-white-200',
        primaryText: 'bg-transparent text-white border-transparent hover:text-white-200',
        
        secondary: 'bg-secondary text-white border-transparent hover:bg-secondary-hover hover:text-white-200',
        secondaryOutline: 'bg-transparent text-secondary border-secondary hover:text-secondary-hover hover:border-secondary-hover',
        secondaryText: 'bg-transparent text-secondary border-transparent hover:text-secondary-hover',

        danger: 'bg-danger text-white border-transparent hover:bg-danger-50 hover:text-white-200',
        dangerOutline: 'bg-transparent text-danger border-danger hover:text-danger-50 hover:border-danger-50',
        dangerText: 'bg-transparent text-danger border-transparent hover:text-danger-50',

        success: 'bg-success text-black border-transparent hover:bg-success-50 hover:text-black-dark',
        successOutline: 'bg-transparent text-success border-success hover:text-success-50 hover:border-success-50',
        successText: 'bg-transparent text-success border-transparent hover:text-success-50',

        outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
        text: 'text-blue-500 hover:text-blue-600'
    };

    // icons should be 24x24
    return (
        <button className={`${baseClass} ${variantClasses[variant] || variantClasses.accent} ${className}`}>
            {icon && <span>{icon}</span>}
            {children}
        </button>
    )
}

Button.propTypes = {
    className: PropTypes.string,
    variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'text']),
    children: PropTypes.node.isRequired,
    icon: PropTypes.node,
};

export default Button