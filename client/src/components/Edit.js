import React, { Component } from "react";
import axios from "axios";

export default class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fName: "",
      lName: "",
      email: "",
    };

    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLasttName = this.handleLasttName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get("/getbyid.php?id=" + this.props.match.params.id)
      .then((res) =>
        this.setState({
          fName: res.data.fName,
          lName: res.data.lName,
          email: res.data.email,
        })
      )
      .catch((error) => console.log(error));
  }

  handleFirstName(e) {
    this.setState({
      fName: e.target.value,
    });
  }

  handleLasttName(e) {
    this.setState({
      lName: e.target.value,
    });
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const updatedUser = {
      fName: this.state.fName,
      lName: this.state.lName,
      email: this.state.email,
    };

    axios
      .post("/update.php?id=" + this.props.match.params.id, updatedUser)
      .catch((error) => console.log(error));

    this.setState({
      fName: "",
      lName: "",
      email: "",
      created: true,
    });

    window.location = "/view";
  }

  render() {
    return (
      <div style={{ marginTop: 10 }} div className="container-fluid">
        <h3>Add new user</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              value={this.state.fName}
              onChange={this.handleFirstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              value={this.state.lName}
              onChange={this.handleLasttName}
            />
          </div>
          <div className="form-group">
            <label>Email Name</label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.handleEmail}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-primary"
              value="Update user"
            />
          </div>
        </form>
        <p>{this.props.match.params.fName}</p>
        {this.state.created && (
          <h3 style={{ textAlign: "center" }}>User Updated</h3>
        )}
      </div>
    );
  }
}
