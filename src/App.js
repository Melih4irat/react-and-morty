import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Header from "./Components/Header/Header";
import CardGrid from "./Components/CardGrid/CardGrid";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <CardGrid />
      <Navigation />
      <Routes>
        <Route path="/" />
        <Route path="/" />
        <Route path="/" />
      </Routes>
    </div>
  );
}

export default App;
