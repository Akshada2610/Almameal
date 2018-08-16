import React from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, KeyboardAvoidingView,Image } from 'react-native';
import { Actions } from "react-native-router-flux";


export default class LogIn extends React.Component {
  Main() {
    Actions.Mainscreen();
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.login1}>
        <View style={styles.inputcontainer}>
        <Image
          style={styles.images}
          source={require('./Icon.png')} />
          <View>
            <Image source={require('./email.jpg')} style={styles.icons} />
            <TextInput placeholder="Email" placeholderTextColor="#f8bbd0" returnKeyType="next"
              onSubmitEditing={() => this.passwordinput.focus()}
              style={styles.input} /></View>
          <View>
            <Image source={require('./lock.jpg')} style={styles.icons} />
            <TextInput placeholder="Password" placeholderTextColor="#f8bbd0" returnKeyType="next" secureTextEntry
              ref={(input) => this.passwordinput = input}
              style={styles.input} /></View>

            <TouchableOpacity style={styles.buttoncontainer} onPress={this.Main}   >
              <Text style={styles.buttontext}> Login </Text>
            </TouchableOpacity>

          </View>
      </KeyboardAvoidingView>

        );
      }
    };
var {width1} = Dimensions.get('window').width;
var {height1} = Dimensions.get('window').height;
let styles = StyleSheet.create({
          login1: {
          flex: 1,
        width: width1,
        height: height1,
        backgroundColor: '#ffff',
    
      },
  inputcontainer: {
          padding: 30,
        marginBottom: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
      },
  images: {
          height: 70,
        width: 70,
        marginBottom:40,
      },
    
  buttoncontainer: {
          backgroundColor: '#26a69a',
        paddingVertical: 10,
        borderRadius: 20,
        width: 300,
        height: 40,
      },
  input: {
          width: 300,
        height: 50,
        marginHorizontal: 20,
        paddingLeft: 54,
        paddingHorizontal: 30,
        backgroundColor: '#ffff',
        fontSize: 15,
        fontFamily: 'serif',
        borderRadius: 20,
        color: 'black',
        marginBottom: 18,
    
      },
  buttontext: {
          textAlign: 'center',
        color: '#fff',
        fontFamily: 'serif',
        fontSize: 13,
      },
  icons: {
          position: 'absolute',
        zIndex: 99,
        width: 18,
        height: 18,
        left: 40,
        top: 16,
      },
    })
