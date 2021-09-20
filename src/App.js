import Home from "./Components/Home";
import sample from "../src/images/weather.mp4"

function App() {
  return (
    <div className="App">
      <Home />
      <video className='videoTag' autoPlay loop muted>
    <source src={sample} type='video/mp4' />
</video>
    </div>
  );
}

export default App;
