import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons, FontAwesome, Ionicons } from "@expo/vector-icons";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.BarraSuperior}>
        <Text style={styles.BarraTexto}>18:46</Text>
        <Text style={styles.BarraTexto2}>97% </Text>
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
      <Text>YOUTUBE</Text>
      <StatusBar style="auto" />
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

  BarraSuperior: {
    /// marginBottom: 180,
    width: "100%",
    borderRadius: 5,
    position: "absolute",
    top: 40,
    height: 40,
    paddingTop: 10,
    flexDirection: "row",
  },
  BarraTexto: {
    color: "white",
    left: 10,
  },
  BarraTexto2: {
    color: "white",
    position: "absolute",
    right: 15,
    top: 10,
  },
});
