import React, { Component } from "react";
import "./Sidebar.css";
import { connect } from "react-redux";
import { filterTodos, toggleCompleted } from "../../actions";
import CustomGroups from "../CustomGroups/CustomGroups";
export class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <ul className="sidebar--filter">
          <li
            className="sidebar--filter--item all-tasks"
            onClick={() => {
              this.props.filterTodos({});
              this.props.toggleCompleted(this.props.isToggled);
            }}
          >
            <h3>All Tasks</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon--all-tasks"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </li>
          <li
            className="sidebar--filter--item important"
            onClick={() => {
              this.props.filterTodos({ starred: true });
              this.props.toggleCompleted(this.props.isToggled);
            }}
          >
            <h3>Important</h3>
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
              className="icon icon--important"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </li>
          <li
            className="sidebar--filter--item completed"
            onClick={() => {
              this.props.filterTodos({ ticked: true });
              this.props.toggleCompleted(this.props.isToggled);
            }}
          >
            <h3>Completed</h3>
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
              className="icon icon--completed"
            >
              <polyline points="21 8 21 21 3 21 3 8"></polyline>
              <rect x="1" y="3" width="22" height="5"></rect>
              <line x1="10" y1="12" x2="14" y2="12"></line>
            </svg>
          </li>
        </ul>
        <br />
        <ul className="sidebar--groups"></ul>
        <CustomGroups />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    isToggled: state.isToggled,
  };
};

export default connect(mapStateToProps, { filterTodos, toggleCompleted })(
  Sidebar
);
