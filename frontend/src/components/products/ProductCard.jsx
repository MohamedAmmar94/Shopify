import Card from "react-bootstrap/Card";
// import clothe from "../../assets/images/clothe.png";
// import pic from "../../assets/images/pic.png";
import prod1 from "../../assets/images/prod1.png";
import Col from "react-bootstrap/Col";

export const ProductCard = () => {
  return (
    <Col xs="12" sm="6" md="6" lg="3" className="d-flex">
      <Card className="border-none product-card w-100">
        <Card.Img variant="top" src={prod1} className="product-img" />
        <Card.Body>
          <Card.Title className="text-center">Card Title</Card.Title>
          {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        </Card.Body>
      </Card>
    </Col>
  );
};
// export default ProductCard;
