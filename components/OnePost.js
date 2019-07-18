import React, { Component } from "react";
import axios from "axios";
import { PropTypes } from "prop-types";
import moment from "moment";

import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Button,
  Icon,
  Header
} from "native-base";

class OnePost extends Component {
  constructor() {
    super();
    this.state = {
      post: {},
      isloading: true
    };
  }

  componentDidMount() {
    const slug = this.props.navigation.state.params.slug;
    console.log("slug", slug);
    axios.get(`http://10.0.2.2:4000/api/v1/posts/${slug}`).then(res => {
      console.log(res.data, "xxxxxxxxxxxxcvbncxvbnmncxdj");
      this.setState({
        post: res.data,
        isLoading: false
      });
    });
  }

  handleGetOne = async () => {};

  render() {
    const { post } = this.state;
    console.log("secomnd dcreeem", this.state);
    const rew = post.author;
    console.log("reeeeeeeeew", rew);

    return (
      <ScrollView>
        <Header style={{ backgroundColor: "#366cc2" }}>
          <Text
            style={{
              justifyContent: "center",
              marginTop: 20,
              color: "black",
              fontWeight: "bold",
              fontSize: 18
            }}
          >
            Authors' Haven
          </Text>
        </Header>
        <View>
          <Card>
            <CardItem>
              <Button onPress={() => this.props.navigation.navigate("Feed")}>
                <Icon name="md-arrow-round-back" />
              </Button>
            </CardItem>

            <CardItem>
              <Left>
                <Thumbnail source={require("../images/crypto.jpg")} />
                <Body>
                  <Text
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontSize: 15
                    }}
                  >
                    {post.title}
                  </Text>
                  <Text
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontSize: 15
                    }}
                  >
                    {" "}
                    Author: {post.author && post.author.Username}
                  </Text>
                  <Text
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontStyle: "italic",
                      fontSize: 10
                    }}
                    note
                  >
                    Published on:
                    {moment(post.date, "YYYYMMDD").format("MMMM Do YYYY")}
                  </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={require("../images/america.jpg")}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Text style={{ fontWeight: "bold", color: "black" }}>
                Likes: {post.like_count}
              </Text>
            </CardItem>
            <CardItem style={{ height: 20 }}>
              <Text style={{ fontWeight: "bold", color: "black" }}>
                Comments :{post.comment_count}
              </Text>
            </CardItem>
            <CardItem style={{ height: 20 }}>
              <Text style={{ fontWeight: "bold", color: "black" }}>
                Views :{post.View}
              </Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>{post.content}</Text>
              </Body>
            </CardItem>
            {/* {event.tags.map(tag => (
              <CardItem key={tag} style={{ height: 5 }}>
                <Text style={{ color: "black", fontWeight: "bold" }}>
                  #{tag}
                </Text>
              </CardItem>
            ))} */}
            {/* <Button
              transparent
              onPress={() =>
                this.props.navigation.navigate("OnePost", { ...event })
              }
            >
              <Icon name="open" style={{ color: "purple" }} />
            </Button> */}
          </Card>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: `500%`
  }
});

export default OnePost;
