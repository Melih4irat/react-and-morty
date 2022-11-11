import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Header from "./Components/Header/Header";
import CardGrid from "./Components/CardGrid/CardGrid";
import { Routes, Route } from "react-router-dom";
import Card from "./Components/Card/Card";
import useFetch from "./Hooks/useFetch";

function App() {
  const [characters, setCharacters] = useFetch(
    "https://rickandmortyapi.com/api/character",
    "results"
  );
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<CardGrid characters={characters} />} />
        <Route
          path="/characters/:id"
          element={<Card characters={characters} />}
        />
        <Route path="/" />
        <Route path="/" />
      </Routes>
      <Navigation />
    </div>
  );
}

export default App;
