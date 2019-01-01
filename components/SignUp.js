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
import { Label, Item, Icon, Container } from "native-base";

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
    passwordConfirm: "",
    passwordError: false,
    PasswordMatchError: false,
    emailError: false,
    UsernameError: false,
    passwordHidden: true,
    passwordConfirmHidden: true
  };

  componentDidMount() {}

  handleChange = (name, value) => {
    if (name === "email") {
      this.setState({ emailError: "" });
    }
    if (name === "password") {
      this.setState({ passwordError: "" });
    }
    if (name === "passwordConfirm") {
      this.setState({ PasswordMatchError: "" });
    }
    if (name === "Username") {
      this.setState({ UsernameError: "" });
    }
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const {
      results,
      navigation: { navigate }
    } = this.props;

    results({ ...this.state, navigate });
  };

  validatePassword = () => {
    const { password, passwordError } = this.state;
    if (password.length < 6) {
      this.setState({
        passwordError: "Password must be more than 4 characters"
      });
    }
  };

  validateEmail = () => {
    const { email, emailError } = this.state;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const fem = re.test(String(email).toLowerCase());
    if (fem === false) {
      this.setState({
        emailError: "Email is invalid"
      });
    }
  };

  validateUsername = () => {
    const { Username, UsernameError } = this.state;
    if (Username.length < 3) {
      this.setState({
        UsernameError: "Username must have atleast three characters"
      });
    }
  };

  validatePasswordMatch = () => {
    const { password, passwordConfirm, PasswordMatchError } = this.state;
    if (password != passwordConfirm) {
      this.setState({
        PasswordMatchError: "Passwords do not match"
      });
    }
  };

  togglePasswordShow = () => {
    const { passwordHidden } = this.state;
    this.setState({
      passwordHidden: !passwordHidden
    });
  };

  passwordConfirmToggle = () => {
    const { passwordConfirmHidden } = this.state;
    this.setState({
      passwordConfirmHidden: !passwordConfirmHidden
    });
  };

  render() {
    const {
      UsernameError,
      passwordError,
      PasswordMatchError,
      emailError,
      passwordHidden,
      passwordConfirmHidden
    } = this.state;
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
                keyboardType="email-address"
                returnKeyType="next"
                autoCorrect={false}
                onBlur={this.validateUsername}
                onChangeText={text => this.handleChange("Username", text)}
                onSubmitEditing={() => this.refs.txtemail.focus()}
              />
              {UsernameError ? (
                <Label
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    marginTop: -10,
                    fontStyle: "italic",
                    fontFamily: "Times New Roman",
                    marginLeft: 20,
                    width: 280
                  }}
                >
                  {UsernameError}
                </Label>
              ) : null}
              <TextInput
                style={styles.input}
                placeholder="Enter email"
                placeholderTextColor="rgba(255,255,255,0.8)"
                keyboardType="email-address"
                returnKeyType="next"
                autoCorrect={false}
                ref={"txtemail"}
                onBlur={this.validateEmail}
                onChangeText={text => this.handleChange("email", text)}
                onSubmitEditing={() => this.refs.txtPassword.focus()}
              />
              {emailError ? (
                <Label
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    marginTop: -10,
                    fontStyle: "italic",
                    fontFamily: "Times New Roman",
                    marginLeft: 20,
                    width: 280
                  }}
                >
                  {emailError}
                </Label>
              ) : null}
              <Item style={{ borderBottomColor: "blue" }}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter password"
                  placeholderTextColor="rgba(255,255,255,0.8)"
                  returnKeyType="go"
                  secureTextEntry={passwordHidden}
                  autoCorrect={false}
                  ref={"txtPassword"}
                  onBlur={this.validatePassword}
                  onChangeText={text => this.handleChange("password", text)}
                  onSubmitEditing={() => this.refs.txtPasswordConfirm.focus()}
                />
                {passwordHidden ? (
                  <Icon
                    name="md-lock"
                    style={{ color: "white" }}
                    onPress={this.togglePasswordShow}
                  />
                ) : (
                  <Icon
                    name="md-unlock"
                    style={{ color: "white" }}
                    onPress={this.togglePasswordShow}
                  />
                )}
              </Item>

              {passwordError ? (
                <Label
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    marginTop: -10,
                    fontStyle: "italic",
                    fontFamily: "Times New Roman",
                    marginLeft: 20,
                    width: 280
                  }}
                >
                  {passwordError}
                </Label>
              ) : null}
              <Item style={{ borderBottomColor: "blue" }}>
                <TextInput
                  style={styles.input}
                  placeholder="Confirm  password"
                  placeholderTextColor="rgba(255,255,255,0.8)"
                  returnKeyType="go"
                  secureTextEntry={passwordConfirmHidden}
                  autoCorrect={false}
                  ref={"txtPasswordConfirm"}
                  onBlur={this.validatePasswordMatch}
                  onChangeText={text =>
                    this.handleChange("passwordConfirm", text)
                  }
                />
                {passwordConfirmHidden ? (
                  <Icon
                    name="md-lock"
                    style={{ color: "white" }}
                    onPress={this.passwordConfirmToggle}
                  />
                ) : (
                  <Icon
                    name="md-unlock"
                    style={{ color: "white" }}
                    onPress={this.passwordConfirmToggle}
                  />
                )}
              </Item>
              {PasswordMatchError ? (
                <Label
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    marginTop: -20,
                    fontStyle: "italic",
                    fontFamily: "Times New Roman",
                    marginLeft: 20,
                    width: 280
                  }}
                >
                  {PasswordMatchError}
                </Label>
              ) : null}
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
    marginTop: -7,
    left: 0,
    right: 0,
    bottom: 0,
    height: 400,
    paddingTop: -500
  },
  input: {
    height: 40,
    width: 280,
    backgroundColor: "blue",
    color: "#FFF",
    marginBottom: 20,
    paddingHorizontal: 10,
    borderColor: "blue",
    borderWidth: 1,
    borderBottomColor: "white",
    marginLeft: 20
  },
  buttonContainer: {
    backgroundColor: "rgb(2, 2, 97)",
    paddingVertical: 15,
    borderRadius: 5,
    width: 280,
    marginLeft: 20
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
