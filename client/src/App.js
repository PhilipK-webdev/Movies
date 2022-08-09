import { useEffect } from "react";
import MainPage from "./pages/MainPage";
function App() {
  // useEffect(() => {
  //   const getMovies = async () => {
  //     const response = await fetch(`/api/movies/`);
  //     const data = await response.json();
  //     console.log("data", data);
  //   };
  //   getMovies();
  // }, []);
  return (
    <div>
      <MainPage />
    </div>
  );
}

export default App;
