import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View , TouchableOpacity } from "react-native";
import {Card ,Button,Icon} from 'react-native-elements';
//import Communications from 'react-native-communications';
export default class App extends Component {
 
 
 
 
  render() {
    return (
      <View style={styles.container}>
      
      <Card title="TIME TABLE">
      <Text style={{marginBottom: 0, fontWeight:'bold'}}>
    Monday
  </Text>

  <Text style={{marginBottom: 10}}>
    Opening Time: 8:00 a.m
    </Text>

    <Text style={{marginBottom: 10}}>
    Closing Time: 3:00 p.m
    </Text>

    <Text style={{marginTop: 20, fontWeight:'bold'}}>
    Tuesday
    </Text>

    <Text style={{marginBottom: 10}}>
    Opening Time: 8:00 a.m
    </Text>

    <Text style={{marginBottom: 10}}>
    Closing Time: 3:00 p.m
    </Text>

    <Text style={{marginTop: 20, fontWeight:'bold'}}>
    Wednesday
    </Text>

    <Text style={{marginBottom: 10}}>
    Opening Time: 8:00 a.m
    </Text>

    <Text style={{marginBottom: 10}}>
    Closing Time: 3:00 p.m
    </Text>

    <Text style={{marginTop: 20, fontWeight:'bold'}}>
    Thursday
    </Text>

    <Text style={{marginBottom: 10}}>
    Opening Time: 8:00 a.m
    </Text>

    <Text style={{marginBottom: 10}}>
    Closing Time: 3:00 p.m
    </Text>

    <Text style={{marginTop: 20, fontWeight:'bold'}}>
    Friday
    </Text>

    <Text style={{marginBottom: 10}}>
    Opening Time: 8:00 a.m
    </Text>

    <Text style={{marginBottom: 10}}>
    Closing Time: 1:p.m
    </Text>
   
   
      </Card>
    </View>
     
            
          
        
      
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    height:'100%',width:'100%',
    marginTop: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
    backgroundColor: "#F5FCFF"
  }
});