import { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom"; // HashRouter, Route ve Routes'ı içeri aktarıyoruz
import "./App.scss";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import CardContainer from "./components/cards/CardContainer";
import { data } from "./helpers/data";
// console.log(data);

function App() {
  const [search, setSearch] = useState("");

  const filteredData =
    search.trim() === ""
      ? data
      : data.filter((player) =>
          player.name.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <Router> 
      <div className="container">
        <Header />
        <Search search={search} setSearch={setSearch} />
        <CardContainer data={filteredData} />
      </div>
    </Router>
  );
}

export default App;
