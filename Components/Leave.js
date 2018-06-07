import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity , Image, TextInput, ScrollView,AsyncStorage} from 'react-native';

import axios from 'axios';
export default class App extends React.Component {
  constructor(props){
    super(props);
     this.state={
       token:'',
          date:'',
          reason:''
        }
    this.handleTouch=this.handleTouch.bind(this);
    
      }
     componentWillMount(){
      AsyncStorage.getItem('token',(err,result)=>{
        this.setState({token:result});
      }); 
     }
      
    async handleTouch(){
 let a;
   let b;
   a=this.props.navigation;
   b=this.state
   axios.post('https://obscure-island-34839.herokuapp.com/api/employees/leave', {
    reason: b.reason,
    date: b.date,
    params:{
      token:this.state.token
    }
    
  })
  .then(function (response) {
  if(response.data.err===false){
    alert('submitted');
  }
  else 
  
  {alert('error');}
  
  
  
 
      
            

  })
  .catch(function (error) {
    alert(error);
  });
      // let response = await fetch('https://obscure-island-34839.herokuapp.com/api/employees/leave', {
      //   method: 'POST',
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json',
      //   },
        
      //   body: {
      //     date:this.state.date, 
      //     reason:this.state.reason,
      //   }
      //   , params:{
          
      //     token: AsyncStorage.getItem('token',response.data.token)
      //   }
      //});
      //alert(JSON.stringify(response));
      //let responseJson = await response.json();
      
    }
render() {
    return (
      <ScrollView>
      
<View style={styles.container}>      

<Image style={styles.stretch} 
source={{uri :'http://www.mrmediatraining.com/wp-content/uploads/2013/07/Exhausted-Man_thumb.jpg'}}
/>
    <Text style={{ fontSize:25, fontWeight:'bold',
     color: 'black', marginTop:15, textAlign:'center'
     , fontStyle:'italic'}}>Humans unlike machines need some Time</Text>

     <View style={{ backgroundColor:'lightcoral', marginLeft:10, height:40,
      width:200, marginTop:10}}>
       <Text style={{fontSize:25}}>Reason For leave</Text>
     </View>

     <TextInput    placeholder="reason"
                 onChangeText={(e)=>{this.setState({reason:e})}}
               style={{ marginTop:20, backgroundColor:'white', 
               width:330, height:40,marginLeft:10 }}>
          
               </TextInput>
               <TextInput 
                 placeholder="date"
                 onChangeText={(e)=>{this.setState({date:e})}}
               style={{ marginTop:20, backgroundColor:'white', 
               width:330, height:40,marginLeft:10 }}>

     </TextInput>
     <TouchableOpacity  onPress={this.handleTouch}
      style={{backgroundColor:'lightcoral', marginLeft:200, height:40,
      width:100, marginTop:90}}>
      <Text style={{fontWeight:'bold', fontSize:30,textAlign:'center'
       }}>Submit</Text></TouchableOpacity>

</View>


</ScrollView>
    );
}
}

const styles = StyleSheet.create({
    container: {
     height:700,
      flex:1,
      backgroundColor: 'lightblue',
      
      
    },
    stretch: {
      height:250,
      width:380,
    }
  });