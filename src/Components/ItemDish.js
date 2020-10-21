import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image, StyleSheet } from "react-native";

function ItemDish({ name, icon }) {
  return (
    <View style={styles.itemDish}>
      <Image style={styles.imageBanner} source={icon} />
      <Text style={styles.nameDish}>{name}</Text>
    </View>
  );
}

ItemDish.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
};

const styles = StyleSheet.create({
  itemDish: {
    borderRadius: 25,
    width:150,
    height:60,
    flex: 1,
    flexDirection:'row',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#daa520',
    marginHorizontal:15,
    paddingHorizontal:50,
  },
  imageBanner: {
    width: 50,
    height: 50,
  },
  itemContainer: {
    width: 100,
    height: 100,
    backgroundColor: "#f5deb3",
  },
  nameDish:{
    fontWeight:'700',
    marginLeft:10,
    color:'#ffffff'
  }
});

export default ItemDish;
