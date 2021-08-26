import { FormPost } from '../../FormPost';
import { useSession } from 'next-auth/client';
import { gqlClient } from '../../../graphql/client';
import { GQL_MUTATION_CREATE_POST } from '../../../graphql/mutations/post';
import { Wrapper } from '../../Wrapper';
import { useRouter } from 'next/dist/client/router';

export function CreatePostTemplate() {
  const router = useRouter();
  const [session] = useSession();

  const onCreate = async ({ title, content }) => {
    try {
      const response = await gqlClient.request(
        GQL_MUTATION_CREATE_POST,
        { title, content },
        {
          Authorization: `Bearer ${session.accessToken}`,
        },
      );

      const {
        createPost: { post },
      } = response;

      if (post) {
        router.push(`/posts`);
      } else {
        throw new Error('Erro ao criar');
      }
    } catch (e) {
      alert('Nao foi possivel deletar esse post');
    }
  };

  return (
    <Wrapper>
      <FormPost onCreate={onCreate} />
    </Wrapper>
  );
}
