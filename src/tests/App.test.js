import { render, screen } from '@testing-library/react';
import App from '../App';

describe ('App()', () => {
  it ('renders elements correctly', () => {
    render(<App />);

    expect(document.querySelector("#cards")).toBeInTheDocument();
    expect(screen.getByRole('button', {name: 'Full deck'})).toBeInTheDocument();
    expect(screen.getByRole('button', {name: 'Shuffle'})).toBeInTheDocument();
    expect(screen.getByRole('button', {name: 'Pick 21 cards'})).toBeInTheDocument();
  });
});
