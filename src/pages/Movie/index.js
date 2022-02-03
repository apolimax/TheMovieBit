import { useParams } from "react-router-dom";
import Base from "../Base";

export default function Movie() {
  const { id } = useParams();
  return <Base></Base>;
}
