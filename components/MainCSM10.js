    import React, {Component}from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    StatusBar,
    ToastAndroid,
    Image,
    TextInput,
    ImageBackground,
    TouchableOpacity
}from 'react-native'
import {DrawerNavigator} from 'react-navigation'
import {DrawerItems} from 'react-navigation'
import CardSile from './CardSile'
import Btn from './Module/Btn'
// import Dra from './Drawer/SildeBar'

import IOSPicker from 'react-native-ios-picker';
import Maps from './V-Tour/Maps'

import PickLocation from './Module/PickLocation'
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
    Drawer,
    List,
    ListItem,
    Thumbnail,
}from'native-base'

 class MainCSM10 extends React.Component{
   
    constructor(props){
        super(props)
        this.state={
            booking:'ĐẶT XE',
            to:'',
            from:'',
            toggled: false,            
            selected: undefined,
            cus:'Vận chuyển khách hàng',
            ic_menu: require('../source/icons/ic_menu.png'),
            icCash:require('../source/icons/ic_cash.png'),
            icGift:require('../source/icons/ic_gift.png'),

            payIC:require('../source/icons/ic_cash.png'),
            plPay:'Thanh toán',
            pay:'',

            giftIC:require('../source/icons/ic_gift.png'),
            plGift:'Mã giảm giá',
            gift:'',
            noteIC:require('../source/icons/ic_notepad.png'),
            plDetail:'Hình thức chuyến đi',
            detail:'',

        }
    }
    _addLocation(){
        ToastAndroid.show('Clicked', ToastAndroid.SHORT);
    }
    toggleDrawer() {
        this.state.toggled ? this._drawer.close() : this._drawer.open();
      }
    
    
    closeDrawer(){
        this.setState({toggled:false});
    };
    
    
    openDrawer(){
        this._drawer._root.open()
    };
    
    renderScene(route, navigator){
        switch (route) {
        default: {
            return null;
        }
        }
    }
    
    configureScene(route, routeStack){
        return Navigator.SceneConfigs.PushFromRight
    }
    onValueChange(value) {
        this.setState({
        selected: value
        });
    }
    render(){
        return(
            <View style={{flex:1, backgroundColor:'gray'}}>
                <StatusBar
                        backgroundColor="#008D44"
                        barStyle="light-content"/>
                <Container>
                <Header style={styles.header} noShadow>
                    <Button
                        onPress={()=>{this.props.navigation.navigate('DrawerOpen')}}
                        style={{ 
                            height: '100%', 
                            width: 50,
                            backgroundColor:mainColor,
                            justifyContent:'center',
                            alignItems:'center',
                            position:'absolute',
                            left:5   ,
                            bottom:0,
                            
                        }}
                            >
                            <Image
                                style={{tintColor:'white',height:25,width:25,alignSelf:'center'}}
                                source={this.state.ic_menu}
                            />
                        </Button>
                    <View style={{
                            width:300,
                            justifyContent:'center',
                    }}>
                       <Picker
                        selectedValue={this.state.language}
                        style={{ height: '80%', width: 200, backgroundColor:'white', marginLeft:30 }}
                        onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                            <Picker.Item label={transport[0]} value={transport[0]} />
                            <Picker.Item label={transport[1]} value={transport[1]} />
                            <Picker.Item label={transport[2]} value={transport[3]} />
                        </Picker>
                    </View>
                </Header>
                <View style={styles.container}>
                    <Maps/>
                    <View style={{position:'absolute', height:'100%'}}>
                        <View style={{
                                height:height*(18/100),
                                justifyContent:'center',
                                alignItems:'center',
                                marginBottom:10,
                                width:width,
                            }}>
                            <PickLocation
                                onPress={()=>{this._addLocation()}}
                                PickFrom={(value)=>{this.setState({from:value})}}
                                PickTo={(value)=>{this.setState({to:value})}}
                            />
                        </View>
                    {/* View Pay */}
                        <View style={styles.ContainerForm3}>
                            <View style={styles.col1Form3}>
                                <RowForm3
                                source={this.state.payIC}
                                placeholder={this.state.plPay}
                                onChangeText={(value)=>{this.setState({pay:value})}}
                                />
                            </View>
                            <View style={styles.col2Form3}>
                                <RowForm3
                                source={this.state.giftIC}
                                placeholder={this.state.plGift}
                                onChangeText={(value)=>{this.setState({gift:value})}}
                                />
                            </View>
                            <View style={styles.col3Form3}>
                                <RowForm3
                                source={this.state.payIC}
                                placeholder={this.state.plPay}
                                onChangeText={(value)=>{this.setState({pay:value})}}
                                />
                            </View>
                        </View>
                        <View style={styles.ContainerForm4}>
                            <View style={{
                                width:'10%',
                                // backgroundColor:'blue',
                                height:'100%'
                            }}>
                                <Image
                                source={this.state.noteIC}
                                style={{
                                    marginTop: 10,
                                    alignSelf: 'center',
                                }}
                                />
                            </View>

                            <View style={{
                                width:'90%',
                                // backgroundColor:'green',
                                height:'100%'
                            }}>
                                <TextInput
                                underlineColorAndroid='transparent'
                                placeholder='Ghi chú cho tài xế'
                                style={{
                                    width:'100%',
                                    // backgroundColor:'red',
                                    justifyContent: 'flex-end',
                                }}  
                                />
                            </View>
                        </View>  
                        {/* End Pay */}
                        <View style={{
                            position:'absolute',
                            bottom:0,
                            justifyContent:'space-between'}}>
                        {/* View Silde */}
                        <View style={{
                            alignSelf:'center',
                            height:height*(23/100),
                            width:width,
                        }}>
                            <CardSile/>
                        </View>
                    {/* End Silde */}

                            {/* Button */}
                            <View style={{
                            width:width,
                            justifyContent:'center',
                            alignItems:'center'
                            }}>
                            <Btn
                                text={this.state.booking}
                            />
                            </View>
                            {/* End BTN */}
                    </View>
                    </View>
                </View>
            </Container>
        </View>
        );
    }
}
const br = require('../source/images/city.png');
const brHeader = require('../source/images/city.png')
const avt={
    history:require('../source/icons/ic_his.png'),
    booking:require('../source/icons/ic_booking.png'),
    notifi:require('../source/icons/ic_notification.png'),
    help:require('../source/icons/ic_mess.png'),
    sos:require('../source/icons/ic_sos.png'),
    driver:require('../source/icons/ic_driver.png'),
    about:require('../source/icons/ic_about.png'),
    exit:require('../source/icons/ic_logout.png'),
}


class RowForm3 extends React.Component{
    render(){
        return(
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <View  style = {{
                    width:'37%',
                    alignSelf:'center',
                    // backgroundColor:'pink',
                    justifyContent: 'center',
                    alignItems: 'center',
                }} >
                <Image
                source = {this.props.source}/>
                </View>
                <TextInput
                style={{
                    width:'63%',
                    // backgroundColor:'gray'
                }}
                underlineColorAndroid='transparent'
                placeholder={this.props.placeholder}
                onChangeText={this.onChangeText}
                />
            </View>
        )
    }
}
export default MainCSM10;
const transport = ['Personal','Business','Travel']
const {width,height} = Dimensions.get('window')
const defaultWidth = width-20;
const mainColor='#008D44'
const colorTXT = 'white'
const colorContent='#C0D8BA';
const colorBorder='#758084'
const borderLine = 0.5
const HLine = 55

const styles=StyleSheet.create({
    ContainerForm4:{
        backgroundColor:'white',
        width:defaultWidth,
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
        marginTop: 10,},
    ContainerForm3:{
        backgroundColor:'white',
        width:defaultWidth,
        height:50,
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    col1Form3:{
        width:defaultWidth*(27/100),
        // backgroundColor:'red',
        height:'100%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',
    },
    col2Form3:{
        width:defaultWidth*(30/100),
        // backgroundColor:'blue',
        height:'100%',
        flexDirection:'row',
        justifyContent:'center'
        
        
    },
    col3Form3:{
        width:defaultWidth*(40/100),
        // backgroundColor:'green',
        height:'100%',
        flexDirection:'row',
        justifyContent:'center'
        
    },
    
    touchItem:{
        position:'relative',
        flexDirection:'row',
        height:HLine,
        borderTopWidth:borderLine,
        borderBottomWidth:borderLine,
        borderColor: colorBorder,
        alignItems: 'center',
    },
    list:{
        height:'100%',
        width:'100%',
        justifyContent:'center',
        padding:0,
        
    },
    txtLineBody:{
        fontSize:17,
        color:'black'
    },
    lineBody:{
        // backgroundColor:'green',
        width:200,
        alignSelf: 'center',
    },
    lineRight:{
        // backgroundColor:colorContent,
        width:40
    },
    thumbnail:{
        // backgroundColor:'gray',
        height:30,
        width:32.5,
        alignSelf: 'center',
        tintColor:'black'
    },
    ViewUnder:{
        flexDirection: 'row',
        width:'100%',
        justifyContent: 'space-between',
        marginTop:5,
        alignItems: 'center',
        alignSelf: 'center',
        
    },
    UserName:{
        fontSize: 20,
        color:'black',
        fontWeight: 'bold',
        alignSelf: 'center',
        
    },
    lineHo:{
        color:'black',
        marginLeft:5,
        marginRight: 5,
        alignSelf: 'center',
        
    },
    avtUser:{
        alignSelf: 'center',
        width:90,
        height:90,
    },
    BrImage:{
        width:'100%',
        height:200,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    ViewHeader:{
        width:'100%',
        height:200,
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header:{
        backgroundColor:mainColor,
        flexDirection: 'row',
    },
    icPay:{
        height:25,
        width: 28,
    },
    container:{
        flex:1,
        flexDirection: 'column',
        // backgroundColor:'pink',
        zIndex:0
    },
    
})