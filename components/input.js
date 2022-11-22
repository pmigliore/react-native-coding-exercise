import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Icon } from "./icon";

function Input(props) {
  const { icon, style, placeholder } = props;
  return (
    <View style={[styles.container, style]}>
      {icon && <Icon name={icon} />}
      <TextInput placeholder={placeholder} style={styles.input} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#193247",
    borderRadius: 20,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
  },
  input: {
    color: "#f4ddb5",
  },
});
