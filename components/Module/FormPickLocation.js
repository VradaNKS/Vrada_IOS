import React, { Component } from 'react';
import { 
    View,
    TextInput,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    
 } from 'react-native';

 export default class FormPickLocation extends React.Component{
     render(){
         return(
             <TouchableWithoutFeedback>
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
             </TouchableWithoutFeedback>
         );
     }
 }

 const styles = StyleSheet.create({
     container:{},
     ContainerForm:{
        backgroundColor:'white',
        flexDirection:'row',
        width:'100%',
        height:120,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 1,
        alignSelf: 'center',
        marginTop:10
    },
 })