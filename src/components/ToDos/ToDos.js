import React, { Component } from "react";
import { connect } from "react-redux";

import "./ToDos.css";
import { toggleTodo, toggleStar } from "../../actions";
import ToDoInput from "../ToDoInput/ToDoInput";

class ToDos extends Component {
  renderTodos({ todos }) {
    todos.map((item) => {
      return <div className="todo--item">{item.item}</div>;
    });
  }
  renderCircle(ticked) {
    if (ticked) {
      return (
        <>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </>
      );
    }
    return <circle cx="12" cy="12" r="10"></circle>;
  }

  render() {
    return (
      <div>
        <ul className="todo--list">
          {this.props.todos.map((item) => {
            return (
              <li className="todo--item" key={item.key}>
                <div className="todo--left-items">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="todo--icon__inactive"
                    alt="checkbox"
                    onClick={() => this.props.toggleTodo(item.key)}
                  >
                    {this.renderCircle(item.ticked)}
                  </svg>
                  <p
                    className={
                      item.ticked
                        ? "todo--text todo--text__ticked"
                        : "todo--text"
                    }
                  >
                    {item.item}
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className={
                    item.starred
                      ? "star--icon star--icon__active"
                      : "star--icon"
                  }
                  alt="star"
                  onClick={() => this.props.toggleStar(item.key)}
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </li>
            );
          })}
          <ToDoInput />
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { todos: state.todos };
};

export default connect(mapStateToProps, { toggleTodo, toggleStar })(ToDos);
