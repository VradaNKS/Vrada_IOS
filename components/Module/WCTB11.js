import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    TouchableOpacity,
    Image
}from 'react-native'

export default class WCTB11 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            cancel:'HỦY CHUYẾN',
            ic_wait:require('../../source/icons/ic_wifi.png')
        }
    }
    componentWillMount(){
        setTimeout(()=>{
            this.props.navigation.navigate('CTB10',{answer:''})
        },1)
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>Waitting</Text>
            </View>
        );
    }
}

const {width,height} = Dimensions.get('window')
const defaultWidth = width-48;
const mainColor='#008D44'
const colorTXT = 'white'
const br = 'white'

const styles = StyleSheet.create({
    onTop:{
        height:height,
        backgroundColor:colorTXT,
        alignItems: 'center',
        justifyContent: 'center',
    },
    underBottom:{
        position:'absolute',
        alignSelf: 'center',
        bottom:10
        
    },
    container:{
        flex:1,
        backgroundColor:br
    },
    txtButton:{
        color:colorTXT,
        fontWeight: 'bold',
        fontSize:20
    },
    viewBtn:{
        width:width-20,
        height:height*(8/100),
        backgroundColor:mainColor,
        borderRadius:5,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
})