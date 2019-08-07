import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { likePost } from "../redux/actions/blog/likePost";
import { getOnePost } from "../redux/actions/blog/onePost";
import { getComment, postComment } from "../redux/actions/blog/comments";
import { getViews } from "../redux/actions/profile/views";

import { PropTypes } from "prop-types";
import moment from "moment";

import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput
} from "react-native";

import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Button,
  Icon,
  Header,
  Form,
  Item,
  Input,
  Label,
  Textarea
} from "native-base";
import { TouchableHighlight } from "react-native-gesture-handler";

class OnePost extends Component {
  constructor() {
    super();
    this.state = {
      post: {},
      comments: [],
      isloading: true,
      content: ""
    };
  }

  likeArticle = () => {
    const { results } = this.props;
    const slug = this.props.navigation.state.params.slug;
    results(slug);
  };

  componentDidMount() {
    const { getOnePostAction, getCommentAction, PostViewsAction } = this.props;
    const slug = this.props.navigation.state.params.slug;
    console.log("slug slug slug slug", slug);
    getOnePostAction(slug);
    PostViewsAction(slug);
    const id = this.props.navigation.state.params._id;
    getCommentAction(id);
  }

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { postCommentAction } = this.props;
    const id = this.props.navigation.state.params._id;
    const { content } = this.state;
    postCommentAction({ content, id });
    this.setState({ content: "" });
  };

  render() {
    const { event, comments, Views } = this.props;
    const ViewsCount = Views.View;
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
                    {event.title}
                  </Text>
                  <Text
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontSize: 15
                    }}
                  >
                    {" "}
                    Author: {event.author && event.author.Username}
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
                    {moment(event.date, "YYYYMMDD").format("MMMM Do YYYY")}
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
                <TouchableHighlight underlayColor="red" activeOpacity={1}>
                  <Icon
                    name="md-thumbs-up"
                    style={{ color: "blue" }}
                    onPress={this.likeArticle}
                    underlayColor="red"
                    activeOpacity={1}
                  />
                </TouchableHighlight>
                <Text style={{ color: "black", fontWeight: "bold" }}>
                  :{event.like_count}
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
                  :{ViewsCount}
                </Text>
              </View>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={{ fontWeight: "bold" }}>{event.content}</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Text
                style={{ fontWeight: "bold", color: "black", fontSize: 13 }}
              >
                Comments: {event.comment_count}
              </Text>
            </CardItem>
            <Item regular>
              <Input
                value={this.state.content}
                rowSpan={5}
                placeholder="make a comment"
                onChangeText={text => this.handleChange("content", text)}
              />
              <Button
                success
                onPress={() => {
                  this.handleSubmit();
                }}
              >
                <Text> comment </Text>
              </Button>
            </Item>
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
                            {comment && comment.author.Username}
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

            {event.tags &&
              event.tags.map(tag => (
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

const mapStateToProps = state => {
  return {
    likePost: state.likePost,
    event: state.onePost.post,
    comments: state.getComment.comments,
    Views: state.getPostsViews.views
  };
};

const mapDispatchToProps = {
  results: likePost,
  getOnePostAction: getOnePost,
  getCommentAction: getComment,
  postCommentAction: postComment,
  PostViewsAction: getViews
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OnePost);
