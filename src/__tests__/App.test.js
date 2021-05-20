import {render, screen, fireEvent} from '@testing-library/react';
import App from '../App';

describe ('App.js tests', () => {
  test ('Drinks Link in Header', () => {
    render (<App />);
    const linkElement = screen.getByRole ('link', {name: /DRINKS/i});
    expect (linkElement).toBeInTheDocument ();
  });

  test ('Drinks search text in header', () => {
    render (<App />);
    const linkElement = screen.getByText (/Drinks search/i);
    expect (linkElement).toBeInTheDocument ();
  });

  test ('Search button trigger event', () => {
    render (<App />);
    const buttonElement = screen.getByRole ('button', {name: /Search/i});
    fireEvent.click(buttonElement);
    expect(buttonElement).toBeEnabled();
  });

  test ('Mock Axios Api call', () => {
    render (<App />);
  });
});
