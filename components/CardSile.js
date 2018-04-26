import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Image,
  ToastAndroid,
  Dimensions,
  Platform
} from 'react-native';

import InfiniteCarousel from './InfiniteCarousel';
import ElevatedView from 'react-native-elevated-view'

import CarouselPager from 'react-native-carousel-pager';
import {BoxShadow} from 'react-native-shadow'
import CardView from 'react-native-cardview'

const animals = [
  {
    name: 'Bike',
    color: '#2969B0',
    src:require('../source/icons/vbike.png'),
  },
  {
    name: 'Taxi',
    color: '#FBA026',
    src:require('../source/icons/vcar.png'),
    
    
  },
  {
    name: 'Plane',
    color: '#E14938',
    src:require('../source/icons/vtour.png'),
        
  },
  {
    name: 'Train',
    color: '#9365B8',
    src:require('../source/icons/vtour_bus.png'),
    
  },
 
];

const HEIGHT = 100;

const Animal = ({ name, color,src, animatedScale, index, style }) => (
  <View style={[{  }, styles.animal]}>
    <TouchableOpacity onPress={() => ToastAndroid.show(`Item:  ${index+1}`, ToastAndroid.SHORT)}>
      <Animated.View
        style={[
          {
            transform: [{ scale: animatedScale }],
          },
          style,
          styles.animalAnimatedBox,
        ]}>

        <Image
            source={src}
            style={styles.image}
            parallaxFactor={1}
            resizeMode={'cover'}
        />
        <Text style={{  fontWeight: 'bold' }}>{name}</Text>
        
      </Animated.View>
    </TouchableOpacity>
  </View>
);
const mainColor='#00803f'

class CardSile extends Component {
  state = {
    dimensions: {},
    status:mainColor,
    checkStatus:false
  };

  _isSameMeasure = (measurement1, measurement2) =>
    measurement1.width === measurement2.width &&
    measurement1.height === measurement2.height;

  _onLayout = ({ nativeEvent }) => {
    const dimensions = nativeEvent.layout;
    if (!this._isSameMeasure(this.state.dimensions, dimensions)) {
      this.setState({ dimensions });
    }
  };


  _changeStatus(){
    if(!this.state.checkStatus){
      this.setState({status:'red'})
      ToastAndroid.show('Changed Status DONE',ToastAndroid.SHORT)
      this.setState({checkStatus:true})
    }else{
      this.setState({status:'yellow'})
      this.setState({checkStatus:false})
      ToastAndroid.show('NOT Status',ToastAndroid.SHORT)
    }
    
  }

  render() {
    const dynamicContainerStyle = {
      height: HEIGHT,
      width: this.state.dimensions.width,
    };
    // BOX SHADOW
    const shadowOpt = {
      width:140,
      height:171400,
      color:"#000",
      border:2,
      radius:3,
      opacity:0.2,
      x:0,
      y:3,
      style:{marginVertical:5}
  }

    const RECTANGLE_RATIO = 1;
    const MIN_SCALE = 0.6;
    const MAX_SCALE = 1;
    const MIN_OPACITY = 2
    
    // we will pass an array of functions as children
    const pages = animals.map((animal, index) =>
      (animatedPosition, pageWidth, pageOffset) => {
        const height = pageWidth * 2;
        const width = height * RECTANGLE_RATIO;
        return (
              <Animal
              {...animal}
              index={index}
              style={{
                 width,
                 height,
                opacity:MIN_OPACITY ,
              // 
            }}
              animatedScale={animatedPosition.interpolate({
                inputRange: [
                  pageOffset - pageWidth,
                  pageOffset,
                  pageOffset + pageWidth,
                ],
                outputRange: [MIN_SCALE, MAX_SCALE, MIN_SCALE,],
              })}
            />
        );
      });

    return (
      <View style={styles.container} onLayout={this._onLayout}>
        <View style={{
          justifyContent:'center',
          alignItems:'center',
        }}>

              <View
                style={styles.panelInsde}
              >
              </View>
           
                    <View
                    style={styles.cricleS}
                  >
              
                  <View
                        style={{
                        height:60,
                        width:60,
                        backgroundColor:'#00803f',
                        position:'absolute',
                        alignSelf:'center',
                        borderRadius:100,
                        borderColor:this.state.status,
                        borderWidth:2,
                        zIndex:0,
                      }}
                    />
                </View>

          <View style={dynamicContainerStyle}>
            <InfiniteCarousel>
              {pages}
            </InfiniteCarousel>
          </View>
          
        </View>
    
      </View>
    );
  }


}

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  panelInsde:{
    height:height*(17/100),
    width:width,
    backgroundColor:'white',
    position:'absolute',
    alignSelf:'center',
    zIndex:0,
  },
  cricleS:{
    height:140,
    width:140,
    backgroundColor:'white',
    position:'absolute',
    alignSelf:'center',
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    borderWidth:2,
    borderColor:mainColor 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontalWrapper: {
    flexDirection: 'row',
  },
  animal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  animalAnimatedBox: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    
  },
  image:{
    height:70,
    width:120,
    justifyContent: 'center',
    
  },
});

export default CardSile;