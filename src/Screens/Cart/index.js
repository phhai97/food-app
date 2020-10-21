import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import ItemPick from "../../Components/ItemPick";

import CartStyle from "./styles";

const dataItemPick = [
  {
    key: 1,
    name: "Bugger1",
    price: 15,
    srcImg: require("../../images/bugger-mini.png"),
  },
  {
    key: 2,
    name: "Bugger1",
    price: 15,
    srcImg: require("../../images/bugger-mini.png"),
  },
  {
    key: 3,
    name: "Bugger1",
    price: 15,
    srcImg: require("../../images/bugger-mini.png"),
  },
  {
    key: 4,
    name: "Bugger1",
    price: 15,
    srcImg: require("../../images/bugger-mini.png"),
  },
  {
    key: 5,
    name: "Bugger1",
    price: 15,
    srcImg: require("../../images/bugger-mini.png"),
  },
];

export default function CartScreen({ navigation: { goBack } }) {
  return (
    <View style={CartStyle.cartContainer}>
      <ScrollView style={{ marginTop: 40 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ width: "10%" }}>
            <TouchableOpacity onPress={() => goBack()}>
              <Image
                style={{ marginHorizontal: 15 }}
                source={require("../../images/arrow-left.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={{ width: "80%" }}>
            <Text style={{ textAlign: "center", fontSize: 19 }}>Carts</Text>
          </View>
        </View>
        <View>
          <Text
            style={{ marginHorizontal: 15, fontWeight: "700", fontSize: 25 }}
          >
            My order
          </Text>
          <View
            style={{
              marginHorizontal: 15,
              paddingHorizontal: 15,
              marginVertical: 15,
              backgroundColor: "#daa520",
              borderRadius: 5,
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 15,
                marginHorizontal: 15,
              }}
            >
              <View
                style={{
                  width: "75%",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <AntDesign name="home" size={24} color="#FFF" />
                <Text
                  style={{ color: "#FFF", marginHorizontal: 15, fontSize: 19 }}
                >
                  64 Nguyen Buu,HCM
                </Text>
              </View>
              <View style={{ width: "25%" }}>
                <TouchableOpacity>
                  <Text style={{ color: "#1e90ff", textAlign: "right" }}>
                    Edit
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                width: "100ItemPick%",
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 15,
              }}
            >
              <View
                style={{
                  width: "75%",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Feather name="clock" size={24} color="#FFF" />
                <Text
                  style={{ color: "#FFF", marginHorizontal: 15, fontSize: 19 }}
                >
                  15-20 min
                </Text>
              </View>
              <View style={{ width: "25%" }}>
                <TouchableOpacity>
                  <Text style={{ color: "#1e90ff", textAlign: "right" }}>
                    Chose time
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View>
          {/* {dataItemPick.map((ele) => (
            <ItemPick
              name={ele.name}
              key={ele.key}
              price={ele.price}
              srcImage={ele.srcImg}
            />
          ))} */}
        </View>
      </ScrollView>
    </View>
  );
}
