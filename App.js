
import React from 'react';
import { Image,  StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import gamelogo from './assets/gamertimelogo.png'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={gamelogo} style={{ width: 205, height: 205 }} /> 
      <TouchableOpacity
        onPress={() => alert('Gamers Notified!')}
        style={styles.button}>
        <Text style={styles.buttonText}>It's Gamer Time!</Text>
      </TouchableOpacity>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3CB688',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  }, 
});
