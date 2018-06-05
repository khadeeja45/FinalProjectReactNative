import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity , Image, TextInput, ScrollView} from 'react-native';
export default class App extends React.Component {
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

     <TextInput style={{ marginTop:20, backgroundColor:'white', 
     width:330, height:40,marginLeft:10 }}>

     </TextInput>
     <TouchableOpacity style={{backgroundColor:'lightcoral', marginLeft:200, height:40,
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