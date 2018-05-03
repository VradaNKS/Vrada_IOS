import React, { Component } from 'react';

import { 
    StyleSheet,
    View,
    Text ,
    Dimensions,StatusBar    
} from 'react-native';

import MapView from 'react-native-maps'
import Btn from '../Module/Btn'
import Geocoder from 'react-native-geocoding';

Geocoder.init('AIzaSyDkEAHphgIUerVfrw6W3f4LtEJC5ydrEas');

        

const {width, height} = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width 
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGTITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO


const getLat = ''
const getLong = ''
const shortname = ''

const myrequest = ''

var arrayAdd = ''
var num = ''//so nha 
var street = '' //Ten Duong 
var commune = '' //Xa
var district = '' //huyen 
var ward = '' //phuong
var province =''
var country = ''

import { parse } from 'url';
var ret = ''

export default class Maps extends React.Component{

    constructor(props){
        super(props)
        this.state={
            initialPosition:{
                latitude:0,
                longitude:0,
                latitudeDelta:0,
                longitudeDelta:0,
            },
            markerPosition:{
                latitude:0,
                longitude:0,
            },

            getCoord : '',
        }
       
    }
    watchID: ?number = null
    
    componentWillMount(){
        navigator.geolocation.getCurrentPosition((position)=>{
            var lat = parseFloat(position.coords.latitude)
            var long = parseFloat(position.coords.longitude)

            var initialRegion = {
                latitude: lat,
                longitude: long , 
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGTITUDE_DELTA,
            }

            this.setState({initialPosition: initialRegion})
            this.setState({markerPosition: initialRegion})
        }, (error)=> alert(JSON.stringify(error)),
            {enableHighAccuracy: true, timeout:20000, maximumAge: 1000})

        this.watchID = navigator.geolocation.watchPosition((position)=>{
            var lat = parseFloat(position.coords.latitude)
            var long = parseFloat(position.coords.longitude)

            var lastRegion = {
                latitude: lat,
                longitude: long , 
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGTITUDE_DELTA,
            }

            this.setState({initialPosition: lastRegion})
            this.setState({markerPosition: lastRegion})
        })
       
    }  
    
    componentWillUnmount(){
        navigator.geolocation.clearWatch(this.watchID)
    }
    _handleGetCoor(position){
        var coord = position.nativeEvent
        
        lat = parseFloat(coord.coordinate.latitude)
        long =parseFloat(coord.coordinate.longitude)

        getLat = lat
        getLong = long

        var lastRegion = {
            latitude: lat,
            longitude: long , 
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGTITUDE_DELTA,
        }
        Geocoder.from(lat, long)
		.then(json => {
                var addressComponent = json.results[0].address_components;
                arrayAdd = addressComponent;
			    // console.log(addressComponent);
		})
        .catch(error => console.warn(error));
        this.setState({initialPosition: lastRegion})
        this.setState({markerPosition: lastRegion})
        // Handle get data 
        
        console.log(arrayAdd);
        var length=  arrayAdd.length
        if(length>0){
            num = arrayAdd[0].short_name
            street = arrayAdd[1].short_name
            ward = arrayAdd[length-4].short_name
            district = arrayAdd[length-3].short_name
            country = arrayAdd[length-1].short_name
            province = arrayAdd[length-2].long_name
            alert(num+'\n'+street +'\n'+ward+'\n'+ district+ '\n'+ country + '\n'+ province)
        }else(
            console.log('-----------Touch again-------------')
        )

        

    }
    _handleAccept(){
        switch(myrequest){
            case 'from' : {
                this.props.navigation.navigate('CTB10',
                {
                    answer:'from',
                    lat:getLat, 
                    long:getLong,
                    num:num,
                    street:street,
                    ward:ward,
                    district:district,
                    province:province,
                    country:country,
                });
                break;
            }
            case 'to' : {
                this.props.navigation.navigate('CTB10',{
                    answer:'to',
                    lat:getLat, 
                    long:getLong,
                    num:num,
                    street:street,
                    ward:ward,
                    district:district,
                    province:province,
                    country:country,
                });
                break;
            }
            case 'CSM10from' : {
                this.props.navigation.navigate('MainCSM10',
                {
                    answer:'from',
                    lat:getLat, 
                    long:getLong,
                    num:num,
                    street:street,
                    ward:ward,
                    district:district,
                    province:province,
                    country:country,
                });
                break;
            }
            case 'CSM10to' : {
                this.props.navigation.navigate('MainCSM10',{
                    answer:'to',
                    lat:getLat, 
                    long:getLong,
                    num:num,
                    street:street,
                    ward:ward,
                    district:district,
                    province:province,
                    country:country,
                });
                break;
            }
            
        }
    }
    render(){
        const { state } = this.props.navigation;
        myrequest = state.params.request;

        return(
            <View style={styles.container}>
               
                <MapView
                    style={styles.maps}
                    region={this.state.initialPosition}
                    onPress={ e => { this._handleGetCoor(e)}}
                >
                    <MapView.Marker coordinate={this.state.markerPosition}>
                        <View style={styles.radius}>
                            <View style={styles.marker}></View>
                        </View>
                    </MapView.Marker>
                </MapView>

                <View style={{
                    position:'absolute',
                    bottom:0
                }}>
                <Btn
                    text='XÁC NHẬN'
                    onPress = {()=>{this._handleAccept()}}
                />
                </View>
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
        backgroundColor:'blue',
        opacity:0.1,
        borderRadius: 40/2,
        overflow:'hidden',
        borderWidth: 1,
        borderColor:'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    marker:{
        height:20,
        width:20,
        borderWidth:3,
        borderColor:'white',
        borderRadius:20/2,
        overflow:'hidden',
        backgroundColor:'red'

    },
})