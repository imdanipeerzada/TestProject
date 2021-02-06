import React, {Component} from 'react';
import {
    View, Image
} from 'react-native';

export default class Splash extends React.Component{
    constructor(props){
        super(props);
        setTimeout(()=>{
            this.props.navigation.navigate("Welcome");
        },3000
        );
    }
    render(){
        return(
            <View style={{flex:1}}>
                <Image style={{height:"100%",width:"100%"}} source={require('../splash.png')}/>
            </View>
            
        )
    }
}