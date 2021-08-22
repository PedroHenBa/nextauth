import * as Styles from './styles';
import { CloneMe } from '../../components/CloneMe';

export function Home() {
  return (
    <Styles.Container>
      <CloneMe footerHtml="clone me" />
    </Styles.Container>
  );
}
