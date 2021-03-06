import React, { ReactNode } from 'react';
import * as Styles from '../../styles/components/buttonStyles';

interface ButtonProps {
    children?: ReactNode;
    backgroundColor?: string;
}

const Button: React.FC<ButtonProps> = ({ children, backgroundColor }: ButtonProps) => {
    return (
        <Styles.Button
            backgroundColor={backgroundColor}
        >
            {children}
        </Styles.Button>
    );
}

export default Button;
