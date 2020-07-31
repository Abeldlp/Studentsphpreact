import React, { Component } from "react";
//import { Link } from "react-router-dom";
import RecordsList from "./RecordsList";

export default class View extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
    };
    this.usersList = this.usersList.bind(this);
  }

  componentDidMount() {
    fetch("/view.php")
      .then((res) => res.json())
      .then((res) => this.setState({ students: res }))
      .catch((error) => {
        console.log(error);
      });
  }

  usersList() {
    return this.state.students.map((student, i) => {
      return <RecordsList obj={student} key={i} />;
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <h3 align="center">User List</h3>
        <div className="table-responsive">
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last name</th>
                <th>Email</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>{this.usersList()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
