import React, { Component } from 'react';

import {  StyleSheet,View} from 'react-native';

export default class BothLane extends React.Component{
    render(){
        return(
            <View style={styles.container}>
            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        height:200,
        backgroundColor:'red',
        width:'100%',
        alignSelf: 'center',
    }
})