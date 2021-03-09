import React, { useCallback, useRef } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, TextInput } from 'react-native';
import * as Styles from '../../styles/pages/SignInStyles';

import * as Yup from 'yup';

import Title from '../../assets/title.png';
import GooglePng from '../../assets/google.png';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Badge from '../../components/atoms/Badge';
import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input';

import getValidationErrors from '../../utils/getValidationErrors';
interface SignInFormData {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const passwordRef = useRef<TextInput>(null);

    const handleSignIn = useCallback(async (data: SignInFormData) => {
        try {
            formRef.current?.setErrors({});


            const schema = Yup.object().shape({
                email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
                password: Yup.string().required('Senha obrigatória'),
            });


            await schema.validate(data, {
                abortEarly: false,
            });

            // success

        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);
                console.log(errors);
                formRef.current?.setErrors(errors);
            }

            // addToast();
        }
    }, []);

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            enabled
        >
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{ flex: 1 }}
            >
                <Styles.Container>
                    <Styles.Image source={Title} />
                    <Styles.Content>
                        <Form ref={formRef} onSubmit={handleSignIn}>
                            <Styles.ContentInputs>
                                <Input
                                    autoCorrect={false}
                                    autoCapitalize='none'
                                    name="email"
                                    icon="user"
                                    placeholder="E-mail"
                                    keyboardType="email-address"
                                    returnKeyType="next"
                                    onSubmitEditing={() => {
                                        passwordRef.current?.focus();
                                    }}
                                />
                                <Input
                                    ref={passwordRef}
                                    name="password"
                                    icon="lock"
                                    placeholder="Senha"
                                    secureTextEntry={true}
                                    returnKeyType="send"
                                    onSubmitEditing={() => {
                                        formRef.current?.submitForm();
                                    }}
                                />
                            </Styles.ContentInputs>
                            <Button
                                onPress={() => {
                                    formRef.current?.submitForm();
                                }}
                                children={
                                    <Styles.TextButton>Entrar</Styles.TextButton>
                                }
                            />
                            <Badge />
                            <Button
                                onPress={() => console.log('entrar com google')}
                                children={
                                    <Styles.ImageGoogle source={GooglePng} />
                                }
                                backgroundColor='#FFFFFF'
                            />
                        </Form>
                        <Styles.Footer>
                            <Styles.FooterText>
                                Não tem uma conta?
                            </Styles.FooterText>
                            <Styles.LinkText>
                                Cadastre-se.
                            </Styles.LinkText>
                        </Styles.Footer>
                    </Styles.Content>
                </Styles.Container>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default SignIn;
