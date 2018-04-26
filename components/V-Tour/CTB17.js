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
import Btn from '../../components/Module/Btn'
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



export default class CTB17 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            defaultAvt:require('../../source/icons/businessman.png'),
            icCall:require('../../source/icons/ic_call_green.png'),
            icMess:require('../../source/icons/ic_chat_bubble.png'),
            name:'Nguyễn Thanh Hùng',
            car:'Xe Toyota Camry',
            license:'153.28-34',

            txtButton:'SOS'
        }
    }
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

    _handle(){
        ToastAndroid.show("What should i do ????", ToastAndroid.SHORT)
    }
    render(){
        return(
            <Container >
                <StatusBar 
                backgroundColor="#008D44"
                barStyle='light-content' />
                <View style={styles.header}>
                    <View style={{
                        justifyContent:'center',
                        alignItems:'center',
                        alignSelf:'center'
                    }}>
                    <TouchableOpacity 
                            onPress={() => this.props.navigation.navigate("Home")}
                            transparent>
                            <Image
                                style={{tintColor:'white', marginLeft:10,marginRight:5}} 
                                source={require('../../source/icons/backbutton.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        width:300,
                        alignSelf:'center',
                        marginLeft:10
                    }}>
                        <Text style={{
                            fontWeight:'bold',
                            fontSize:24,
                            color:'white',
                        }}>Tài xế đang đến</Text>
                    </View>
                </View>
                    <Content contentContainerStyle={{
                        flex:1,
                        justifyContent: 'center',
                        alignItems: 'center',
                }}>
                    <View style={{
                        width:defaultWidth,
                        borderRadius:10,
                        position:'absolute',
                        bottom:20
                    }}>
         
                        <View style={infoDriver.container}>
                            <View style={{
                                marginTop:50,
                                width:'100%',
                                // backgroundColor:'red',
                                justifyContent:'center',
                                alignItems:'center',
                                
                            }}>
                                <Text style={infoDriver.name}>{this.state.name}</Text>
                                <Text style={infoDriver.car}>{this.state.car}</Text>
                                <Text style={infoDriver.license}>{this.state.license}</Text>

                                 
                            </View>
                            
                        </View>
                        

                        <Btn
                            onPress={()=>{}}
                            text={this.state.txtButton}
                            />
                    </View>

                    <View style={{
                        borderRadius:100,
                        height:100,
                        width:100,
                        alignSelf:'center',
                        backgroundColor:'white',
                        borderRadius:100,
                    }}>
                    <Image
                        style={infoDriver.avt}
                        source={this.state.defaultAvt}/>
                    </View>
                   
                </Content>

            </Container>
        );
    }
}



const {width,height} = Dimensions.get('window')
const defaultWidth = width-20;
const mainColor='#008D44'
const colorTXT = 'white'

const infoDriver = StyleSheet.create({
    btn:{
        height:70,
        width:80,
        justifyContent:'center',
        alignItems:'center',
        marginRight:10
        
    },
    ic:{
        tintColor:mainColor,
        height:40,
        width:40,
    },
    viewButton:{
        width:'40%',
        height:50,
        // backgroundColor:'yellow',
        flexDirection:'row',
        justifyContent:'center',
    },
    name:{
        fontSize:22,
        fontWeight:'bold'
    },
    car:{
        fontSize:28,
        fontWeight:'bold'
    },
    license:{
        fontSize:26
    },
    avt:{
        height:100,
        width:100,
       
    },
    container:{
        backgroundColor:'white',
        width:'100%',
        height:200,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
        borderBottomWidth: 2,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 1,
        flexDirection:'row',
        alignSelf: 'center',
        padding:10,
        zIndex:1,
        marginBottom:10,
        }
})

const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
    },
    header:{
        height:80,
        flexDirection:'row',
        backgroundColor:mainColor,
        width:'100%',
    },
})