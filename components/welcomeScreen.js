import React, { Component } from "react";
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

class welcomeScreen extends Component {
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
                source={require("../images/logo.png")}
              />
            </View>
            <Text style={styles.title}>
              Welcome to authors Haven You can either
            </Text>
            <View style={styles.infoContainer}>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text
                  onPress={() => {
                    this.props.navigation.navigate("Login");
                  }}
                  style={styles.buttonText}
                >
                  LOGIN
                </Text>
              </TouchableOpacity>
              <Text style={styles.text}>or</Text>
              <TouchableOpacity style={styles.buttonContainernew}>
                <Text
                  onPress={() => {
                    this.props.navigation.navigate("Sigup");
                  }}
                  style={styles.buttonText}
                >
                  Signup
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
  infoContainer: {
    marginTop: 5,
    left: 0,
    right: 0,
    bottom: 0,
    height: 400
  },
  buttonContainer: {
    backgroundColor: "#f7c744",
    paddingVertical: 15,
    borderRadius: 10,
    paddingHorizontal: 20
  },
  buttonContainernew: {
    backgroundColor: "#f7c744",
    paddingVertical: 15,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginTop: 40
  },
  buttonText: {
    textAlign: "center",
    color: "rgb(32, 53, 70)",
    fontWeight: "bold",
    fontSize: 18,
    paddingHorizontal: 20
  },
  text: {
    justifyContent: "center",
    fontSize: 20,
    marginTop: 5,
    color: "red"
  },
  title: {
    fontSize: 25,
    color: "blue"
  }
});

export default welcomeScreen;
