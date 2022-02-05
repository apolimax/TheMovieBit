import ReactPaginate from "react-paginate";

import * as S from "./styles";

export default function Pagination({ changePage }) {
  return (
    <S.Pagination>
      <ReactPaginate
        previousLabel={"Anterior"}
        nextLabel={"Próxima"}
        pageCount={5}
        onPageChange={changePage}
      />
    </S.Pagination>
  );
}
