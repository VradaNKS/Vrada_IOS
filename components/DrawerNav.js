import React, {Component}from'react'
import {
    View,
    StyleSheet,
    Text,
    Image,
    ImageBackground,
    Dimensions
} from 'react-native';
import {Icon, Button, Container, Header,Content,Left, Body, }from'native-base';

import {DrawerNavigator,DrawerItems} from 'react-navigation'


import Help from './Help'
import MainCSM10 from './MainCSM10'
import CTB1 from './V-Tour/CTB10';


const br = require('../source/images/city.png')
const avt = require('../source/icons/businessman.png')
const user = {
    name: 'Sunny Bui',
    point:'1000 điểm',
    event:'Chương trình ưu đãi'
}
const CustomDrawerContentComponent = (props) => (
    <Container>
            <View 
            style={{
                width:'100%',
                height:'30%',
                // backgroundColor:'red'
            }}>
                <Image
                source={br}
                style={{
                    height:'100%',
                    width:'100%'
                }}/>

                <View style={{
                    height:'100%',
                    width:'100%',
                    position:'absolute',
                    top:0,
                    // backgroundColor:'blue',
                    justifyContent:'center',
                    alignItems:'center',
                }}>
                    <Image
                        source={avt}
                        style={{
                        height:70,
                        width:70,
                        // backgroundColor:'blue',
                        alignSelf:'center'
                    }}
                    />

                    <Text style={{fontSize:20,fontWeight:'bold'}}>{user.name}</Text>
                    <View style={{
                        width:'80%',
                        height:40,
                        // backgroundColor:'red',
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        alignItems:'center'
                    }}>
                        <Text style={{color:mainColor}}>{user.point}</Text>
                        <View style={{backgroundColor:'gray',height:'60%',width:2}}/>
                        <Text style={{color:mainColor}}>{user.event}</Text>
                    </View>
                </View>

            </View>

            <Container>
                    <DrawerItems {...props}/>
            </Container>
    </Container>

)
    
const Drawer = DrawerNavigator({
    MainCSM10:{screen:MainCSM10},
    Help:{screen:Help},
    CTB1:{screen:CTB1}
},{
    initialRouteName:'MainCSM10',
    contentComponent:CustomDrawerContentComponent,
    drawerOpenRoute:'DrawerOpen',
    drawerCloseRoute:'DrawerClose',
    drawerToggleRoute:'DrawerToggle'
})


 export default Drawer
 const {width,height} = Dimensions.get('window')
 const defaultWidth = width-20;
 const mainColor='#008D44'
 const colorTXT = 'white'
 const colorContent='#C0D8BA';
 const colorBorder='#758084'
 const borderLine = 0.5
 const HLine = 55

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    drawerBr:{
        height:'20%',
        width:'100%'
    },
})