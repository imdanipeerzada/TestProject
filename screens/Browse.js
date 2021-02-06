import React from "react";
import { StyleSheet, KeyboardAvoidingView, Image, Text , TextInput, TouchableOpacity} from "react-native";
import { List, ListItem, Item } from "native-base";
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

export default class Browse extends React.Component {
  constructor(props) {
    super(props);
    
  }     
  state = {
    text:"",
    mylist:[]
  }
  userSignout(){
    firebase.auth().signOut()
  }
  componentDidMount(){
    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        this.setState({
          email:user.email
        })
      }
      else{
        this.props.navigation.replace("Login"); 
      }
    })
    this._fetch();
     
  }


  _fetch() {
    const myitems = firebase.database().ref("Superheroes")
     myitems.on("value",datasnap=>{
       console.log(datasnap.val())
      // alert(JSON.stringify(datasnap.val()));
      if(datasnap.val() !== null){

        this.setState({mylist:Object.values(datasnap.val()) })
      } else {
        this.setState({mylist:[]})
      }
      
     })
  }
  saveitems(){
   console.log(this.state.text)
   const myhero = firebase.database().ref("Superheroes")
    myhero.push().set({
      text:this.state.text,
      time: Date.now()
    })
    this.setState({text:""})
  }
  removeItem(){
    firebase.database().ref("Superheroes").remove()
    .then(()=>{
      this._fetch();
    })
    // this.setState({mylist:[]})
  }
    render(){
     console.log(this.state)
     const myhero = this.state.mylist.map(item=>{
       return(
         <ListItem style={{justifyContent:"space-between"}}>
           <Text>{item.text}</Text>
       <Text>{new Date(item.time).toDateString()}</Text>
         </ListItem>
       )
     })
        return(
            <KeyboardAvoidingView style= {styles.container}>
             <Text>You are Logged in As {this.state.email}</Text>
              <TextInput style={styles.inputBox}
                placeholder="Enter Item"
                placeholderTextColor="#fffff"
                value={this.state.text}
                onChangeText={(text)=>this.setState({text:text})}
                />
          
              <TouchableOpacity style = {styles.loginbutton}
              onPress={()=>this.saveitems()}>
           <Text style={styles.loginbuttonText}>Add Items</Text>
           </TouchableOpacity>

           <TouchableOpacity style = {styles.loginbutton}
              onPress={()=>this.removeItem()}>
           <Text style={styles.loginbuttonText}>Remove All</Text>
           </TouchableOpacity>
           
           <TouchableOpacity style = {styles.loginbutton}
           onPress={()=>this.userSignout()}>
           <Text style={styles.loginbuttonText}>Logout</Text>
           </TouchableOpacity>
           
           <List>
             {myhero}
           </List>
          </KeyboardAvoidingView>
            
        )
    }
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
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