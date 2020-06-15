import React, { Component } from "react";
import "./ToDos.css";
export default class ToDos extends Component {
  // Component state is used here to make the todo input controlled - redux could be used but it seems
  // a bit overkill
  state = { inputVal: "" };

  handleChange = (e) => {
    this.setState({ inputVal: e.target.value });
  };

  render() {
    return (
      <div>
        <ul className="todo--list">
          <li>
            <form className="todo--form">
              <input
                className="todo--input"
                type="text"
                placeholder="Add a task"
                onChange={this.handleChange}
                value={this.state.inputVal}
              />
            </form>
          </li>
        </ul>
      </div>
    );
  }
}
