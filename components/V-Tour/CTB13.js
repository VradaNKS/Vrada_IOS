import React, {Component}from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    StatusBar,
    ToastAndroid,
    TouchableOpacity,
    Image,ImageBackground,
    ScrollView
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
} from 'native-base'

import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import Btn from '../../components/Module/Btn';

import Swiper from 'react-native-swiper';

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



export default class CTB13 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            coverImage:require('../../source/images/city.png'),
            userAvt:require('../../source/icons/businessman.png'),
            icStar:require('../../source/icons/star.png'),
            defaultCName:'Xe Toyota Camry',
            defaultName:'Nguyễn Thanh Tùng',
            defaltLicense:'153.28-34',

            icCar:require('../../source/icons/car.png'),
            icChair:require('../../source/icons/chair.png'),
            icColor:require('../../source/icons/color.png'),
            year:'2008',
            chair:'16 chỗ',
            color:'xanh'
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


    render(){
        return(
            <Container >
            <ScrollView>
                <StatusBar 
                backgroundColor="#008D44"
                barStyle='light-content' />
               <View style={styles.header}>
                    <View style={{
                        height:'70%',
                        justifyContent:'center',
                        alignItems:'center',
                        position:'absolute',
                        left:10,
                        bottom:0
                    }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}>
                            <Image
                                style={{tintColor:'white'}} 
                                source={require('../../source/icons/backbutton.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        width:300,
                        position:'absolute',
                        left:50,
                        height:'70%',
                        bottom:0,
                        justifyContent:'center'                        
                    }}>
                        <Text style={{
                            fontWeight:'bold',
                            fontSize:24,
                            color:'white',
                        }}>Thông tin tài xế</Text>
                    </View>
                </View>

                <View style={{
                        flex:1,
                        backgroundColor:'white',
                        zIndex:-100,
                }}>
                    <View style={infoDiver.viewBR}>
                            <Image
                            style={infoDiver.br}
                            source={this.state.coverImage}/>
                    </View>
                    <Image
                            style={infoDiver.avt}
                            source={this.state.userAvt}/>

                   <View  style={infoDiver.info}> 
                        <Text style={infoDiver.txtName}>{this.state.defaultName}</Text>
                        <Text style={infoDiver.txtCar}>{this.state.defaultCName}</Text>
                        <Text style={infoDiver.txtLicense}>{this.state.defaltLicense}</Text>
                        <View style={infoDiver.containerStart}> 
                            <Image
                                style={infoDiver.icStart}
                                source={this.state.icStar}
                            />

                            <Image
                                style={infoDiver.icStart}
                                source={this.state.icStar}
                            />

                            <Image
                                style={infoDiver.icStart}
                                source={this.state.icStar}
                            />


                            <Image
                                style={infoDiver.icStart}
                                source={this.state.icStar}
                            />

                            <Image
                                style={infoDiver.icStart}
                                source={this.state.icStar}
                            />
                        </View>
                    </View>
                    
                    <View style = {{
                        height:200,
                        width:'100%',
                        marginBottom:10
                        }}>

                        <SwiperSilde/>
                        
                    </View>

                    <View style={detailService.ContainerForm}>
                        <View style={detailService.row1}>
                            <Image
                                style={{
                                    height:defaultWidth*(15/100),
                                    width:defaultWidth*(15/100),

                                    tintColor:mainColor
                                }}
                                source={this.state.icCar}
                            />
                            <Text style={detailService.txt}>{this.state.year}</Text>
                        </View>
                        <View
                            style={{height:'90%',width:1,backgroundColor:'gray',
                            alignSelf:'center'}}
                        />
                        <View style={detailService.row2}>
                            <Image
                                style={{
                                    height:defaultWidth*(15/100),
                                    width:defaultWidth*(15/100),

                                    tintColor:mainColor
                                }}
                                source={this.state.icChair}
                            />
                            <Text style={detailService.txt}>{this.state.chair}</Text>
                        </View>
                        <View
                            style={{height:'90%',width:1,backgroundColor:'gray',alignSelf:'center'}}
                        />
                        <View style={detailService.row3}>
                            <Image
                                style={{
                                    height:defaultWidth*(15/100),
                                    width:defaultWidth*(15/100),

                                }}
                                source={this.state.icColor}
                            />
                            <Text style={detailService.txt}>{this.state.color}</Text>
                        </View>
                    </View>

                </View>
                </ScrollView>
            </Container>
        );
    }
}

class SwiperSilde extends React.Component{

    render(){
        return(
        <View style={ContainerSwiper.ContainerForm}>
            <Swiper 
            showsPagination={true}
            style={ContainerSwiper.wrapper} 
            showsButtons={true}>
                <Image
                    source={require('../../source/images/img_car.png')}
                    style={{
                        width:defaultWidth-10,
                        height:height*(25/100),
                        alignSelf:'center'
                    }}
                />

                <Image
                    source={require('../../source/images/img_car.png')}
                    style={{
                        width:defaultWidth-10,
                        height:height*(25/100),
                        alignSelf:'center'
                        
                    }}
                />
            </Swiper>
        </View>
        );
    }
}
        

const activeDot = '#DADADA'
const {width,height} = Dimensions.get('window')
const defaultWidth = width-48;
const mainColor='#008D44'
const colorTXT = '#686868'
const ContainerSwiper={
    ContainerForm:{
        backgroundColor:'white',
        height:200,
        flexDirection:'row',
        alignSelf: 'center',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
    },
    wrapper: {
        height:200,
        justifyContent:'center',
        alignItems:'center'
    },

}
const detailService ={
    txt:{
        color:'black',
        fontSize:24,
        marginTop:5,
        marginBottom:5,
    },
    row1:{
        flexDirection:'column',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        width:defaultWidth*(30/100),
        height:'100%',
        // backgroundColor:'pink'
    },
    row2:{
        flexDirection:'column',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        width:defaultWidth*(30/100),
        height:'100%',
        
        // backgroundColor:'yellow'
    },
    row3:{
        flexDirection:'column',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        width:defaultWidth*(30/100),
        height:'100%',
        // backgroundColor:'blue'
    },
    ContainerForm:{
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
        padding:10,
        justifyContent:'space-between'
    },
}
const infoDiver = StyleSheet.create({
    viewBR:{
        height:'35%',
        width:width,
        // backgroundColor:'red',
        position:'absolute',
        top:0,
        zIndex:-1
    },
    br:{
        height:'100%',
        width:width,
    },
    avt:{
        height:90,
        width:90,
        zIndex:9999,
        alignSelf:'center',
        position:'relative',
        marginTop:height*(27/100),
        // backgroundColor:'red'
        },
    info:{
        width:defaultWidth,
        height:height*(20/100),
        zIndex:9999,
        alignSelf:'center',
        position:'relative',
        // backgroundColor:'red'
        },
    
    containerStart:{
        height:30,
        width:defaultWidth,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    icStart:{
        height:20,
        width:20,
        tintColor:mainColor,
        alignSelf:'center',
        marginLeft:1,
        marginRight:1,
    },
    txtName:{
        fontSize:22,
        color:colorTXT,
        alignSelf:'center',
        marginTop:5,
        fontWeight:'bold'
    },
    txtCar:{
        fontSize:28,
        color:colorTXT,
        alignSelf:'center',
        fontWeight:'bold'
        
    },
    txtLicense:{
        fontSize:28,
        color:colorTXT,
        alignSelf:'center',
        
    }
})
const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
    },
    header:{
        backgroundColor: mainColor ,
        justifyContent:'center',
        height:'10%',
        flexDirection:'row',
        position:'absolute',
        top:0,
        zIndex:999,
        width:'100%'
    },
})