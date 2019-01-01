import React, { Component } from "react";
import { connect } from "react-redux";
import { profile } from "../redux/actions/profile/profile";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Left,
  Right,
  Body,
  Title,
  Textarea,
  Icon,
  Button,
  Text
} from "native-base";

class ProfileCreate extends Component {
  state = {
    firstName: "",
    lastName: "",
    bio: "",
    interest: ""
  };

  componentDidMount() {}

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const {
      ProfileAction,
      navigation: { navigate }
    } = this.props;

    ProfileAction({ ...this.state, navigate });
  };

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title style={{ color: "black", fontWeight: "bold" }}>
              Create your Profile
            </Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Icon active name="md-person" />
              <Label>firstName</Label>
              <Input
                onChangeText={text => this.handleChange("firstName", text)}
              />
            </Item>
            <Item floatingLabel>
              <Icon active name="md-person" />
              <Label>lastName</Label>
              <Input
                onChangeText={text => this.handleChange("lastName", text)}
              />
            </Item>
            <Item floatingLabel>
              <Icon active name="md-list-box" />
              <Label>bio</Label>
              <Input onChangeText={text => this.handleChange("bio", text)} />
            </Item>
            <Item floatingLabel last>
              <Icon active name="md-happy" />
              <Label>interest</Label>
              <Input
                onChangeText={text => this.handleChange("interest", text)}
              />
            </Item>
          </Form>
          <Button
            success
            style={{ marginTop: 20, marginLeft: 150 }}
            onPress={() => this.handleSubmit()}
          >
            <Text>Create</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profiles
});

const mapDispatchToProps = { ProfileAction: profile };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileCreate);
