import React from "react";
import "./Task.css";
const Task = (props) => {
  const handleOnClickChange = () => props.change(id);
  const handleOnClickDelete = () => props.delete(id);
  const { text, active, id, date, doneDate } = props.task;
  const isActive = active && (
    <button onClick={handleOnClickChange}>
      <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
    </button>
  );
  return (
    <div className="taskContainer">
      <p>
        {text}
        {isActive}
        <button onClick={handleOnClickDelete}>
          <i className="fa fa-times-circle-o" aria-hidden="true"></i>
        </button>
      </p>
      <p>{active ? date : doneDate}</p>
    </div>
  );
};

export default Task;
