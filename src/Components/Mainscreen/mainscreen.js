import React  from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,Button} from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import Notification from './Notification.js';
import CI from './Changeimage.js';
 export default class Homescreen1 extends React.Component{

  static navigationOptions ={
    drawerLabel:'Home',
    drawerIcon:({tintColor})=>(
      <Image source ={require('./name.jpg')} style={styles.icons1}/>
    ),
  };
  render(){
      return(
        <View>
        <View style={styles.container}>
        <TouchableOpacity style={styles.button1} onPress={()=>this.props.navigation.openDrawer()}>
        <Image source={require('./index.png')} style={styles.icons1}/>
        </TouchableOpacity>
        <Text style={styles.locationtext}>User Location</Text>
        <TouchableOpacity style={styles.button2} >
        <Image source={require('./cart.png')} style={styles.icons2}/>
        </TouchableOpacity>
         </View>
         <CI/>
         </View>
      );
  }
};

 var drawer= createDrawerNavigator({
    Home:{
      screen: Homescreen1,
    },
    Notification:{
      screen: Notification,
    },
    
  },
  {
    drawerPosition:'left',
    initialRouteName:'Home',
    drawerBackgroundColor:'orange',
    drawerWidth:300,

  }
);
const styles = StyleSheet.create({
  icons1:{
  width:30,
  height:50,
  },
  icons2:{
    marginTop:10,
    width:30,
    height:30,
    },
  container:{
    flexDirection:'row',
    width:40,
    height:18,
  },
  button1:
  {
    borderRadius: 20,
    marginBottom:0,
    width:40,
    height:50,
    shadowRadius:5,
    shadowOpacity: 0.35,
    marginLeft:3,
  },
  locationtext:{
    width: 200,
    height:50,
    fontSize: 18,
    fontWeight: 'normal',
    color: 'black',
    fontFamily: 'serif',
    marginTop:10,
    marginLeft:40,
  },
  button2:
  {
    borderRadius: 30,
    marginBottom:0,
    width:80,
    height:50,
    marginLeft:20,
  },
});

