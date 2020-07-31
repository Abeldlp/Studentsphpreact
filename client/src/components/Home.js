import React, { Component } from "react";
import SendComment from "./SendComment";
import CommentHolder from "./CommentHolder";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      showComment: false,
    };

    this.openComment = this.openComment.bind(this);
  }

  componentDidMount() {
    fetch("/getcomments.php")
      .then((res) => res.json())
      .then((res) => this.setState({ comments: res }))
      .catch((err) => console.log(err));
  }

  openComment() {
    this.setState({
      showComment: !this.state.showComment,
    });
  }
  render() {
    return (
      <div className="container-fluid d-flex flex-column justify-content-center">
        <h1 align="center" style={{ paddingTop: 20, marginBottom: 20 }}>
          Welcome to School
        </h1>

        <button
          className="btn btn-secondary col-lg-3"
          onClick={this.openComment}
          style={{ margin: "auto" }}
        >
          Let us know what you think!
        </button>
        {this.state.showComment && <SendComment />}
        {this.state.comments.map((user) => (
          <CommentHolder
            key={user.id}
            username={user.username}
            score={user.score}
            comment={user.comment}
          />
        ))}
      </div>
    );
  }
}
