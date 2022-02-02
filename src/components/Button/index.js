import { AiFillCloseCircle } from "react-icons/ai";

import * as S from "./styles";

export default function Button({ category, highlight }) {
  return (
    <S.Button highlight={highlight}>
      <span>{category}</span>
      {highlight && <AiFillCloseCircle color="#FFF" size={20} />}
    </S.Button>
  );
}
