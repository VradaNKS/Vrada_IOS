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
import CSM10 from './CSM10'
import Drawer from 'react-native-drawer'


const br = require('../source/images/city.png')
const avt = require('../source/icons/businessman.png')
const user = {
    name: 'Sunny Bui',
    point:'1000 điểm',
    event:'Chương trình ưu đãi'
}
class ControlPanel extends React.Component{
    render(){
        return(
            <View>
                <Text>Drawer</Text>
            </View>
        )
    }
}
 export default class MyDrawer extends React.Component{
    closeControlPanel = () => {
        this._drawer.close()
      };
    openControlPanel = () => {
        this._drawer.open()
    };

     render(){
         return(
             <Drawer
                ref={(ref) => this._drawer = ref}
                content={<ControlPanel />}

             >
             </Drawer>
         )
     }
 }
 
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