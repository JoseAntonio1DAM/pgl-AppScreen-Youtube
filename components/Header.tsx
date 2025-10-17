import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { MaterialIcons, FontAwesome, Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image source={require("../assets/ytshort.png")} style={styles.image} />
        <Text style={styles.title}>History</Text>
      </View>
      <View style={styles.rightContainer}>
        <MaterialIcons
          name="cast"
          size={24}
          color="black"
          style={styles.icon}
        />
        <Ionicons name="search" size={24} color="black" style={styles.icon} />
        <FontAwesome
          name="ellipsis-v"
          size={24}
          color="black"
          style={styles.icon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 5,
    top: 0,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
  title: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  icon: {
    marginHorizontal: 10,
  },
});
export default Header;
