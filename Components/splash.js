
import React from 'react';
import {View, StyleSheet,Image, Text, TouchableOpacity } from 'react-native';
import Communications from 'react-native-communications';
 
export default class Splash extends React.Component {
  constructor(props){
super(props);

this.handleTouch1=this.handleTouch1.bind(this);
    
  }

handleTouch1(){
  this.props.navigation.navigate('Login');
}
  render() {
    return (
      
      <View style={{backgroundColor:'white',alignItems:'center',height:'100%',width:'100%'}} >
      
      
      
      <Image
          style={{marginTop:90,width: 360, height: 360}}
          source={{uri: 'http://dansmonlabo.com/wp-content/uploads/2015/07/5P8-ghRvYE8.jpg'}}
        />
      
        <View style={{flexDirection: 'row',marginTop:50,alignItems:'center',margin:20}}>
         <TouchableOpacity 
       onPress={this.handleTouch1}
 
        style={{borderRadius: 20,backgroundColor:'cadetblue',height:40,width:80, alignItems: 'center'}} >
        <Text style={{color:'black',margin:5,fontSize:20,fontWeight:'bold'}}>
        SIGN IN
        </Text>
       </TouchableOpacity>
      
  
       
      
        
    
      </View>
  
        
        
       
        
      
        
        
        
        
      </View>
    );
  }
}
 
 
 
 