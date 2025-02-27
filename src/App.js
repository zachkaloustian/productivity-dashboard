import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import ProgressChart from './components/ProgressChart';
import './styles.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const addTask = (taskText) => {
    if (taskText.trim() === '') return;
    setTasks([...tasks, { text: taskText, completed: false }]);
  };

  const toggleTaskCompletion = (index) => {
    setTasks(tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    ));
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const clearAllTasks = () => {
    setTasks([]);
  };

  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      <button className="toggle-mode" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      <h1>Zach's Productivity Dashboard</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} removeTask={removeTask} />
      <ProgressChart progress={progress} />

      {tasks.length > 0 && (
        <button className="clear-tasks" onClick={clearAllTasks}>
          Clear All Tasks
        </button>
      )}
    </div>
  );
};

export default App;