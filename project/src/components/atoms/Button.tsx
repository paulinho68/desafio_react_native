import React, { ReactNode } from 'react';
import * as Styles from '../../styles/components/buttonStyles';
import { RectButtonProperties } from 'react-native-gesture-handler';

interface ButtonProps extends RectButtonProperties {
    children?: ReactNode;
    backgroundColor?: string;
}

const Button: React.FC<ButtonProps> = ({ children, backgroundColor, ...rest }: ButtonProps) => {
    return (
        <Styles.Button
            backgroundColor={backgroundColor}
            {...rest}
        >
            {children}
        </Styles.Button>
    );
}

export default Button;
