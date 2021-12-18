import "./App.css";
import Sidebar from "./components/Sidebar";
import Reviews from "./components/Reviews";
import Rating from "./components/Rating";
import Analysis from "./components/Analysis";
import Visitors from "./components/Visitors";

function App() {
  return (
    <div className="app-wrapper">
      <Sidebar />
      <Reviews />
      <Rating />
      <Analysis />
      <Visitors />
    </div>
  );
}

export default App;
