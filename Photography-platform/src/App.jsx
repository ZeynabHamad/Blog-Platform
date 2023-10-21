/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Footer from "./Pages/Footer";
import Details from "./Pages/Details";
import Photos from "./Pages/Photos";
import Contact from "./Pages/Contact";
import About from "./Pages/AboutUs";
import { data } from "./Components/Data";

function App() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("all");
  const [filteredData, setFilteredData] = useState([data]);

  useEffect(() => {
    filterHandler();
  }, [search, location]);

  const filterHandler = () => {
    let filtered = [...data];
    filtered = filtered.filter((user) => {
      const name = user.name.toLowerCase();
      return name.includes(search.toLowerCase());
    });

    switch (location) {
      case "erbil":
        filtered = filtered.filter((user) => user.location === "Erbil");
        break;
      case "sulaymani":
        filtered = filtered.filter((user) => user.location === "Sulaymani");
        break;
      case "duhok":
        filtered = filtered.filter((user) => user.location === "Duhok");
        break;
      case "kirkuk":
        filtered = filtered.filter((user) => user.location === "Kirkuk");
        break;
      default:
        break;
    }
    setFilteredData(filtered);
  };

  return (
    <>
      <Navbar setSearch={setSearch} />
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/details/:id/photos" element={<Photos />} />
      </Routes>

      <Navbar setSearch={setSearch} />
      <Home data={filteredData} location={setLocation} maxLength={8} />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
