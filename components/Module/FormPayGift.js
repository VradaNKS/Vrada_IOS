import React, {Component} from 'react'
import { 
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    TextInput
 } from 'react-native';
 import SimplePicker from 'react-native-simple-picker';

 export default class FormPayGift extends React.Component{
     constructor(props){
         super(props)
         this.state={
            payIC:require('../../source/icons/ic_cash.png'),
            plPay:'Thanh toán',
            giftIC:require('../../source/icons/ic_gift.png'),
            plGift:'Mã giảm giá',
            detailIC:require('../../source/icons/ic_notepad.png'),
            plDetail:'Hình thức chuyến đi',
         }
     }
     render(){
         return(
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
                    options={this.props.options}
                    onSubmit={(value)=>{this.setState({plDetail:value})}}
                    />
                </View>
            </View>
         )
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
                    style={{height:25,width:30}}
                    source = {this.props.source}/>
                </View>
                <TextInput
                style={{
                    width:'63%',
                    // backgroundColor:'gray'
                }}
                placeholderTextColor={'gray'}
                placeholder={this.props.placeholder}
                onChangeText={this.props.onChangeText}
                />
            </View>
        )
    }
}
const defaultWidth = width-20;
const {width,height} = Dimensions.get('window')
const mainColor='#008D44'
const styles = StyleSheet.create({
    ContainerForm3:{
        backgroundColor:'white',
        flexDirection:'row',
        width:'100%',
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
    col1Form3:{
        width:'27%',
        // backgroundColor:'red',
        height:'100%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',
    },
    col2Form3:{
        width:'30%',
        // backgroundColor:'blue',
        height:'100%',
        flexDirection:'row',
        justifyContent:'center'
        
    },
    col3Form3:{
        width:'40%',
        // backgroundColor:'green',
        height:'100%',
        flexDirection:'row',
        justifyContent:'center'
        
    },
})