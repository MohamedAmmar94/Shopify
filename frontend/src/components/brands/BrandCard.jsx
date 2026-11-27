import Card from "react-bootstrap/Card";
import brand1 from "../../assets/images/brand1.png";
// import pic from "../../assets/images/pic.png";
// import prod1 from "../../assets/images/prod1.png";
import Col from "react-bootstrap/Col";

export const BrandCard = () => {
  return (
    <Col xs="6" sm="4" md="3" lg="2" className="d-flex">
      <Card className="border-none">
        <Card.Img variant="top" src={brand1} className="brand-img" />
        {/* <Card.Body>
          <Card.Title className="text-center">Card Title</Card.Title>
        </Card.Body> */}
      </Card>
    </Col>
  );
};
export default BrandCard;
