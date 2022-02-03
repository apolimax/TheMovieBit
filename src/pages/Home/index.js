import FiltersContainer from "../../components/FiltersContainer";
import MoviesListContainer from "../../components/MoviesListContainer";
import Base from "../Base";

export default function Home() {
  return (
    <Base>
      <FiltersContainer />
      <MoviesListContainer />
    </Base>
  );
}
