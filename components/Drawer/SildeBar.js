import {DrawerNavigator} from 'react-navigation'
import {DrawerItems} from 'react-navigation'
import React, {Component}from'react';

import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    StatusBar,
    ToastAndroid,
    Image,
    ImageBackground,
    TouchableOpacity
}from 'react-native'

import {
    Icon,
    Button,
    Header, 
    Container, 
    Content, 
    Left,
    Body,
    List,
    ListItem,
    Thumbnail,
    Right,
    Drawer
}from'native-base'


export default Dra;

const {width,height} = Dimensions.get('window')
const defaultWidth = width-48;
const mainColor='#008D44'
const colorTXT = 'white'
const colorContent='#C0D8BA';
const colorBorder='#758084'
const borderLine = 0.5
const styles = StyleSheet.create({
    touchItem:{
        position:'relative',
        flexDirection:'row',
        height:HLine,
        borderTopWidth:borderLine,
        borderBottomWidth:borderLine,
        borderColor: colorBorder,
        alignItems: 'center',
    },
    list:{
        height:'100%',
        width:'100%',
        justifyContent:'center',
        padding:0,
        
    },
    txtLineBody:{
        fontSize:17,
        color:'black'
    },
    lineBody:{
        // backgroundColor:'green',
        width:200,
        alignSelf: 'center',
    },
    lineRight:{
        // backgroundColor:colorContent,
        width:40
    },
    thumbnail:{
        // backgroundColor:'gray',
        height:30,
        width:32.5,
        alignSelf: 'center',
        tintColor:'black'
    },
    ViewUnder:{
        flexDirection: 'row',
        width:'100%',
        justifyContent: 'space-between',
        marginTop:5,
        alignItems: 'center',
        alignSelf: 'center',
        
    },
    UserName:{
        fontSize: 20,
        color:'black',
        fontWeight: 'bold',
        alignSelf: 'center',
        
    },
    lineHo:{
        color:'black',
        marginLeft:5,
        marginRight: 5,
        alignSelf: 'center',
        
    },
    avtUser:{
        alignSelf: 'center',
        width:90,
        height:90,
    },
    BrImage:{
        width:'100%',
        height:200,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    ViewHeader:{
        width:'100%',
        height:200,
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
})