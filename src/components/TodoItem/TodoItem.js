import React from "react";
import "./TodoItem.css";
import { connect } from "react-redux";
import { Draggable } from "react-beautiful-dnd";
import { toggleTodo, toggleStar } from "../../actions";

class TodoItem extends React.Component {
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
    return this.props.todos.map((item, index) => {
      return (
        <Draggable key={item.key} draggableId={String(item.key)} index={index}>
          {(provided) => (
            <li
              className="todo--item"
              key={item.key}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
              <div className="todo--left-items">
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
                  className="todo--icon__inactive"
                  alt="checkbox"
                  onClick={() => this.props.toggleTodo(index)}
                >
                  {this.renderCircle(item.ticked)}
                </svg>

                <p
                  className={
                    item.ticked ? "todo--text todo--text__ticked" : "todo--text"
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={
                  item.starred ? "star--icon star--icon__active" : "star--icon"
                }
                alt="star"
                onClick={() => this.props.toggleStar(index)}
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </li>
          )}
        </Draggable>
      );
    });
  }
}

const mapStateToProps = (state) => {
  return { todos: state.activeTodos };
};

export default connect(mapStateToProps, { toggleTodo, toggleStar })(TodoItem);
