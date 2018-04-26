import React, {Component}from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    StatusBar,
    ToastAndroid,
    TouchableOpacity,
    Image
}from 'react-native'
import {
    Icon,
    Button,
    Header, 
    Container, 
    Content, 
    Left,
    Body,
    Title,
    Right
}from'native-base'

import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
const SECTIONS = [
    {
      title: 'First',
      content: 'Lorem ipsum...'
    },
    {
      title: 'Second',
      content: 'Lorem ipsum...'
    }
  ];


import Maps from './Maps'
import Btn from '../Module/Btn'
export default class CTB11 extends React.Component{
    static navigationOptions={
        drawerIcon:(
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                height:30,
                width:40,
                alignSelf:'center',
            }}>
            <Image
                style={{
                    height:20,
                    width:22,
                    alignSelf: 'center',
                    tintColor:'black'
                }}
                source={require('../../source/icons/ic_mess.png')}/>
            </View>
        ),
        drawer: () => ({
            label: 'CTB11',
        }),
    }
    _renderSectionTitle(section) {
        return (
          <View style={styles.content}>
            <Text>{section.content}</Text>
          </View>
        );
      }
    
    _renderHeader(section) {
    return (
        <View style={styles.header}>
        <Text style={styles.headerText}>{section.title}</Text>
        </View>
    );
    }
    
    _renderContent(section) {
    return (
        <View style={styles.content}>
        <Text>{section.content}</Text>
        </View>
    );
    }

    _acceptLocation(){
        alert('OK')
        this.props.navigation.navigate("CTB10")//Send location data to CTB10 screen 
    }
    render(){
        return(
            <Container >
                <StatusBar 
                backgroundColor="#008D44"
                barStyle='light-content' />
                <Content contentContainerStyle={{
                    flex:1,}}>
                    <Maps/>
                    <Btn
                        text={'XÁC NHẬN'}
                        onPress={()=>{this._acceptLocation()}}
                    />
                </Content>

            </Container>
        );
    }
}



const {width,height} = Dimensions.get('window')
const defaultWidth = width-48;
const mainColor='#008D44'
const colorTXT = 'white'

const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
    },
    header:{
        backgroundColor: mainColor ,
        justifyContent:'center'
    },
})