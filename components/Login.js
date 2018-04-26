import React, {Component } from 'react'
import {
    View, 
    StyleSheet,
    Image,
    Text,
    TextInput,
    Dimensions,
    TouchableOpacity,
    ToastAndroid,
    StatusBar,
    Modal,
    ScrollView,
    Alert,
    Keyboard
}from 'react-native';

import Logo from './Module/Logo'

import ElevatedView from 'react-native-elevated-view'
import {
    Icon,
    Button,
    Header, 
    Container, 
    Content, 
    Left,
    Body,
    List,
    ListItem,
    Thumbnail,
    Right,
    Toast
}from'native-base'

// import SmartPicker from 'react-native-smart-picker'


var dataSource=[];


export default class Login extends React.Component{

    constructor(props){
        super(props)

        this.state={
            next:'Tiếp stheo',
            Zalo:require('../source/icons/ic_zalo.png'),
            Facebook:require('../source/icons/ic_fb.png'),
            Google:require('../source/icons/ic_gg.png'),
            phone:'',   
            plNumber:'|Số điện thoại',
            modalVisible:false,

            VN : {
                co_cd:'',
                co_nm:'',
                co_nm_en:'',
                crr_cd:'',
                tel_cd:'',
                icon_url:''
            },
            CN : {
                co_cd:'',
                co_nm:'',
                co_nm_en:'',
                crr_cd:'',
                tel_cd:'',
                icon_url:''
            },
            country:'Chọn đất nước của bạn',
            // Coi nhu cai nay get tu Api v
            defaultCOCD:require('../source/images/flat.png'),
            co_cd_default:'',
            dataArray:[],
        }
    }
    handleChange(value: string) {
        this.setState({
            selected: value
        });
    }
    _Next(){

        if(this.state.phone != ''){
            fetch("http://dev.vrada.vn/api/rest/v1/customer-validate-phone", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'api-key':'a21f355a5a8ebf9927ac247836dcfd9477ddff037b62d1558fe06d735eb04f5eee37ff3f04f2c05f02edba1f3728d7426dde567764b62972efd5e673f7cf8a26',
            },
            body: JSON.stringify({
                co_cd: this.state.co_cd_default,
                phone: this.state.phone,
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
            this.props.navigation.navigate("VerifyPhone",{phone:this.state.phone,co_cd:this.state.co_cd_default})
        }else{
            Alert.alert(
                'Thông báo ',
                'Xin vui lòng kiểm tra lại số điện thoại',
                [
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
              )
        }
       
            
    }

    _FaceBookLogin(){
        console.log(
            'co: '+this.state.VN.co_nm_en
        )
    }

    _loginGoogle(){

      }

    componentWillMount(){
        this.setState({modalVisible:false})

        let vn = Object.assign({}, this.state.VN);
        let cn = Object.assign({}, this.state.CN);
        
        let array = Object.assign({},this.state.dataArray);

    fetch("http://dev.vrada.vn/api/rest/v1/masterdata-country", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'api-key':'a21f355a5a8ebf9927ac247836dcfd9477ddff037b62d1558fe06d735eb04f5eee37ff3f04f2c05f02edba1f3728d7426dde567764b62972efd5e673f7cf8a26',
            },
        })
            .then((response) => response.json())
            .then((responseData) => {
                const dataResponse = JSON.stringify(responseData)
                const parsed= JSON.parse(dataResponse);
                dataSource= parsed;

                var length = 0;
                for( var key in dataSource.data ) {

                    this.setState({
                        dataArray: [...this.state.dataArray, dataSource.data[key]]
                    });
                   switch(dataSource.data[key].co_cd){
                    case "VN":{
                        this.setState(prevState => ({
                            VN: {
                                ...prevState.VN,
                                co_cd: dataSource.data[key].co_cd,
                                co_cm:dataSource.data[key].co_cm,
                                co_nm_en:dataSource.data[key].co_nm_en,
                                crr_cd:dataSource.data[key].crr_cd,
                                tel_cd:dataSource.data[key].tel_cd,
                                icon_url:dataSource.data[key].icon_url,// set State o day
                            }
                            
                        }))

                        this.setState({co_cd_default:dataSource.data[key].co_cd})
                        break;                    
                    }
                    case "CN":{
                        this.setState(prevState => ({
                            CN: {
                                ...prevState.CN,
                                co_cd: dataSource.data[key].co_cd,
                                co_cm:dataSource.data[key].co_cm,
                                co_nm_en:dataSource.data[key].co_nm_en,
                                crr_cd:dataSource.data[key].crr_cd,
                                tel_cd:dataSource.data[key].tel_cd,
                                icon_url:dataSource.data[key].icon_url
                            }
                        }))
                        break;                    
                    }
                   }
                }

            })
            .done();
            ToastAndroid.show("Loaded",ToastAndroid.SHORT)
            
    }

    _Country(){
        ToastAndroid.show('URI: '+this.state.VN.icon_url, ToastAndroid.SHORT)
        this.setState({modalVisible:true})
    }
    _handleChooseCountry(country){
        this.setState({modalVisible:false})  
        this.setState({co_cd_default:country})
        ToastAndroid.show(''+country, ToastAndroid.SHORT)      
    }
    render(){
        return(
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"/>
                <Modal
                    animationType="slide"
                    transparent={true}
                    onRequestClose={() => {
                    alert('Modal has been closed.');
                    }}
                    visible={this.state.modalVisible}
                    >
                        <View style={{
                            flex:1,
                            backgroundColor:'black',
                            opacity:0.2
                            
                        }}>
                       <TouchableOpacity onPress={()=>{
                                this.setState({modalVisible:false})
                            }}>
                       <Image
                            
                            style={{
                                tintColor:'white',
                                height:30,
                                width:30
                            }}
                            source={require('../source/icons/backbutton.png')}
                        />
                       </TouchableOpacity>
                        </View>
                        <View style={containerModel}>
                            <Text style={styles.titleChooseCountry}>{this.state.country}</Text>
                           <ScrollView>
                           <LineForm   
                            source={this.state.defaultCOCD}
                            country={this.state.VN.co_nm_en}
                            co_cd={this.state.VN.tel_cd}
                            onPress={()=>{this._handleChooseCountry("VN")}}
                            />
                            <LineForm   
                            source={this.state.defaultCOCD}
                            country={this.state.CN.co_nm_en}
                            co_cd={this.state.CN.tel_cd}
                            onPress={()=>{this._handleChooseCountry("CN")}}
                            />
                            </ScrollView>
                        </View>
                    </Modal>
                <Logo/>
                <View style={{
                }}>
                        {/* View type phonenumber */}
                    <View style={styles.viewPhoneNumber}>
                        <TouchableOpacity 
                            onPress={()=>{this._Country()}}
                            style={styles.viewFlat}>
                            <Image 
                                source={this.state.VN.icon_url}
                                style={styles.iconFLat}
                            />
                        </TouchableOpacity>    
                            <Text style={styles.coFont}>{this.state.co_cd_default}</Text>
                        <TextInput
                            style={styles.textipt}
                            keyboardType='numeric'
                            autoCorrect={false}
                            placeholder={this.state.plNumber}
                            underlineColorAndroid='transparent'
                            onChangeText={(value)=>{this.setState({phone:value})}}
                        />
                    </View>
                    {/* Button Next */}
                    <TouchableOpacity 
                        onPress={()=>{this._Next()}}
                        style={styles.BtnNext}>
                        <Text style={styles.txtButton}>{this.state.next}</Text>
                    </TouchableOpacity>
                    {/* End */}
                </View>
                {/* View Social */}
                <View style={styles.viewSocial}>
                    {/* <SocialIcon
                        source={this.state.Zalo}
                        onPress={()=>ToastAndroid.show('Clicked',ToastAndroid.SHORT)}
                    /> */}
                    <SocialIcon
                        source={this.state.Facebook}
                        onPress={()=>{this._FaceBookLogin()}}
                    />
                    <SocialIcon
                        source={this.state.Google}
                        onPress={this._loginGoogle.bind(this)}
                    />
                </View>
                {/* End */}
            </View>
        );
    }
}
const containerModel={
    bottom:0,
    position:'absolute',
    backgroundColor:'white',
    width: '100%',
    height: 200,
    justifyContent:'center',
    alignItems:'center',
    alignSelf: 'center',
    }
class LineForm extends React.Component{
    render(){
        return(
            <TouchableOpacity
                style={styles.ViewLineForm}
                    onPress={this.props.onPress}>
                <Image
                    source={this.props.source}
                    style={styles.flag}/>    
                <View style={styles.countryForm}>
                    <Text style={styles.txtCountry}>{this.props.country}</Text>
                </View>
                <View style={styles.txtCoCD}>
                    <Text style={{
                        fontSize:23
                    }}>{this.props.co_cd}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

class SocialIcon extends React.Component{
    render(){
        return(
            <TouchableOpacity
                onPress={this.props.onPress}
                style={{
                    marginRight:5,
                    marginLeft:5
                }}
            >
                <Image 
                    style={styles.imageIcon}
                    source={this.props.source}/>
            </TouchableOpacity>
        );
    }
}

const {width,height} = Dimensions.get('window')
const defaultWidth = width-48;
const mainColor='#008D44'

const styles = StyleSheet.create({
    titleChooseCountry:{
        fontSize:23,
        color:'black',
        marginTop:5,
        marginBottom:5
    },
    txtCoCD:{
        height:45,
        width:width*(20/100),
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'red',
        position:'absolute',
        right:10
        
    },
    txtCountry:{
        fontSize:23,
        color:'gray',
        // backgroundColor:'yellow',
        justifyContent: 'center',
        marginLeft:20
    },
    countryForm:{
        height:45,
        width:width*(30/100),
        alignSelf:'center',
        justifyContent:'center',
        marginLeft:10
    },
    flag:{
        height:45,
        width:50,
        // backgroundColor:'pink',
        alignSelf:'center'
    },
    ViewLineForm:{
        height:50,
        width:width-10,
        alignSelf:'center',
        flexDirection:'row',
        marginTop:10
    },
    viewCountryC:{
        backgroundColor:'green',
        flexDirection:'row',
        width:width-50,
        justifyContent:'space-between',
        alignItems:'center',
        height: height*(6/100),
        margin:5,
    },
    imageIcon:{
        height:60,
        width:60
    },
    viewSocial:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft:(width*(15/100)),
        paddingRight:(width*(15/100)),
        marginBottom:20
    },
    txtButton:{
        color:'white',
        fontSize:22,
        fontWeight: 'bold',
        
    },
    BtnNext:{
        backgroundColor:mainColor,
        width:defaultWidth,
        alignSelf: 'center',
        height:50,
        marginTop:10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    textipt:{
        width:defaultWidth - 90,
        fontSize:22,
    },
    viewFlat:{
        padding:5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    coFont:{
        fontSize: 22,
        color:'black',
        marginRight:10,
        marginLeft:5,
        alignSelf: 'center',
        width:40,
    },
    iconFLat:{
        height:25,
        width:35,
        alignSelf: 'center',
        backgroundColor:'blue'
    },
    viewPhoneNumber:{
        flexDirection: 'row',
        alignSelf: 'center',
        // backgroundColor:'blue',
        width:defaultWidth,
        marginTop: 20,
        borderBottomColor:'#CCCCCC',
        borderBottomWidth:1 ,
    },
    logo:{
        height:60,
        width:150,
        alignSelf: 'center',
        marginTop:20
    },
    container:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'space-between',
        flexDirection: 'column',
    }
});
