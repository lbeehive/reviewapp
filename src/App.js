import React, { useState } from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";
import { v4 as uuid } from 'uuid';
//import Search from "./components/Search";
//import { format } from 'date-fns';
//const uniqueId = () => "todo-"+parseInt(Date.now() * Math.random()).toString();
//setTasks([...tasks, newTask].sort((a, b) => b.name > a.name ? 1 : -1,));
/*
    const editedTaskList = [...tasks];
    const index = tasks.findIndex(Todo => Todo.id === id);
    editedTaskList[index].name = newName;
    */

const Filter_Map = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed
};

const Filter_Names = Object.keys(Filter_Map);

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  const [filter, setFilter] = useState('All');
  
  function addTask(name) {
    
    const uniqueid_full = uuid();
    const uniqueId = uniqueid_full.slice(0,10);
    const newTask = { id: uniqueId, name: name, dateAdded: Date.now(), completed: false };
    setTasks([...tasks, newTask].sort((a, b) => b.dateAdded - a.dateAdded));
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      // does this task has the same ID as the edited task?
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  function editTask(id, newName) {
   
    const editedTaskList = tasks.map((task) => {
    //does this task has the same ID as the edited task?
      if (id === task.id) {
        //
        return {...task, name: newName}
      }
      
      return task;
      
    });
    setTasks(editedTaskList);
    
  }

  const taskList = tasks
  .filter(Filter_Map[filter])
  .map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      date={task.dateAdded}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
    ));
    
    const filterList = Filter_Names.map((name) => (
      <FilterButton
        key={name}
        name={name}
        isPressed={name === filter}
        setFilter={setFilter}
      />
    ));

  return (
    <div className="todoapp stack-large">
      <h1>To Do List</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );

}
export default App;