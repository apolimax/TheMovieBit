import FiltersContainer from "../../components/FiltersContainer";
import MoviesListContainer from "../../components/MoviesListContainer";
import Pagination from "../../components/Pagination";
import Rating from "../../components/Rating";
import { useMovieContext } from "../../store/context";
import Base from "../Base";

export default function Home() {
  const { mostPopulars, setCurrentPage, setActiveGenres } = useMovieContext();

  function changePage({ selected }) {
    setCurrentPage(selected + 1);
    setActiveGenres([]); // everytime someone changes the page, the active genres array must be erased
  }

  return (
    <Base>
      <FiltersContainer />
      <MoviesListContainer movies={mostPopulars} />

      <Pagination changePage={changePage} />

      {/* <Rating rating={5} /> */}
    </Base>
  );
}
