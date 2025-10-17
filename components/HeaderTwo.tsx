import { View, Text, StyleSheet } from "react-native";
import React from "react";

const HeaderTwo = () => {
  return (
    <View>
      <Text style={styles.textoShort}>Shorts</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textoShort: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 10,
  },
});

export default HeaderTwo;
