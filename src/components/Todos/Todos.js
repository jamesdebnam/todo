import React, { Component } from "react";
import { connect } from "react-redux";
import { Droppable } from "react-beautiful-dnd";

import "./Todos.css";
import { toggleTodo, toggleStar } from "../../actions";
import TodoInput from "../TodoInput/TodoInput";
import TodoItem from "../TodoItem/TodoItem";
export class Todos extends Component {
  render() {
    return (
      <div>
        <ul className="todo--list">
          <Droppable droppableId="todos">
            {(provided) => {
              return (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <TodoItem />
                  {provided.placeholder}
                </div>
              );
            }}
          </Droppable>

          <TodoInput />
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { todos: state.activeTodos };
};

export default connect(mapStateToProps, { toggleTodo, toggleStar })(Todos);
