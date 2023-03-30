
// Search input
const searchButton = document.querySelector("#search-button");
const searchInput = document.querySelector("#search-input");



const options = {
  method: 'GET',
  url: '/api/recipes/findByIngredients',
params: req.query 
};




searchButton.addEventListener("click", function() {
  const ingredients = searchInput.value.split(",");
  options.params = {
    query: ingredients,
  };
  axios.request(options)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.error(error);
    });
});

// axios.request(options).then(function (response) {
//   console.log(JSON.stringify(response.data));
// }).catch(function (error) {
//   console.error(error);
// });

