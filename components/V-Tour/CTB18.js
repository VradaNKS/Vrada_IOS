import React, {Component}from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    StatusBar,
    ToastAndroid,
    TouchableOpacity,
    Image,ScrollView
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



export default class CTB18 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            brCover:require('../../source/images/cover.png'),
            icChair:require('../../source/icons/chair.png'),
            icMess:require('../../source/icons/ic_chat_bubble.png'),
            name:'Nguyễn Thanh Hùng',
            car:'Xe Toyota Camry',
            license:'153.28-34',
            defaultAvt:require('../../source/icons/businessman.png'),
            txtButton:'SOS',
            transport:'xe 4 chỗ',
            service:'Personal',
            oneLaneIC:require('../../source/icons/ic_cashW.png'),
            bothLaneIC:require('../../source/icons/ic_cashW.png'),
            oneLaneTXT:'Một chiều',
            bothLaneTXT:'Khứ hồi',
            icCalender:require('../../source/icons/calendar.png'),
            fromDate:'01/02/2018',
            toDate:'03/02/2018',
            fromTime:'08:00 am',
            toTime:'03:00 am',
            icFrom:require('../../source/icons/ic_from.png'),
            icTo:require('../../source/icons/ic_location_pink.png'),
            fromAddress:'222 Lê Văn Sỹ, P.14, Q.3, Tp.HCM',
            toAddress:'76 Lê Hồng Phong, P14, Q.10, Tp.HCM',
            totalPrive:'1000K',
            payCash:'Thanh toán tiền mặt',
            icCash:require('../../source/icons/ic_cashW.png'),

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
                        }}>Kết thúc chuyến đi</Text>
                    </View>
                </View>
                   
                   <Content style= {styles.container}>
                        <ScrollView>
                           
                                <View style={headerContent.container}>
                                    <Image
                                        style={headerContent.cover}
                                        source={this.state.brCover}
                                    />
                                    
                                </View>

                                <View style={contentContent.container}>
                                        <View style={contentContent.line1}>
                                            <View style={{backgroundColor:'white', borderRadius:100,zIndex:900}}>
                                                <Image
                                                style={contentContent.avt}
                                                source={this.state.defaultAvt}/>
                                            </View>
                                            <Text style={contentContent.name}>{this.state.name}</Text>
                                            <Text style={contentContent.car}>{this.state.car}</Text>
                                            <Text style={contentContent.license}>{this.state.license}</Text>
                                        </View>
                                    </View>

                            <View style={contentContent.line2}>
                                <View style={contentContent.line2_1}>
                                    <View style={contentContent.line2_1_r1}>
                                        <Image
                                            style={{alignSelf:'center'}}
                                            source={this.state.icChair}
                                        />
                                        <Text style={contentContent.line2_1_r1TXT}>{this.state.transport}</Text>
                                    </View>
                                    <View
                                        style={{width:0.5, height:'80%',
                                        backgroundColor:colorLine, alignSelf:'center'}}
                                    />
                                    <View style={contentContent.line2_1_r2}>
                                        <Text style={contentContent.line2_1_r1TXT}>{this.state.service}</Text>                                
                                    </View>
                                </View>

                                <View style={contentContent.line2_2}>
                                   <View style={contentContent.line2_2_r1}>
                                        <Image
                                            style={contentContent.icLine2_2}
                                            source={this.state.oneLaneIC}
                                        />

                                        <Text style={contentContent.line2_2TXT}>{this.state.oneLaneTXT}</Text>
                                   </View>
                                   <View style={contentContent.line2_2_r2}>
                                        <Image
                                            style={contentContent.icLine2_2}
                                            source={this.state.bothLaneIC}
                                        />
                                        <Text style={contentContent.line2_2TXT}>{this.state.bothLaneTXT}</Text>
                                   </View>
                                </View>
                                
                                <View style={contentContent.line2_3}>
                                    <View style={contentContent.line2_3_r1}>
                                        <Text style={contentContent.line2_3_r1_l1}>
                                            Ngày đi
                                        </Text>
                                        <Image
                                            style={contentContent.line2_3_r1_l2}
                                            source={this.state.icCalender}
                                        />
                                    </View>
                                    <View style={contentContent.line2_3_r2}>
                                        <Text style={contentContent.line2_3_r2_l1}>
                                            {this.state.fromDate}
                                        </Text>
                                        <View style={contentContent.line2_3_r2_l2}/>
                                        <Text style={contentContent.line2_3_r2_l3}>
                                            {this.state.fromTime}
                                        </Text>
                                    </View>
                                    <View style={contentContent.line2_3_r3}>
                                        <Text style={contentContent.line2_3_r3TXT}>Đến</Text>
                                    </View>
                                    <View style={contentContent.line2_3_r4}>
                                        <Text style={contentContent.line2_3_r4_l1}>
                                            Ngày về
                                        </Text>
                                        <Image
                                            style={contentContent.line2_3_r4_l2}
                                            source={this.state.icCalender}
                                        />
                                    </View>
                                    <View style={contentContent.line2_3_r5}>
                                        <Text style={contentContent.line2_3_r5_l1}>
                                            {this.state.toDate}
                                        </Text>
                                        <View style={contentContent.line2_3_r5_l2}/>
                                        <Text style={contentContent.line2_3_r5_l3}>
                                            {this.state.toTime}
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            <View style={contentDetail.container}>
                                <View style={contentDetail.line1}>
                                    <Image
                                        style={contentDetail.line1_ic}
                                        source={this.state.icFrom}
                                    />
                                    <Text style={contentDetail.txt}>{this.state.fromAddress}</Text>
                                </View>
                                <View style={contentDetail.line2}>
                                    <Image
                                        style={contentDetail.line1_ic}
                                        source={this.state.icTo}
                                    />
                                    <Text style={contentDetail.txt}>{this.state.toAddress}</Text>
                                </View>
                            </View>

                            <View style={contentPay.container}>
                                <View style={contentPay.row1}>
                                    <View style={contentPay.row1_l1}>
                                        <Text style={contentPay.row1_l1_txt}>{this.state.payCash}</Text>
                                    </View>
                                    <View style={contentPay.row1_l2}>
                                        <Image
                                            style={contentPay.row1_l2_ic}
                                            source={this.state.icCash}
                                        />
                                    </View>
                                </View>
                                <View
                                    style={{
                                        height:'80%',
                                        width:0.5,
                                        backgroundColor:'gray',
                                        alignSelf:'center'
                                    }}
                                />
                                <View style={contentPay.row2}>
                                    <Text style={contentPay.row2txt}>{this.state.totalPrive}</Text>
                                </View>
                            </View>
                            
                        </ScrollView>
                   </Content>
            </Container>
        );
    }
}



const {width,height} = Dimensions.get('window')
const defaultWidth = width-20;
const mainColor='#008D44'
const colorTXT = 'white'

const headerContent = StyleSheet.create({
    container:{
        height:195,
        width:width,
        zIndex:0,
        // backgroundColor:'blue'
    },
    cover:{
        width:'130%',
        bottom:'30%',
        alignSelf:'center'
    },
})
const colorLine = "#686868"
const colortext = "#DDDDDD"
const colorDataTime = "#333333"
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
const contentDetail = StyleSheet.create({
    container:{
        backgroundColor:'white',
        width:'96%',
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
        flexDirection:'column',
        alignSelf: 'center',
        zIndex:1,
        marginTop:10,
        marginBottom:10,
        paddingLeft:10,
        paddingRight:10,
        },

    line1:{
        width:'100%',
        height:50,
        // backgroundColor:'red',
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:10,
        paddingRight:10,
    },
    line1_ic:{
        marginRight:10,
    },
    line2:{
        width:'100%',
        height:50,
        // backgroundColor:'blue',
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:10,
        paddingRight:10,
        
    },
    txt:{
        fontSize:18,
        color:'gray'
    },
    
})
const contentPay = StyleSheet.create({
    container:{
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
        flexDirection:'row',
        alignSelf: 'center',
        padding:20,
        marginBottom:10,
        justifyContent:'space-between'
        },
        row1:{
            width:'48%',
            height:'100%',
            // backgroundColor:'red',
            flexDirection:'column',
            paddingRight:'5%',
          
        },
        row1_l1:{
            height:'30%',
            width:'100%',
            justifyContent:'center',
            alignItems:'center',
            // backgroundColor:'yellow',
            borderBottomWidth:0.5,
            borderColor:'gray'
        },
        row1_l2:{
            height:'70%',
            width:'100%',
            justifyContent:'center',
            alignItems:'center',
            // backgroundColor:'green',
        },
        row1_l2_ic:{
            height:'40%',
            width:'43%'
        },
        row1_l1_txt:{
            fontSize:16,
            color:mainColor,
        },
        row2:{
            width:'48%',
            height:'100%',
            // backgroundColor:'blue',
            justifyContent:'center',
            alignItems:'center'
        },
        row2txt:{
            color:mainColor,
            fontSize:24,
            fontWeight:'bold'
        },
    
})
const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        backgroundColor:'white',
        
    },
    header:{
        height:50,
        flexDirection:'row',
        backgroundColor:mainColor,
        width:'100%',
        
    },
})