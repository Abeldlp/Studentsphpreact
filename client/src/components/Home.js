import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1 align="center" style={{ paddingTop: 20 }}>
          Welcome to School
        </h1>
        <p align="center">
          This is the site where you can register yourself and receive all the
          news from school.
        </p>
        <p>
          In the Section insert, insert your First name, Last name and your
          email.
        </p>
        <p>
          If you made a mistake while registering, go to the View section and
          edit your data.
        </p>
        <p>
          For any further questions, please refer to the admin
          adminuser@info.com
        </p>
      </div>
    );
  }
}
