'use client';

interface AnchorButtonProps {
    styles?: string;
    variant?: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
    href?: string;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const AnchorButton: React.FC<AnchorButtonProps> = ({ styles, variant = 'accent', children, icon, href, disabled = false, onClick }) => {

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (disabled) {
            e.preventDefault();
            return;
        }
        onClick?.(e);
    };

    const baseClass =
        'w-full max-w-max min-w-[150px] h-11 flex justify-center items-center gap-2 px-4 rounded-lg font-sans font-medium text-base cursor-pointer transition-all duration-300';

    const variantClasses: { [key: string]: string } = {
        accent: 'bg-accent text-black border-transparent hover:bg-accent-hover hover:text-black-dark font-semibold',
        accentOutline: 'bg-transparent text-accent border border-accent hover:text-accent-hover hover:border-accent-hover font-semibold',
        accentText: ' vary bg-transparent text-accent border-transparent hover:text-accent-hover font-semibold',
        primary: 'bg-white text-black border-transparent hover:bg-white-200 hover:text-black-dark',
        primaryOutline: 'bg-transparent text-white border border-white hover:text-white-200 hover:border-white-200',
        primaryText: 'bg-transparent text-white border-transparent hover:text-white-200',
        secondary: 'bg-secondary text-white border-transparent hover:bg-secondary-hover hover:text-white-200',
        secondaryOutline: 'bg-transparent text-secondary border border-secondary hover:text-secondary-hover hover:border-secondary-hover',
        secondaryText: 'bg-transparent text-secondary border-transparent hover:text-secondary-hover',
        danger: 'bg-danger text-white border-transparent hover:bg-danger-50 hover:text-white-200',
        dangerOutline: 'bg-transparent text-danger border border-danger hover:text-danger-50 hover:border-danger-50',
        dangerText: 'bg-transparent text-danger border-transparent hover:text-danger-50',
        success: 'bg-success text-black border-transparent hover:bg-success-50 hover:text-black-dark',
        successOutline: 'bg-transparent text-success border border-success hover:text-success-50 hover:border-success-50',
        successText: 'bg-transparent text-success border-transparent hover:text-success-50',
        outline: 'border-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
        text: 'text-blue-500 hover:text-blue-600',
    };

    const disabledStyle: string = "disabled cursor-not-allowed opacity-50 pointer-events-none"

    return (
        <a
            target="_blank"
            rel="noopener noreferrer"
            className={`${baseClass} ${variantClasses[variant || 'accent']} ${styles || ''} ${disabled ? disabledStyle : ''}`}
            onClick={handleClick}
            href={disabled ? '#' : href}
            aria-disabled={disabled}
            tabIndex={disabled ? -1 : undefined}
        >
            {icon && <span>{icon}</span>}
            {children}
        </a>
    );
};

export default AnchorButton;