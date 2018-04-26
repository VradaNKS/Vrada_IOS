import React, {Component} from 'react'

import {
    View,
    StyleSheet,
    Dimensions,
    Text, 
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native'

import {BoxShadow} from 'react-native-shadow'


import ElevatedView from 'react-native-elevated-view'

export default class PickLocation extends React.Component{
    constructor(props){
        super(props)
        this.state={
            icGreen:require('../../source/icons/ic_location_yellow.png'),
            icRed:require('../../source/icons/ic_location_pink.png'),
            ic_plus:require('../../source/icons/ic_plus.png'),
            plFrom:'Điểm khởi hành',
            plTo:'Điểm đến',
            pay:'Thanh toán',
            sale:'Mã giảm giá',
            styleTrip:'Hình thức chuyến đi',
            noteForDriver:'Ghi chú cho tài xế',

            toLocation:'',
            fromLocation:'Location'
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.viewForm}>
                    {/* Left */}
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

                    {/* Right */}
                    <View style = {styles.viewRight}>

                        <View style={styles.fromLocation}>
                            <TextInput
                                style={styles.txtInputTo}
                                underlineColorAndroid='transparent'
                                placeholderTextColor={'black'}
                                placeholder={this.state.plFrom}
                                onChangeText={this.props.PickFrom}
                            />
                        </View>
                        
                        <View
                            style={{height:1,backgroundColor:'gray',width:'100%'}}
                        />

                        <View style={styles.toLocation}>
                            <TextInput
                                style={styles.txtInputFrom}
                                underlineColorAndroid='transparent'
                                placeholderTextColor={'black'}
                                placeholder={this.state.plTo}
                                onChangeText={this.props.PickTo}
                            />
                            {/* <TouchableOpacity 
                                onPress={this.props.onPress}>
                                <View style={{
                                    height:25,
                                    width:25,
                                    justifyContent:'center',
                                    alignItems:'center'
                                }}>
                                    <Image 
                                    source={this.state.ic_plus}
                                    style={styles.ic_plus}/>
                                </View>
                            </TouchableOpacity> */}
                            
                        </View>
                    </View>
                </View>
                
             </View>
        )
    }
}
class myDot extends React.Component{
    render(){
        return(
            <View style = {styles.myDot}/>
        );
    }
}

const {width,height} = Dimensions.get('window')
const defaultWidth = width-20;
const mainColor='#008D44'

const styles = StyleSheet.create({
    stayElevated:{
        // backgroundColor:'pink',
        height:40,
        width:40,
        borderRadius:100,
    },
    ic_plus:{
        tintColor:'#E6E6E6',
        height:25,
        width:25,
        alignSelf: 'center',
    },
    txtInputFrom:{
        width:defaultWidth-105,
        fontSize: 20,
        
    },
    txtInputTo:{
        width:defaultWidth-105,
        fontSize: 20,
    },
    viewForm:{
        width:defaultWidth,
        justifyContent:'center',
        alignSelf:'center',
        minHeight:100,
        flexDirection: 'row',
        marginTop:10,
        backgroundColor:'white',
        paddingRight:5,
        paddingTop:10,
        paddingBottom:10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
        borderBottomWidth: 2,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        height:100
    },
    toLocation:{
        width:defaultWidth-50,
        flexDirection: 'row',
        // backgroundColor:'green',
        height:'49%',
        justifyContent: 'center',
        
        
    },
    fromLocation:{
        width:defaultWidth-50,
        flexDirection: 'row',
        // backgroundColor:'yellow',
        height:'49%',
        justifyContent: 'center',
    },
    viewRight:{ 
        width:defaultWidth-50,
        flexDirection: 'column',
        // backgroundColor:'red',
        justifyContent:'space-between'
    },
    viewLeft:{
        justifyContent: 'center',
        alignItems: 'center',
    },                                                                                                                                                                                                                                                                                          
    icPickGreen:{
        tintColor:'green',
        alignSelf: 'center',
    },
    icPickRed:{
        tintColor:'red',
        alignSelf: 'center',
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
    }
})