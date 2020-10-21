import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

function ItemDishNew({ title, srcImg, name, description, onPress , path}) {
  return (
    <TouchableOpacity style={ItemDishNewStyles.container} onPress={() => onPress(path)}>
      <View style={ItemDishNewStyles.header}>
        <Image style={{width:30,height:30,}} source={require("../images/fire.png")} />
        <Text style={{fontWeight:'700', marginHorizontal:15}}>{title}</Text>
      </View>
      <View style={ItemDishNewStyles.body}>
        <Image style={ItemDishNewStyles.imageBody} source={srcImg} />
        <Text style={{fontSize:20}}>{name}</Text>
        <Text style={{fontSize:13, marginTop:10}}>{description? description : ''}</Text>
      </View>
    </TouchableOpacity>
  );
}



ItemDishNew.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  decription: PropTypes.string,
  srcImg: PropTypes.any.isRequired,
  onPress:PropTypes.func.isRequired,
};

const ItemDishNewStyles = StyleSheet.create({
  container: {
    width: 160,
    height: 280,
    backgroundColor: "#dcdcdc",
    borderRadius:20,
    marginHorizontal:15,
    marginVertical:10,
  },
  header: {
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center',
      marginTop:15,
  },
  body:{
    alignItems:'center',
    justifyContent:'center',
    marginVertical:20
  },    
  imageBody: {
      width:100,
      height:100,
  },
});

export default ItemDishNew;
