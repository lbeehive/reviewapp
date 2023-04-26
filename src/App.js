import React, { useState, useEffect } from "react";
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

	
const MOVIEDATA = {
  "Movies": [
{
  "Title": "Rogue One: A Star Wars Story",
  "Year": "2016",
  "Rated": "PG-13",
  "Released": "16 Dec 2016",
  "Runtime": "133 min",
  "Genre": "Action, Adventure, Sci-Fi",
  "Director": "Gareth Edwards",
  "Writer": "Chris Weitz, Tony Gilroy, John Knoll",
  "Actors": "Felicity Jones, Diego Luna, Alan Tudyk",
  "Plot": "In a time of conflict, a group of unlikely heroes band together on a mission to steal the plans to the Death Star, the Empire's ultimate weapon of destruction.",
  "Language": "English",
  "Country": "United States",
  "Awards": "Nominated for 2 Oscars. 24 wins & 85 nominations total",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg",
  "Ratings": [
      {
          "Source": "Internet Movie Database",
          "Value": "7.8/10"
      },
      {
          "Source": "Rotten Tomatoes",
          "Value": "84%"
      },
      {
          "Source": "Metacritic",
          "Value": "65/100"
      }
  ],
  "Metascore": "65",
  "imdbRating": "7.8",
  "imdbVotes": "651,965",
  "imdbID": "tt3748528",
  "Type": "movie",
  "DVD": "04 Apr 2017",
  "BoxOffice": "$533,539,991",
  "Production": "N/A",
  "Website": "N/A",
  "Response": "True"
} ,
{
  "Title": "Star Wars: Episode IV - A New Hope",
  "Year": "1977",
  "imdbID": "tt0076759",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
} ,
{
  "Title": "Star Wars: Episode V - The Empire Strikes Back",
  "Year": "1980",
  "imdbID": "tt0080684",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
},
{
  "Title": "Star Wars: Episode VI - Return of the Jedi",
  "Year": "1983",
  "imdbID": "tt0086190",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
},
{
  "Title": "Star Wars: Episode VII - The Force Awakens",
  "Year": "2015",
  "imdbID": "tt2488496",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
}
  ]
}

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
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
        <p>{MOVIEDATA.Movies[0].Title} - Released: {MOVIEDATA.Movies[0].Released}</p>
        <img src={MOVIEDATA.Movies[0].Poster} alt='movie'></img>
        <p>{MOVIEDATA.Movies[1].Title} - Year: {MOVIEDATA.Movies[1].Year}</p>
        <img src={MOVIEDATA.Movies[1].Poster} alt='movie'></img>
        <p>{MOVIEDATA.Movies[2].Title} - Year: {MOVIEDATA.Movies[2].Year}</p>
        <img src={MOVIEDATA.Movies[2].Poster} alt='movie'></img>
        <p>{MOVIEDATA.Movies[3].Title} - Year: {MOVIEDATA.Movies[3].Year}</p>
        <img src={MOVIEDATA.Movies[3].Poster} alt='movie'></img>
        <p>{MOVIEDATA.Movies[4].Title} - Year: {MOVIEDATA.Movies[4].Year}</p>
        <img src={MOVIEDATA.Movies[4].Poster} alt='movie'></img>
      </ul>
    </div>
    
  );

}
export default App;