import React, { useState } from "react";
import PropTypes from "prop-types";
import { View, Text, Image, TouchableOpacity } from "react-native";

function ItemPick({ name, price, srcImage }) {
  const [count, setCount] = useState(0);

  return (
    <View>
      <View>
        <Text>{name}</Text>
        <Text>{price}</Text>
        <View>
          <TouchableOpacity
           
          >
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>-</Text>
          </TouchableOpacity>
          <Text
            style={{ fontSize: 20, fontWeight: "bold", marginHorizontal: 15 }}
          >
            {count}
          </Text>
          <TouchableOpacity>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Image source={srcImage} style={{ width: 40, height: 40 }} />
      </View>
    </View>
  );
}

ItemPick.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  srcImage: PropTypes.any.isRequired,
};

export default ItemPick;
