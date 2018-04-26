import React, { Component } from 'react';

import { 
    StyleSheet,
    View,
    Text ,
    Dimensions,
} from 'react-native';

import MapView from 'react-native-maps'

const {width, height} = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width 
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGTITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

import { parse } from 'url';
export default class Maps extends React.Component{

    constructor(props){
        super(props)
        this.state={
            initialPosition:{
                latitude:0,
                longitude:0,
                latitudeDelta:0,
                longitudeDelta:0
            },
            markerPosition:{
                latitude:0,
                longitude:0
            }
        }
    }

    watchID: ?number =null;

    componentWillMount(){

        navigator.geolocation.getCurrentPosition((position)=>{
            var lat = parseFloat(position.coords.latitude)
            var long = parseFloat(position.coords.longitude)

            var initialRegion = {
                latitude:lat,
                longitude:long,
                latitudeDelta:LATITUDE_DELTA,
                longitudeDelta:LONGTITUDE_DELTA,
            }

            this.setState({initialPosition: initialRegion})
            this.setState({markerPostion: initialRegion})
        },(error) => alert(JSON.stringify(error)),

        {enableHighAccuracy: true , timeout: 200000, maximumAge: 1000})

        this.watchID = navigator.geolocation.watchPosition(
            (position) => {
                var lat  = parseFloat(position.coords.latitude)
                var long  = parseFloat(position.coords.longitude)
    
                var lastRegion
            })
        
    }  

    componentWillUnmount(){
        navigator.geolocation.clearWatch(this.watchID)
    }

    render(){
        return(
            <View style={styles.container}>
                <MapView
                    style={styles.maps}
                    initialRegion={this.state.initialPosition}
                >

                    <MapView.Marker
                        coordinate={this.state.markerPosition}
                    >
                        <View style={styles.radius}>
                            <View style={styles.marker}></View>
                        </View>
                    </MapView.Marker>
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    maps:{
        flex:1,
        position:'absolute',
        top:0,
        bottom:0,
        right:0,
        left:0,
    },
    radius:{
        height:40,
        width:40,
        backgroundColor:'red',
        opacity:0.1
    }
})