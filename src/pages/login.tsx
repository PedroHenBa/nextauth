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
    const redirect = router.query?.redirect || '/';

    const response = await signIn('credentials', {
      email,
      password,
      redirect: false,
      callbackUrl: redirect as string,
    });

    if (!response.ok) {
      setError('Usuario ou login invalidos');
      return;
    }

    window.location.href = response.url;
  };

  const handleLoginGoogle = async () => {
    const redirect = router.query?.redirect || '/';
    await signIn('google', { callbackUrl: redirect as string });
  };

  return (
    <Wrapper>
      <FormLogin onLogin={handleLogin} errorMessage={error} />
      <br />
      <Button onClick={handleLoginGoogle}>Login com Google</Button>
    </Wrapper>
  );
}
