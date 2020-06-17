import React, { Component } from "react";
import "./CustomGroups.css";
import {
  addGroup,
  deleteGroup,
  filterTodos,
  selectGroup,
  toggleCompleted,
} from "../../actions";
import { connect } from "react-redux";

class CustomGroups extends Component {
  state = { input: "" };
  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addGroup(this.state.input);
    this.setState({ input: "" });
  };

  handleDelete = (key, name) => {
    this.props.deleteGroup(key, name);
  };

  handleGroupChange = (name) => {
    this.props.filterTodos({ group: name });
    this.props.selectGroup(name);
    this.props.toggleCompleted(this.props.isToggled);
  };

  render() {
    return (
      <div>
        <ul className="custom-groups">
          <div className="custom-groups--item-list">
            {this.props.groupList.map((item) => {
              return (
                <li className="custom-groups--item" key={item.key}>
                  <h4
                    className="custom-groups--item-name"
                    onClick={() => this.handleGroupChange(item.name)}
                  >
                    {item.name}
                  </h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="custom-groups--delete"
                    onClick={() => this.handleDelete(item.key, item.name)}
                  >
                    <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
                    <line x1="18" y1="9" x2="12" y2="15"></line>
                    <line x1="12" y1="9" x2="18" y2="15"></line>
                  </svg>
                </li>
              );
            })}
          </div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="custom-groups--input"
              placeholder="Make a new group..."
              value={this.state.input}
              onChange={this.handleChange}
            ></input>
          </form>
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    group: state.groups.group,
    groupList: state.groups.groupList,
    isToggled: state.isToggled,
  };
};

export default connect(mapStateToProps, {
  addGroup,
  deleteGroup,
  filterTodos,
  selectGroup,
  toggleCompleted,
})(CustomGroups);
