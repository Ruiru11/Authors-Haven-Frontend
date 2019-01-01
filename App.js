import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./redux";
import { Root } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import welcomeScreen from "./components/welcomeScreen";
import DashboardScreen from "./components/DashBoardScreen";
import Feed from "./components/Feed";
import News from "./components/News";
import Settings from "./components/Settings";
import ProfilePage from "./components/profile";
import Login from "./components/Login";
import Sigup from "./components/SignUp";
import ForgotPassword from "./components/forgotPassword";
import OnePost from "./components/OnePost";
import ProfileCreate from "./components/profileCreate";

export default class myapp extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root>
          <Appcontainer />
        </Root>
      </Provider>
    );
  }
}

const DashboardTabNavigatore = createBottomTabNavigator(
  {
    Feed,
    News,
    Settings
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
    }
  }
);

const DashBoardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigatore: DashboardTabNavigatore
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            name="home"
            type="MaterialIcons"
            color="black"
            size={50}
            onPress={() => navigation.openDrawer()}
          />
        )
      };
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator({
  Home: { screen: DashBoardStackNavigator },
  Profile: { screen: ProfilePage }
});

const AppswitchNavigator = createSwitchNavigator({
  welcome: { screen: welcomeScreen },
  Dashboard: { screen: AppDrawerNavigator },
  Login: { screen: Login },
  Sigup: { screen: Sigup },
  ForgotPassword: { screen: ForgotPassword },
  OnePost: { screen: OnePost },
  ProfileCreate: { screen: ProfileCreate }
});

const Appcontainer = createAppContainer(AppswitchNavigator);
