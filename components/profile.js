import React, { Component } from "react";
import { connect } from "react-redux";
import { getProfile } from "../redux/actions/profile/profile";
import { getUserPosts } from "../redux/actions/profile/posts";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  ActivityIndicator
} from "react-native";
import {
  Container,
  Icon,
  Content,
  Right,
  Header,
  Left,
  Button,
  Body,
  List,
  ListItem,
  Thumbnail,
  Card,
  CardItem,
  Title
} from "native-base";
import Divider from "react-native-divider";
import moment from "moment";

import EntypoIcon from "react-native-vector-icons/Entypo";

var { width, height } = Dimensions.get("window");
class ProfilePage extends Component {
  state = {
    profileData: ""
  };

  componentDidMount() {
    const { ProfileAction, UserPostsAction } = this.props;
    ProfileAction();
    UserPostsAction();
  }
  render() {
    const { profile, userPost } = this.props;
    const postData = userPost.posts.posts;
    return (
      <ScrollView>
        {profile.length === 0 ? (
          <Container>
            <Header>
              <Left />
              <Body>
                <Title>Profile Not found</Title>
              </Body>
              <Right />
            </Header>
            <Content>
              <Card>
                <CardItem>
                  <Text
                    style={{ color: "black", fontSize: 20, fontWeight: "bold" }}
                  >
                    Oops!! Seems you have not yet created your profile
                  </Text>
                </CardItem>
                <Button
                  iconLeft
                  transparent
                  primary
                  onPress={() =>
                    this.props.navigation.navigate("ProfileCreate")
                  }
                >
                  <Icon name="md-construct" />
                  <Text>create your profile</Text>
                </Button>
                <CardItem cardBody>
                  <Image
                    source={require("../images/construction.jpg")}
                    style={{
                      height: 450,
                      width: null,
                      flex: 1,
                      marginTop: 30
                    }}
                  />
                </CardItem>
              </Card>
            </Content>
          </Container>
        ) : (
          <Container style={{ flex: 1, backgroundColor: "white" }}>
            <Header>
              <Left>
                <Icon
                  name="md-heart"
                  style={{ paddingLeft: 10, fontSize: 30, color: "white" }}
                />
              </Left>
              <Body>
                <Text
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: 20,
                    marginLeft: 100
                  }}
                >
                  Ruiru
                </Text>
              </Body>
              <Right>
                <EntypoIcon
                  name="back-in-time"
                  style={{ paddingRight: 10, fontSize: 30, color: "white" }}
                />
              </Right>
            </Header>
            <Content>
              <View style={{ paddingTop: 10 }}>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, alignItems: "center" }}>
                    <Image
                      source={require("../images/america.jpg")}
                      style={{ width: 75, height: 75, borderRadius: 37.5 }}
                    />
                  </View>
                  <View style={{ flex: 3 }}>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-around"
                      }}
                    >
                      <View style={{ alignItems: "center" }}>
                        <Text style={{ color: "black", fontWeight: "bold" }}>
                          dummy
                        </Text>
                        <Text style={{ fontSize: 10, color: "black" }}>
                          dummy
                        </Text>
                      </View>

                      <Text style={{ color: "black", fontWeight: "bold" }}>
                        dummy
                      </Text>
                      <Text style={{ color: "black", fontWeight: "bold" }}>
                        dummy
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row", paddingTop: 10 }}>
                      <Button
                        bordered
                        dark
                        style={{
                          flex: 3,
                          marginLeft: 10,
                          justifyContent: "center",
                          height: 30,
                          borderColor: "black",
                          borderWidth: 2,
                          borderRadius: 3
                        }}
                      >
                        <Text style={{ color: "black", fontWeight: "bold" }}>
                          Edit
                        </Text>
                      </Button>
                      <Button
                        bordered
                        dark
                        style={{
                          flex: 1,
                          marginRight: 10,
                          marginLeft: 5,
                          justifyContent: "center",
                          height: 30
                        }}
                      >
                        <Icon name="settings" />
                      </Button>
                    </View>
                  </View>
                </View>
                <View style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
                  <Text
                    style={{ fontWeight: "bold", color: "black", fontSize: 17 }}
                  >
                    {profile.firstName} {profile.lastName}
                  </Text>
                  <Text style={{ fontWeight: "100", color: "black" }}>
                    {profile.interest}
                  </Text>
                  <Text style={{ fontWeight: "100", color: "black" }}>
                    {profile.bio}
                  </Text>
                </View>
              </View>
              <Divider
                borderColor="black"
                color="black"
                orientation="center"
                fontSize="20"
              >
                My Articles
              </Divider>
              <ScrollView>
                {!postData ? (
                  <View style={[styles.container, styles.horizontal]}>
                    <ActivityIndicator size="large" color="#68228B" />
                    <ActivityIndicator size="large" color="#68228B" />
                  </View>
                ) : (
                  postData.map(post => (
                    <List
                      style={{
                        borderWidth: 2,
                        margin: 5,
                        borderBottomColor: "blue",
                        borderColor: "white"
                      }}
                      key={post._id}
                    >
                      <ListItem avatar>
                        <Left>
                          <Image
                            style={{ height: 75, width: 75 }}
                            source={require("../images/america.jpg")}
                          />
                        </Left>
                        <Body>
                          <Text
                            style={{
                              color: "black",
                              fontWeight: "bold",
                              fontSize: 18
                            }}
                          >
                            {post.title}
                          </Text>
                          <Text
                            numberOfLines={2}
                            style={{ color: "black" }}
                            note
                          >
                            {post.content}
                          </Text>
                        </Body>
                        <Right>
                          <Text style={{ color: "black" }} note>
                            {moment(post.date, "YYYYMMDD").format(
                              "MMMM Do YYYY"
                            )}
                          </Text>
                        </Right>
                      </ListItem>
                    </List>
                  ))
                )}
              </ScrollView>
            </Content>
          </Container>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

const mapStateToProps = state => {
  return {
    profile: state.getProfile.profile,
    userPost: state.getUsersPosts
  };
};

const mapDispatchToProps = {
  ProfileAction: getProfile,
  UserPostsAction: getUserPosts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
