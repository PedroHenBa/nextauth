import { FormPost, StrapiPost } from '../../FormPost';
import { useSession } from 'next-auth/client';
import { gqlClient } from '../../../graphql/client';
import { GQL_MUTATION_UPDATE_POST } from '../../../graphql/mutations/post';
import { Wrapper } from '../../Wrapper';

export type UpdatePostTemplateProps = {
  post: StrapiPost;
};

export function UpdatePostTemplate({ post }: UpdatePostTemplateProps) {
  const [session] = useSession();

  const onCreate = async (post) => {
    try {
      await gqlClient.request(
        GQL_MUTATION_UPDATE_POST,
        { ...post },
        {
          Authorization: `Bearer ${session.accessToken}`,
        },
      );
    } catch (e) {
      alert('Nao foi possivel deletar esse post');
    }
  };

  return (
    <Wrapper>
      <FormPost post={post} onCreate={onCreate} />
    </Wrapper>
  );
}
