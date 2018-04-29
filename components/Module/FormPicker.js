import React, { Component } from 'react';

import { 
    StyleSheet,
    View,
    Dimensions,
    Text,
    Image,
    TouchableOpacity,FlatList,ScrollView,Alert
 } from 'react-native';

import { Form, Picker, List, Icon,Item } from 'native-base'; // 2.4.2
import SmartPicker from 'react-native-smart-picker'
import DatePicker from 'react-native-datepicker'
import SimplePicker from 'react-native-simple-picker';

var transport = ''
const transportLabel = ['4SEAT', '7SEAT']
const transportType = ['Any']

const option = ['Personal', 'Business', 'Travel']   


 export default class FormPicker extends React.Component{
    constructor(props){
        super(props)
        this.state = {

            icCalender:require('../../source/icons/calendar.png'),
            ic_down:require('../../source/icons/ic_dropdown.png'),

            DataSeat:[],

            txtgoLane:'Một chiều',
            txtbothLane:'Khứ hồi',

            oneLane:require('../../source/icons/ic_oneLane.png'),
            bothLane:require('../../source/icons/ic_bothLane.png'),

            selectedType:'Phân khúc',
            selectedTransport:'Chọn xe',
        }
    }

    onValueChange(value: string) {
        this.setState({
          selected1: value
        });
    }
    componentWillMount(){

    }
  
     render(){


         return(
                <View style={styles.form}>
                    <View style={styles.line1}>
                        {/* Picker Choose transport */}
                        <View style={styles.line1_r1}>
                            <TouchableOpacity 
                             onPress={() => {
                                this.refs.picker.show();
                            }}
                            style={styles.formPicker}>
                               <Text style={styles.labelPicker}>{this.props.placeholderPickerTrans}</Text>
                               <Image
                                source={this.state.ic_down}
                                style={styles.icDropDown}
                               />
                            </TouchableOpacity>


                            <SimplePicker
                            ref={'picker'}
                            options={transportLabel}
                            onSubmit={this.props.onSubmitTransport}
                            />

                        </View>
                        <View style={styles.line1_r2}>
                            <TouchableOpacity
                            onPress={() => {
                                this.refs.picker2.show();
                            }}
                             style={styles.formPicker}>
                               <Text  style={styles.labelPicker}>{this.props.placeholderPickerType}</Text>
                               <Image
                                source={this.state.ic_down}
                                style={styles.icDropDown}
                               />
                            </TouchableOpacity>
                            <SimplePicker
                            ref={'picker2'}
                            options={transportType}
                            onSubmit={this.props.onSubmitType}
                            />
                        </View>
                    </View>

                    <View style={styles.line2}>
                        <TouchableOpacity 
                            onPress={this.props.onPressOneWay}
                            style={this.props.styleOneRide}>
                            <Image
                                style={{height:30,width:30,alignSelf:'center'}}
                                source={this.state.oneLane}
                            />
                            <Text style={{color:colortext,fontSize:18}}>Một chiều</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.props.onPressReturn}
                            style={this.props.styleReturn}>
                            <Image
                                style={{height:30,width:30,alignSelf:'center'}}
                                source={this.state.bothLane}
                            />
                            <Text style={{color:colortext,fontSize:18}}>Khứ hồi</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.line3}>
                        <View style={styles.line3_r1}>
                            <View style={styles.line3_r1_l1}>
                                <Text 
                                    style={styles.line3_r1_l1_txt}
                                >Ngày đi</Text>
                                <Image
                                    style={styles.ic_calendar}
                                    source={this.state.icCalender}
                                />    
                            </View>
                            <View style={{
                                height:'100%',width:'70%',justifyContent:'center',alignItems:'center'
                            }}>
                                <DatePicker
                                    style={{
                                        width:'90%',
                                    }}
                                    customStyles={{
                                        dateInput:{borderWidth:0}
                                    }}
                                    date={this.props.dateFromDay}
                                    mode="date"
                                    showIcon={false}
                                    placeholder={this.props.placeholderFromDay}
                                    format="YYYY-MM-DD"
                                    confirmBtnText="Chọn"
                                    cancelBtnText="Hủy"
                                    onDateChange={this.props.onDataChangeFromDay}
                                />

                                <View
                                    style={{width:'90%',height:1,backgroundColor:'gray'}}
                                />
                                
                                <DatePicker
                                    style={{
                                        width:'90%',
                                    }}
                                    customStyles={{
                                        dateInput:{borderWidth:0}
                                    }}
                                    date={this.props.dateHourFromDay}
                                    mode="time"
                                    showIcon={false}
                                    placeholder={this.props.placeholderHourFromDay}
                                    confirmBtnText="Chọn"
                                    cancelBtnText="Hủy"
                                    onDateChange={this.props.onDataChangeHourFromDay}
                                />

                            </View>
                        </View>

                        <View style={styles.line3_r2}>
                            <Text style={{fontSize:15,color:'gray',alignSelf:'center'}}>Đến</Text>
                        </View>

                        <View pointerEvents={this.props.pointerEventsToView} style={this.props.styleToView}>
                            <View  style={styles.line3_r1_l1}>
                            <Text style={styles.line3_r1_l1_txt}>Ngày về</Text>
                                <Image
                                    style={styles.ic_calendar}
                                    source={this.state.icCalender}
                                />    
                            </View>
                            <View style={{
                                height:'100%',width:'70%',justifyContent:'center',alignItems:'center'
                            }}>
                                <DatePicker
                                    style={{
                                        width:'90%',
                                    }}
                                    customStyles={{
                                        dateInput:{borderWidth:0}
                                    }}
                                    date={this.props.dateBackDay}
                                    mode="date"
                                    showIcon={false}
                                    placeholder={this.props.placeholderBackDay}
                                    format="YYYY-MM-DD"
                                    confirmBtnText="Chọn"
                                    cancelBtnText="Hủy"
                                    onDateChange={this.props.onDataChangeBackDay}
                                />

                                <View
                                    style={{width:'90%',height:1,backgroundColor:'gray'}}
                                />
                                
                                <DatePicker
                                    style={{
                                        width:'90%',
                                    }}
                                    customStyles={{
                                        dateInput:{borderWidth:0}
                                    }}
                                    date={this.props.dateHourBackDay}
                                    mode="time"
                                    showIcon={false}
                                    placeholder={this.props.placeholderHourBackDay}
                                    confirmBtnText="Chọn"
                                    cancelBtnText="Hủy"
                                    onDateChange={this.props.onDataChangeHourBackDay}
                                />

                            </View>
                        </View>
                    </View>
                </View>
         );
     }
 }
 


 const colortext = "gray"
 const colorDataTime = "#333333"
 const {width,height} = Dimensions.get('window')
 const defaultWidth = width-30;
 const mainColor='#008D44'
 const btmLineBoth = 0;
const widthLine = '100%'

 const styles = StyleSheet.create({
     ic_calendar:{alignSelf:'center',height:20,width:20},
     line3_r1_l1:{
        height:'100%',
        width:'30%',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    line3_r1_l1_txt:{alignSelf:'center',fontSize:14,color:colortext},
     icDropDown:{height:10,width:10,alignSelf:'center'},
     labelPicker:{
        color:colortext,
        fontSize:16,
        width:'70%',
        marginTop:10
    },
     formPicker:{
        height:'90%',
        width:'80%',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        alignSelf: 'center',
    },
    line3_r1:{
        height:'100%',
        width:'45%',
        flexDirection: 'row',
    },
    line3_r2:{
        height:'100%',
        width:'10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    line3_r3:{
        height:'100%',
        width:'45%',
        flexDirection: 'row',
    },
     line3:{
        height:'50%',
        width:widthLine,
        alignSelf:'center',
        flexDirection:'row',
        backgroundColor:'white'
        

    },
    line2_r2:{
        width:'50%',
        height:'100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor:'gray',
        borderBottomWidth:1.5
    },
    line2_r1:{
        
    },
    line2:{
        height:'40%',
        width:widthLine,
        alignSelf:'center',
        flexDirection:'row',
        backgroundColor:'white'
    },
    line1_r2:{
        width:'48%',
        height:'100%',
        justifyContent:'center',
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
    },
    line1_r1:{
        width:'48%',
        height:'100%',
        justifyContent:'center',
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
    },
    line1:{
        height:'15%',
        width:widthLine,
        alignSelf:'center',
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingLeft:'2%',
        paddingRight: '2%',
        backgroundColor:'white'
    },
    form:{   
        width:defaultWidth,
        height:250,
        flexDirection:'column',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.8,
        borderWidth: 0,
        shadowRadius: 5,
        elevation: 1,
    },
 })