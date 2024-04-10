import { Container, Form } from "react-bootstrap";

const RoomForm = () => {
  return (
    <Container>
      <h1 className="mb-4">Crear Habitación</h1>
      <Form>
        <Form.Group className="mb-3 text-light" controlId="numero">
          <Form.Label>Número de Habitación:*</Form.Label>
          <Form.Control type="number" placeholder="1" />
          <Form.Text className="text-danger">Error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 text-light" controlId="tipoHabitacion">
          <Form.Label>Tipo Habitación:*</Form.Label>
          <Form.Select>
            <option value="">Seleccione un Tipo</option>
            <option value="Individual">Individual</option>
            <option value="Doble">Doble</option>
            <option value="Triple">Triple</option>
          </Form.Select>
          <Form.Text className="text-danger">Error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 text-light" controlId="categoria">
          <Form.Label>Categoria:</Form.Label>
          <Form.Select>
            <option value="">Seleccione una Categoria</option>
            <option value="Standard">Standard</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Ejecutiva">Ejecutiva</option>
            <option value="Suite">Suite</option>
          </Form.Select>
          <Form.Text className="text-danger">Error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 text-light" controlId="descripcion">
          <Form.Label className="me-3">Descripción:*</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Ej. Habitación deluxe con 2 camas somier, con vista al mar." />
          <Form.Text className="text-danger">Error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 text-light" controlId="precio">
          <Form.Label>Precio:*</Form.Label>
          <Form.Control type="number" placeholder="5000" />
          <Form.Text className="text-danger">Error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 text-light" controlId="imagen">
          <Form.Label>Imagen:*</Form.Label>
          <Form.Control type="text" placeholder="https://web.com/ejemplo.png" />
          <Form.Text className="text-danger">Error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 text-light" controlId="numero">
          <Form.Label className="me-3">Disponible:*</Form.Label>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Si"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="No"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />
            </div>
          ))}
          <Form.Text className="text-danger">Error</Form.Text>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default RoomForm;
