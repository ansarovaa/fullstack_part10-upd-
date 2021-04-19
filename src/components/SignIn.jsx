import React from "react";
import { StyleSheet, View } from "react-native";
import { Formik } from "formik";
import * as yup from 'yup';
import {useSignIn} from "../hooks/useSignIn";
import theme from "../theme";
import SignForm from "./SignForm";


const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: theme.colors.backgroundLight,
  },
});

const validationSchema = yup.object().shape({
  username: yup
  .string()
    .required('Username is required'),
  password: yup
  .string()
    .required('Password is required'),
});

const initialValues = {
  username: "",
  password: "",
};


const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.formContainer}>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => <SignForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;