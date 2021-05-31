import {rest} from 'msw';

export const handlers = [
  rest.get ('https://www.thecocktaildb.com/api/json/v1/1/random.php', (req, res, ctx) => {
      return res (
          ctx.json([
            {
                "idDrink": "13621",
                "strDrink": "Tequila Sunrise",
                "strDrinkAlternate": null,
                "strTags": "IBA,ContemporaryClassic",
                "strVideo": null,
                "strCategory": "Cocktail",
                "strIBA": "Contemporary Classics",
                "strAlcoholic": "Alcoholic",
                "strGlass": "Highball glass",
                "strInstructions": "Pour the tequila and orange juice into glass over ice. Add the grenadine, which will sink to the bottom. Stir gently to create the sunrise effect. Garnish and serve.",
                "strInstructionsES": null,
                "strInstructionsDE": "Den Tequila und den Orangensaft in ein Glas über Eis gießen. Füge die Grenadine hinzu, die auf den Boden sinken wird. Rühren Sie sanft um, um den Sonnenaufgangseffekt zu erzeugen. Garnieren und servieren.",
                "strInstructionsFR": null,
                "strInstructionsIT": "Versare la tequila e il succo d'arancia in un bicchiere con ghiaccio.\r\nAggiungere la granatina, che affonderà sul fondo.\r\nMescola delicatamente per creare l'effetto alba.\r\nGuarnire e servire.",
                "strInstructionsZH-HANS": null,
                "strInstructionsZH-HANT": null,
                "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/quqyqp1480879103.jpg",
                "strIngredient1": "Tequila",
                "strIngredient2": "Orange juice",
                "strIngredient3": "Grenadine",
                "strIngredient4": null,
                "strIngredient5": null,
                "strIngredient6": null,
                "strIngredient7": null,
                "strIngredient8": null,
                "strIngredient9": null,
                "strIngredient10": null,
                "strIngredient11": null,
                "strIngredient12": null,
                "strIngredient13": null,
                "strIngredient14": null,
                "strIngredient15": null,
                "strMeasure1": "2 measures ",
                "strMeasure2": null,
                "strMeasure3": null,
                "strMeasure4": null,
                "strMeasure5": null,
                "strMeasure6": null,
                "strMeasure7": null,
                "strMeasure8": null,
                "strMeasure9": null,
                "strMeasure10": null,
                "strMeasure11": null,
                "strMeasure12": null,
                "strMeasure13": null,
                "strMeasure14": null,
                "strMeasure15": null,
                "strImageSource": null,
                "strImageAttribution": null,
                "strCreativeCommonsConfirmed": "No",
                "dateModified": "2016-12-04 19:18:23"
                }
          ])
      );
  }),
];
