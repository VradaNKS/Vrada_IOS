import React, {Component} from 'react'

import {
    StyleSheet,
    Dimensions,
    View,
    Text,
} from 'react-native'

import {TabNavigator, StackNavigator} from 'react-navigation'
import OneLane from './OneLane'
import BothLane from './BothLane'
export default class TabChoose extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={{
                    height:200,
                    width:'100%'
                }}>
                    <Tab/>
                </View>
            </View>
        )
    }
}
const Tab = TabNavigator({
    OneLane:{screen:OneLane},
    BothLane:{screen:BothLane}
})

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'blue',
        justifyContent: 'center',
        alignItems: 'center',
    }
})