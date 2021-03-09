import React, { useEffect, useRef, useImperativeHandle, forwardRef, useState, useCallback } from 'react';
import * as Styles from '../../styles/components/InputStyles';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface InputProps extends TextInputProps {
    name: string;
    icon: string;
}

interface InputValueReference {
    value: string;
}

interface InputRef {
    focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = ({ name, icon, ...rest }: InputProps, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const inputElementRef = useRef<any>(null);

    const { registerField, defaultValue = '', fieldName, error } = useField(name);
    const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

    useImperativeHandle(ref, () => ({
        focus() {
            inputElementRef.current.focus();
        }
    }));

    useEffect(() => {
        registerField<string>({
            name: fieldName,
            ref: inputValueRef.current,
            path: 'value',
            setValue(ref: any, value) {
                inputValueRef.current.value = value;
                inputElementRef.current.setNativeProps({ text: value });
            },
            clearValue() {
                inputValueRef.current.value = '';
                inputElementRef.current.clear();
            }
        })
    }, [fieldName, registerField]);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);
    }, []);

    return (
        <Styles.Container isFocused={isFocused} isErrored={!!error}>
            <Styles.Icon
                size={16}
                name={icon}
                isErrored={!!error}
                isFocused={isFocused}
            />
            <Styles.TextInput
                ref={inputElementRef}
                placeholderTextColor="#515151"
                defaultValue={defaultValue}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onChangeText={(value: string) => {
                    inputValueRef.current.value = value;
                }}
                {...rest}
                secureTextEntry={name == 'password' ? !isVisible : false}
            />
            {name == 'password' && (
                <TouchableOpacity onPress={() => setIsVisible(!isVisible)} style={{ paddingLeft: 10 }}>
                    <Styles.Icon
                        size={16}
                        name={isVisible ? 'eye-off' : 'eye'}
                        marginRight={'0'}
                    />
                </TouchableOpacity>
            )}
        </Styles.Container>
    )
}

export default forwardRef(Input);