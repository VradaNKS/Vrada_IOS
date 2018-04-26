import React, {Component}from 'react'

import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions
}from 'react-native'
// import MapView from 'react-native-maps';


export default class MyMapView extends React.Component{
    getInitialState() {
        return {
          region: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
        };
      }
      
      onRegionChange(region) {
        this.setState({ region });
      }
    render(){
        return(
            <View>
                <Text></Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{},
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
})