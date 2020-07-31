import React, { Component } from "react";
import axios from "axios";

export default class SendComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      score: 1,
      comment: "",
    };
    this.handleUsername = this.handleUsername.bind(this);
    this.handleScore = this.handleScore.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  handleScore(e) {
    this.setState({
      score: parseInt(e.target.value),
    });
  }
  handleComment(e) {
    this.setState({
      comment: e.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();

    let newComment = {
      username: this.state.username,
      score: this.state.score,
      comment: this.state.comment,
    };
    axios
      .post("/createcomment.php", newComment)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    this.setState({
      username: "",
      score: 1,
      comment: "",
    });
    window.location = "/";
  }

  render() {
    return (
      <div>
        <form
          className="form-group col-lg-6 d-flex flex-column justify-content-end"
          style={{ margin: "auto" }}
          onSubmit={this.handleSubmit}
        >
          <label>Username</label>
          <input
            className="form-control"
            type="text"
            name="username"
            onChange={this.handleUsername}
            value={this.state.username}
          />
          <label>Rate the app</label>
          <select
            className="form-control "
            name="score"
            id="score"
            onChange={this.handleScore}
            value={this.state.score}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <label>Comment</label>
          <textarea
            className="form-control"
            type="text"
            name="comment"
            onChange={this.handleComment}
            value={this.state.comment}
          />
          <input
            style={{ marginTop: 10 }}
            className="btn btn-primary"
            type="submit"
            name="submit"
            value="Comment"
          />
        </form>
      </div>
    );
  }
}
