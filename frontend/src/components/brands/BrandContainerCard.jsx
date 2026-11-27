import SubTiltle from "../layouts/SubTitle";
import { BrandCard } from "./BrandCard";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export const BrandContainerCard = ({ name }) => {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <Container>
        <SubTiltle title={name} btntitle="المزيد" pathText="/"></SubTiltle>
        <Row className="justify-content-center">
          {arr.map((item, index) => {
            return <BrandCard key={index}></BrandCard>;
          })}
        </Row>
      </Container>
    </>
  );
};
