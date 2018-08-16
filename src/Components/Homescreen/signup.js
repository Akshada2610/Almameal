import React from 'react';
import { StyleSheet, Text, View, Dimensions,Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Actions } from "react-native-router-flux";

export default class SignUp extends React.Component {
  login() {
    Actions.Login();
  };
  Birthday(){
    Actions.birthday();
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.login1}>
        <View style={styles.inputcontainer}>
          <Text style={styles.Signup}>SIGN UP</Text>
          <View>
            <Image source={require('./name.jpg')}  style = {styles.icons}/>
            <TextInput placeholder="Name" placeholderTextColor="#f8bbd0" returnKeyType="next"
            onSubmitEditing={() => this.emailInput.focus()}
            style={styles.input} />
           </View>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 0.5,
              marginBottom:5,
            }}
          />
          <View>
            <Image source={require('./email.jpg')}  style = {styles.icons}/>
          <TextInput placeholder="Email" placeholderTextColor="#f8bbd0" returnKeyType="next"
            ref={(input) => this.emailInput = input}
            onSubmitEditing={() => this.passwordinput.focus()}
            style={styles.input} /> 
            </View>
             <View style={{
              borderBottomColor: 'black',
              borderBottomWidth: 0.5,
              marginBottom:5,
            }}
          />
          <View>
            <Image source={require('./lock.jpg')}  style = {styles.icons}/>
          <TextInput placeholder="Password" placeholderTextColor="#f8bbd0" returnKeyType="next" secureTextEntry
            ref={(input) => this.passwordinput = input}
            onSubmitEditing={() => this.contactinput.focus()}
            style={styles.input} />
            </View>
             <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 0.5,
              marginBottom:5,
            }}
          />
          <View>
            <Image source={require('./contact.jpg')}  style = {styles.icons}/>
          <TextInput placeholder="Contact" placeholderTextColor="#f8bbd0" returnKeyType="go"
            ref={(input) => this.contactinput = input}
            style={styles.input} />
            </View>
             <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 0.5,
              marginBottom:5,
            }}
          />
          <TouchableOpacity style={styles.buttoncontainer}  onPress={this.Birthday} >
            <Text style={styles.buttontext}> CONTINUE </Text>
          </TouchableOpacity>

          <Text style={styles.logintext1}>Already Have An Account?</Text>
          <TouchableOpacity style={styles.loginlink} onPress={this.login}>
            <Text style={styles.logintext2}>Login
                </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
};

var { width1 } = Dimensions.get('window').width;
var { height1 } = Dimensions.get('window').height;

let styles = StyleSheet.create({
  login1: {
    flex: 1,
    width: width1,
    height: height1,
    backgroundColor: '#ffff',
  },
  Signup: {
    textAlign: 'center',
    width: width1,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'serif',
    marginBottom:30,
    },
  inputcontainer: {
    padding: 30,
    marginBottom: 100,
  },
  input: {
    width:width1 - 40,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 45,
    backgroundColor: '#ffff',
    marginBottom: 18,
    paddingHorizontal: 35,
    fontSize: 15,
    fontFamily: 'serif',
    borderRadius: 20,

  },
  buttoncontainer: {
    backgroundColor: '#c2185b',
    paddingVertical: 15,
    marginTop:18,
    borderRadius:20,
  },
  buttontext: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'serif',
    fontSize: 13,
  },
  loginlink: {
    width: width1,
    textAlign: 'center',
  },
  logintext1: {
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 13,
    fontFamily: 'serif',
  },
  logintext2: {
    textAlign: 'center',
    color: '#f06292',
    fontFamily: 'serif',
    fontSize: 13,
  },
  icons:{
    position:'absolute',
    zIndex: 99,
    width: 18,
    height: 18,
    left:20,
    top: 9,
  },
});