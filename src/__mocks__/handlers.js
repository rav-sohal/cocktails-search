import {rest} from 'msw';

export const handlers = [
  // Handles a POST /login request
  rest.post ('https://www.thecocktaildb.com/api/json/v1/1/random.php', (req, res, ctx) => {
      return res (
          ctx.json([
              {idDrink: 'ttile', }, 
              {}
          ])
      )
  }),
  // Handles a GET /user request
  rest.get ('/user', null),
];
