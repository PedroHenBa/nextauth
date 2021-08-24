import * as Styled from './styles';
import { TextInput } from '../TextInput';
import { Email } from '@styled-icons/material-outlined/Email';
import { Password } from '@styled-icons/material-outlined/Password';
import { FormEvent, useState } from 'react';
import { Button } from '../Button';

export const FormLogin = ({ errorMessage, onLogin }: FormLoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    setLoading(true);
    event.preventDefault();
    if (onLogin) {
      await onLogin(email, password);
    }

    setLoading(false);
  };

  return (
    <Styled.Container onSubmit={handleSubmit}>
      <TextInput
        label="seu e-mail"
        name="user-identifier"
        type="email"
        icon={<Email />}
        onInputChange={(v) => setEmail(v)}
        value={email}
      />

      <TextInput
        label="Sua senha"
        name="user-password"
        type="password"
        icon={<Password />}
        value={password}
        onInputChange={(v) => setPassword(v)}
      />

      {!!errorMessage && <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>}

      <Styled.ContainerButton>
        <Button disabled={loading}>{loading ? 'Aguarde' : 'Entrar'}</Button>
      </Styled.ContainerButton>
    </Styled.Container>
  );
};

export type FormLoginProps = {
  errorMessage?: string;
  onLogin?: (email: string, password: string) => Promise<void>;
};
