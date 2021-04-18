import React from "react";
import { StyleSheet, View } from "react-native";
import { Formik } from "formik";
import SignForm from "./SignForm";
import * as yup from 'yup';
import theme from "../theme";

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
  const onSubmit = (values) => {
    console.log(values);
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