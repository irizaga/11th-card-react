import { render, screen } from '@testing-library/react';
import App from './App';

test ('renders learn react link', () => {
  render(<App />);

  expect(screen.getByRole('button', {name: 'Full deck'})).toBeInTheDocument();
  expect(screen.getByRole('button', {name: 'Shuffle deck'})).toBeInTheDocument();
  expect(screen.getByRole('button', {name: 'Pick 21 cards'})).toBeInTheDocument();
});
