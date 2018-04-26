import React, {Component} from 'react'

import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ToastAndroid
}from 'react-native'

export default class CheckPhone extends React.Component{
    constructor(props){
        super(props)
        this.state={
            co_cd:'+84',
            next:'TIẾP THEO',
            maxLength:11,
            plNumber:'| Số điện thoại'
        }
    }
    _next(){
        ToastAndroid.show('Next Clicked', ToastAndroid.SHORT)
    }
    render(){
        return(
            <View style={styles.container}>
                {/* Logo */}
                <View style={styles.viewLogo}>
                    <Image
                        style={styles.logo}
                        source={this.state.logo}
                    />
                </View>
                {/* View type phonenumber */}
                <View style={styles.viewPhoneNumber}>
                    <View style={styles.viewFlat}>
                        <Image 
                            source={require('../source/images/flat.png')}
                            style={styles.iconFLat}
                        />
                    </View>    
                    <Text style={styles.coFont}>{this.state.co_cd}</Text>
                    <TextInput
                        style={styles.textipt}
                        keyboardType='numeric'
                        autoCorrect={false}
                        maxLength={this.state.maxLength}
                        placeholder={this.state.plNumber}
                        underlineColorAndroid='transparent'
                        onChangeText={(value)=>{this.setState({phone:value})}}
                    />
                </View>
                <ButtonUpdates
                    onPress={this._next.bind(this)}
                    text={this.state.next}/>
            </View>
        );
    }
}
class ButtonUpdates extends React.Component{
    constructor(props){
        super(props)
        this.state={
           
        }
    }
    render(){
        return(
            <TouchableOpacity 
                style ={styles.viewBtn}
                onPress ={this.props.onPress}
            >
                <Text style={styles.txtButton}>
                    {this.props.text}
                </Text>
            </TouchableOpacity>
        )
    }
}
const {width,height} = Dimensions.get('window')
const defaultWidth = width-48;
const mainColor='#008D44'
const colorTXT = 'white'
const br = 'white'
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:br,
        flexDirection: 'column',
    },
    viewLogo:{
        alignItems: 'center',
        height:(height/2)-50,
        justifyContent: 'center',
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
        marginBottom:5,
        alignSelf: 'center',
    },
    logo:{
        alignItems: 'center',
        height:height*(20/100),
        width:height*(20/100)
    },
    viewPhoneNumber:{
        flexDirection: 'row',
        alignSelf: 'center',
        width:defaultWidth,
        marginTop: 20,
        borderBottomColor:'#CCCCCC',
        borderBottomWidth:1 ,
        marginBottom:10
    },
    viewFlat:{
        paddingLeft:7,
        paddingRight:7,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'gray',
        height:35,
        width:45,
        alignSelf: 'center',
    },
    coFont:{
        fontSize: 22,
        color:'black',
        marginRight:10,
        marginLeft:5,
        alignSelf: 'center',
        width:40,
    },
    textipt:{
        width:defaultWidth - 90,
        fontSize:22,
    },
    iconFLat:{
        height:25,
        width:35,
        alignSelf: 'center',
    },
})