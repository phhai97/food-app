import React from "react";
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

// styles
import { BaseStyle } from "../../Themes";
import HomeStyle from "./styles";

// components
import ItemDish from "../../Components/ItemDish";
import ProductsNew from "../../Components/ProductNewsList";

const dataDish = [
  {
    key: 1,
    name: "Buger",
    icon: require("../../images/bugger.png"),
  },
  {
    key: 2,
    name: "Pizza",
    icon: require("../../images/pizza.png"),
  },
  {
    key: 3,
    name: "Salat",
    icon: require("../../images/salat.png"),
  },
  {
    key: 4,
    name: "Vegetable",
    icon: require("../../images/onion.png"),
  },
  {
    key: 5,
    name: "Buger Small",
    icon: require("../../images/bugger-mini.png"),
  },
];
const dataDishNew = [
  {
    key: 1,
    title: "250 Calories",
    name: "Buger",
    desc: "beef bugger",
    src: require("../../images/bugger.png"),
    path: "Detail",
  },
  {
    key: 2,
    title: "250 Calories",
    name: "Pizza",
    desc: "beef bugger",
    src: require("../../images/pizza.png"),
    path: "Detail",
  },
  {
    key: 3,
    title: "250 Calories",
    desc: "beef bugger",
    name: "Salat",
    src: require("../../images/salat.png"),
    path: "Detail",
  },
  {
    key: 4,
    title: "250 Calories",
    desc: "beef bugger",
    name: "Vegetable",
    src: require("../../images/onion.png"),
    path: "Detail",
  },
  {
    key: 5,
    title: "250 Calories",
    desc: "beef bugger",
    name: "Buger Small",
    src: require("../../images/bugger-mini.png"),
    path: "Detail",
  },
];

export default function HomeScreen({ navigation }) {
  const onChangeScreen = (path) => {
    navigation.navigate(path);
  };

  return (
    <ScrollView style={BaseStyle.mainLayout}>
      <View style={BaseStyle.container}>
        <View style={HomeStyle.header}>
          <TouchableOpacity
            style={HomeStyle.btnMenu}
            onPress={() => navigation.openDrawer()}
          >
            <Image source={require("../../images/icon-menu.png")} />
          </TouchableOpacity>

          <Text
            style={{ textAlign: "center", fontSize: 25, fontWeight: "bold" }}
          >
            Food Delivery App
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Cart")}
            style={HomeStyle.btnSearch}
          >
            <AntDesign name="shoppingcart" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginHorizontal: 15, marginTop: 15 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Food That</Text>
        <Text style={{ fontWeight: "bold", fontSize: 30 }}>
          meets your need{" "}
        </Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          width: "100%",
          marginTop: 25,
        }}
      >
        {dataDish.map((ele) => (
          <ItemDish icon={ele.icon} key={ele.key} name={ele.name} />
        ))}
      </ScrollView>
      <View
        style={{
          marginTop: 20,
          marginHorizontal: 15,
          position: "relative",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "700" }}>New Products</Text>
        <Entypo
          style={{ position: "absolute", right: 0 }}
          name="dots-three-horizontal"
          size={24}
          color="black"
        />
      </View>
      <View>
        <ProductsNew data={dataDishNew} onPress={onChangeScreen} />
      </View>
    </ScrollView>
  );
}
