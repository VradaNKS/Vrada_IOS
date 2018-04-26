import React, {Component}from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    StatusBar,
    ToastAndroid,
    TouchableOpacity,
    Image,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard
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
    Right,
    Toast
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
var checked = true;
export default class CTB30 extends React.Component{
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

    constructor(props){
        super(props)
        this.state = {
            title1:'Lí do hủy chuyến là vì tôi bận việc đột xuất và không thể đặt lịch như đã hẹn với công ty.',
            title2:'Lí do hủy chuyến là vì tôi bận việc đột xuất và không thể đặt lịch như đã hẹn với công ty.',
            title3:'Lí do hủy chuyến là vì tôi bận việc đột xuất và không thể đặt lịch như đã hẹn với công ty.',
            title4:'Lí do khác',

            noneCricle1:require('../../source/icons/ic_cricle.png'),
            noneCricle2:require('../../source/icons/ic_cricle.png'),
            noneCricle3:require('../../source/icons/ic_cricle.png'),
            noneCricle4:require('../../source/icons/ic_cricle.png'),

            status:true,

            e1:'auto',
            e2:'auto',
            e3:'auto',
            e4:'auto',
            another:'Lý do khác .....',
            dup:false,

            txtButton:'XÁC NHẬN',

            feedback:'',
        }

        
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
    _handleEvent(index,statuss,current){
       
                if(index==1 & statuss==true){
                    this.setState({noneCricle1:require('../../source/icons/ticker.png')})
                    this.setState({e2 : "none"})
                    this.setState({e3 : "none"})
                    this.setState({e4 : "none"})
                    this.setState({status : false})
                }else if(index==1 & statuss==false){
                    this.setState({noneCricle1:require('../../source/icons/ic_cricle.png')})
                    this.setState({e2 : "auto"})
                    this.setState({e3 : "auto"})
                    this.setState({e4 : "auto"})
                    this.setState({status : true})
                }else if(index==2 & statuss==true){
                    this.setState({noneCricle2:require('../../source/icons/ticker.png')})
                    this.setState({e1 : "none"})
                    this.setState({e3 : "none"})
                    this.setState({e4 : "none"})
                    this.setState({status : false})
                }else if(index==2 & statuss==false){
                    this.setState({noneCricle2:require('../../source/icons/ic_cricle.png')})
                    this.setState({e1 : "auto"})
                    this.setState({e3 : "auto"})
                    this.setState({e4 : "auto"})
                    this.setState({status : true})
                }else if(index==3 & statuss==true){
                    this.setState({noneCricle3:require('../../source/icons/ticker.png')})
                    this.setState({e2 : "none"})
                    this.setState({e1 : "none"})
                    this.setState({e4 : "none"})
                    this.setState({status : false})
                }else if(index==3 & statuss==false){
                    this.setState({noneCricle3:require('../../source/icons/ic_cricle.png')})
                    this.setState({e2 : "auto"})
                    this.setState({e1 : "auto"})
                    this.setState({e4 : "auto"})
                    this.setState({status : true})
                }else if(index==4 & statuss==true){
                    this.setState({noneCricle4:require('../../source/icons/ticker.png')})
                    this.setState({e2 : "none"})
                    this.setState({e1 : "none"})
                    this.setState({e3 : "none"})
                    this.setState({status : false})
                }else if(index==4 & statuss==false){
                    this.setState({noneCricle4:require('../../source/icons/ic_cricle.png')})
                    this.setState({e2 : "auto"})
                    this.setState({e1 : "auto"})
                    this.setState({e3 : "auto"})
                    this.setState({status : true})
                }

       
    }
    _handleSend(){
        ToastAndroid.show("What should i do ???"+this.state.feedback, ToastAndroid.LONG)
    }
    render(){
        return(
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <Container >
                 <StatusBar 
                backgroundColor="#008D44"
                barStyle='light-content' />
                <View style={styles.header}>
                    <View style={{
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                    <TouchableOpacity 
                            onPress={() => this.props.navigation.navigate("Home")}
                            transparent>
                            <Image
                                style={{tintColor:'white',marginLeft:10, marginRight:5}} 
                                source={require('../../source/icons/backbutton.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        width:300,
                        position:'relative',
                        left:10,
                        justifyContent:'center',
                        
                    }}>
                        <Text style={{
                            fontWeight:'bold',
                            fontSize:24,
                            color:'white',
                        }}>Hủy chuyến đi</Text>
                    </View>
                </View>

                
                <View style={{
                        flex:1,
                        // backgroundColor:'red',
                }}>

                    <View style={{
                        top:1,
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                    <ItemMy
                        title={this.state.title1}
                        source={this.state.noneCricle1}
                        pointerEvents={this.state.e1}
                        disable={this.state.e1}
                        onPress={()=>{this._handleEvent(1,this.state.status)}}
                    />

                    <ItemMy
                        title={this.state.title2}
                        source={this.state.noneCricle2}
                        pointerEvents={this.state.e2}
                        disable={this.state.e2}
                        onPress={()=>{this._handleEvent(2, this.state.status)}}
                    />

                    <ItemMy
                        title={this.state.title3}
                        source={this.state.noneCricle3}
                        pointerEvents={this.state.e3}
                        disable={this.state.e3}
                        onPress={()=>{this._handleEvent(3, this.state.status)}}
                    />
                    <ItemMyWithInput
                        onChangeText={(value)=>{this.setState({feedback:value})}}
                        placeholder={this.state.another}
                        title={this.state.title4}
                        source={this.state.noneCricle4}
                        pointerEvents={this.state.e4}
                        disable={this.state.e4}
                        onPress={()=>{this._handleEvent(4, this.state.status)}}
                    />
                    </View>

                    <View style={{
                        position:'absolute',
                        bottom:1,
                        alignSelf:'center'
                    }}>
                    <Btn
                        text={this.state.txtButton}
                        onPress={()=>{this._handleSend()}}
                    />
                    </View>
                </View>
            </Container>
            </TouchableWithoutFeedback>
            
        );
    }
}
class ItemMy extends React.Component{
    render(){
        return(
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View pointerEvents={this.props.pointerEvents} style={ContainerForm.view}>
                <View style={ContainerForm.viewLeft}>
                    <Text style={{
                        color:'#686868',
                        fontSize:18,
                    }}>
                        {this.props.title}
                    </Text>
                   
                </View>
                <TouchableOpacity disable = {this.props.disable} onPress={this.props.onPress} style={ContainerForm.viewRight}>
                    <Image
                        style={{
                            height:40,
                            width:40,
                            tintColor:mainColor,
                           
                        }}
                        source={this.props.source}
                    />
                </TouchableOpacity>
            </View>
            </TouchableWithoutFeedback>
            
        );
    }
}

class ItemMyWithInput extends React.Component{
    render(){
        return(
            <View pointerEvents={this.props.pointerEvents} style={ContainerForm.view}>
                <View style={ContainerForm.viewLeft}>
                    <Text style={{
                        color:'#686868',
                        fontSize:18,

                    }}>
                        {this.props.title}
                    </Text>
                    <TextInput
                        onChangeText={this.props.onChangeText}
                        placeholder={this.props.placeholder}
                        style={{
                            width:"100%"
                        }}
                    />
                </View>
                <TouchableOpacity disable = {this.props.disable} onPress={this.props.onPress} style={ContainerForm.viewRight}>
                    <Image
                        style={{
                            height:40,
                            width:40,
                            tintColor:mainColor,
                           
                        }}
                        source={this.props.source}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}
const ContainerForm={
    viewRight:{
        // backgroundColor:'pink',
        alignItems:'center',
        justifyContent:'center',
        width:'20%'
    },
    viewLeft:{
        // backgroundColor:'yellow',
        width:'80%',
        justifyContent:'center',
        alignItems:'center'
    },
    view:{
    backgroundColor:'white',
    width:'94%',
    height:100,
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
    marginTop: 10,
    padding:10,
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
        height:50,
        flexDirection:'row',
        backgroundColor:mainColor,
        width:'100%',
    },
})