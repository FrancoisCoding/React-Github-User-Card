import React, { Component } from "react";

export default class UserCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <img
          class="card-img-top"
          src={this.props.user.avatar_url}
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">{this.props.user.login}</h5>
          <p class="card-text">Bio : {this.props.user.bio}</p>
        </div>
      </div>
    );
  }
}
