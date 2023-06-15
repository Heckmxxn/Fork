import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';

export default function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <h1>Login</h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Type your e-mail"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Type your passowrd"
        />
        <button type="submit" id="login-button">
          Log in
        </button>
        <button type="submit" id="signup-button">
          Not registered yet? Sign up!
        </button>
      </Form>
    </Container>
  );
}
