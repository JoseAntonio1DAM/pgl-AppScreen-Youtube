import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons, FontAwesome, Ionicons } from "@expo/vector-icons";
import Header from "./components/Header";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.barraSuperior}>
        <Text style={styles.barraTexto}>18:46</Text>
        <Text style={styles.barraTexto2}>97% </Text>
        <MaterialIcons
          name="wifi"
          size={20}
          color="#fff"
          style={{ left: 280 }}
        />
        <MaterialIcons
          name="signal-cellular-4-bar"
          size={20}
          color="white"
          style={{ left: 280 }}
        />
        <MaterialIcons
          name="battery-full"
          size={20}
          color="white"
          style={{ left: 320 }}
        />
      </View>
      <View>
        <Header />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3cac20ff",
    alignItems: "center",
    justifyContent: "center",
  },

  // Text: {
  //   color: "green",
  // },

  barraSuperior: {
    /// marginBottom: 180,
    width: "100%",
    borderRadius: 5,
    position: "absolute",
    top: 40,
    height: 40,
    paddingTop: 10,
    flexDirection: "row",
  },
  barraTexto: {
    color: "white",
    left: 10,
  },
  barraTexto2: {
    color: "white",
    position: "absolute",
    right: 15,
    top: 10,
  },
  BarraSuperior2: {},
});
