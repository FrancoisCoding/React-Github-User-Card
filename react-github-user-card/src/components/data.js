import React, { Component } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import UserFollowersCard from "./UserFollowersCard";

export default class Data extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: "",
      followersData: ["Loading"]
    };
  }

  componentDidMount() {
    const userData = axios
      .get("https://api.github.com/users/francoiscoding", {})
      .then(response => {
        this.setState({ userData: response.data });
      })
      .catch(e => {
        console.log("error", e);
      });

    const userFollowers = axios
      .get("https://api.github.com/users/francoiscoding/followers")
      .then(response => {
        this.setState({ followersData: response.data });
      })
      .catch(error => console.log("error", error));
  }
  render() {
    return (
      <div>
        <UserCard user={this.state.userData} />
        {this.state.followersData.map(follower => (
          <UserFollowersCard follower={follower} />
        ))}
      </div>
    );
  }
}
