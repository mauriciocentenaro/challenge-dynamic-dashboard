import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import TablePage from './pages/TablePage';
import ChartPage from './pages/ChartPage';
import './App.css';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<TablePage />} />
      <Route path="/chart" element={<ChartPage />} />
    </Routes>
  </Router>
);

export default App;
