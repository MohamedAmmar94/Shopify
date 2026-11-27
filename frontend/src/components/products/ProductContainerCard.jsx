import SubTiltle from "../layouts/SubTitle";
import { ProductCard } from "./ProductCard";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export const ProductContainerCard = ({ name }) => {
  const arr = [1, 2, 3, 4];
  return (
    <>
      <Container>
        <SubTiltle title={name} btntitle="المزيد" pathText="/"></SubTiltle>
        <Row className="justify-content-center">
          {arr.map((item, index) => {
            return <ProductCard key={index}></ProductCard>;
          })}
        </Row>
      </Container>
    </>
  );
};
