import { useState, useEffect } from "react";

import { AiFillCloseCircle } from "react-icons/ai";
import { useMovieContext } from "../../store/context";

import * as S from "./styles";

export default function Button({ category }) {
  const {
    activeGenres,
    setActiveGenres,
    getPopularMoviesByGenres,
    currentPage,
  } = useMovieContext();

  const [isGenreActive, setIsGenreActive] = useState(false);

  useEffect(() => {
    setIsGenreActive(false); // everytime someone changes the page, the selected genres must be undone
  }, [currentPage]);

  function addCategory() {
    if (isGenreActive) {
      setIsGenreActive(false);

      // filtering out a genre when clicked the second time
      const newActiveGenres = activeGenres.filter(
        (item) => item !== category.id
      );
      setActiveGenres(newActiveGenres);
      getPopularMoviesByGenres(newActiveGenres);
    } else {
      const newActiveGenres = [...activeGenres, category.id];
      setActiveGenres(newActiveGenres);
      getPopularMoviesByGenres(newActiveGenres);
      setIsGenreActive(true);
    }
  }

  return (
    <S.Button highlight={isGenreActive} onClick={addCategory}>
      <span>{category.name}</span>
      {isGenreActive && <AiFillCloseCircle color="#FFF" size={12} />}
    </S.Button>
  );
}
