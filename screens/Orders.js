import React from "react";
import { StyleSheet, View,  Image, TouchableOpacity,} from "react-native";
import { FlatGrid } from 'react-native-super-grid';
export default class Orders extends React.Component {
    render(){
        const items = [
            { image: require('../Icons/pizza.png') },
            { image: require('../Icons/pasta.png') },
            { image: require('../Icons/chinese.png') },
            { image: require('../Icons/grill.png') },
            { image: require('../Icons/burger.png') },
            { image: require('../Icons/wrap.png') },
            { image: require('../Icons/drinks.png') },
            { image: require('../Icons/fries.png') }
          ];
        return(
            <FlatGrid
      itemDimension={130}
      data={items}
      spacing={10}
      renderItem={({ item }) => (
        <View style={[styles.container]}>
            <TouchableOpacity>
            <Image style={styles.imageContainer} source={item.image}/>
            </TouchableOpacity>
        </View>
      )}
    />
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
    imageContainer:{
        marginHorizontal: 20, 
        marginBottom: 20,
        height: 140,
        width: 140,
    }
  });