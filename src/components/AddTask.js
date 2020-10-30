import React, { Component } from "react";
import "./AddTask.css";

class AddTask extends Component {
  state = {
    text: "",
    date: new Date().toISOString().slice(0, 10),
  };
  counter = 0;
  handleChange = (e) => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  };
  handleClick = () => {
    const task = {
      id: this.counter,
      text: this.state.text,
      date: this.state.date,
      active: true,
      doneDate: null,
    };
    this.counter++;
    this.props.addTask(task);
    this.setState({
      text: "",
      date: new Date().toISOString().slice(0, 10),
    });
  };
  render() {
    return (
      <>
        <div className="AddTask">
          <div className="input-container">
            <label htmlFor="text">Dodaj zadanie</label>
            <input
              type="text"
              id="text"
              name="text"
              value={this.state.text}
              onChange={this.handleChange}
            />
          </div>
          <button className="btn-addTask" onClick={this.handleClick}>
            Dodaj
          </button>
          <div className="input-container">
            <label htmlFor="date">Data wykonania</label>
            <input
              type="date"
              id="date"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
            />
          </div>
        </div>
      </>
    );
  }
}

export default AddTask;
