import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { MaterialIcons, FontAwesome, Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Ionicons name="arrow-back" size={24} color="white" />
        <Text style={styles.title}>History</Text>
      </View>
      <View style={styles.rightContainer}>
        <MaterialIcons
          name="cast"
          size={24}
          color="white"
          style={styles.icon}
        />
        <Ionicons name="search" size={24} color="white" style={styles.icon} />
        <FontAwesome
          name="ellipsis-v"
          size={24}
          color="white"
          style={styles.icon}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/ytshort.png")} style={styles.image} />
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
    top: -20,
    backgroundColor: "transparent",
    paddingLeft: 10, // Reducido para mover todo hacia la izquierda
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end", // Asegura que los iconos estén a la derecha
  },
  imageContainer: {
    marginTop: 10,
    alignItems: "center",
    width: "10%",
    height: "100%",
  },
  image: {
    width: 50,
    height: 50,
  },
  title: {
    marginLeft: 9, // Ajusta el espacio entre la flecha y "History"
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  icon: {
    marginHorizontal: 10,
  },
});
export default Header;
