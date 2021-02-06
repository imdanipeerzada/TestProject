import React from "react";
import { StyleSheet, View, Text, ActivityIndicator} from "react-native";

// import MyStack from "./navigation";

// import Welcome from './screens/Welcome';
// import Browse from './screens/Browse';
// import Login from './screens/Login';
//import Signup from './screens/Signup';

import firebase from '@react-native-firebase/app';




export default class Loading extends React.Component {
    static navigationOption = {
    header: "null"
    }
componentDidMount(){
    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
            this.props.navigation.navigate("Browse")
        }
        else{
            this.props.navigation.navigate("Login")
        }
    })
}
  render() {
    return (
   <View style={styles.container}>
       <ActivityIndicator 
       size="large"
       color="#3fb56b"
       />
   </View>  
    )}
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#eceef3',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
