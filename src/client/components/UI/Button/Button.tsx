import React, { ReactNode } from 'react'

interface ButtonProps {
    children: ReactNode
    className?: string
    onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <button {...props}>
            {children}
        </button>
    );
};

export default Button