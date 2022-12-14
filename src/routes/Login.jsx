import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login1() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" placeholder="Digite seu email" />
        <Form.Text className="text-muted"> exemplo@exemplo.com </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha:</Form.Label>
        <Form.Control type="password" placeholder="Digite sua senha" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Não sou robô" />
      </Form.Group>
      <Button variant="primary" type="submit"> Entrar </Button>
    </Form>
  );
}

export default Login1;