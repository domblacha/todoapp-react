import React from "react";
import Task from "./Task";
import "./TaskList.css";

const TaskList = (props) => {
  const tasks = [...props.tasks];
  const active = tasks.filter((task) => task.active);
  const done = tasks.filter((task) => !task.active);
  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      change={props.change}
      delete={props.delete}
    />
  ));
  const doneTasks = done.map((task) => (
    <Task key={task.id} task={task} delete={props.delete} />
  ));

  return (
    <div className="TaskList">
      <div className="tasks-container">
        <span className="tasks-header">Zadania do wykonania</span>
        <div className="tasks">{activeTasks}</div>
      </div>
      <div className="tasks-container">
        <span className="tasks-header">Zadania wykonane</span>
        <div className="tasks">{doneTasks}</div>
      </div>
    </div>
  );
};

export default TaskList;
