import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  btnContainer: {
    display: "flex",
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
  },
  btn: {
    padding: 15,
    alignSelf: "center",
  },
});

const Button = ({ children, onPress }) => {
  return (
    <View style={styles.btnContainer}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Text color="textLight" fontWeight="bold" style={styles.btn}>
          {children}
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Button;