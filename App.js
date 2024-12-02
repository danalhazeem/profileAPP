import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-paper";
import Profile from "./src/components/Profile";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <Image
          style={{ width: 90, height: 90, borderRadius: 10 }}
          source={require("./assets/profile.png")}
        />

        <Text style={{ color: "black", fontSize: 30, fontWeight: "bold" }}>
          Rita Correia
        </Text>

        <Text style={{ color: "gray", fontSize: 20 }}>London</Text>

        <View
          style={{
            // width: "90%",
            // height: 30,
            // backgroundColor: "lightgray",
            // marginVertical: 15,
            height: 1,
            backgroundColor: "lightgray",
            marginVertical: 12,
          }}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "80%",
            padding: 10,
            borderRadius: 10,

            alignItems: "center",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text style={styles.statNumber}>80</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.statNumber}>803K</Text>
            <Text style={styles.statLabel}>Likes</Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <Text style={styles.statNumber}>1.4K</Text>
            <Text style={styles.statLabel}>photo</Text>
          </View>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#09677E",
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  statLabel: {
    fontSize: 14,
    color: "gray",
  },
});
