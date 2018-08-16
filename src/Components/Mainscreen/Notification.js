import React  from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,Button} from 'react-native';
export default class Notification extends React.Component{
  static navigationOptions ={
    drawerLabel:'Notification',
    drawerIcon:({tintColor})=>(
      <Image source ={require('./name.jpg')} style={styles.icons1}/>
    ),
  };
  render(){
      return(
        <View style={styles.container}>
        <Text>Notifications</Text>
        <Button onPress={()=>this.props.navigation.goBack()}
         title='Go back home'/>
         <Button onPress={()=>this.props.navigation.openDrawer()}
         title='DrawerOpen'/>
         </View>
      );
  }
};
const styles = StyleSheet.create({
  icons1:{
    width:30,
    height:50,
    },
  container:{
    flexDirection:'row',
    width:40,
    height:30,
  },
  button:
  {
    backgroundColor: '#859a9b',
    borderRadius: 20,
    marginBottom:0,
    shadowColor: '#303838',
    width:40,
    height:50,
    shadowRadius:5,
    shadowOpacity: 0.35,

  },
});