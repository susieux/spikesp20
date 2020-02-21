import { colors, normalize } from "react-native-elements";

const React = require("react-native");

const { StyleSheet } = React;

export default {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5
  },
  containerView: {
    flex: 1
  },
  loginScreenContainer: {
    flex: 1
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 150,
    marginBottom: 30,
    textAlign: "center"
  },
  logosmall: {
    fontSize: 20,
    fontWeight: "normal",
    marginTop: 150,
    marginBottom: 30,
    textAlign: "center"
  },
  loginFormView: {
    flex: 1
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#eaeaea",
    backgroundColor: "#fafafa",
    paddingLeft: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5
  },
  loginButton: {
    backgroundColor: "#3897f1",
    borderRadius: 20,
    height: 45,
    marginTop: 10
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    backgroundColor: "grey",
    borderRadius: 20
  }
};
