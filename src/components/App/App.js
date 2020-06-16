import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { connect } from "react-redux";

import "./App.css";
import Todos from "../Todos/Todos";
import Sidebar from "../Sidebar/Sidebar";
import { rearrangeTodos } from "../../actions";
class App extends React.Component {
  onDragEnd = ({ destination, source }) => {
    if (destination) {
      this.props.rearrangeTodos({
        start: source.index,
        end: destination.index,
      });
    }
  };
  render() {
    return (
      <div className="App">
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div className="sidebar--container">
            <Sidebar />
          </div>
          <Todos />
        </DragDropContext>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, { rearrangeTodos })(App);
