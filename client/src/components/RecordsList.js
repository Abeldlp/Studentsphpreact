import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class RecordsList extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete() {
    axios
      .get("/delete.php/?id=" + this.props.obj.id)
      .then(console.log("Deleted"))
      .catch((error) => console.log(error));
    window.location = "/view";
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.fName}</td>
        <td>{this.props.obj.lName}</td>
        <td>{this.props.obj.email}</td>
        <td>
          <button className="btn btn-primary">
            <Link
              to={{ pathname: `edit/${this.props.obj.id}` }}
              style={{ color: "white" }}
            >
              Edit
            </Link>
          </button>
        </td>
        <td>
          <button className="btn btn-primary" onClick={this.delete}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
