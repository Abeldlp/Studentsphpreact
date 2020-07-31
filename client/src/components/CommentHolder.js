import React, { Component } from "react";

export default class CommentHolder extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "darkgrey",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "80%",
          margin: "10px auto",
          
        }}
      >
        <div
          style={{
            backgroundColor: "whitesmoke",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            width: "80%",
          }}
        >
          <div
            style={{
              backgroundColor: "lightgrey",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "100%",
            }}
          >
            <p style={{fontWeight:"bold"}}>{this.props.username}</p>
            <p>score: {this.props.score}</p>
          </div>
          <div style={{padding:15}}>
            <p>{this.props.comment}</p>
          </div>
        </div>
        <div
          style={{
            width: "20%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button className="btn text-primary" style={{ margin: "5" }}>
            Update
          </button>
          <button className="btn text-primary" style={{ margin: "5" }}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}
