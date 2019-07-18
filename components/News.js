import React, { Component } from "react";
import { Text, ScrollView } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Icon,
  Right
} from "native-base";

class News extends Component {
  render() {
    return (
      <ScrollView>
        <Container>
          <Header />
          <Content>
            <Card>
              <CardItem>
                <Icon active name="logo-googleplus" />
                <Text>Google Plus</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Icon active name="logo-facebook" />
                <Text>Google Plus</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Icon active name="logo-reddit" />
                <Text>Google Plus</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Icon active name="logo-github" />
                <Text>Google Plus</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>
            </Card>
          </Content>
        </Container>
      </ScrollView>
    );
  }
}

export default News;
