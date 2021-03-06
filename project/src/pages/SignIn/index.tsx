import React from 'react';
import * as Styles from './styles';
import Icon from 'react-native-vector-icons/Feather';

import Title from '../../assets/title.png';
import GooglePng from '../../assets/google.png';

import Badge from '../../components/atoms/Badge';
import Button from '../../components/atoms/Button';

const SignIn: React.FC = () => {
    return (
        <Styles.Container>
            <Styles.Image source={Title} />
            <Styles.Content>
                <Styles.ContentInputs>
                    <Styles.RegularText>
                        Input
                    </Styles.RegularText>
                    <Styles.RegularText>
                        Input
                    </Styles.RegularText>
                </Styles.ContentInputs>
                <Button
                    children={
                        <Styles.TextButton>
                            Entrar
                        </Styles.TextButton>
                    }
                />
                <Badge />
                <Button
                    children={
                        <Styles.ImageGoogle source={GooglePng} />
                    }
                    backgroundColor='#FFFFFF'
                />
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
    );
}

export default SignIn;
