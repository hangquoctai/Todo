import React, { Component } from "react";
import "./App.css";
import Todo from "./Components/Component.js";
import checkall from "./img/checkall.svg";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: "",
      todo: []
    };
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.Delete=this.Delete.bind(this);
  }
  onItemClick(item) {
    return event => {
      const todo = this.state.todo;
      const isComplete = item.isComplete;
      const index = todo.indexOf(item);
      this.setState({
        todo: [
          ...todo.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todo.slice(index + 1)
        ]
      });
    };
  }
  onKeyUp(event) {
    if (event.keyCode === 13) {
      const text = event.target.value;
      if (!text) {
        return;
      }
      this.setState({
        newItem: "",
        todo: [{ title: text, isComplete: false }, ...this.state.todo]
      });
    }
  }
  onChange(event) {
    this.setState({
      newItem: event.target.value
    });
  }
  Delete(){
    this.setState({
      todo:[]
    })
  }
  render() {
    const { todo, newItem } = this.state;
    return (
      <div className="Wrap">
        <div className="App">
          <h1>Todo with ReactJS</h1>
          <div className="Header">
            <img src={checkall} />
            <input
              type={Text}
              placeholder="Add a new item"
              value={newItem}
              onChange={this.onChange}
              onKeyUp={this.onKeyUp}
            />
          </div>
          {todo.length > 0 &&
            todo.map((item, index) => (
              <Todo key={index} item={item} onClick ={this.onItemClick(item)} />
            ))}
          {/* {todo.length === 0 && "Nothing Here"} */}
          <div className="Footer">
            <p onClick={this.Delete}>Delete All</p>
          </div>
        </div>
        <div className="About">
          <h1>This is the first app with ReactJS</h1>
        </div>
      </div>
    );
  }
}

export default App;
