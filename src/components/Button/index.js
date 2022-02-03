import { useState } from "react";

import { AiFillCloseCircle } from "react-icons/ai";
import { useMovieContext } from "../../store/context";

import * as S from "./styles";

export default function Button({ category }) {
  const { activeCategories, setActiveCategories } = useMovieContext();

  const [isCategoryActive, setIsCategoryActive] = useState(false);

  function addCategory() {
    setActiveCategories([...activeCategories, category]);

    if (isCategoryActive) {
      setIsCategoryActive(false);

      // filtering out a category when clicked the second time
      const newActiveCategories = activeCategories.filter(
        (item) => item !== category
      );
      setActiveCategories(newActiveCategories);
    } else {
      setIsCategoryActive(true);
    }
  }

  return (
    <S.Button highlight={isCategoryActive} onClick={addCategory}>
      <span>{category}</span>
      {isCategoryActive && <AiFillCloseCircle color="#FFF" size={20} />}
    </S.Button>
  );
}
