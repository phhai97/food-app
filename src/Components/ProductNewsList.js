import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";

import ItemDishNew from "./ItemDishNew";

function ProductNewsList({ data ,onPress}) {
  return (
    <View
      style={{
        marginTop: 15,
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {data &&
        data.map((ele) => (
          <ItemDishNew
            key={ele.key}
            title={ele.title}
            srcImg={ele.src}
            name={ele.name}
            description={ele.desc}
            path={ele.path}
            onPress={onPress}
          />
        ))}
    </View>
  );
}

ProductNewsList.propTypes = {
  data: PropTypes.array.isRequired,
  onPress:PropTypes.func.isRequired,
};

export default ProductNewsList;
