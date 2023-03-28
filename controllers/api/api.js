const axios = require("axios");
require("dotenv").config();

// Search input
const searhcedInput = document.querySelector("#searchedInput");

const options = {
  method: 'GET',
  url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients',
  params: {
    ingredients: 'beef, ramen, tortillas',
    number: '5',
    ignorePantry: 'true',
    ranking: '1'
  },
  headers: {
    'X-RapidAPI-Key' : process.env.RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
  }
};

// Search input function
function formatEndPoint (searhcedInput) {
  const words = str.split('');
  const result = words.join(',');
  return result;
};

axios.request(options).then(function (response) {
	console.log(JSON.stringify(response.data));
}).catch(function (error) {
	console.error(error);
});

