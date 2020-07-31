import React, { Component } from "react";
import axios from "axios";

export default class Insert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fName: "",
      lName: "",
      email: "",
      created: false,
    };

    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLasttName = this.handleLasttName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

    const user = {
      //id: this.props.match.params.id,
      fName: this.state.fName,
      lName: this.state.lName,
      email: this.state.email,
    };

    axios.post("/insert.php", user).then((res) => console.log(res.data));
    //consoles the object send to the route on the console

    this.setState({
      fName: "",
      lName: "",
      email: "",
      created: true,
    });
  }

  render() {
    return (
      <div style={{ marginTop: 10 }} className="container-fluid">
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
              value="Register user"
            />
          </div>
        </form>
        {this.state.created && (
          <h3 style={{ textAlign: "center" }}>User created</h3>
        )}
      </div>
    );
  }
}
