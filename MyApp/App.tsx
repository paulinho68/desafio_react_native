import React from 'react';
import {
  Dimensions,
  Text,
  View,
} from 'react-native';
import MapView from 'react-native-maps';


const App = () => {
  return (
    // <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
    <MapView
      style={{ flex: 1 }}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
    // </View>
  );
};


export default App;
