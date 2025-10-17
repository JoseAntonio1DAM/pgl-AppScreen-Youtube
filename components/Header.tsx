import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { MaterialIcons, FontAwesome, Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View>
      <Image source={require("../assets/ytshort.png")} style={styles.image} />
      <Text>History</Text>
      <View
        style={{
          flexDirection: "row",
          marginLeft: "auto",
          alignItems: "center",
        }}
      >
        <MaterialIcons
          name="cast"
          size={24}
          color="black"
          style={{ marginHorizontal: 10 }}
        />
        <Ionicons
          name="search"
          size={24}
          color="black"
          style={{ marginHorizontal: 10 }}
        />
        <FontAwesome
          name="ellipsis-v"
          size={24}
          color="black"
          style={{ marginHorizontal: 10 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});
export default Header;
