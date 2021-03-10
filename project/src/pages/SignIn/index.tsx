import React, { useCallback, useRef } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as Styles from '../../styles/pages/SignInStyles';
import getValidationErrors from '../../utils/getValidationErrors';

import Title from '../../assets/title.png';
import GooglePng from '../../assets/google.png';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { showMessage } from 'react-native-flash-message';
import * as Yup from 'yup';
import firebase from '@react-native-firebase/auth';

import Badge from '../../components/atoms/Badge';
import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input';

import UserStore from '../../stores/user';

interface SignInFormData {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
    const navigation = useNavigation();

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

            try {
                const user = await firebase()
                    .signInWithEmailAndPassword(
                        data.email,
                        data.password
                    );

                await UserStore.setUser({
                    email: user.user.email,
                    displayName: user.user.displayName
                });

                navigation.navigate('Home');
            } catch (error) {
                console.log(error.message);
                showMessage({
                    message: 'Erro!',
                    description: error.message,
                    type: 'danger',
                    // floating: true,
                    // style: { marginTop: 25 },
                    titleStyle: { fontWeight: 'bold' },
                    icon: 'danger',
                });
            }

        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);
                console.log(errors);
                formRef.current?.setErrors(errors);
            }
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
