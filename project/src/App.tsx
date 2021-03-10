import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import FlashMessage from "react-native-flash-message";

import Routes from './routes';

const App: React.FC = () => {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor={'#FAFBFD'} barStyle={'dark-content'} />
            <Routes />
            <FlashMessage position="top" />
        </NavigationContainer>
    );
}

export default App;
