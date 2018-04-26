import React, {Component}from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    StatusBar,
    ToastAndroid,
    Image
}from 'react-native'
import {
    Icon,
    Button,
    Header, 
    Container, 
    Content, 
    Left,
    Body
}from'native-base'

export default class SettingScreen extends React.Component{
    

    render(){
        return(
            <Container >
                <Header noShadow>
                    <Left>
                        <Button transparent>
                            <Icon name="ios-menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header No Shadow</Title>
                    </Body>
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
    }
})