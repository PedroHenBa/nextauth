import { GetServerSideProps } from 'next';
import { PrivateComponent } from '../components/PrivateComponent';
import { HomeTemplate } from '../components/Templates/Home';

export default function Index() {
  return (
    <PrivateComponent>
      <HomeTemplate />
    </PrivateComponent>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
