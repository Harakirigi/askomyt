'use client';

interface ButtonProps {
    styles?: string;
    variant?: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
    styles,
    variant = 'accent',
    children,
    icon,
    disabled = false,
    onClick,
    type
}) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (disabled) {
            e.preventDefault();
            return;
        }
        onClick?.(e);
    };

    const baseButtonClass =
        'relative p-2 overflow-hidden text-xs font-medium border rounded-lg group';

    const buttonClasses: { [key: string]: string } = {
        accent: 'border-accent text-accent',
        accentOutline: 'border-accent text-accent',
        accentText: 'border-transparent text-accent',
        primary: 'border-white text-white',
        primaryOutline: 'border-white text-white',
        primaryText: 'border-transparent text-white',
        secondary: 'border-secondary text-secondary',
        secondaryOutline: 'border-secondary text-secondary',
        secondaryText: 'border-transparent text-secondary',
        danger: 'border-danger text-danger',
        dangerOutline: 'border-danger text-danger',
        dangerText: 'border-transparent text-danger',
        success: 'border-success text-success',
        successOutline: 'border-success text-success',
        successText: 'border-transparent text-success',
        outline: 'border-2 border-blue-500 text-blue-500',
        text: 'border-transparent text-blue-500',
    };

    const spanClasses: { [key: string]: string } = {
        accent: 'group-hover:text-black',
        accentOutline: 'group-hover:text-black',
        accentText: 'group-hover:text-black',
        primary: 'group-hover:text-black',
        primaryOutline: 'group-hover:text-black',
        primaryText: 'group-hover:text-black',
        secondary: 'group-hover:text-white',
        secondaryOutline: 'group-hover:text-white',
        secondaryText: 'group-hover:text-white',
        danger: 'group-hover:text-white',
        dangerOutline: 'group-hover:text-white',
        dangerText: 'group-hover:text-white',
        success: 'group-hover:text-black',
        successOutline: 'group-hover:text-black',
        successText: 'group-hover:text-black',
        outline: 'group-hover:text-white',
        text: 'group-hover:text-white',
    };

    const backgroundClasses: { [key: string]: string } = {
        accent: 'bg-accent',
        accentOutline: 'bg-accent',
        accentText: 'bg-accent',
        primary: 'bg-white',
        primaryOutline: 'bg-white',
        primaryText: 'bg-white',
        secondary: 'bg-secondary',
        secondaryOutline: 'bg-secondary',
        secondaryText: 'bg-secondary',
        danger: 'bg-danger',
        dangerOutline: 'bg-danger',
        dangerText: 'bg-danger',
        success: 'bg-success',
        successOutline: 'bg-success',
        successText: 'bg-success',
        outline: 'bg-blue-500',
        text: 'bg-blue-500',
    };

    const disabledStyle: string = "cursor-not-allowed opacity-50";

    return (
        <button
            className={`${baseButtonClass} ${buttonClasses[variant]} ${styles || ''} ${disabled ? disabledStyle : ''}`}
            onClick={handleClick}
            disabled={disabled}
            aria-disabled={disabled}
            type={type}
        >
            <span className={`relative z-10 flex items-center gap-2 transition-colors duration-300 ${spanClasses[variant]}`}>
                {icon && <span>{icon}</span>}
                {children}
            </span>
            <span
                className={`absolute inset-0 transition-transform duration-300 ease-out origin-left transform scale-x-0 group-hover:scale-x-100 ${backgroundClasses[variant]}`}
            ></span>
        </button>
    );
};

export default Button;