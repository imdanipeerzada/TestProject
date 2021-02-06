import React from "react";
import { KeyboardAvoidingView,StyleSheet, View, Image, Text , TextInput, TouchableOpacity} from "react-native";
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export default class Signup extends React.Component {
  constructor(props){
    super(props);
  state={
    email:"",
    password:"",
    firstName:"",
    lastName:"",
    phone:"",
    myArray:[]
  }}
  userSignup(email, pass, firstName, lastName, phone){
    //Initializing the Email and Password in Firbase
    firebase.auth().createUserWithEmailAndPassword(email, pass);

    var userId = auth().currentUser.uid;

    const users = database().ref('Heroes/' + userId)
    users.set({
      email,
      pass,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phone
    })
    users.on("value",datasnap=>{
      console.log(datasnap.val())
     // alert(JSON.stringify(datasnap.val()));
     if(datasnap.val() !== null){

       this.setState({myArray:Object.values(datasnap.val()) })
     } else {
       this.setState({myArray:[]})
     }
     
    })
            this.props.navigation.navigate("Login")
  
  }
 
    render(){
        return(
            <KeyboardAvoidingView style = {styles.container}>
                <Image source={require('../assets/images/icon.png')}
                style = {styles.stretch}
                />
                    <TextInput style={styles.inputBox}
                placeholder="Email"
                placeholderTextColor="#fffff"
                autoCapitalize="none"
                onChangeText={(text)=>this.setState({email:text})}
                
                />
                <TextInput style={styles.inputBox}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(text)=>this.setState({password:text})}
                placeholderTextColor="#fffff"
                />
                     <TextInput style={styles.inputBox}
                placeholder="First Name"
                placeholderTextColor="#fffff"
                onChangeText={(text) => this.setState({ firstName:text })}
                  
                />
                <TextInput style={styles.inputBox}
                placeholder="Last Name"
                placeholderTextColor="#fffff"
                onChangeText={(text) => this.setState({ lastName:text })}
        
                />
        
                <TextInput style={styles.inputBox}
                placeholder="Phone"
                placeholderTextColor="#fffff"
                onChangeText={(text) => this.setState({ phone:text })}
                  
                />
               
                
              <TouchableOpacity style = {styles.loginbutton}
              onPress={()=>this.userSignup(this.state.email, this.state.password)}>
           <Text style={styles.loginbuttonText}>Signup</Text>
           </TouchableOpacity>
          <Text style={styles.text}>Already Have an Account?</Text>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Login')}}>
           <Text style={styles.loginText}>Login</Text>
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
    stretch: {
        width: 150,
        height: 150,
        resizeMode: 'stretch',
      },
    inputBox: {
        width:300,
        height:50,
        backgroundColor:'rgba(212, 212, 219, 0.5)',
        borderRadius:25,
        paddingHorizontal:20,
        fontSize:20,
        color:'#ffffff',
        marginVertical: 12
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
      loginText:{
        fontSize:20,
        fontWeight:'500',
        color:'#3fb56b',
        textAlign:'center'
      }
  });