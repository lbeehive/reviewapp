import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Navigate, Routes} from 'react-router-dom';
import './index.css';
import App from './App';
import {v4 as uuidv4} from 'uuid';
import reportWebVitals from './reportWebVitals';
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieList from './components/MovieList';
import Signup from './components/Signup';
import Signin from './components/Signin';
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
    <Router>
        <Header />
        <Routes>
          <Route exact path="/" render={() => signedIn() ? <Navigate to="/movielist"/> : <App/>} />
          <Route exact path="/" component={MovieList} />
          <Route exact path="/home" component={MovieList} />
          <Route exact path="/movielist" component={MovieList} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
        </Routes>
        <App tasks={sortedData} />
        <Footer />
      </Router>
  </React.StrictMode>
);

function signedIn() {
  return (localStorage.getItem("token") != null) ? true : false
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();