import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function App() {
  //oddly, all views use flexbox by default. And it's default mode is column.
  return (
    <View style={{padding: 50}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <TextInput placeholder={"Add Goal!"} style={{borderBottomColor: 'black', borderBottomWidth: 1, margin: 10, width: '80%'}} />
        <Button 
        title="ADD"/> 


      </View>
   
    </View>
  );
}

const styles = StyleSheet.create({

});
