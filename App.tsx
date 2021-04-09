import { Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button, TouchableOpacity} from 'react-native';

export default class App extends React.Component {

  state = {
    niceNumber: 0
  }

  adding = () => {
    this.setState({niceNumber: this.state.niceNumber+1})
  }
  substract = () => {
    this.setState({niceNumber: this.state.niceNumber-1})
  }

  setToZero = () =>{
    this.setState({niceNumber:0})
  }

  render(){
    return (
      <View style={{ 
          flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color:'black'}}>Welcome to the App</Text>
        <Text style={{color:'black'}}>Add/Subtract</Text>
        <Button title="Set to Zero" color="black" onPress={()=> this.setToZero()}/>
        <TouchableOpacity 
          style={{height:50, paddingHorizontal:10, backgroundColor:'blue', justifyContent:'center', alignItems:'center', borderRadius:10, margin:10}}
          onPress={()=> this.adding()}
        >
          <Text>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={{height:50, paddingHorizontal:10, backgroundColor:'red', justifyContent:'center', alignItems:'center', borderRadius:10, margin:10}}
          onPress={()=> this.setToZero()}
        >
          <Text>Substract</Text>
        </TouchableOpacity>
        <Text style={{fontSize:25}}> {this.state.niceNumber} </Text>
        <Text
        style={{color:'red', fontSize:25}}>
          senfsgn
        </Text>

        <StatusBar style="auto" />

        {
          (this.state.niceNumber == 0)
          ?
          <Text>The number is zero</Text>
          :
          <Text>The number isn't zero</Text>
        }
        <TouchableOpacity style={(this.state.niceNumber > 0 && this.state.niceNumber > 10)
          ?
          {width:100, height:30, backgroundColor:'red', borderRadius:10}
          :
          {width:200, height:50, backgroundColor:'blue', borderRadius:30}
        }>
        
        </TouchableOpacity> 
      </View>
    );
  }
}


