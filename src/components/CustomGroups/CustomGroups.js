import React, { Component } from "react";
import "./CustomGroups.css";
import { addGroup } from "../../actions";
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
  render() {
    return (
      <div>
        <ul className="custom-groups">
          <div className="custom-groups--item-list">
            {this.props.groups.map((item) => {
              return (
                <li className="custom-groups--item" key={item.key}>
                  <h4>{item.name}</h4>
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
                    class="custom-groups--delete"
                    onClick={this.handleDelete}
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
  return { groups: state.groups };
};

export default connect(mapStateToProps, { addGroup })(CustomGroups);
