import React from 'react';
import {View, StyleSheet,Image, Text, ScrollView,TouchableOpacity } from 'react-native';
import {createStackNavigator,createTabNavigator,createDrawerNavigator} from 'react-navigation'
import Splash from './components/splash'
import Login from './components/login'
//import Signup from './components/signup'
import Front from './components/front'
import Leave from './components/leave'
import Icon from 'react-native-vector-icons/FontAwesome';
import Table from './components/table'

const DrawerApp=createDrawerNavigator({
  Front:{screen:Front},
  Leave:{screen:Leave},
  Table:{screen:Table},
  
}); 

const StackApp=createStackNavigator({
  Splash:{screen:Splash ,navigationOptions:{header:null}},
 // Signup:{screen:Signup,navigationOptions:{header:null}},
  Login:{screen:Login,navigationOptions:{header:null}},
  
  DrawerApp:{screen:DrawerApp}

  
}
); 

export default class App extends React.Component {


  constructor(props){
super(props);
}
  render() {
    return (
    <StackApp/>
    );
  }
}
 
