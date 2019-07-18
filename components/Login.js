import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../redux/actions/auth/login";
import { Button } from "react-native";
import { getToken } from "../utils/keys";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  StatusBar,
  TextInput,
  SafeAreaView,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";

class Login extends Component {
  static propTypes = {
    login: PropTypes.shape({}).isRequired,
    results: PropTypes.func.isRequired,
    navigation: PropTypes.shape({}).isRequired
  };

  state = {
    email: "",
    password: ""
  };

  componentDidMount() {
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const token = await getToken();
    console.log(token, "this is our token");
    const {
      navigation: { navigate }
    } = this.props;

    navigate(token ? "welcome" : "Login");
  };

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const {
      results,
      navigation: { navigate }
    } = this.props;

    results({ ...this.state, navigate });
  };

  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <TouchableWithoutFeedback
          style={styles.container}
          onPress={Keyboard.dismiss}
        >
          <View style={styles.logoContainer}>
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={require("../images/logo.png")}
              />
            </View>
            <View style={styles.infoContainer}>
              <Text
                onPress={() => this.props.navigation.navigate("ForgotPassword")}
                style={styles.forgot}
              >
                forgot password?
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Enter email"
                placeholderTextColor="rgba(255,255,255,0.8)"
                keyboardType="email-address"
                returnKeyType="next"
                autoCorrect={false}
                onChangeText={text => this.handleChange("email", text)}
                onSubmitEditing={() => this.refs.txtPassword.focus()}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter password"
                placeholderTextColor="rgba(255,255,255,0.8)"
                returnKeyType="go"
                secureTextEntry
                autoCorrect={false}
                ref={"txtPassword"}
                onChangeText={text => this.handleChange("password", text)}
              />
              <TouchableOpacity style={styles.buttonContainer}>
                <Text
                  // onPress={() => {
                  //   this.handleSubmit();
                  // }}
                  onPress={() => this.props.navigation.navigate("Dashboard")}
                  style={styles.buttonText}
                >
                  LOGIN
                </Text>
              </TouchableOpacity>
              <Text
                onPress={() => this.props.navigation.navigate("Sigup")}
                style={styles.account}
              >
                Don't have an account yet? click here to create one
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(32, 53, 70)",
    flexDirection: "column"
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  logo: {
    width: 300,
    height: 150
  },
  title: {
    color: "#f7c744",
    fontSize: 18,
    textAlign: "center",
    marginTop: 5,
    opacity: 0.9
  },
  infoContainer: {
    marginTop: 5,
    left: 0,
    right: 0,
    bottom: 0,
    height: 400,
    padding: 25
  },
  input: {
    height: 50,
    width: 350,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#FFF",
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 10
  },
  buttonContainer: {
    backgroundColor: "#f7c744",
    paddingVertical: 15,
    borderRadius: 10
  },
  buttonText: {
    textAlign: "center",
    color: "rgb(32, 53, 70)",
    fontWeight: "bold",
    fontSize: 18
  },
  account: {
    color: "black",
    fontSize: 18,
    marginTop: 34,
    opacity: 0.9
  },
  forgot: {
    marginLeft: 200,
    fontSize: 18,
    color: "red"
  }
});

const mapStateToProps = state => ({
  login: state.login
});

const mapDispatchToProps = { results: login };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
