import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { NavbarComponent } from "../../components/layouts/NavbarComponent.jsx";

export function RegisterPage() {
  return (
    <div>
      <NavbarComponent />
      <Container className=" w-50 m-auto" style={{ minHeight: "690px" }}>
        <Form>
          <Row className="py-5 d-flex justify-content-center text-center ">
            <Col sm="12" className="d-flex flex-column ">
              <Form.Label>
                <h3>تسجيل الحساب </h3>
              </Form.Label>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control
                  type="fullname"
                  name="fullname"
                  className="text-center"
                  placeholder="الأسم بالكامل"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control
                  type="text"
                  name="mobile"
                  className="text-center"
                  placeholder="رقم الموبيل"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control
                  type="email"
                  className="text-center"
                  placeholder="الإيميل"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  className="text-center"
                  placeholder="كلمة السر "
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="re-password"
                  className="text-center"
                  placeholder="تأكيد كلمة السر "
                />
              </Form.Group>
              <Button variant="primary" className="btn-dark" type="submit">
                تسجيل الحساب
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}
