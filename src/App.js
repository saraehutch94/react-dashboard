import "./App.css";
import Sidebar from "./components/Sidebar";
import Reviews from "./components/Reviews";
import AverageRating from "./components/AverageRating";
import SentimentAnalysis from "./components/SentimentAnalysis";

function App() {
  return (
    <>
      <Sidebar />
      <Reviews />
      <AverageRating />
      <SentimentAnalysis />
    </>
  );
}

export default App;
