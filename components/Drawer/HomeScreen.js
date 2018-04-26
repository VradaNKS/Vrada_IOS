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
    Title,
    Body,
    Button, 
    Header, 
    Right,
    Container, 
    Content, 
    Left,
    StyleProvider,
    Picker,
    Form,
    Drawer
}from'native-base'
import MainCSM10 from '../MainCSM10'

export default class HomeScreen extends React.Component{
    static navigationOptions={
        drawerIcon:(
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft:20,
                marginRight:20,
                height:40,
                width:40,
                alignSelf:'center'
            }}>
            <Image
                style={{
                    height:25,
                    width:27,
                    alignSelf: 'center',
                    tintColor:'black'
                }}
                source={require('../../source/icons/ic_his.png')}/>
                </View>
        )
    }
    constructor(props) {
        super(props);
        this.state = {
          selected: undefined,
          cus:'Vận chuyển khách hàng'
        };
      }
      onValueChange(value) {
        this.setState({
          selected: value
        });
      }
    render(){
        return(
            <Container >
                <Header style={styles.header} noShadow>
                    <Left>
                        <Button 
                        style={{ 
                            height: 30, 
                            width: 30,
                            
                        }}
                            onPress={()=>this.props.navigation.navigate('DrawerOpen')}
                            transparent>
                            <Icon name="ios-menu" />
                        </Button>
                    </Left>
                    <Body style={{
                            borderRadius:5,
                            backgroundColor:'white' ,
                            justifyContent:'center',
                            alignItems:'center',
                            marginRight:'20%'
                            
                    }}>
                        <Picker
                        selectedValue={this.state.language}
                        style={{ 
                            height: '60%', 
                            width: '90%',
                        }}
                        onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                            <Picker.Item label={this.state.cus} value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                    </Body>
                </Header>
                <Content contentContainerStyle={{
                        flex:1,
                        justifyContent: 'center',
                        alignItems: 'center',
                }}>
                    <MainCSM10/>
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    header:{
        backgroundColor: mainColor 
    },
})