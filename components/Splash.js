import React, {Component} from 'react'
import {
    View,
    StyleSheet, 
    Text,
    Image,
    Dimensions,
    ToastAndroid
}from 'react-native'

import SmallLogo from './Module/SmallLogo'
import Swipers from './Module/Swiper'
import Btn from './Module/Btn'

export default class Splash extends React.Component{
    constructor(props){
        super(props)
        this.state={
            city:require('../source/images/city.png'),
            book:'ĐẶT XE'
        }
    }
    _Booking(){
        ToastAndroid.show('Ok', ToastAndroid.SHORT)
        this.props.navigation.navigate('Login','')
    }
    render(){
        return(
            <View style={styles.container}>
                <View style = {styles.viewTOP}>
                    <SmallLogo/>
                </View>
                <View style ={styles.viewBOTTOM}>
                    <Swipers/>
                </View>
                <View style={styles.ViewButton}>
                    <Btn
                        onPress={()=>{this._Booking()}}
                        text={this.state.book}
                    />
                </View>
            </View>
        );
    }
}

const {width,height} = Dimensions.get('window')
const defaultWidth = width-48;
const mainColor='#008D44'
const styles= StyleSheet.create({
    ViewButton:{
        alignItems: 'center',
        
    },
    viewBOTTOM:{
        flex:1,
        zIndex:1
    },
    viewTOP:{
        height:height*(25/100),
        justifyContent: 'center',
        alignItems: 'center',
    },
    city:{
        width:width,
        height:height*(50/100),
        width:width,
        alignSelf: 'center',
    },
    container:{
        flex:1,
        backgroundColor:'white',
    },
    viewCity:{
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
    }
})