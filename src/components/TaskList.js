import React from 'react';

const TaskList = ({ tasks, toggleTaskCompletion, removeTask }) => {
  return (
    <div className="task-list">
      {tasks.length === 0 ? <p>No tasks yet.</p> : null}
      {tasks.map((task, index) => (
        <div key={index} className="task-item">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(index)}
          />
          <span className={task.completed ? "completed" : ""}>{task.text}</span>
          <button className="remove-task" onClick={() => removeTask(index)}>❌</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;