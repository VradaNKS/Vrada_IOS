import React, {Component} from 'react'

import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ToastAndroid,
    StatusBar,
    Keyboard,
    Alert
}from 'react-native'

import ButtonUpdate from './User/RegisterU'
import SmallLogo from './Module/SmallLogo'

var dataSource=[];
const phone = '';
const co_cd = '';
export default class VerifyPhone extends React.Component{
    constructor(props){
        super(props)
        this.state={
            co_cd:'+84',
            logo:require('../source/icons/logo.png'),
            txt:"SMART TRAFFIC",            
            next:'TIẾP THEO',
            maxLength:11,
            verify:'Nhập mã xác nhận',
            resend:'Gửi lại mã xác thực',
            otp:'',
            checkMess:'',

        }
    }
    _next(){
        if(this.state.otp != ''){
            fetch("http://dev.vrada.vn/api/rest/v1/customer-verify-otp ", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'api-key':'a21f355a5a8ebf9927ac247836dcfd9477ddff037b62d1558fe06d735eb04f5eee37ff3f04f2c05f02edba1f3728d7426dde567764b62972efd5e673f7cf8a26',
            },
            body: JSON.stringify({
                otp: this.state.otp,
            })
        })
            .then((response) => response.json())
            .then((responseData) => {
                const dataResponse = JSON.stringify(responseData)
                const parsed= JSON.parse(dataResponse);
                dataSource= parsed;
                this.setState({checkMess:dataSource.message})
                ToastAndroid.show(""+this.state.checkMess, ToastAndroid.SHORT)  
                switch(dataSource.message){
                    case "ERR-CST-103":{
                        Alert.alert(
                            'Lỗi phát sinh ',
                            'Xin vui lòng kiểm tra lại số điện thoại và mã OTP',
                            [
                              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                              {text: 'OK', onPress: () => console.log('OK Pressed')},
                            ],
                            { cancelable: false }
                          )

                          break;
                    }
                    case "ERR-CST-111":{
                        Alert.alert(
                            'Lỗi phát sinh ',
                            'Xin vui lòng kiểm tra lại số điện thoại và mã OTP',
                            [
                              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                              {text: 'OK', onPress: () => console.log('OK Pressed')},
                            ],
                            { cancelable: false }
                          )

                          break;
                    }
                    case "INFO-CST-101":{
                        this.props.navigation.navigate('RegisterU',{phone:phone,co_cd:co_cd,otp:this.state.otp});
                    }
                    case "INFO-CST-106":{
                        this.props.navigation.navigate('MainCSM10',{phone:phone,co_cd:co_cd,otp:this.state.otp});
                    }
                } 

            })
            .done();

            
        }
        Keyboard.dismiss()
        
    }
    _resend(){
        ToastAndroid.show('ReSend Clicked', ToastAndroid.SHORT)

        fetch("http://dev.vrada.vn/api/rest/v1/customer-validate-phone", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'api-key':'a21f355a5a8ebf9927ac247836dcfd9477ddff037b62d1558fe06d735eb04f5eee37ff3f04f2c05f02edba1f3728d7426dde567764b62972efd5e673f7cf8a26',
            },
            body: JSON.stringify({
                co_cd: co_cd,
                phone: phone,
            })
        })
            .then((response) => response.json())
            .then((responseData) => {
                ToastAndroid.show(
                    "Response Body -> " + JSON.stringify(responseData), ToastAndroid.LONG
                )
            })
            .done();
            Keyboard.dismiss()
            ToastAndroid.show("Waiting...", ToastAndroid.SHORT)
        
    }
    render(){
        const { state } = this.props.navigation;
        phone = state.params.phone;
        co_cd = state.params.co_cd;
        
        return(
            <View style={styles.container}>
            <StatusBar
                backgroundColor="#008D44"
                barStyle="light-content"
            />
                {/* Logo */}
                <View style={styles.viewLogo}>
                    <Image
                        source={this.state.logo}
                        style={styles.logo}
                    />
                    <Text style={styles.txt}>
                        {this.state.txt}
                    </Text>
                </View>
                {/* View type phonenumber */}
                <View style={styles.viewPhoneNumber}>
                    
                    <TextInput
                        style={styles.textipt}
                        keyboardType='numeric'
                        autoCorrect={false}
                        maxLength={this.state.maxLength}
                        placeholder={this.state.verify}
                        underlineColorAndroid='transparent'
                        onChangeText={(value)=>{this.setState({otp:value})}}
                    />
                </View>
                <NextButton
                    onPress={this._next.bind(this)}
                    text={this.state.next}/>
                <ResendButton
                    onPress={this._resend.bind(this)}
                    text={this.state.resend}/>
            </View>
        );
    }
}
class NextButton extends React.Component{
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
class ResendButton extends React.Component{
    constructor(props){
        super(props)
        this.state={
        }
    }
    render(){
        return(
            <TouchableOpacity 
                style ={styles.viewBtnRe}
                onPress ={this.props.onPress}
            >
                <Text style={styles.txtButtonRe}>
                    {this.props.text}
                </Text>
            </TouchableOpacity>
        )
    }
}
const {width,height} = Dimensions.get('window')
const defaultWidth = width-48;
const mainColor='#008D44'
const colorTXT = 'white'
const br = 'white'
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:br,
        flexDirection: 'column',
    },
    viewLogo:{
        alignItems: 'center',
        justifyContent: 'center',
        height:height*(30/100),
    },
    txtButton:{
        color:colorTXT,
        fontWeight: 'bold',
        fontSize:20
    },
    txtButtonRe:{
        color:mainColor,
        fontSize:20
    },
    viewBtnRe:{
        width:width-20,
        height:height*(8/100),
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewBtn:{
        width:width-20,
        height:height*(8/100),
        backgroundColor:mainColor,
        borderRadius:5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:5,
        alignSelf: 'center',
    },
    logo:{
        height:height*(15/100),
        width:height*(15/100),
        alignSelf: 'center',
    },
    txt:{
        color:mainColor,
        fontWeight: 'bold',
        fontSize: 15,
        alignSelf: 'center',
        
    },
    viewPhoneNumber:{
        flexDirection: 'row',
        alignSelf: 'center',
        width:defaultWidth,
        marginTop: 20,
        borderBottomColor:'#CCCCCC',
        borderBottomWidth:1 ,
        marginBottom:10
    },
    viewFlat:{
        paddingLeft:7,
        paddingRight:7,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'gray',
        height:35,
        width:45,
        alignSelf: 'center',
    },
    coFont:{
        fontSize: 22,
        color:'black',
        marginRight:10,
        marginLeft:5,
        alignSelf: 'center',
        width:40,
    },
    textipt:{
        width:defaultWidth - 90,
        fontSize:22,
    },
    iconFLat:{
        height:25,
        width:35,
        alignSelf: 'center',
    },
})