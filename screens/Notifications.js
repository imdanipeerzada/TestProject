import React from "react";
import { StyleSheet, View, Image, Text , TextInput, TouchableOpacity, Alert} from "react-native";
export default class Notifications extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>No Notifications.</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },
  });