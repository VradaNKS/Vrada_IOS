import React,{Component} from 'react'
import { 
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    TextInput
 } from 'react-native'

 export default class FormNote extends React.Component{
     render(){
         return(
            <View style={styles.ContainerForm4}>
                <View style={styles.viewIc}>
                    <Image
                    source={this.props.ic}
                    style={styles.ic}
                    />
                </View>

                <View style={styles.viewTextinput}>
                    <TextInput
                        placeholder='Ghi chú cho tài xế'
                        onchangeText={this.props.onchangeText}
                        multiline={true}
                        style={styles.txtInput}  
                    />
                </View>
            </View> 
         );
     }
 }

const defaultWidth = width-20;
const {width,height} = Dimensions.get('window')
const mainColor='#008D44'
 
const styles = StyleSheet.create({
    txtInput:{
        marginTop: 10,
        width:'90%',
        justifyContent: 'flex-end',
        fontSize:18,
    },
    viewTextinput:{
        width:'90%',
        backgroundColor:'green',
        height:'100%'
    },
    viewIc:{
        width:'10%',
        // backgroundColor:'blue',
        height:'100%'
    },
    ic:{
        marginTop: 10,
        alignSelf: 'center',
        width:30,
        height:30,
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
})

