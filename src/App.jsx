import React, { useEffect, useState, createContext, useContext } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Slayder from "./Components/Slayder";
import Cards from "./Components/Cards";
import Books from "./Components/Books";
import More from "./Components/More";

export const Authors = React.createContext(null);

function App() {
  const [info, setInfo] = useState([]);
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3004/authors");
        const data = await response.json();
        setInfo(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

    fetch("http://localhost:3004/books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <BrowserRouter>
      <Authors.Provider value={{ info, setInfo, books, setBooks }}>
        <Header></Header>
        <Routes>
        <Route path="/" element={<Cards></Cards>}></Route>
        <Route path="/nasr" element={<Books></Books>}></Route>
        <Route path="/more" element={<More></More>}></Route>
        </Routes>
      </Authors.Provider>
    </BrowserRouter>
  );
}

export default App;
