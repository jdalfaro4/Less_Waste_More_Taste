const RecipeAPI = require('./recipe')

const asyncApiCall = async () => {
    const response = await RecipeAPI.getCompatibility('/')

    console.log(response.data.data.Compatibility.heading)
    console.log(response.data.data.Compatibility)
}

asyncApiCall()