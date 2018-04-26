import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    TouchableOpacity,
    Image
}from 'react-native'

export default class CTB14 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            cancel:'HỦY CHUYẾN',
            ic_wait:require('../../source/icons/ic_wifi.png')
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.onTop}>
                    <Image
                        source={this.state.ic_wait}
                    />
                </View>
                <View style={styles.underBottom}>
                    <TouchableOpacity 
                        style ={styles.viewBtn}
                        onPress ={this.props.onPress}
                    >
                        <Text 
                            style={styles.txtButton}>
                            {this.state.cancel}
                        </Text>
                    </TouchableOpacity>
                </View>
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