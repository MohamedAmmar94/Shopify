import Card from "react-bootstrap/Card";
import clothe from "../../assets/images/clothe.png";
// import pic from "../../assets/images/pic.png";
// import prod1 from "../../assets/images/prod1.png";
import Col from "react-bootstrap/Col";

export const CategoryCard = () => {
  return (
    <Col xs="6" sm="4" md="3" lg="2" className="d-flex">
      <Card className="border-none category-card">
        <div className="category-img-container p-4">
          <Card.Img variant="top" src={clothe} className="category-img" />
        </div>
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
export default CategoryCard;
