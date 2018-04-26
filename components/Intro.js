import React, {Component} from 'react'
import {
    View,
    StyleSheet, 
    Text,
    Image,
    Dimensions,
    StatusBar,
    TouchableOpacity,
    ToastAndroid
}from 'react-native'

import Logo from './Module/Logo'
var timesChangeScreen = 2000;

// Set Time to Change Stack
export default class Intro extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            logo:require('../source/icons/logo.png'),
            city:require('../source/images/city.png')
        }
    }
    componentWillMount() {
        setTimeout( () => {
          this.props.navigation.navigate('Splash','')
        },timesChangeScreen)
        // ToastAndroid.show('ALo',ToastAndroid.SHORT)
      }

    render(){
        return(
            <View style = {styles.container}>
                <StatusBar
                    backgroundColor="#00803f"
                    translucent
                />
                <TouchableOpacity onPress={this._changeStack}>
                    <Logo/>
                </TouchableOpacity>
                <View style={styles.viewCity}>
                    <Image
                        source={this.state.city}
                        style={styles.city}
                    />
                </View>
            </View>
        )
    }
}

const {width, height} = Dimensions.get('window')
const mainColor = '#00803f'

const styles= StyleSheet.create({
    viewLogo:{
        width:width-10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 40
    },
    viewCity:{
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
    },
    city:{
        height:height*(50/100),
        width:width,
        alignSelf: 'center',
    },
    logo:{
        alignItems: 'center',
        height:height*(21/100),
        width:height*(21/100),
    },
  
    container:{
        flex:1,
        backgroundColor:'white',
        justifyContent: 'space-between',
    },
})