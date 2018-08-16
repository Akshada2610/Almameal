
import React  from 'react';
import { StyleSheet,View} from 'react-native';
import Routes from './Routes';
export default class App extends React.Component {
  render() {
    return(
      <View style={styles.inputcontainer}>
        <Routes/>
         </View>
    )  
  }
}

let styles = StyleSheet.create({
  inputcontainer:{
    flex: 1 ,
    backgroundColor:'#ffff',
  },
});