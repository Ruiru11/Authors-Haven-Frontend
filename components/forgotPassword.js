import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { forgotpass } from "../redux/actions/auth/forgotpassword";

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

class ForgotPassword extends Component {
  static propTypes = {
    forgotpass: PropTypes.shape({}).isRequired,
    results: PropTypes.func.isRequired,
    navigation: PropTypes.shape({}).isRequired
  };

  state = {
    email: "",
    password: ""
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
            <Text>Enter your email address</Text>
            <View style={styles.infoContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter email"
                placeholderTextColor="rgba(255,255,255,0.8)"
                keyboardType="email-address"
                returnKeyType="next"
                autoCorrect={false}
                onChangeText={text => this.handleChange("email", text)}
              />
              <TouchableOpacity style={styles.buttonContainer}>
                <Text
                  onPress={() => {
                    this.handleSubmit();
                  }}
                  style={styles.buttonText}
                >
                  SEND
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
  }
});

const mapStateToProps = state => ({
  forgotpass: state.forgotpass
});

const mapDispatchToProps = { results: forgotpass };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPassword);
