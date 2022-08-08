import "./App.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch(`/api/movies/matrix/1`);
      const data = await response.json();
      console.log("data", data);
    };
    getMovies();
  }, []);
  return <div className="App">Hello</div>;
}

export default App;
