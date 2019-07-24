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
import { TouchableHighlight } from "react-native-gesture-handler";

class OnePost extends Component {
  constructor() {
    super();
    this.state = {
      post: {},
      comments: [],
      isloading: true
    };
  }

  getComments = () => {
    const id = this.props.navigation.state.params._id;
    axios.get(`http://10.0.2.2:4000/api/comments/all/${id}`).then(res => {
      this.setState({
        comments: res.data
      });
    });
  };

  getPosts = () => {
    const slug = this.props.navigation.state.params.slug;
    axios.get(`http://10.0.2.2:4000/api/v1/posts/${slug}`).then(res => {
      console.log(res.data, "xxxxxxxxxxxxcvbncxvbnmncxdj");
      this.setState({
        post: res.data,
        isLoading: false
      });
    });
  };

  componentDidMount() {
    this.getComments();
    this.getPosts();
  }

  handleGetOne = async () => {};

  render() {
    const { post, comments } = this.state;
    console.log(comments, "comments");
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
            Post
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
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <TouchableHighlight onPress={() => console.log("hae")}>
                  <Icon
                    name="md-thumbs-up"
                    style={{ color: "blue" }}
                    // onPress={() => console.log("hae")}
                  />
                </TouchableHighlight>
                <Text style={{ color: "black", fontWeight: "bold" }}>
                  :{post.like_count}
                </Text>
              </View>
              <View
                style={{
                  flex: 5,
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <Icon name="md-eye" style={{ color: "blue" }} />
                <Text style={{ color: "black", fontWeight: "bold" }}>
                  :{post.View}
                </Text>
              </View>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={{ fontWeight: "bold" }}>{post.content}</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Text
                style={{ fontWeight: "bold", color: "black", fontSize: 13 }}
              >
                Comments: {post.comment_count}
              </Text>
            </CardItem>
            <Card
              style={{
                borderTopColor: "black",
                borderTopWidth: 5,
                borderBottomColor: "black",
                borderBottomWidth: 3
              }}
            >
              {comments &&
                comments.map(comment => (
                  <Card key={comment._id}>
                    <CardItem
                      style={{
                        backgroundColor: "transparent",
                        borderBottomColor: "black",
                        borderBottomWidth: 1,
                        borderRadius: 0,
                        borderColor: "black",
                        margin: 3
                      }}
                    >
                      <Left>
                        <Thumbnail source={require("../images/crypto.jpg")} />

                        <Body>
                          <Text style={{ fontWeight: "bold", color: "black" }}>
                            {comment.author.Username}
                          </Text>
                          <Text style={{ fontWeight: "bold" }}>
                            {comment.content}
                          </Text>
                          <Text
                            style={{
                              color: "black",
                              fontStyle: "italic",
                              fontSize: 9,
                              fontWeight: "bold"
                            }}
                          >
                            {moment(comment.CreatedAt, "YYYYMMDD").fromNow()}
                          </Text>
                        </Body>
                      </Left>
                    </CardItem>
                  </Card>
                ))}
            </Card>

            {post.tags &&
              post.tags.map(tag => (
                <CardItem key={tag} style={{ height: 5 }}>
                  <Text style={{ color: "black", fontWeight: "bold" }}>
                    #{tag}
                  </Text>
                </CardItem>
              ))}
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
