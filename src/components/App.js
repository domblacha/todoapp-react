import React, { Component } from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import "./App.css";

class App extends Component {
  state = {
    tasks: [],
  };
  addTask = (task) => {
    const tasks = [...this.state.tasks];
    tasks.push(task);
    this.setState({
      tasks,
    });
  };
  changeTaskStatus = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.doneDate = new Date().toISOString().slice(0, 10);
      }
    });
    this.setState({
      tasks,
    });
  };
  deleteTask = (id) => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter((task) => task.id !== id);
    this.setState({
      tasks,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="logo">toDoApp</div>
        <AddTask addTask={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          change={this.changeTaskStatus}
          delete={this.deleteTask}
        />
      </div>
    );
  }
}

export default App;
