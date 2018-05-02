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
// import Maps from './components/V-Tour/Maps'
import TabChoose from './components/Module/TabChoose'
import Drawer from './components/DrawerNav'
import FormPicker from './components/Module/FormPicker'
import WCTB11 from './components/Module/WCTB11'

const Stack = StackNavigator({
      
    Drawer:{screen:Drawer},
    Login:{
        screen:Login,
        navigationOptions: { header: null}
    },
    Splash:{
        screen:Splash,
    },
    Intro:{
        screen:Intro,
        navigationOptions:{header:null}
    },
    RegisterU:{
        screen:RegisterU,
        navigationOptions:{
            title:'Đăng ký thông tin',
            headerStyle:{
                backgroundColor:'#00803f',
            },
        }
    },
    Login:{
        screen:Login,
        navigationOptions: { header: null}
    }, 
    
    CTB10:{screen:CTB10},
    
    CTB18:{screen:CTB18},
    
    CTB17:{screen:CTB17},
    
    CTB16:{screen:CTB16},
    
    CTB30:{screen:CTB30},
    
    CTB14:{screen:CTB14},
    
    CTB13:{screen:CTB13},
    
    CTB12:{screen:CTB12},
    
    WCTB11:{screen:WCTB11},
    // Maps:{screen:Maps},
    
    CTB11:{screen:CTB11},
    
     // FormPicker:{scr  een:FormPicker},
  
     

    
    MyMapView:{screen:MyMapView},
    
   
    Help:{screen:Help},
    
    
   
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
