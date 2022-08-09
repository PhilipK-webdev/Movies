import MovieProvider from "./hooks/useMovieContext";
import MainPage from "./pages/MainPage";
function App() {
  return (
    <MovieProvider>
      <div>
        <MainPage />
      </div>
    </MovieProvider>
  );
}

export default App;
