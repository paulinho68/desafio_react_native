import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import * as Styles from '../../styles/pages/HomeStyles';
import { useNavigation } from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';

import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

const Home: React.FC = () => {
    const [latitude, setLatitude] = useState<number>(0);
    const [longitude, setLongitude] = useState<number>(0);
    const [timestamp, setTimestamp] = useState<number>(0);
    // const navigation = useNavigation();

    useEffect(() => {
        Geolocation.getCurrentPosition(info => {
            setLatitude(info.coords.latitude);
            setLongitude(info.coords.longitude);
            setTimestamp(info.timestamp);
        });
    }, [latitude, longitude]);

    return (
        // <Styles.Container>
        <MapView
            style={{ flex: 1 }}
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            region={{
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >
            <Marker
                coordinate={{ latitude, longitude }}
                title={'Sua localização'}
                description={'Você está aqui!'}
            />
        </MapView>
        // <Text>Home </Text>
        // <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        //     <Text>VOLTAR</Text>
        // </TouchableOpacity>
        // </Styles.Container>
    );
}

export default Home;
