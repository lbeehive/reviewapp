import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {v4 as uuidv4} from 'uuid';
import reportWebVitals from './reportWebVitals';
//format(new Date(), "MM-dd-yyyy")
const DATA = [
  { id: uuidv4(), name: "Eat", date: new Date(), completed: true },
  { id: uuidv4(), name: "Sleep",date: new Date(), completed: false },
  { id: uuidv4(), name: "Repeat", date: new Date(), completed: false }
];
const sortedData = DATA.sort((a, b) => b.dateAdded - a.dateAdded);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App tasks={sortedData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();