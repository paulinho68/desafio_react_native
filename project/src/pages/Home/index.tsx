import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Styles from '../../styles/pages/HomeStyles';
import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {
    const navigation = useNavigation();

    return (
        <Styles.Container>
            <Text>Home </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text>VOLTAR</Text>
            </TouchableOpacity>
        </Styles.Container>
    );
}

export default Home;
