import React, { Component } from "react";
// import { View, Text, Image } from "react-native";
// import { Card, ListItem, Button, Icon } from "react-native-elements";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { ListPost } from "../redux/actions/blog/posts";
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
  Icon
} from "native-base";

class Feed extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      isloading: true
    };
  }
  componentDidMount() {
    const { ListPostAction } = this.props;
    ListPostAction();
    isloading: false;
    console.log(">?>?>?>?>?>?>", ListPostAction());
  }

  handleGetOne = slug => {
    console.log(slug);
  };

  render() {
    console.log("component props.proooo", this.props);
    const { events } = this.props;
    return (
      <ScrollView>
        <View>
          {!events ? (
            <div>Loading........</div>
          ) : (
            events.map(event => (
              <Card key={event._id}>
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
                        {event.title}{" "}
                      </Text>
                      <Text
                        style={{
                          color: "black",
                          fontWeight: "bold",
                          fontStyle: "italic",
                          fontSize:10
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
                <CardItem style={{ height: 20 }}>
                  <Text style={{ fontWeight: "bold", color: "black" }}>
                    Comments :{event.comment.length}
                  </Text>
                </CardItem>
                <CardItem style={{ height: 20 }}>
                  <Text style={{ fontWeight: "bold", color: "black" }}>
                    Views :{event.View}
                  </Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>{event.content}</Text>
                  </Body>
                </CardItem>
                {event.tags.map(tag => (
                  <CardItem key={tag} style={{ height: 5 }}>
                    <Text style={{ color: "black", fontWeight: "bold" }}>
                      #{tag}
                    </Text>
                  </CardItem>
                ))}
                <Button
                  transparent
                  onPress={() =>
                    this.props.navigation.navigate("OnePost", { ...event })
                  }
                >
                  <Icon name="open" style={{ color: "purple" }} />
                </Button>
              </Card>
            ))
          )}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export const mapStateToProps = state => {
  console.log(state, "sxxxxxxxxxxxxxxxxx");
  return {
    events: state.listPosts.posts
  };
};

const mapDispatchToProps = {
  ListPostAction: ListPost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
