import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Main from '../components/Main';

describe ('<Main/>', () => {
  it('should not render the result before three rounds', () => {
    render(<Main />);

    const divElement = screen.getByText('In which row is your card?')
    expect(divElement).toBeInTheDocument();
  })

  it('renders the result after three rounds', () => {
    render(<Main />);
    userEvent.click(screen.getByRole('button', {name: "Row 1"}))
    userEvent.click(screen.getByRole('button', {name: "Row 2"}))
    userEvent.click(screen.getByRole('button', {name: "Row 3"}))
    
    const divElement = screen.getByText('Your card is:')
    expect(divElement).toBeInTheDocument();
  })
});

