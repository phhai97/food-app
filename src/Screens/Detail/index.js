import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import DetailStyle from "./styles";

export default function DetailScreen({ navigation: { goBack } }) {
  const [count, setCount] = useState(0);
  return (
    <View style={DetailStyle.detailContainer}>
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
            <Text style={{ textAlign: "center", fontSize: 19 }}>
              Detail Product
            </Text>
          </View>
          <View style={{ width: "10%" }}>
            <EvilIcons name="star" size={30} color="#ffd700" />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10%",
            paddingBottom: "5%",
          }}
        >
          <Image
            source={require("../../images/bugger-mini.png")}
            style={{ width: "90%", height: 260 }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 15,
          }}
        >
          <View
            style={{
              width: 160,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#b0c4de",
              borderRadius: 25,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                if (count > 0) setCount(count - 1);
                else setCount(0);
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 30 }}>-</Text>
            </TouchableOpacity>
            <Text
              style={{ fontSize: 30, fontWeight: "bold", marginHorizontal: 15 }}
            >
              {count}
            </Text>
            <TouchableOpacity onPress={() => setCount(count + 1)}>
              <Text style={{ fontWeight: "bold", fontSize: 30 }}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingBottom: 15,
          }}
        >
          <View style={{ width: "70%", paddingLeft: 15 }}>
            <Text style={{ fontSize: 30 }}>Bugger</Text>
            <Text style={{ color: "#808080" }}>Beef Bugger</Text>
          </View>
          <View style={{ width: "30%" }}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>$ 12.44</Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginHorizontal: 15,
              marginVertical: 5,
            }}
          >
            Ingredients
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginBottom: 5 }}
          >
            <View
              style={{
                paddingHorizontal: 5,
                paddingVertical: 5,
                borderRadius: 30,
                backgroundColor: "#dcdcdc",
                alignItems: "center",
                justifyContent: "center",
                marginHorizontal: 15,
              }}
            >
              <Image
                source={require("../../images/salat.png")}
                style={{ width: 50, height: 50 }}
              />
            </View>
            <View
              style={{
                paddingHorizontal: 5,
                paddingVertical: 5,
                borderRadius: 30,
                backgroundColor: "#dcdcdc",
                alignItems: "center",
                justifyContent: "center",
                marginHorizontal: 15,
              }}
            >
              <Image
                source={require("../../images/onion.png")}
                style={{ width: 50, height: 50 }}
              />
            </View>
            <View
              style={{
                paddingHorizontal: 5,
                paddingVertical: 5,
                borderRadius: 30,
                backgroundColor: "#dcdcdc",
                alignItems: "center",
                justifyContent: "center",
                marginHorizontal: 15,
              }}
            >
              <Image
                source={require("../../images/vegetable.png")}
                style={{ width: 50, height: 50 }}
              />
            </View>
            <View
              style={{
                paddingHorizontal: 5,
                paddingVertical: 5,
                borderRadius: 30,
                backgroundColor: "#dcdcdc",
                alignItems: "center",
                justifyContent: "center",
                marginHorizontal: 15,
              }}
            >
              <Image
                source={require("../../images/tomato.png")}
                style={{ width: 50, height: 50 }}
              />
            </View>
          </ScrollView>
        </View>
        <View style={{ marginHorizontal: 15, marginBottom: 30 }}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Decriptions</Text>
          <Text style={{ fontSize: 16 }}>
            Bugger or buggar can at times be considered as a mild swear word. In
            the United Kingdom the term has been used commonly to imply
            dissatisfaction, refer to someone or something whose behaviour is in
            some way inconvenient or perhaps as an expression of surprise. In
            the US, particularly in the Midwest and South, it is a slang but not
            offensive noun meaning "small animal".
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
