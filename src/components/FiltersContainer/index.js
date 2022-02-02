import { useMovieContext } from "../../store/context";
import Button from "../Button";

import * as S from "./styles";

export default function FiltersContainer() {
  const { categories } = useMovieContext();

  console.log("categories", categories);

  return (
    <S.FiltersContainer>
      <h2>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h2>
      <p>FILTRE POR:</p>
      <S.CategoryButtonsWrapp>
        {categories.map((category, index) => (
          <Button key={index} highlight={false} category={category} />
        ))}
      </S.CategoryButtonsWrapp>
    </S.FiltersContainer>
  );
}
