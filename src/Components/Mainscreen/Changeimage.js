import React from 'react';
import { StyleSheet, Text, View,Image,Dimensions} from 'react-native';
const  animationImages =  [
  require('./homemade1.jpeg') ,
require('./homemade2.jpg') ,
require('./homemade3.jpg') ,
];

class CI extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageIndex: "1"
    }
  };
  componentDidMount() {
    setInterval(() => {
        var imageIndex = this.state.imageIndex+1;
          if (imageIndex >= animationImages.length) {
              imageIndex = 0;
          }
          this.setState({imageIndex:imageIndex})
        }, 3000);
    }
    
  render() {
    return (
      <View style={styles.mask}>
        <Image source={animationImages[this.state.imageIndex]} style={styles.im}/>
          </View>
    );
  }
};
export default CI;
var {width1} = Dimensions.get('window').width;
var {height1} = Dimensions.get('window').height;

const styles = StyleSheet.create({
  mask:{
    width: width1,
    height:250,
    marginTop:25,
    marginLeft:0,
  },
  im:{
    marginLeft: 0,
    width:width1,
    height:250,
  }
});
