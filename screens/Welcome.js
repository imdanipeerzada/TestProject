import React from 'react';
import {
 StyleSheet,View, Text, Image , TouchableOpacity
} from 'react-native';
import firebase from '@react-native-firebase/app';

firebase.initializeApp({
    apiKey: "AIzaSyBM4hR9lpy9GpX85hVvpxuO54I5Ax3Uc_Q",
    authDomain: "fir-plantapp.firebaseapp.com",
    databaseURL: "https://fir-plantapp.firebaseio.com",
    projectId: "fir-plantapp",
    storageBucket: "fir-plantapp.appspot.com",
    messagingSenderId: "84558050330",
    appId: "1:84558050330:web:359ec9238aac5a3c238da3",
    measurementId: "G-1SRCJ1CS59"
})

export default class Welcome extends React.Component {
    componentDidMount(){
        var firebaseConfig = {
          
        };
        // Initialize Firebase
        
      
       }
    render(){
        return(
            <View style= {styles.container}>
                <Text style={styles.headerText}>Your Home. <Text style={styles.headerText2}>Greener.</Text></Text>
                <Text style={styles.headerText1}>
            Enjoy the experience.
          </Text>
              <Image source={require('../assets/images/icon.png')}/>
             
               <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Login')}} style = {styles.loginbutton}>
           <Text style={styles.loginbuttonText}>Login</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Signup')}} style = {styles.signupbutton}>
           <Text style={styles.signupbuttonText}>Register</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.tsbutton}
           onPress={()=>{this.props.navigation.navigate('Browse')}}>
           <Text style={styles.tsbuttonText}>Register Later</Text>
           </TouchableOpacity>
           </View>
            
        )
    }
};

const styles = StyleSheet.create({
    container:{
        flex: 2,
        alignItems:'center'
    },
    headerText: {
        flex:1.5,
        marginTop:50,
        fontSize : 26
        
    },
    headerText1:{
        flex:1.5,
        color: '#A9A9A9',
        fontSize : 20
    },
    headerText2:{
        color: '#3fb56b',
        fontSize : 26
    },
    loginbutton: {

        width:300,
        backgroundColor:'#3fb56b',
         borderRadius: 25,
          marginVertical: 10,
          paddingVertical: 13,
          justifyContent:'center'
      },
      loginbuttonText: {
        fontSize:20,
        fontWeight:'500',
        color:'white',
        textAlign:'center'
      },
      signupbutton: {
  
        width:300,
        backgroundColor:'#3fb56b',
         borderRadius: 25,
          marginVertical: 10,
          paddingVertical: 13,
          justifyContent:'center'
      },
      signupbuttonText: {
        fontSize:20,
        fontWeight:'500',
        color:'white',
        textAlign:'center'
      },
      tsbutton: {
        color:'#3fb56b',
          marginVertical: 10,
          paddingVertical: 13,
          justifyContent:'center'
      },
      tsbuttonText: {
        fontSize:20,
        fontWeight:'500',
        color:'#A9A9A9',
        textAlign:'center'
      }
})