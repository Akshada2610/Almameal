import React  from 'react';
import FirstImage from './Fimage';
import SignUp from './signup';
export default class HomeScreen extends React.Component {
constructor(props){
 super(props)
 this.state = {
  component : <FirstImage />
 }
}
componentDidMount(){

     // Start counting when the page is loaded
     this.timeoutHandle = setTimeout(()=>{
          // Add your logic for the transition
          this.setState({ component: <SignUp /> })
     }, 1300);
}

componentWillUnmount(){
     clearTimeout(this.timeoutHandle);
}

render() {
return (
  this.state.component
);
}
};