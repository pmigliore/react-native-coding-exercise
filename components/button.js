import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function Button(props) {
  const { children, style } = props;

  return (
    <TouchableOpacity style={[styles.btn, style]}>
      <Text style={styles.txt}>{children}</Text>
    </TouchableOpacity>
  );
}

export default Button;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#d14b39",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    color: "#ffffff",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
