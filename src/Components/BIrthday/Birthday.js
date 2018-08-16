import React from 'react';
import { StyleSheet,Text, TouchableOpacity, View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
export default class BD extends React.Component {
    constructor()
    {
        super()
            this.state={
                isVisible:false

            }
    }
    handlepicker =()=>{
       this.setState({
           isVisible:true
       })
    }
    hidepicker = () =>{
        this.setState({
            isVisible:false
        })
     }
     showPicker = () =>{
        this.setState({
            isVisible:true
        })

     }
    render(){
      return(
        <View style={styles.inputcontainer}>
         <Text style={styles.step}> STEP 2/2 </Text>
        <Text style={styles.text2} >When can we wish you</Text>
        <Text style={styles.text3}>'Happy Birthday'?</Text>
        <TouchableOpacity onPress={this.showPicker} style={styles.button}>
          <Text>       Choose Your Birth date</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isVisible}
          onConfirm={this.handlepicker}
          onCancel={this.hidePicker}
        />
        </View>
      )
    }
}
let styles = StyleSheet.create({
    inputcontainer: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    padding:10
  },
  button:{
      marginTop:20,
      width:250,
      height:50,
      backgroundColor:'#26a69a',
      borderRadius:30,
      justifyContent:'center',
      textAlign:'center',
  }, 
  step:{
    textAlign:'center',
    fontSize:20,
    fontWeight: 'bold',
    color:'black',
    fontFamily:'serif',
  },
  text2:{
    marginTop:20,
    textAlign:'center',
    color:'#f06292',
    fontFamily:'serif',
    fontSize:18,
  },
  text3:{
      marginTop:5,
    textAlign:'center',
    color:'#f06292',
    fontFamily:'serif',
    fontSize:18,
  },
});


