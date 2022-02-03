import Header from "../../components/Header";

export default function Base({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
