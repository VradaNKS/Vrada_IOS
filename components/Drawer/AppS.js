import {DrawerNavigator} from 'react-navigation'
import {DrawerItems} from 'react-navigation'
import React, {Component}from'react';

import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    StatusBar,
    ToastAndroid,
    Image,
    ImageBackground,
    TouchableOpacity
}from 'react-native'

import {
    Icon,
    Button,
    Header, 
    Container, 
    Content, 
    Left,
    Body,
    List,
    ListItem,
    Thumbnail,
    Right,
    Drawer
}from'native-base'

import HomeScreen from './HomeScreen'
import SettingScreen from './SettingScreen'
import Help from '../Help'


const br = require('../../source/images/city.png');
const brHeader = require('../../source/images/city.png')
const avt={
    history:require('../../source/icons/ic_his.png'),
    booking:require('../../source/icons/ic_booking.png'),
    notifi:require('../../source/icons/ic_notification.png'),
    help:require('../../source/icons/ic_mess.png'),
    sos:require('../../source/icons/ic_sos.png'),
    driver:require('../../source/icons/ic_driver.png'),
    about:require('../../source/icons/ic_about.png'),
    exit:require('../../source/icons/ic_logout.png'),
}

const left={
    history:'Lịch sử',
    booking:'Chuyến xe đã lên lịch',
    notifi:'Thông báo',
    help:'Trợ giúp',
    sos:'S.O.S',
    driver:'Trở thành tài xế',
    about:'About',
    exit:'Thoát',
}
const CustomDrawerContentComponent= (props)=>(
        <Container
        style={{
            backgroundColor:colorContent,
            justifyContent:'center'
        }}
        closedDrawerOffset={-3}
        
        >
            {/* Header */}
            <Header 
            closedDrawerOffset={0}
            style={styles.ViewHeader}>
                <ImageBackground
                    style={styles.BrImage}
                    source={br}>   
                    <Image 
                        source={require('../../source/icons/businessman.png')} 
                        style={styles.avtUser}/>
                    <Text style={styles.UserName}>SunnyBui</Text>
                    <View style={styles.ViewUnder}>
                        <TouchableOpacity>
                            <Text style={styles.UserPoint}>1000 point</Text>
                        </TouchableOpacity>
                         <Text style={styles.lineHo}>|</Text>
                        <TouchableOpacity>
                            <Text style={styles.UserEvent}>Chương trình khuyến mãi</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </Header>
            {/* End header */}

            <Content 
                closedDrawerOffset={0}
            >
                {/* <MyItemList
                    onPress={()=>this.props.navigation.navigate("Home")}
                    icon={avt.history}
                    title={left.history}
                />
                 <MyItemList
                    icon={avt.booking}
                    title={left.booking}
                />
                 <MyItemList
                    icon={avt.notifi}
                    title={left.notifi}
                />
                 <MyItemList
                    icon={avt.help}
                    title={left.help}
                />
                 <MyItemList
                    icon={avt.driver}
                    title={left.driver}
                />
                 <MyItemList
                    icon={avt.about}
                    title={left.about}
                />
                 <MyItemList
                    icon={avt.exit}
                    title={left.exit}
                /> */}
                <DrawerItems {...props}/>
            </Content>
        </Container>
)
class Apps extends React.Component{
    constructor(){
        super();
        this.state = {
          toggled: false
        }
      }
    
    
      toggleDrawer() {
        this.state.toggled ? this._drawer.close() : this._drawer.open();
      }
    
    
      closeDrawer(){
        this.setState({toggled:false});
      };
    
    
      openDrawer(){
        this.setState({toggled:true});
      };
    
      renderScene(route, navigator){
        switch (route) {
          default: {
            return null;
          }
        }
      }
    
      configureScene(route, routeStack){
        return Navigator.SceneConfigs.PushFromRight
      }

    render(){
       
        return(
            <Drawer
                type="displace"
                ref={(ref) => { this._drawer = ref; }}
                content={CustomDrawerContentComponent}
                onClose={this.closeDrawer.bind(this)}
                onOpen={this.openDrawer.bind(this)}
                openDrawerOffset={0}
            >
                <HomeScreen/>
            </Drawer>
        );
    }
}



const MyDrawer = DrawerNavigator({
    Home:{
        screen:HomeScreen,
        navigationOptions: {
            drawerLabel: () => null
        }
    },

    SettingScreen:{
        screen:SettingScreen
    },
    Help:{
        screen:Help
    }
},{
    
    initialRouteName:'Home',
    contentComponent:CustomDrawerContentComponent,
    drawerPosition:'left',
    drawerOpenRoute: 'DrawerOpen',
})
export default Apps;
const {width,height} = Dimensions.get('window')
const defaultWidth = width-48;
const mainColor='#008D44'
const colorTXT = 'white'
const colorContent='#C0D8BA';
const HLine = 55
const colorBorder='#758084'
const borderLine = 0.5

const styles = StyleSheet.create({
    touchItem:{
        position:'relative',
        flexDirection:'row',
        height:HLine,
        borderTopWidth:borderLine,
        borderBottomWidth:borderLine,
        borderColor: colorBorder,
        alignItems: 'center',
    },
    list:{
        height:'100%',
        width:'100%',
        justifyContent:'center',
        padding:0,
        
    },
    txtLineBody:{
        fontSize:17,
        color:'black'
    },
    lineBody:{
        // backgroundColor:'green',
        width:200,
        alignSelf: 'center',
    },
    lineRight:{
        // backgroundColor:colorContent,
        width:40
    },
    thumbnail:{
        // backgroundColor:'gray',
        height:30,
        width:32.5,
        alignSelf: 'center',
        tintColor:'black'
    },
    ViewUnder:{
        flexDirection: 'row',
        width:'100%',
        justifyContent: 'space-between',
        marginTop:5,
        alignItems: 'center',
        alignSelf: 'center',
        
    },
    UserName:{
        fontSize: 20,
        color:'black',
        fontWeight: 'bold',
        alignSelf: 'center',
        
    },
    lineHo:{
        color:'black',
        marginLeft:5,
        marginRight: 5,
        alignSelf: 'center',
        
    },
    avtUser:{
        alignSelf: 'center',
        width:90,
        height:90,
    },
    BrImage:{
        width:'100%',
        height:200,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    ViewHeader:{
        width:'100%',
        height:200,
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
})