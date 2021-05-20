import {render, screen, fireEvent} from '@testing-library/react';
import Search from '../components/Search';

describe ('Search.js tests', () => {
  test ('Search button', () => {
    render (<Search />);
    const buttonElement = screen.getByRole ('button', {name: /Search/i});
    expect (buttonElement).toBeInTheDocument ();
  });

  test ('Search button to have class of btn', () => {
    render (<Search />);
    const buttonElement = screen.getByRole ('button', {name: /Search/i});
    expect (buttonElement).toHaveClass ('btn');
  });

  test ('Placeholder text for input for search', () => {
    render (<Search />);
    const buttonElement = screen.getByPlaceholderText (/Search/i);
    expect (buttonElement).toBeInTheDocument ();
  });
});
