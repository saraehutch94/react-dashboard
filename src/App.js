import "./App.css";
import Sidebar from "./components/Sidebar";
import Reviews from "./components/Reviews";
import Rating from "./components/Rating";
import Analysis from "./components/Analysis";
import Visitors from "./components/Visitors";

function App() {
  return (
    <div className="whole-app">
      <div className="top-bar-flex">
        <img className="top-bar-img" src="https://i.imgur.com/4K2VSma.png" />
        <div className="app-title">Sarify</div>
      </div>
      <div className="app-wrapper">
        <Sidebar />
        <Reviews />
        <Rating />
        <Analysis />
        <Visitors />
      </div>
    </div>
  );
}

export default App;
