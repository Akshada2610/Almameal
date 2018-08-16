import React ,{Component} from 'react';
import {Router,Stack,Scene} from "react-native-router-flux";
import LogIn from './src/Components/Login/login';
import SignUp from './src/Components/Homescreen/signup';
import BD from './src/Components/BIrthday/Birthday';
import HomeScreen from './src/Components/Homescreen/HomeScreen';
import Homescreen1 from './src/Components/Mainscreen/mainscreen';

export default class Routes extends Component{
    render(){
        return(
            <Router>
              <Stack key="root" hideNavBar={true}>
                <Scene key="Homescreen" component={HomeScreen} title="Homescreen" initial={true}/>
                <Scene key="Login" component={LogIn} title="Login"/>
                <Scene key="SignUp" component={SignUp} title="Signup"  />
                <Scene key="birthday" component={BD} title="Birthday"/>
                <Scene key="Mainscreen" component={Homescreen1} title="Mainscreen" hideNavBar={true}/>
              </Stack>
            </Router>
        )
    }
}