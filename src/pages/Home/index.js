import FiltersContainer from "../../components/FiltersContainer";
import MoviesListContainer from "../../components/MoviesListContainer";
import Pagination from "../../components/Pagination";
import { useMovieContext } from "../../store/context";
import Base from "../Base";

export default function Home() {
  const { setCurrentPage } = useMovieContext();

  function changePage({ selected }) {
    setCurrentPage(selected + 1);
  }

  return (
    <Base>
      <FiltersContainer />
      <MoviesListContainer />

      <Pagination changePage={changePage} />
    </Base>
  );
}
