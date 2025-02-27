import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskText);
    setTaskText('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-input-form">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter a task..."
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskInput;