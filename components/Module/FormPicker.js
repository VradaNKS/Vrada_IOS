import React, { Component } from 'react';

import { 
    StyleSheet,
    View,
    Dimensions,
    Text,
    Image,
    TouchableOpacity
 } from 'react-native';



 export default class FormPicker extends React.Component{
    constructor(props){
        super(props)
        this.state = {

            icCalender:require('../../source/icons/calendar.png'),
            
            fromDate:'01/02/2018',
            toDate:'03/02/2018',
            fromTime:'08:00 am',
            toTime:'03:00 am',

            DataSeat:[],
            selected1: undefined,
            selected2: undefined,

            txtgoLane:'Một chiều',
            txtbothLane:'Khứ hồi',
            goLane:require('../../source/icons/ic_cash.png'),
            bothLane:require('../../source/icons/ic_gift.png'),
        }
    }
    componentWillMount(){
        fetch("http://dev.vrada.vn/api/rest/v1/masterdata-seat ", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'api-key':'a21f355a5a8ebf9927ac247836dcfd9477ddff037b62d1558fe06d735eb04f5eee37ff3f04f2c05f02edba1f3728d7426dde567764b62972efd5e673f7cf8a26',
            },
        })
            .then((response) => response.json())
            .then((responseData) => {
                const dataResponse = JSON.stringify(responseData)
                const parsed= JSON.parse(dataResponse);
                dataSource= parsed;
                this.setState({dataSource:parsed})
                ToastAndroid.show('Loaded', ToastAndroid.SHORT)
            })
            .then(()=>{
                var length = 0;
                for( var key in dataSource.data ) {
                   switch(dataSource.data[key].id){
                    case 1 :{
                        this.setState({vRadar:dataSource.data[2].srv_div})
                        this.setState({descV:dataSource.data[2].srv_div})
                        break;
                    }
                    case 2 :{
                        this.setState({vBike:dataSource.data[0].srv_div})
                        this.setState({descBike:dataSource.data[0].srv_div})
                        break;
                    }
                    case 3 :{
                        this.setState({vCar:dataSource.data[1].srv_div})
                        this.setState({descCar:dataSource.data[1].srv_div})
                        break;
                    }
                    case 4 :{
                        this.setState({vTour:dataSource.data[3].srv_div})
                        this.setState({descTour:dataSource.data[3].srv_div})
                        break;
                    }
                   }
                }
            })
            .done();
    }

    onValueChange1(value: string) {
        this.setState({
          selected1: value
        });
      }
    onValueChange2(value: string) {
        this.setState({
          selected2: value
        });
      }

      _renderSectionTitle(section) {
        return (
          <View style={styles.content}>
            <Text>{section.content}</Text>
          </View>
        );
      }
    
    _renderHeader(section) {
    return (
        <View style={styles.header}>
        <Text style={styles.headerText}>{section.title}</Text>
        </View>
    );
    }
    
    _renderContent(section) {
    return (
        <View style={styles.content}>
        <Text>{section.content}</Text>
        </View>
    );
    }
    

    _handelChoiceLane(lane){
    switch(lane){
        case "ONE":{
            btmLineGo = 3 
            break;
        }
        case "BOTH":{
            btmLineBoth = 3 
            break;
        }
    }
    }
     render(){
         return(
             <View style = {styles.container}>
                <View style={styles.ContainerForm2}>
                    {/* Line 1 */}
                    <View style={styles.containerLine1}>
                    {/* Pick Transport */}
                    <View style={styles.containerPicker1}>
                    <Form>
                        <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="ios-arrow-down-outline" />}
                        placeholder="Chọn  xe"
                        note={false}
                        placeholderStyle={{ color: mainColor }}
                        placeholderIconColor={mainColor}
                        style={styles.picker}
                        selectedValue={this.state.selected1}
                        onValueChange={this.onValueChange1.bind(this)}
                        >
                        <Picker.Item label="V-Bike" value="key0" />
                        <Picker.Item label="V-Car" value="key1" />
                        <Picker.Item label="V-Tour" value="key2" />
                        <Picker.Item label="V-TourBus" value="key3" />
                        </Picker>
                    </Form>      
                    </View> 
                    {/*Level*/}
                    <View style= {styles.containerPicker2}>
                    <Form>
                        <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="ios-arrow-down-outline" />}
                        placeholder="Phân Khúc"
                        note={false}
                        placeholderStyle={{ color: mainColor }}
                        placeholderIconColor={mainColor}
                        style={styles.picker}
                        selectedValue={this.state.selected2}
                        onValueChange={this.onValueChange2.bind(this)}
                        >
                        <Picker.Item label="Cao cấp" value="key0" />
                        <Picker.Item label="Trung bình" value="key1" />
                        <Picker.Item label="Bình Dân" value="key2" />
                        <Picker.Item label="Giá rẻ" value="key3" />
                        </Picker>
                    </Form> 
                    </View>
                    </View>

                    {/* Line 2 */}

                    <View style={styles.containerLine2}>

                        <TouchableOpacity onPress={()=>{this._handelChoiceLane("ONE")}}style={styles.viewGoLane}>
                            <Image
                                source={this.state.goLane}
                                style={styles.icGoLane}
                            />
                            <Text style={styles.txtChoiceLane}
                            >{this.state.txtgoLane}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.viewBothLane}>
                            <Image
                                source={this.state.bothLane}
                                style={styles.bothLane}
                            />
                            <Text style={styles.txtChoiceLane}
                            >{this.state.txtgoLane}</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={contentContent.line2_3}>
                            <View style={contentContent.line2_3_r1}>
                                <Text style={contentContent.line2_3_r1_l1}>
                                    Ngày đi
                                </Text>
                                <Image
                                    style={contentContent.line2_3_r1_l2}
                                    source={this.state.icCalender}
                                />
                            </View>
                            <View style={contentContent.line2_3_r2}>
                                <Text style={contentContent.line2_3_r2_l1}>
                                    {this.state.fromDate}
                                </Text>
                                <View style={contentContent.line2_3_r2_l2}/>
                                <Text style={contentContent.line2_3_r2_l3}>
                                    {this.state.fromTime}
                                </Text>
                            </View>
                            <View style={contentContent.line2_3_r3}>
                                <Text style={contentContent.line2_3_r3TXT}>Đến</Text>
                            </View>
                            <View style={contentContent.line2_3_r4}>
                                <Text style={contentContent.line2_3_r4_l1}>
                                    Ngày về
                                </Text>
                                <Image
                                    style={contentContent.line2_3_r4_l2}
                                    source={this.state.icCalender}
                                />
                            </View>
                            <View style={contentContent.line2_3_r5}>
                                <Text style={contentContent.line2_3_r5_l1}>
                                    {this.state.toDate}
                                </Text>
                                <View style={contentContent.line2_3_r5_l2}/>
                                <Text style={contentContent.line2_3_r5_l3}>
                                    {this.state.toTime}
                                </Text>
                            </View>
                        </View>

                        </View>    
                        </View>    



                
         );
     }
 }

 const styles = StyleSheet.create({
     container:{
         flex:1,
         
     },
     containerPicker1:{
        borderBottomWidth:0.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:5

    },
    containerPicker2:{
        borderBottomWidth:0.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
    },
    picker:{ 
        width: ((defaultWidth/2)-10), 
        borderBottomWidth:0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
 })