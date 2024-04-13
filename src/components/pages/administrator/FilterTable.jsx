import { Form, Row, Col } from "react-bootstrap";

const FilterTable = ({ searchTerm, handleSearchChange }) => {
  return (
    <Form value={searchTerm} onChange={handleSearchChange}>
      <Row className="justify-content-center align-items-center">
        <Col md="8" className="text-center text-md-end">
          <Form.Label className="text-dark">Buscar:</Form.Label>
        </Col>
        <Col md="4">
          <Form.Control type="text"></Form.Control>
        </Col>
      </Row>
    </Form>
  );
};

export default FilterTable;
