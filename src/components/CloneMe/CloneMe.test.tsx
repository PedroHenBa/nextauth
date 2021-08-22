import { CloneMe } from './index';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';

describe('<CloneMe />', () => {
  it('should render CloneMe component', () => {
    renderTheme(<CloneMe footerHtml="Ola" />);
    expect(screen.getByText('Ola')).toBeInTheDocument();
  });
});
