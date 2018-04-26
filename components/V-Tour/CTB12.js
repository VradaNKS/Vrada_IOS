import React, {Component}from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    StatusBar,
    ToastAndroid,
    TouchableOpacity,
    Image
}from 'react-native'
import {
    Icon,
    Button,
    Header, 
    Container, 
    Content, 
    Left,
    Body,
    Title,
    Right
}from'native-base'

import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

const SECTIONS = [
    {
      title: 'First',
      content: 'Lorem ipsum...'
    },
    {
      title: 'Second',
      content: 'Lorem ipsum...'
    }
  ];

export default class CTB12 extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            defaultAVT: require('../../source/icons/businessman.png'),
            defaultOldPrice:'700K',
            defaultName:'Thanh Tùng',
            defaultCurrentPrice:'400K',
            defaultService:'Du lịch Năm Thùy',
            defaultCName:'Xe Toyota Camry',
            defaltLicense:'153.28-34',
            ic_heart:require('../../source/icons/ic_heart_fav.png')
        }
    }

    render(){
        return(
            <Container >
                <StatusBar 
                backgroundColor="#008D44"
                barStyle='light-content' />
                <Header style={styles.header} noShadow>
                    <View style={{
                        height:'100%',
                        // backgroundColor:'blue',
                        justifyContent:'center',
                        position:'absolute',
                        bottom:0,
                        left:5
                        
                    }}>
                    <TouchableOpacity 
                            style={{
                                alignSelf:'center',
                                // backgroundColor:'red'
                            }}
                            onPress={() => this.props.navigation.navigate("Home")}
                            transparent>
                            <Image
                                style={{tintColor:'white'}} 
                                source={require('../../source/icons/backbutton.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        width:300,
                        justifyContent:'center'
                    }}>
                        <Text style={{
                            fontWeight:'bold',
                            fontSize:20,
                            color:'white',
                        }}>Chọn đơn vị vận chuyển</Text>
                    </View>
                </Header>
                    <Content contentContainerStyle={{}}>

                    <ItemList
                        source={this.state.defaultAVT}
                        oldPrice={this.state.defaultOldPrice}
                        name={this.state.defaultName}
                        currentPrice={this.state.defaultCurrentPrice}
                        service={this.state.defaultService}
                        carName={this.state.defaultCName}
                        license={this.state.defaltLicense}
                        icHeart={this.state.ic_heart}
                    />

                    <ItemList
                        source={this.state.defaultAVT}
                        oldPrice={this.state.defaultOldPrice}
                        name={this.state.defaultName}
                        currentPrice={this.state.defaultCurrentPrice}
                        service={this.state.defaultService}
                        carName={this.state.defaultCName}
                        license={this.state.defaltLicense}
                        icHeart={this.state.ic_heart}
                    />
                </Content>

            </Container>
        );
    }
}

class ItemList extends React.Component{

    render(){
        return(
            <View style={ItemListStyle.containerItemList}>
                {/* Row 1 */}
                <View style={ItemListStyle.row1Item}>
                    <View style={ItemListStyle.viewAvtItem}>
                        <Image
                            source={this.props.source}
                        />
                    </View>
                        <Text style={ItemListStyle.txtOldPrice}>{this.props.oldPrice}</Text>
                </View>

                {/* Row 2 */}
                <View style={ItemListStyle.row2Item}>
                    <Text style={ItemListStyle.line1R2}>
                        {this.props.name}
                    </Text>
                    <Text style={ItemListStyle.line2R2}>{this.props.service}</Text>
                    <Text style={ItemListStyle.line3R2}>{this.props.currentPrice}</Text>
                </View>

                {/* Row 3 */}
                <View style={ItemListStyle.row3Item}>
                    <Text style={ItemListStyle.line1R3}>{this.props.carName}</Text>
                    <Text style={ItemListStyle.line2R3}>{this.props.license}</Text>
                    <View style={ItemListStyle.line3R3}>
                        <Image
                            source={this.props.icHeart}
                            style={ItemListStyle.icHeart}
                        />

                        <Image
                            source={this.props.icHeart}
                            style={ItemListStyle.icHeart}
                        />

                        <Image
                            source={this.props.icHeart}
                            style={ItemListStyle.icHeart}
                        />

                        <Image
                            source={this.props.icHeart}
                            style={ItemListStyle.icHeart}
                        />
                        <Image
                            source={this.props.icHeart}
                            style={ItemListStyle.icHeart}
                        />
                    </View>
                    <TouchableOpacity style={ItemListStyle.line4R3}>
                        <Text style={{
                            fontSize:20,
                            color:colorTXT,
                            alignSelf:'center',
                            fontWeight:'bold'
                        }}>ĐẶT XE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const {width,height} = Dimensions.get('window')
const defaultWidth = width-20;
const mainColor='#008D44'
const colorTXT = 'white'
const ItemListStyle = StyleSheet.create({
    icHeart:{
        height:15,
        width:15,
        alignSelf:'center',
        marginLeft:5,
    },
    txtOldPrice:{
        fontSize:20,
        alignSelf:'center'  ,
        marginTop:5,
        marginBottom:5,    
    },
    row3Item : {
        height:'100%',
        width:'50%',
        // backgroundColor:'yellow',
        flexDirection:'column',
        paddingLeft:10
    },
    line1R3:{
        fontSize:16,color:'#686868',
        // backgroundColor:'red',
        fontWeight:'bold',
        alignSelf:'center',
        marginTop:5,
        
    },
    line2R3:{
        fontSize:16,color:'black',
        // backgroundColor:'red',
        
        alignSelf:'center'
    },
    line3R3:{
        flexDirection:'row',
        alignSelf:'center',
        marginTop:5,
        marginBottom:5,
    },
    line4R3:{
        width:'90%',
        height:35,
        backgroundColor:mainColor,
        borderRadius:5,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center'
    },
    row2Item : {
        height:'100%',
        width:'35%',
        // backgroundColor:'green',
        flexDirection:'column',
        paddingLeft:10
    },
    line1R2:{
        fontSize:16,color:'#686868',
        marginTop:10,
        // backgroundColor:'red',
        fontWeight:'bold'
        

    },
    line2R2:{
        fontSize:16,
        color:'#686868',
        // backgroundColor:'red',
        fontWeight:'bold'
        
        
    },
    line3R2:{
        fontSize:28,
        color:mainColor,
        // backgroundColor:'pink',
        position:'absolute',
        bottom:0,
        marginTop:5,
        marginBottom:10,
        paddingLeft:10
        
    },
    row1Item : {
        height:'100%',
        width:'15%',
        // backgroundColor:'blue',
        flexDirection:'column',
    },
    viewAvtItem : {
        alignSelf:'center',
        marginBottom:10,
        marginTop:10,
    },
    containerItemList:{
        backgroundColor:'white',
        width:defaultWidth,
        height:140,
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
        padding:10,
    },
})
const styles=StyleSheet.create({
  
    
    container:{
        flex:1,
        flexDirection: 'column',
    },
    header:{
        backgroundColor: mainColor ,
        justifyContent: 'center',
    },
})