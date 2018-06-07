import React from 'react';
import {View, StyleSheet,Image, Text, ScrollView,TouchableOpacity,TextInput,AsyncStorage} from 'react-native';
import Communications from 'react-native-communications';
 import axios from 'axios';
export default class Login extends React.Component {
  constructor(props){
super(props);
 this.state={
      user:'',
      pass:''
    }
this.handleTouch=this.handleTouch.bind(this);
this.handleTouch1=this.handleTouch1.bind(this);
    
  }
  handleTouch1(){
  this.props.navigation.navigate('Splash');
}
  
 handleTouch(){
   let a=false;
   let b;
   a=this.props.navigation;
   b=this.state
   axios.post('https://obscure-island-34839.herokuapp.com/api/users/login', {
    email: b.user,
    password: b.pass
    
  })
  .then(function (response) {
    
   
    if(response.data.isAuth===true){
      AsyncStorage.setItem('token',response.data.token);
      alert('login');
      a.navigate('DrawerApp');
            }
else{
  alert('not login');
}
  })
  .catch(function (error) {
    alert(error);
  });

      
  }
  render() {
    return (
       <View style={{backgroundColor:'teal',alignItems:'center',height:'100%',width:'100%'}}>
       
       
        
       <View style={{ alignItems: 'center',marginTop:80,flexDirection: 'row'}}>
      
       <Image
          style={{borderRadius: 5,width: 70, height: 50}}
          source={{uri: 'http://shoulditattoo.com/wp-content/uploads/2012/09/Medcert-Key-logo-Front-Page-Top-left-3-1024x789.png'}}
        />
      
        <Text style={{fontSize:50,fontWeight:'bold',color:'beige'}}>
      LOGIN
        
      </Text>
      </View>
       
       
         
       
         <Image
          style={{borderRadius: 10,width: 200, height: 120,marginTop:20}}
          source={{uri: 'https://logopond.com/logos/c1ea5967be3c372963b1bcb8fa0adc38.png'}}
        />
        
        <View style={{ alignItems: 'center',marginTop:20,flexDirection: 'row'}}>
      
       <Image
          style={{borderRadius: 5,width: 40, height: 40}}
          source={{uri: 'http://www.blaue-reisen-kroatien.com/wordpress/wp-content/uploads/2016/09/sassy-email-logo-png.png'}}
        />
      
        <TextInput
        placeholder="Email Address"
        onChangeText={(e)=>{
  this.setState({user:e})
}}
        style={{borderRadius: 20,height: 40, width:300,borderColor: 'wheat', borderWidth: 2}}
      />
      </View>
      
      <View style={{ alignItems: 'center',marginTop:20,flexDirection: 'row'}}>
      
       <Image
          style={{borderRadius: 5,width: 40, height: 40}}
          source={{uri: 'http://image.shutterstock.com/display_pic_with_logo/348535/174941666/stock-photo-password-protected-icon-data-protection-by-using-strong-safe-passwords-recover-and-change-for-174941666.jpg'}}
        />
      
        <TextInput
        placeholder="Password"
        onChangeText={(e)=>{
  this.setState({pass:e})
}}
        style={{borderRadius: 20,height: 40, width:300,borderColor: 'wheat', borderWidth: 2}}
      />
      </View>
        
        <View style={{flexDirection:'row'}}>
     <TouchableOpacity 
     onPress={this.handleTouch}
        style={{borderRadius: 20,backgroundColor:'lightgrey',marginTop:20,height:40,width:120, alignItems: 'center'}} >
        <Text style={{color:'black',margin:5,fontSize:20,fontWeight:'bold'}}>
        SIGN IN
        </Text>
       
  </TouchableOpacity>
  
  
   <TouchableOpacity 
        style={{borderRadius: 20,marginTop:20,height:30,width:185, alignItems: 'center'}} >
        <Text style={{color:'#34495e',margin:5,fontSize:20,fontWeight:'bold'}}>
        Forget Password?
        </Text>
  </TouchableOpacity>
  </View>
  
  
    <TouchableOpacity 
    onPress={this.handleTouch1}
        style={{borderRadius: 20,backgroundColor:'lightgrey',marginTop:20,marginLeft:-185,height:40,width:120, alignItems: 'center'}} >
        <Text style={{color:'black',margin:5,fontSize:20,fontWeight:'bold'}}>
        Back
        </Text>
        
  </TouchableOpacity>
  
  
  
  
        
        
      </View>
    );
  }
}
