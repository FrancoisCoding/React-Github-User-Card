import React, { Component } from "react";
import axios from "axios";

export default class Data extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: null,
      followersData: null
    };
  }

  componentDidMount() {
    const userData = axios
      .get("https://api.github.com/users/francoiscoding", {})
      .then(response => {
        console.log("received data", response.data);
        this.setState({ userData: response.data });
      })
      .catch(e => {
        console.log("error", e);
      });

    const userFollowers = axios
      .get("https://api.github.com/users/francoiscoding/followers")
      .then(response => {
        console.log("received followers data", response.data);
        this.setState({ followersData: response.data });
      })
      .catch(error => console.log("error", error));
  }
  render() {
    console.log("state userData", this.state.userData);
    return <div />;
  }
}
