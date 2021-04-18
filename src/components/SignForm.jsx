import React from "react";
import { View } from "react-native";
import FormikTextInput from "./FormikTextInput";
import SignButton from "./SignButton";

const SignForm = ({ onSubmit }) => (
  <View>
    <FormikTextInput name="username" placeholder="Username" />
    <FormikTextInput name="password" placeholder="Password" secureTextEntry />
    <SignButton onSubmit={onSubmit} />
  </View>
);

export default SignForm;