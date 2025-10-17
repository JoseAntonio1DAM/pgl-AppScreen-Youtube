import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const HeaderTwo = () => {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/ytshort.png")} style={styles.image} />
      </View>
      <View>
        <Text style={styles.textoShort}>Shorts</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textoShort: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 10,
    marginRight: 250,
  },
  imageContainer: {
    marginTop: 10,
    alignItems: "center",
    width: "10%",
    height: "10%",
    marginRight: 120,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 80,
    marginTop: 10,
  },
});

export default HeaderTwo;
