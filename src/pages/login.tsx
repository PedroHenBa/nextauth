import { Wrapper } from '../components/Wrapper';
import { FormLogin } from '../components/FormLogin';
import { signIn } from 'next-auth/client';
import { useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import { Button } from '../components/Button';

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleLogin = async (email: string, password: string) => {
    const response = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (!response.ok) {
      setError('Usuario ou login invalidos');
      return;
    }

    const redirect = router.query?.redirect || '/';
    router.push(redirect as string);
  };

  const handleLoginGoogle = async () => {
    await signIn('google', { callbackUrl: '/' });
  };

  return (
    <Wrapper>
      <FormLogin onLogin={handleLogin} errorMessage={error} />
      <br />
      <Button onClick={handleLoginGoogle}>Login com Google</Button>
    </Wrapper>
  );
}
