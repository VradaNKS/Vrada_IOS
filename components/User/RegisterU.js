import React, {Component} from 'react'

import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    ToastAndroid,
    StatusBar
}from 'react-native'
import {BoxShadow} from 'react-native-shadow'

export default class RegisterU extends React.Component{
    constructor(props){
        super(props)
        this.state={
            plName:'Họ tên',
            plPhone:'Điện thoại',
            plEmail:'Email',
            plBirthday:'Ngày sinh',
            plAddress:'Địa chỉ',
            plCode:'Mã giới thiệu',
            txtButton:'CẬP NHẬT',
            update:'CẬP NHẬT',
            name:'',
            phone:'',
            email:'',
            birthday:'',
            address:'',
            code:''
        }
    }
    _UpdateInfo(){
        ToastAndroid.show('Pressed Button', ToastAndroid.SHORT)
        this.props.navigation.navigate('MainCSM10','')
    }
    render(){
        
        return(
        <View style={styles.container}>
            <StatusBar
                backgroundColor="#008D44"
                barStyle="light-content"
            />
            <ScrollView>
            <View style={styles.form}>
                    <EditText
                    placeholder={this.state.plName}
                    onChangeText={(value)=>{this.setState({name:value})}}
                />
                    <EditText
                    placeholder={this.state.plPhone}
                    onChangeText={(value)=>{this.setState({phone:value})}}
                />
                    <EditText
                    placeholder={this.state.plEmail}
                    onChangeText={(value)=>{this.setState({email:value})}}
                />
                    <EditText
                    placeholder={this.state.plBirthday}
                    onChangeText={(value)=>{this.setState({birthday:value})}}
                />
                    <EditText
                    placeholder={this.state.plAddress}
                    onChangeText={(value)=>{this.setState({address:value})}}
                />
                    <EditText
                    placeholder={this.state.plCode}
                    onChangeText={(value)=>{this.setState({code:value})}}
                />
            </View>
            </ScrollView>
            <ButtonUpdate
                text={this.state.update}
                onPress={()=>{this._UpdateInfo()}}
            />
            
        </View>
        )
    }
}

class EditText extends React.Component{
    render(){
        const shadowOpt = {
        width:width-18,
        color:"#000",
        border:2,
        radius:10,
        opacity:0.11,
        justifyContent: 'center',
        alignItems: 'center',
        style:{marginVertical:5},
        height:height*(8/100)+6,
            
        }
        return(
            <BoxShadow setting={shadowOpt}>
            <View style={styles.viewEditText}>
                <TextInput
                    style={styles.textinput}
                    underlineColorAndroid='transparent'
                    placeholder={this.props.placeholder}
                    onChangeText={this.props.onChangeText}
                />
            </View>
            
            </BoxShadow>
        );
    }
}

class ButtonUpdate extends React.Component{
    constructor(props){
        super(props)
        this.state={
           
        }
    }
    render(){
        return(
            <TouchableOpacity 
                style ={styles.viewBtn}
                onPress ={this.props.onPress}
            >
                <Text style={styles.txtButton}>
                    {this.props.text}
                </Text>
            </TouchableOpacity>
        )
    }
}
const {width, height} = Dimensions.get('window')

const mainColor = '#00803f'
const colorTXT = 'white'

const styles = StyleSheet.create({
    txtButton:{
        color:colorTXT,
        fontWeight: 'bold',
        fontSize:20
    },
    textinput:{
        width:width-20,
        padding :15,
        backgroundColor: 'white',
        fontSize: 20,
        borderRadius: 5,
        color:'black',

    },
    viewBtn:{
        width:width-20,
        height:height*(8/100),
        backgroundColor:mainColor,
        borderRadius:5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:5
    },
    viewEditText:{
       
    },
    form:{
        marginTop:10,
        justifyContent: 'center',
    },
    container:{
        flex:1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:'white'
    }
})