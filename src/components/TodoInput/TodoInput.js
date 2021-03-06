import React from "react";
import { connect } from "react-redux";

import "./TodoInput.css";
import { addTodo, toggleCompleted, filterTodos } from "../../actions";

let isToggled = false;
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
    this.props.filterTodos();
    this.setState({ inputVal: "" });
  };

  handleClick = () => {
    // switches the isToggled value between true and false
    isToggled = !isToggled;
    this.props.toggleCompleted(isToggled);
  };
  render() {
    return (
      <div>
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
        <button className="button--hide-completed" onClick={this.handleClick}>
          {isToggled ? "Show Completed" : "Hide Completed"}
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { todos: state.activeTodos };
};

export default connect(mapStateToProps, {
  addTodo,
  toggleCompleted,
  filterTodos,
})(TodoInput);
