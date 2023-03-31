// Search input
const searchButton = document.querySelector("#search-button");
const searchInput = document.querySelector("#search-input");



// const options = {
//   method: 'GET',
//   url: '/recipes/findByIngredients',
//   headers: {
// 		'X-RapidAPI-Key': '23eedc5010msh73229f3320afb98p120873jsna25635726417',
// 		'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
// 	}
//   // params: req.ingredients 
// };




// searchButton.addEventListener("click", function() {
//   const ingredients = searchInput.value.split(",");
//   options.params = {
//     query: ingredients,
//   };
//   axios.request(options)
//     .then(function (response) {
//       console.log(JSON.stringify(response.data));
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// });

// axios.request(options).then(function (response) {
//   console.log(JSON.stringify(response.data));
// }).catch(function (error) {
//   console.error(error);
// });

searchButton.addEventListener("click", function() {
  console.log("begining")
  const ingredients = searchInput.value;
  const query = `?ingredients=${ingredients}`; // Convert array of ingredients to comma-separated string
  // fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com${options.url}${query}&number=5&ignorePantry=true`, { // Include query string in URL
  //   method: options.method,
  //   headers: options.headers,
  // })
  //   .then(function (response) {
  //     console.log("middle")
  //     return response.json();
  //   })
  //   .then(function (data) {
  //     console.log("end")
  //     console.log(JSON.stringify(data));

  //     const recipes = data.map(recipe => {
  //       const title = recipe.title;
  //       const image = recipe.image;
  //       const missingIngredients = recipe.missedIngredients.map(ingredient => ingredient.name);
  //       return { title, image, missingIngredients };
  //     });

      document.location.assign(`/recipes/findByIngredients${query}&number=5&ignorePantry=true`)

      console.log(recipes)
    })
    .catch(function (error) {
      console.error(error);
    });
// });