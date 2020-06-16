import React from "react";
import { connect } from "react-redux";

import "./TodoInput.css";
import { addTodo } from "../../actions";

class TodoInput extends React.Component {
  // Component state is used here to make the todo input controlled - redux could be used but it seems
  // a bit overkill

  state = { inputVal: "" };

  handleChange = (e) => {
    this.setState({ inputVal: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // The addToDo action creator is called with the input value passed in as the payload
    this.props.addTodo(this.state.inputVal);
    this.setState({ inputVal: "" });
  };
  render() {
    return (
      <li className="todo--form">
        <form className="todo--frm" onSubmit={this.handleSubmit}>
          <input
            className="todo--input"
            type="text"
            placeholder="Add a task"
            onChange={this.handleChange}
            value={this.state.inputVal}
          />
        </form>
      </li>
    );
  }
}

const mapStateToProps = (state) => {
  return { todos: state.activeTodos };
};

export default connect(mapStateToProps, { addTodo })(TodoInput);
