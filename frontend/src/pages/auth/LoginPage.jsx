import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { NavbarComponent } from "../../components/layouts/NavbarComponent.jsx";
import { Link } from "react-router-dom";

export function LoginPage() {
  return (
    <div>
      <NavbarComponent />
      <Container className="  m-auto" style={{ minHeight: "600px" }}>
        <Form>
          <Row className="py-5 d-flex justify-content-center text-center ">
            <Col sm="12" md="9" lg="6" className="d-flex flex-column gap-3">
              <Form.Label>
                <h3 className="title-login text-center">تسجيل الدخول </h3>
              </Form.Label>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control
                  type="email"
                  className="text-center user-input"
                  placeholder="الإيميل"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control
                  type="password"
                  className="text-center user-input"
                  placeholder="كلمة السر "
                />
              </Form.Group>
              <Button
                variant="primary"
                className="btn-dark btn-login"
                type="submit"
              >
                تسجيل الدخول
              </Button>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  ليس لديك حساب ؟<Link to="/register">اضغط هنا </Link>
                </Form.Label>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}
