import React from "react";
import { StyleSheet, KeyboardAvoidingView, Image, Text , TextInput, TouchableOpacity, Alert} from "react-native";
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import Tabs from "../screens/Route";
export default class Login extends React.Component {
state={
  email:"",
  password:""
}
userLogin(email, pass){
firebase.auth().signInWithEmailAndPassword(email, pass)
.then(()=>{
this.props.navigation.navigate("MyTabs")
})
.catch((err)=>{
  alert(JSON.stringify(err.message))
})}
    render(){
     
        return(
            <KeyboardAvoidingView behavior="padding" style = {styles.container}>

                <Image source={require('../assets/images/icon.png')}/>
          
                <TextInput style={styles.inputBox}
                placeholder="Email"
                placeholderTextColor="#fffff"
                autoCapitalize="none"
                onChangeText={(text)=>this.setState({email:text})}
                />
          
                <TextInput style={styles.inputBox}
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor="#fffff"
                onChangeText={(text)=>this.setState({password:text})}
                />
          
              <TouchableOpacity style = {styles.loginbutton}
              onPress={()=>{this.userLogin(this.state.email, this.state.password)}}>
                
           <Text style={styles.loginbuttonText}>Login</Text>
           </TouchableOpacity>
          
          <Text style={styles.text}>Dont have an Account?</Text>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Signup')}}>
            <Text style={styles.signupText}> Signup</Text>
            </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
};

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputBox: {
        width:300,
        height:50,
        backgroundColor:'rgba(212, 212, 219, 0.5)',
        borderRadius:25,
        paddingHorizontal:20,
        fontSize:20,
        color:'#ffffff',
        marginVertical: 15
      },
      loginbutton: {
        width:300,
        height:50,
        backgroundColor:'#3fb56b',
         borderRadius: 25,
          marginVertical: 15,
          paddingVertical: 13,
          justifyContent:'center'
      },
      loginbuttonText: {
        fontSize:20,
        fontWeight:'500',
        color:'white',
        textAlign:'center'
      },
      text: {
        fontSize:20,
        
        color: '#A9A9A9'
      },
      signupText:{
          marginTop: 1,
        fontSize:19,
        fontWeight:'500',
        color:'#3fb56b',
      }
  });