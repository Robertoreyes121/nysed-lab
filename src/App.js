import React from 'react';
import Navbar from './components/Navbar.js';
import SchoolCard from './components/SchoolCard.js';
import data from './nycSchoolEnrollmentData.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <div className="row"> 
         <SchoolCard school = {data[0].ENTITY_NAME} YEAR = {data[0].YEAR}/>
         <SchoolCard school = {data[1].ENTITY_NAME} SchoolCard = {data[1].Reportcard}/>
         <SchoolCard school = {data[2].ENTITY_NAME}/>
        </div>
      </div>
    </div>
  );
}

export default App;
