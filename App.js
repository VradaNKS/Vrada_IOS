import React, {Component}from 'react'

import {StackNavigator} from 'react-navigation'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    StatusBar,
    ToastAndroid,
    TouchableOpacity,
    Image,
    Button
}from 'react-native'
import Login from './components/Login'
import Splash from './components/Splash'
import Intro from './components/Intro'
import RegisterU from'./components/User/RegisterU'
import CheckPhone from './components/CheckPhone'
import VerifyPhone from './components/VerifyPhone'
import WaitForEccept from './components/User/WaitForEccept'
import Swipers from './components/Module/Swiper'
import CardSile from './components/CardSile'
import MainCSM10 from './components/MainCSM10'
import PickLocation from './components/Module/PickLocation'
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerNav from './components/DrawerNav';
import Help from './components/Help';
import HomeScreen from './components/MainCSM10'
import MyMapView from './components/Map/MyMapView'

import CTB10 from './components/V-Tour/CTB10'
import CTB11 from './components/V-Tour/CTB11'
import CTB12 from './components/V-Tour/CTB12'
import CTB13 from './components/V-Tour/CTB13'
import CTB14 from './components/V-Tour/CTB14'
import CTB30 from './components/V-Tour/CTB30'
import CTB16 from './components/V-Tour/CTB16'
import CTB17 from './components/V-Tour/CTB17'
import CTB18 from './components/V-Tour/CTB18'
import Maps from './components/V-Tour/Maps'
import TabChoose from './components/Module/TabChoose'
import Drawer from './components/DrawerNav'
const Stack = StackNavigator({
    // PickLocation:{screen:PickLocation},
    CTB10:{screen:CTB10},
    
    Drawer:{screen:Drawer},
    CTB12:{screen:CTB12},
    CTB11:{screen:CTB11},
    CTB18:{screen:CTB18},
    CTB17:{screen:CTB17},
    CTB16:{screen:CTB16},
    CTB30:{screen:CTB30},
    CTB14:{screen:CTB14},
    CTB13:{screen:CTB13},
    Maps:{screen:Maps},
    Login:{
        screen:Login,
        navigationOptions: { header: null}
    },  

    Splash:{
        screen:Splash,
        navigationOptions:{header:null}
        
    },
    MyMapView:{screen:MyMapView},
    
    Login:{
        screen:Login,
        navigationOptions: { header: null}
    },
    Help:{screen:Help},
    
    Intro:{
        screen:Intro,
        navigationOptions:{header:null}
    },
   
    HomeScreen:{
        screen:HomeScreen,
        navigationOptions: { header: null}},   
     
    Splash:{
        screen:Splash,
        navigationOptions:{header:null}
        
    },
    
    
    Swipers:{
        screen:Swipers,
        navigationOptions:{header:null}
    },


    CardSile:{screen:CardSile}, 

    RegisterU:{
        screen:RegisterU,
        navigationOptions:{
            title:'Đăng ký thông tin',
            headerStyle:{
                backgroundColor:'#00803f',
            },
        }
    },
    VerifyPhone:{
        screen:VerifyPhone,
        header: ({ goBack }) => ({
            left: ( <Icon name={'chevron-left'} onPress={ () => { goBack() } }  /> ),  
        }),
        navigationOptions:{
            title:'Xác Nhận',
            headerStyle:{
                backgroundColor:'#00803f',
            },
            
            
        }
    },
    CheckPhone:{
        screen: CheckPhone
    },
    
    WaitForEccept:{
        screen:WaitForEccept
    }
},
{       
        headerMode:'none'
}
)
const mainColor = '#00803f'


export default Stack;