import React from "react";
import { View, Image, StyleSheet, SafeAreaView } from "react-native";
import Button from "../components/button";
import Input from "../components/input";

function Home() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Image source={require("../assets/images/planet.png")} />
        <Image source={require("../assets/images/logo.png")} />
        <Image
          style={styles.rocket}
          source={require("../assets/images/rocket.png")}
        />
      </SafeAreaView>
      <View style={styles.subContainer}>
        <Image source={require("../assets/images/banner.png")} />
        <View style={styles.selectContainer}>
          <Input style={{ width: "60%" }} placeholder="Search for flights" />
          <Button style={{ width: "30%" }}>Search</Button>
        </View>
      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#193247",
  },
  header: {
    backgroundColor: "#193247",
    flex: 0.17,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 40,
    zIndex: 1,
  },
  subContainer: {
    flex: 0.83,
    backgroundColor: "#f4ddb5",
    paddingHorizontal: 10,
    paddingVertical: 30,
    alignItems: "center",
  },
  rocket: {
    zIndex: 5,
  },
  selectContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
    marginBottom: 10,
  },
});
