import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { TextInput, Button, Text, Avatar } from 'react-native-paper';
import { Image } from 'react-native';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    console.log('Login:', { email, password });
  };

  return (
    <ImageBackground
    style={styles.Background}
    source={{uri : 'https://i.pinimg.com/474x/8f/15/9c/8f159c802f9e34cdef0794124ccc7683.jpg'}}
    resizeMode="stretch">
    
    
    <View style={styles.container}>
      <View style={styles.LogoSection}>
        <Image
        
        source={{uri :'https://ih1.redbubble.net/image.1682994400.9072/st,small,507x507-pad,600x600,f8f8f8.jpg'}}
        style={styles.LogoImage}
        />
      </View>
      
      
      
      <TextInput
        label="Email" 
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        mode="outlined"
        left={<TextInput.Icon icon="email"  />}
        
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
        mode="outlined"
        left={<TextInput.Icon icon="key" />}
      />
      <Button mode="contained" onPress={handleLogin}
      styles={styles.Button}
      buttonColor='#a47f47'>
        
        
        Login
      </Button> 
      <Button onPress={() => navigation.navigate('Register')}>
        Don't have an account? Register
      </Button>
      <Button onPress={() => navigation.navigate('Password Recovery')}>
        Forgot Password?
      </Button>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor:'rgba(204,177,138,0.8)',
  },
  input: {
    marginBottom: 16,
  },
  LogoSection: {
    alignItems: 'center',       
  },
  LogoImage: {
    width: 200,
    height: 200,
    borderRadius: 50,
     
  },
  Background:{
    flex: 1,
    resizeMode: 'cover',

  }
  


});

export default LoginScreen;
