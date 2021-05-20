import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Drinks Search', () => {
  render(<App />);
  const linkElement = screen.getByText(/Drinks search/i);
  expect(linkElement).toBeInTheDocument();
});

test('Mock Axios Api call', () => {
  render(<App />);
 
});
