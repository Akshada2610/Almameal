import React from 'react';
import { StyleSheet,Image} from 'react-native';
export default class FirstImage extends React.Component {
  render(){
return(
    <Image source={require('./FirstImage.png')}  style = {styles.images}/>
  );
}
};

var styles = StyleSheet.create({
  images: {
    flex:1,
    alignSelf: 'stretch',
    width: null,
    resizeMode:'cover',
  }
});
