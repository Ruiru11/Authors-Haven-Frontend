import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { signup } from "../redux/actions/auth/signup";

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
  TouchableOpacity
} from "react-native";

class Sigup extends Component {
  static propTypes = {
    signup: PropTypes.shape({}).isRequired,
    results: PropTypes.func.isRequired,
    navigation: PropTypes.shape({}).isRequired
  };

  state = {
    Username: "",
    email: "",
    password: "",
    passwordConfirm: ""
  };

  componentDidMount() {}

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
                source={require("../images/brown.png")}
              />
            </View>
            <View style={styles.infoContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter username"
                placeholderTextColor="rgba(255,255,255,0.8)"
                keyboardType="numeric"
                returnKeyType="next"
                autoCorrect={false}
                onChangeText={text => this.handleChange("Username", text)}
                onSubmitEditing={() => this.refs.txtPassword.focus()}
              />
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
              <TextInput
                style={styles.input}
                placeholder="Confirm  password"
                placeholderTextColor="rgba(255,255,255,0.8)"
                returnKeyType="go"
                secureTextEntry
                autoCorrect={false}
                ref={"txtPassword"}
                onChangeText={text =>
                  this.handleChange("passwordConfirm", text)
                }
              />
              <TouchableOpacity style={styles.buttonContainer}>
                <Text
                  onPress={() => {
                    this.handleSubmit();
                  }}
                  style={styles.buttonText}
                >
                  SIGN UP
                </Text>
              </TouchableOpacity>
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
    backgroundColor: "rgb(0, 0, 255)",
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
    padding: 20
  },
  input: {
    height: 50,
    width: 350,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#FFF",
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 10
  },
  buttonContainer: {
    backgroundColor: "rgb(2, 2, 97)",
    paddingVertical: 15,
    borderRadius: 10
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 18
  }
});

const mapStateToProps = state => ({
  signup: state.signup
});

const mapDispatchToProps = { results: signup };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sigup);
