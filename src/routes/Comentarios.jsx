import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Comentarios() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Digite seu email:</Form.Label>
        <Form.Control type="email" placeholder="exemplo@examplo.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Deixe seu comentário ou sugestão:</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit"> Enviar </Button>
    </Form>
    
  );
}

export default Comentarios;