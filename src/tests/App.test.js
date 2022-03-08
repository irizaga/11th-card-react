import { render, screen } from '@testing-library/react';
import App from '../App';

test ('renders learn react link', () => {
  render(<App />);

  expect(document.querySelector("#cards")).toBeInTheDocument();
  expect(screen.getByRole('button', {name: 'Pick 21 cards'})).toBeInTheDocument();
});
