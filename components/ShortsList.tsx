// import { View, Text } from "react-native";
// import React from "react";

// const Shorts = () => {
//   return (
//     <View>
//       <Text>Shorts</Text>
//     </View>
//   );
// };

// export default Shorts;
import React from "react";
import {
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const shortsData = [
  {
    id: "1",
    thumbnail: "https://i.ytimg.com/vi/abc123/hqdefault.jpg",
    title: "Por estas razones no...",
  },
  {
    id: "2",
    thumbnail: "https://i.ytimg.com/vi/def456/hqdefault.jpg",
    title: "EL MARAVILLOSO...",
  },
  {
    id: "3",
    thumbnail: "https://i.ytimg.com/vi/ghi789/hqdefault.jpg",
    title: "Asked a local fish...",
  },
  {
    id: "4",
    thumbnail: "https://i.ytimg.com/vi/jkl012/hqdefault.jpg",
    title: "Probando GODOT...",
  },
];

const ShortsList = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      {shortsData.map((short) => (
        <TouchableOpacity key={short.id} style={styles.card}>
          <Image source={{ uri: short.thumbnail }} style={styles.thumbnail} />
          <Text numberOfLines={2} style={styles.videoTitle}>
            {short.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ShortsList;

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 10,
  },
  card: {
    width: width * 0.35,
    marginRight: 12,
  },
  thumbnail: {
    width: "100%",
    aspectRatio: 9 / 16, // proporción vertical tipo Shorts
    borderRadius: 10,
    backgroundColor: "#222", // fondo de carga
  },
  videoTitle: {
    color: "white",
    fontSize: 12,
    marginTop: 5,
  },
});
