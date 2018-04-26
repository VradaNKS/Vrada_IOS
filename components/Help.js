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



export default class Help extends React.Component{
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
                source={require('../source/icons/ic_mess.png')}/>
            </View>
        )
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


    render(){
        return(
            <Container >
                <Header style={styles.header} noShadow>
                    <Left>
                        <TouchableOpacity 
                            onPress={() => this.props.navigation.navigate("Home")}
                            transparent>
                            <Image
                                style={{tintColor:'white'}} 
                                source={require('../source/icons/backbutton.png')} />
                        </TouchableOpacity>
                    </Left>
                    <Body style={{
                        width:30
                    }}>
                        <Text style={{
                            fontWeight:'bold',
                            fontSize:20,
                            color:'white'
                        }}>Trợ giúp</Text>
                    </Body>
                    <Right></Right>
                </Header>
                <Content contentContainerStyle={{
                        flex:1,
                        justifyContent: 'center',
                        alignItems: 'center',
                }}>
                    <Text>Setting Screen</Text>
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