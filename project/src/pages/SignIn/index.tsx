import React, { useCallback, useRef } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import * as Styles from '../../styles/pages/SignInStyles';

import Title from '../../assets/title.png';
import GooglePng from '../../assets/google.png';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Badge from '../../components/atoms/Badge';
import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input';


const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const handleSignIn = useCallback((data: object) => {
        console.log(data);
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
                        {/* <Form ref={formRef} onSubmit={handleSignIn}> */}
                        <Styles.ContentInputs>
                            <Input
                                name="email"
                                icon="user"
                                placeholder="E-mail"
                                keyboardType="email-address"
                            />
                            <Input
                                name="password"
                                icon="lock"
                                placeholder="Senha"
                                secureTextEntry={true}
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
                        {/* </Form> */}
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
