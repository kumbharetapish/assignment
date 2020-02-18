import React, { Component } from "react";
import inputStyle from "./input.module.css";

class Input extends Component {
  inputHandel = e => {
    e.preventDefault();
    this.props.inputHandel();
  };

  render() {
    console.log(this.props);

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
          </button>
        </form>
      </div>
    );
  }
}

export default Input;