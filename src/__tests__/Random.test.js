import {render, screen} from '@testing-library/react';
import Random from '../components/Random';

describe ('Random.js tests', () => {
  test ('Check image from api', async () => {
    render (<Random />);
    const randomImage = await screen.findAllByRole ('img', {name: /drink$/i});
    expect (randomImage).toHaveLength (1);
  });

  test ('Check alt text of image from api', async () => {
    render (<Random />);
    const randomImage = await screen.findAllByRole ('img', {name: /drink$/i});
    const altText = randomImage.map (element => element.alt);
    expect (altText).toEqual (['drink']);
  });

  test ('Check text of Random text title', async () => {
    render (<Random />);
    const randomSelection = await screen.findByText (/Todays Random Selection/i);
    expect (randomSelection).toBeInTheDocument ();
  });

  test ('Check text of heading H4', async () => {
    render (<Random title='Tequila Sunrise'/>);
    const randomSelection = await screen.findByText ('Tequila Sunrise');
    expect (randomSelection).toBeInTheDocument ();
  });
});
