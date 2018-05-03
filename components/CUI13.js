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
    StatusBar, Image,TouchableWithoutFeedback,Keyboard,Alert
}from 'react-native'
import {BoxShadow} from 'react-native-shadow'
import { 
    Container, Content, Body, Header, Left, Right, Subtitle , Title,
    Button,Icon
}from 'native-base'

var co_cd = ''
var phone = ''
var otp = ''
var fb_id = ''
var google_id = ''
var zalo_id = ''
var dataSource = []
var ref_cd = ''

import DatePicker from 'react-native-datepicker'

export default class CUI13 extends React.Component{
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
            update:'ĐĂNG KÝ',

            name:'MrRS',
            phone:'0869209655',
            email:'nks.tamndt@gmail.com.vn',
            birthday:'29-05-1998',
            address:'222 Lê Văn Sĩ, P.14, Q3',
            code:'VRADA 797997',

            dname:'',
            dphone:'',
            demail:'',
            dbirthday:'',
            daddress:'',
            dcode:'',
        }
    }
    _RegisterAccount(){
        // ToastAndroid.show('Pressed Button', ToastAndroid.SHORT)
        // this.props.navigation.navigate('MainCSM10','')
        if(this.state.dname == '' && this.state.dphone == '' && this.state.demail=='' && this.state.dbirthday=='' && this.state.daddress == ''){
            Alert.alert(
                'Thông báo',
                'Vui lòng điền đầy đủ thông tin',
                [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
              )
        }else{
            Alert.alert(
                'Dữ liệu lấy được',
                'Name: '+ this.state.dname + '\n' +
                'Phone: '+ phone + '\n' +
                'Co CD: ' + co_cd + '\n' +
                'Date: '+ this.state.dbirthday + '\n' +
                'Address: '+ this.state.daddress + '\n' +
                'Email: '+ this.state.demail + '\n' +
                'Code: '+ this.state.dcode + '\n',
                [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
            )
            this.props.navigation.navigate('CSM10',{})
            // fetch("http://dev.vrada.vn/api/rest/v1/customer-register", {
            //     method: 'POST',
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json',
            //         'api-key':'a21f355a5a8ebf9927ac247836dcfd9477ddff037b62d1558fe06d735eb04f5eee37ff3f04f2c05f02edba1f3728d7426dde567764b62972efd5e673f7cf8a26',
            //     },
            //     body: JSON.stringify({
            //         co_cd: co_cd,
            //         phone: phone,
            //         otp: otp,
            //         name: this.state.dname,
            //         email: this.state.demail,
            //         gender: '',
            //         dob: this.state.dbirthday,
            //         ref_cd: ref_cd,
            //         facebook_id: fb_id,
            //         google_id: google_id,
            //         zalo_id : zalo_id,
            //         device_id : ''
    
            //     })
            // })
            //     .then((response) => response.json())
            //     .then((responseData) => {
            //         const dataResponse = JSON.stringify(responseData)
            //         const parsed= JSON.parse(dataResponse);
            //         dataSource= parsed;
            //         alert(dataSource.user)
            //     })
            //     .done();
        }
        

    }
    render(){
        const {state} = this.props.navigation
        return(
    <TouchableWithoutFeedback>
    <Container>
            <Header style = {{backgroundColor:mainColor}}>
                <Left>
                    <Button transparent >
                        <Icon style={{color:'white'}} name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title style={{color:'white',fontWeight:'bold'}}>Đăng ký thông tin</Title>
                </Body>
                <Right />
            </Header>

            <View style={styles.container}>
                <ScrollView>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.form}>
                        <EditText
                        label={this.state.plName}
                        placeholder={this.state.name}
                        onChangeText={(value)=>{this.setState({dname:value})}}/>
                        <EditText
                        keyboardType='phone-pad'
                        label={this.state.plPhone}
                        placeholder={this.state.phone}
                        onChangeText={(value)=>{this.setState({dphone:value})}}/>

                        <PickerDate
                        date={this.state.birthday}
                        label={this.state.plBirthday}
                        onDateChange={(date) => {
                            this.setState({birthday: date})
                            this.setState({dbirthday: date})
                        }}
                        />
                        
                        <EditText
                        label={this.state.plAddress}
                        placeholder={this.state.address}
                        onChangeText={(value)=>{this.setState({daddress:value})}}/>
                        <EditText
                        keyboardType='email-address'
                        label={this.state.plEmail}
                        placeholder={this.state.email}
                        onChangeText={(value)=>{this.setState({demail:value})}}/>
                        <EditText
                        label={this.state.plCode}
                        placeholder={this.state.code}
                        onChangeText={(value)=>{this.setState({dcode:value})}}/>    

                    </View>
                    </TouchableWithoutFeedback>
                </ScrollView>
                    <ButtonUpdate
                        text={this.state.update}
                        onPress={()=>{this._RegisterAccount()}}
                    />
                </View> 
        </Container>
    </TouchableWithoutFeedback>
        )
    }
}
class PickerDate extends React.Component{
    render(){
        return(
            <View style={styles.viewEditText}>
            <Text style={{color:'gray',}}
                >{this.props.label}</Text>
            <View style={{
               borderBottomColor: colorBorder,
                borderBottomWidth: 1.5,
                marginBottom:5
            }}>
            <DatePicker
                style={{
                
                }}
                date={this.props.date}
                mode="date"
                placeholder={this.props.placeholder}
                format="DD-MM-YYYY"
                minDate="2016-05-01"
                maxDate="2029-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                showIcon={false}
                customStyles={{
                dateInput: {
                   borderWidth:0,
                   alignItems:'flex-start'
                },
                placeholderText:{},
                dateTouchBody:{
                    width:width-20
                },
                dateText:{
                    fontSize:20,
                }
                // ... You can check the source to find the other keys.
                }}
                onDateChange={this.props.onDateChange}
            />
            </View>
            </View>
        )
    }
}
class EditText extends React.Component{
    render(){
       
        return(
            <View style={styles.viewEditText}>
                <Text
                    style={{
                        color:'gray',
                    }}
                >{this.props.label}</Text>
                <TextInput
                    keyboardType={this.props.keyboardType}
                    style={styles.textinput}
                    placeholderTextColor="#2E2E2E"
                    placeholder={this.props.placeholder}
                    onChangeText={this.props.onChangeText}
                />
            </View>
            
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
const colorBorder = '#D8D8D8'
const styles = StyleSheet.create({
    txtButton:{
        color:colorTXT,
        fontWeight: 'bold',
        fontSize:20
    },
    textinput:{
        width:width-20,
        paddingTop:5,
        paddingBottom: 5,
        fontSize: 20,
        color:'black',
        borderBottomColor: colorBorder,
        borderBottomWidth: 1.5,
        marginBottom:5
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
       marginBottom:10,
    },
    form:{
        marginTop:10,
        justifyContent: 'center',
    },
    container:{
        flex:1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:'white',
        paddingTop:20
    }
})