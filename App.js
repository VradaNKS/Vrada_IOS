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
import CUI10 from './components/CUI10'
import CSI11 from './components/CSI11'
import CSI10 from './components/CSI10'
import CUI13 from './components/CUI13'
import CUI12 from './components/CUI12'
import WaitForEccept from './components/User/WaitForEccept'
import Swipers from './components/Module/Swiper'
import CardSile from './components/CardSile'
import CSM10 from './components/CSM10'
import PickLocation from './components/Module/PickLocation'
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerNav from './components/DrawerNav';
import Help from './components/Help';
import HomeScreen from './components/CSM10'

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

const Stack = StackNavigator({
    Drawer:{screen:Drawer},
    
    CUI13:{
        screen:CUI13,
    },
    CUI10:{
        screen:CUI10,
    },
    CSI10:{
        screen:CSI10,
    },
    CUI12:{
        screen:CUI12,
    
    },
    CSI11:{
        screen:CSI11,
    },
   
    CTB13:{screen:CTB13},
    
    CSM10:{
        screen:CSM10
    },
    CTB10:{screen:CTB10},
    
    CTB18:{screen:CTB18},
    
    CTB17:{screen:CTB17},
    
    CTB16:{screen:CTB16},
    
    CTB30:{screen:CTB30},
    
    CTB14:{screen:CTB14},
    
    CTB12:{screen:CTB12},
    
    
    CTB11:{screen:CTB11},
   
    Help:{screen:Help},
    
    HomeScreen:{
        screen:HomeScreen,
        navigationOptions: { header: null}},   
    
    Swipers:{
        screen:Swipers,
        navigationOptions:{header:null}
    },

    CardSile:{screen:CardSile}, 

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
