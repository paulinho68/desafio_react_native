import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../pages/SignIn';
import Home from '../pages/Home';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <Auth.Navigator
        screenOptions={{
            headerShown: false
        }}
        initialRouteName="SignIn"
    >
        <Auth.Screen name="SignIn" component={SignIn} />
        <Auth.Screen name="Home" component={Home} />
    </Auth.Navigator>
);

export default AuthRoutes;