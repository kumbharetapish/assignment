import React, { Component } from "react";
import Input from "./Components/Input/Input";
import List from "./Components/List/List";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentNote: {
        note: "",
        key: ""
      }
    };
    this.addNote = this.addNote.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
  }

  addNote(e) {
    e.preventDefault();
    const newItem = this.state.currentNote;
    if (newItem.note !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentNote: {
          note: "",
          key: ""
        }
      });
    }
    console.log(newItem);
  }
  handleInput(e) {
    e.preventDefault();
    this.setState({
      currentNote: {
        key: new Date().toLocaleTimeString(),
        note: e.target.value
      }
    });
  }
  deleteNote(key) {
    const filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: filteredItems
    });
  }
  updateNote(note, key) {
    console.log("items:" + this.state.items);
    const items = this.state.items;
    items.map(item => {
      if (item.key === key) {
        console.log(item.key + "    " + key);
        item.note = note;
      }
    });
    this.setState({
      items: items
    });
  }
  render() {
    return (
      <div className="App">
        <Input
          data={this.state}
          addNote={this.addNote}
          valueChange={this.handleInput}
        />

        <List
          items={this.state.items}
          deleteNote={this.deleteNote}
          updateNote={this.updateNote}
        />
      </div>
    );
  }
}

export default App;
