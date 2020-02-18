import React, { Component } from "react";
import inputStyle from "./input.module.css";

class Input extends Component {
  render() {
    return (
      <div className={inputStyle.wrapper}>
        <form className={inputStyle.inputWrapper} onSubmit={this.props.addNote}>
          <input
            type="text"
            value={this.props.data.currentNote.note}
            onChange={this.props.valueChange}
            placeholder="Add Your Activity..."
            className={inputStyle.todoInput}
          ></input>
          
          <button className={inputStyle.todoAdd} type="submit">
            {"+"}
            <span className={inputStyle.hoverText}>{"Add Note"}</span>
          </button>
        </form>
      </div>
    );
  }
}

export default Input;
