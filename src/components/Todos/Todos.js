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
          <h3 className="group-name">
            {this.props.group ? this.props.group : "To-dos"}
          </h3>
          <Droppable droppableId="todos">
            {(provided, snapshot) => {
              return (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{
                    backgroundColor: snapshot.isDraggingOver
                      ? "rgba(121, 169, 169, 0.25)"
                      : null,
                  }}
                  className="todo--droparea"
                >
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
  return { todos: state.activeTodos, group: state.groups.group };
};

export default connect(mapStateToProps, { toggleTodo, toggleStar })(Todos);
