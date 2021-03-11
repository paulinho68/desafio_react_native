import React from 'react';
import { Dimensions, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Styles from './styles';
import { useNavigation } from '@react-navigation/native';

// import MapView from 'react-native-maps';

const Home: React.FC = () => {
    const navigation = useNavigation();

    return (
        <Styles.Container>
            {/* <MapView
                style={{
                    width: Dimensions.get('window').width,
                    height: '100%'
                }}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            /> */}
            <Text>Home </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text>VOLTAR</Text>
            </TouchableOpacity>
        </Styles.Container>
    );
}


export default Home;
