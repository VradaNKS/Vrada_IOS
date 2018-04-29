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
    TextInput,TouchableWithoutFeedback,Keyboard,
    ScrollView,Alert
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
    Picker,
    Form,
    
}from'native-base'

import Btn from '../Module/Btn'
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import FormPicker from '../Module/FormPicker'
import SimplePicker from 'react-native-simple-picker';

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

var status = ''
var fromLat =  ''
var fromLong = ''
var addFrom ='Điểm đón',addTo='Điểm đến'
var fromNum = '',
 fromStreet ='',
 fromWard = '',
 fromDistrict = '',
 fromProvince ='',
 fromCountry = ''

var toLat = ''
var toLong = ''

var toNum = '',
 toStreet ='',
 toWard = '',
 toDistrict = '',
 toProvince ='',
 toCountry = ''

var request=''

var lat= ''
var long =''
var num = '',street='',ward='',district='',province='',country=''
var id = ''
var route_no = ''

const TypeLabel = ['Personal', 'Business', 'Travel']
var borderOneWay = 1.5
var colorOneWay = 'gray'

var borderReturn = 1.5
var colorReturn = 'gray'

var opacityBackDay = 1
export default class CTB10 extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            vtour:'V-tour',
            icGreen:require('../../source/icons/ic_location_yellow.png'),
            icRed:require('../../source/icons/ic_location_pink.png'),
            icYellow:require('../../source/icons/ic_location_yellow.png'),
            plFrom1:'Nhập địa chỉ của bạn',
            plFrom2:'Nhập điểm đến',
            plFrom3:'Nhập điểm đến 2',
            
            fromDate:'2018-08-23',
            backDate:'2018-10-30',
            fromTime:'08:00:00',
            backTime:'03:00:00',

            line1:'',
            line2:'',
            line3:'',

            payIC:require('../../source/icons/ic_cash.png'),
            plPay:'Thanh toán',
            pay:'',

            giftIC:require('../../source/icons/ic_gift.png'),
            plGift:'Mã giảm giá',
            gift:'',

            detailIC:require('../../source/icons/ic_notepad.png'),
            plDetail:'Hình thức chuyến đi',
            detail:'',

            noteIC:require('../../source/icons/ic_notepad.png'),
            plNote:'Ghi chú cho tài xế',
            note:'',
            selectedTransport:'Chọn xe',
            selectedType:'Phân khúc',
            backDayChoosed:'auto',
           

        }
    }
    
    componentWillMount(){

        var {state}=this.props.navigation
        request = state.params.answer
        lat = state.params.lat
        long = state.params.long
        num = state.params.num
        street = state.params.street
        ward = state.params.ward
        district = state.params.district
        province = state.params.province
        country = state.params.country

        switch(request){
            case 'from':{
                fromLat = lat
                fromLong = long 
                addFrom = num + ', '+ street+', '+ ward + ', '+ district + ', '+ province + ', '+ country

                break;
            }
            case 'to':{
                toLat = lat
                toLong = long 
                addTo = num + ', '+ street+', '+ ward + ', '+ district + ', '+ province + ', '+ country
                
                break;
            }
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
    _handleChoose(choose){
        

        switch(choose){
            case 'from':{
                this.props.navigation.navigate('CTB11',{request:'from'})
                break;
            }
            case 'to':{
                this.props.navigation.navigate('CTB11',{request:'to'})
                break;
            }
        }

    }
      _handleTouchLocation(){
        setTimeout(()=>{
            fetch("http://dev.vrada.vn/api/rest/v1/txn-tour-booking", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'api-key':'a21f355a5a8ebf9927ac247836dcfd9477ddff037b62d1558fe06d735eb04f5eee37ff3f04f2c05f02edba1f3728d7426dde567764b62972efd5e673f7cf8a26',
                },
                body: JSON.stringify({
                    srv_id:id,
                    pck_addr:addFrom,
                    pck_lat:fromLat,
                    pck_lng:fromLong,                    
                    drf_addr:addTo,
                    drf_lat:toLat,
                    drf_lng:toLong,
                    location:province,
                    route_no:1,
                    start_date:this.state.fromDate+'T'+this.state.fromTime,
                    end_date:this.state.backDate+'T'+this.state.backTime,
                    booking_class:this.state.selectedTransport,
                    ride_class:'Cash',
                    vehicle_class:this.state.selectedType,
                    promo_cd:this.state.gift,
                    payment_method:'Cash',
                    seat_cd:this.state.transportLabel,
                    cust_notes:this.state.note
                })
            })
            .then((response) => response.json())
            .then((responseData) => {
                ToastAndroid.show(
                    "Response Body -> " + JSON.stringify(responseData), ToastAndroid.LONG
                )
            })
            .done();
        },1)
        
      }
      _handleRideClass(choose){
        if(choose == 'Oneway'){
            alert('ONE')
            this.setState({backDayChoosed:'none'})
            opacityBackDay=0.3
            colorOneWay= mainColor
            borderOneWay = 3
            colorReturn = 'gray'
            borderReturn = 1.5

        }else if(choose == 'Return'){
            alert('TOW')
            this.setState({backDayChoosed:'auto'})
            opacityBackDay=1
            colorReturn = mainColor
            borderReturn = 3

            colorOneWay = 'gray'
            borderOneWay = 1
        }

    }
    _handleTransport(transportLabel){
            this.setState({
                selectedTransport: transportLabel,
            });
            switch(transportLabel){
                case '4SEAT':{
                    id = 1
                    break;
                }
                case '7SEAT':{
                    id = 2
                    break;
                }
            }
            alert('id: '+ id)
    }
    _handleType(type){
        this.setState({selectedType:type})
    }
    render(){
        return(
        <TouchableWithoutFeedback>
            <Container >
                <StatusBar 
                backgroundColor="#008D44"
                barStyle='light-content' />
                <Header style={styles.header} noShadow>
                    <Left>
                        <TouchableOpacity 
                            onPress={() => {this._handleChoose('from')}}
                            transparent>
                            <Image
                                style={{tintColor:'white'}} 
                                source={require('../../source/icons/backbutton.png')} />
                        </TouchableOpacity>
                    </Left>
                    <Body style={{
                        width:30
                    }}>
                        <Text style={{
                            fontWeight:'bold',
                            fontSize:20,
                            color:'white'
                        }}>{this.state.vtour}</Text>
                    </Body>
                    <Right></Right>
                </Header>

                
                <Content contentContainerStyle={{
                        flex:1,
                        backgroundColor:'white'
                }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <ScrollView >
                    <View style={styles.ContainerForm}>

                        <View style={styles.viewLeft}>
                            <Image
                                source={this.state.icGreen}
                                style={styles.icPickGreen}
                            />

                            <View style={{
                                alignSelf:'center',
                            }}>
                                <View style = {styles.myDot}/>
                                <View style = {styles.myDot}/>
                                <View style = {styles.myDot}/>
                            </View>

                            <Image
                                source={this.state.icRed}
                                style={styles.icPickRed}
                            />

                        </View>
                        <View style={styles.viewRight}>
                               
                            <View style={styles.ViewInputLocation}>
                                <TouchableOpacity onPress={()=>{this._handleChoose('from')}}>
                                    <Text style={styles.txtinputLine1}>
                                        {addFrom}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                                <View
                                    style={{
                                        width:'100%',
                                        height:1,
                                        backgroundColor:'gray',
                                        marginTop:5,
                                        marginBottom:5
                                    }}
                                />
                            <View style={styles.ViewInputLocation}>
                                <TouchableOpacity onPress={()=>{this._handleChoose('to')}}>
                                    <Text style={styles.txtinputLine1}>
                                        {addTo}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                                
                         
                        </View>
                        </View>


                        {/* Insert Form 2 in here */}
                        <View style={{
                            // backgroundColor:'red',
                            width:'100%',
                            justifyContent:'center',
                            alignItems:'center',
                            marginTop:10,
                            marginBottom:15
                        }}>
                            <FormPicker
                                onSubmitTransport={(transportLabel)=>{this._handleTransport(transportLabel)}}
                                onSubmitType={(type) => {this._handleType(type)}}
                                placeholderPickerTrans={this.state.selectedTransport}
                                placeholderPickerType={this.state.selectedType}

                                styleOneRide = {line2_r1()}
                                styleReturn = {line2_r2()}
                                styleToView = {line3_r3()}
                                onPressOneWay = {()=>{this._handleRideClass('Oneway')}}
                                onPressReturn = {()=>{this._handleRideClass('Return')}}
                                pointerEventsToView={this.state.backDayChoosed}
                                dateFromDay={this.state.fromDate}
                                placeholderFromDay={this.state.fromDate}
                                onDataChangeFromDay={(date)=>{this.setState({fromDate:date})}}
                                dateHourFromDay={this.state.fromTime}
                                placeholderHourFromDay={this.state.fromTime}
                                onDataChangeHourFromDay={(time)=>{this.setState({fromTime:time})}}
                                
                                dateBackDay={this.state.backDate}
                                placeholderBackDay={this.state.backDate}
                                onDataChangeBackDay={(date)=>{this.setState({backDate:date})}}
                                dateHourBackDay={this.state.backTime}
                                placeholderHourBackDay={this.state.backTime}
                                onDataChangeHourBackDay={(time)=>{this.setState({backTime:time})}}
                            />
                        </View>                
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
                                <TouchableOpacity 
                                style={{justifyContent:'center',alignItems:'center',flexDirection:'row'}}
                                onPress={() => {
                                    this.refs.picker.show();
                                }}>
                                <View  style = {{
                                    width:'37%',
                                    alignSelf:'center',
                                    // backgroundColor:'pink',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }} >
                                    <Image
                                        source={this.state.detailIC}
                                        style={{height:20,width:20,alignSelf:'center'}}
                                    />
                                </View>
                                <Text 
                                    style={{width:'63%', color:'gray'}}>{this.state.plDetail}</Text>
                                </TouchableOpacity>

                                <SimplePicker
                                ref={'picker'}
                                options={TypeLabel}
                                onSubmit={(value)=>{this.setState({plDetail:value})}}
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
                                    width:30,
                                    height:30,
                                }}
                                />
                            </View>

                            <View style={{
                                width:'90%',
                                // backgroundColor:'green',
                                height:'100%'
                            }}>
                                <TextInput
                                placeholder='Ghi chú cho tài xế'
                                onchangeText={(value)=>{this.setState({note:value})}}
                                multiline={true}
                                style={{
                                    marginTop: 10,
                                    width:'90%',
                                    justifyContent: 'flex-end',
                                    fontSize:18,
                                }}  
                                />
                            </View>
                        </View> 

                        <View style={{
                            marginTop:10,
                        }}>
                        <Btn
                            onPress={()=>{
                                this._handleTouchLocation()
                            }}
                            text='ĐẶT XE'/> 
                        </View>
                    </ScrollView>      

                </TouchableWithoutFeedback>
                </Content>

            </Container>
            </TouchableWithoutFeedback>
            
        );
    }
}
line2_r2 = function(options){
    return{
        width:'50%',
        height:'100%',
        justifyContent:'center',
        alignItems: 'center',
        borderBottomColor:colorReturn,
        borderBottomWidth:borderReturn
    }
}
line3_r3 = function(options){
    return{
        height:'100%',
        width:'45%',
        flexDirection: 'row',
        opacity:opacityBackDay,
    }
}
line2_r1 = function(options){
    return{
        width:'50%',
        height:'100%',
        justifyContent:'center',
        alignItems: 'center',
        borderBottomColor:colorOneWay,
        borderBottomWidth:borderOneWay
    }
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
                style={{height:20,width:20}}
                source = {this.props.source}/>
                </View>
                <TextInput
                style={{
                    width:'63%',
                    // backgroundColor:'gray'
                }}
                placeholderTextColor={'gray'}
                placeholder={this.props.placeholder}
                onChangeText={this.onChangeText}
                />
            </View>
        )
    }
}
const contentContent = StyleSheet.create({
    line2_3_r1:{
        width:'15%',
        height:'100%',
        // backgroundColor:'red',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    line2_3_r1_l1:{
        color:colortext,
        fontSize:14,
        fontWeight:'bold',
        marginBottom:5,
    },
    line2_3_r1_l2:{
        width:35,
        height:30,
        alignSelf:'center'
    },

    line2_3_r2:{
        width:'30%',
        height:'100%',
        // backgroundColor:'green',
        justifyContent:'center',
        paddingLeft:10,
        
    },
    line2_3_r2_l1:{
        color:colorDataTime,
        fontSize:18,
    },
    line2_3_r2_l2:{
        width:'90%',
        height:0.5,
        backgroundColor:colorDataTime
    },
    line2_3_r2_l3:{
        color:colorDataTime,
        fontSize:18,
    },

    line2_3_r3:{
        width:'10%',
        height:'100%',
        // backgroundColor:'pink',
        justifyContent:'center',
        alignItems:'center'
    },
    line2_3_r3TXT:{
        fontSize:16,
        color:colortext,

    },
    line2_3_r4:{
        width:'15%',
        height:'100%',
        // backgroundColor:'yellow',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    line2_3_r4_l1:{
        color:colortext,
        fontSize:14,
        fontWeight:'bold',
        marginBottom:5,
        justifyContent:'center',
        alignItems:'center',
        
    },
    line2_3_r4_l2:{
        width:35,
        height:30,
        alignSelf:'center'
    },

    line2_3_r5:{
        width:'30%',
        height:'100%',
        // backgroundColor:'gray',
        justifyContent:'center',
        paddingLeft:10,
    },
    line2_3_r5_l1:{
        color:colorDataTime,
        fontSize:18,
    },
    line2_3_r5_l2:{
        width:'90%',
        height:0.5,
        backgroundColor:colorDataTime
    },
    line2_3_r5_l3:{
        color:colorDataTime,
        fontSize:18,
    },
    line2_2TXT:{
        fontSize:18
    },
    icLine2_2:{
        height:30,
        width:37
    },
    line2_1_r2:{
        width:'48%',
        // backgroundColor:'pink',
        borderBottomWidth:0.5,
        borderColor:colorLine,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
        
    },
    line2_1_r1TXT:{
        alignSelf:'center',
        fontSize:18,
        marginLeft:10
    },
    line2_1_r1:{
        width:'48%',
        // backgroundColor:'pink',
        borderBottomWidth:0.5,
        borderColor:colorLine,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
        
    },
    line2_2_r1:{
        width:'50%',
        borderBottomWidth:3,//Should set variable to hanlde API
        borderColor:mainColor,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
        
    },
    line2_2_r2:{
        width:'50%',
        borderBottomWidth:1,//Should set variable to hanlde API
        borderColor:colorLine,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
        
    },
    line2_1:{
        width:'100%',
        height:40,
        paddingLeft:10,
        paddingRight:10,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    line2_2:{
        width:'100%',
        height:60,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    line2_3:{
        width:'100%',
        height:100,
        // backgroundColor:'blue',
        paddingLeft:10,
        paddingRight:10,
        flexDirection:'row'
    },
    line1:{
        width:'100%',
        // backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
    },
    line2:{
        backgroundColor:'white',
        width:'96%',
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
        flexDirection:'column',
        alignSelf: 'center',
        zIndex:1
        },
    container:{
        height:200,
        width:width,
        zIndex:0,
        // backgroundColor:'pink',
        marginTop:-50,
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
        height:90,
        width:90,
    },
})
const colortext = "gray"
const colorDataTime = "#333333"
const colorLine = "#686868"

const {width,height} = Dimensions.get('window')
const defaultWidth = width-30;
const mainColor='#008D44'
const colorTXT = 'white'
const btmLineGo = 0;
const btmLineBoth = 0;
const styles=StyleSheet.create({
    ViewInputLocation:{
        height:'30%',
        width:'100%',
        // backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center'
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
    txtChoiceLane:{
        color:mainColor,
        fontSize:20
    },
    viewGoLane:{
        backgroundColor:'white',
        width:(defaultWidth/2)-2,
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor:mainColor,
        borderBottomWidth:btmLineBoth
    },
    viewBothLane:{
        backgroundColor:'white',
        width:(defaultWidth/2)-2,
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor:mainColor,
        borderBottomWidth:btmLineBoth
    },
    containerLine1:{
        height:40,
        width:defaultWidth,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    containerLine2:{
        height:80,
        width:defaultWidth,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        // backgroundColor:'blue'
    },
    containerPicker1:{
        borderBottomWidth:0.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:5

    },
    containerPicker2:{
        borderBottomWidth:0.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
    },
    picker:{ 
        width: ((defaultWidth/2)-10), 
        borderBottomWidth:0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ContainerForm:{
        backgroundColor:'white',
        flexDirection:'row',
        width:defaultWidth,
        height:120,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 1,
        alignSelf: 'center',
        marginTop:10
    },
   
    ContainerForm3:{
        backgroundColor:'white',
        flexDirection:'row',
        width:defaultWidth,
        height:50,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 1,
        alignSelf: 'center',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
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
        marginTop: 10,
    },
    txtinputLine1:{
        width:defaultWidth-60,
        fontSize:20,
     
        // backgroundColor:'red',
        alignItems:'center',
        
    },
    txtinputLine2:{
        width:defaultWidth-60,
        fontSize:20,
        marginTop:5,
        marginBottom: 5,
        // backgroundColor:'yellow',
        alignItems:'center',
        
        
    },
    txtinputLine3:{
        width:defaultWidth-60,
        fontSize:20,
        // backgroundColor:'blue',
        alignItems:'center',
        
        
        
    },
    viewRight:{ 
        backgroundColor:'white',
        flexDirection: 'column',
        width:defaultWidth-60,
        justifyContent: 'center',
        alignItems: 'center',
        height:'100%'
    },
    viewLeft:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white',
        width:40
    }, 
    icPickGreen:{
        tintColor:'green',
        alignSelf: 'center',
        width:30,
        height:30,
    },
    icPickRed:{
        tintColor:'red',
        alignSelf: 'center',
        width:30,
        height:30,
    },
    icPickYellow:{
        tintColor:'yellow',
        alignSelf: 'center',
        width:30,
        height:30,
    },
    myDot:{
        margin:3,
        height:5,
        width:5,
        backgroundColor:'#848484',
        alignSelf: 'center',
        borderRadius:100
    },
    container:{
        flex:1,
        flexDirection: 'column',
        backgroundColor:'white',
        
    },
    header:{
        backgroundColor: mainColor ,
        justifyContent:'center'
    },
})