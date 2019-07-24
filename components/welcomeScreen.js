import React, { Component } from "react";
import { Bubbles, DoubleBounce, Bars, Pulse } from "react-native-loader";
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
  TouchableOpacity
} from "react-native";

class welcomeScreen extends Component {
  state = {
    loading: false
  };
  componentDidMount() {
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const token = await getToken();
    console.log(token, "token from welcome screen");
    const {
      navigation: { navigate }
    } = this.props;
    this.setState({ loading: true });
    setTimeout(() => {
      navigate(token ? "Dashboard" : "Login");
      this.setState({ loading: false });
    }, 5000);
  };
  render() {
    const { loading } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <TouchableWithoutFeedback
          style={styles.container}
          onPress={Keyboard.dismiss}
        >
          <View style={styles.logoContainer}>
            {loading ? (
              <View style={{ marginTop: `50 %` }}>
                <Bars size={15} color="#FFF" />
              </View>
            ) : null}
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={require("../images/brown.png")}
              />
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
  infoContainer: {
    marginTop: 5,
    left: 0,
    right: 0,
    bottom: 0,
    height: 400
  },
  buttonContainer: {
    backgroundColor: "rgb(2, 2, 97)",
    paddingVertical: 15,
    borderRadius: 4,
    paddingHorizontal: 20,
    borderBottomColor: "white"
  },
  buttonContainernew: {
    backgroundColor: "rgb(2, 2, 97)",
    paddingVertical: 15,
    borderRadius: 4,
    paddingHorizontal: 20,
    marginTop: 40,
    borderColor: "white"
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    paddingHorizontal: 20
  },
  text: {
    justifyContent: "center",
    fontSize: 30,
    marginTop: 5,
    color: "white",
    fontWeight: "bold"
  },
  title: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold"
  }
});

export default welcomeScreen;
