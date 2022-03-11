import { render, screen } from '@testing-library/react';
import Cards from '../components/Cards';

test ('<Cards/>', () => {
  const card = [{card: '10', suit: 'clubs'}]
  render(<Cards deck={card}/>);

  const divElement = screen.getByText('10')
  expect(divElement).toBeInTheDocument();
});

