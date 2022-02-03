import Header from "./components/Header";
import FiltersContainer from "./components/FiltersContainer";
import MoviesListContainer from "./components/MoviesListContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <FiltersContainer />
      <MoviesListContainer />
    </div>
  );
}

export default App;
