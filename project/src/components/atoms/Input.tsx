import React, { useEffect, useRef } from 'react';
import * as Styles from '../../styles/components/InputStyles';
import { TextInputProps } from 'react-native';
// import { useField } from '@unform/core';

interface InputProps extends TextInputProps {
    name: string;
    icon: string;
}

interface InputValueReference {
    value: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }: InputProps) => {
    // const { registerField, defaultValue = '', fieldName, error } = useField(name);
    // const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

    // useEffect(() => {
    //     registerField({
    //         name: fieldName,
    //         ref: inputValueRef.current,
    //         path: 'value'
    //     })
    // }, [fieldName, registerField]);

    return (
        <Styles.Container>
            <Styles.Icon
                size={16}
                name={icon}
            />
            <Styles.TextInput
                placeholderTextColor="#515151"
                // defaultValue={defaultValue}
                // onChangeText={(value: string) => {
                //     inputValueRef.current.value = value;
                // }}
                {...rest}
            />
            {name == 'password' && (
                <Styles.Icon
                    size={16}
                    name={'eye'}
                    marginRight={'0'}
                />
            )}
        </Styles.Container>
    )
}

export default Input;