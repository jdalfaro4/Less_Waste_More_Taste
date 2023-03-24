const User = require('./User');
const SavedUserRecipes = require('./recipe');

User.hasMany(SavedUserRecipes, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  SavedUserRecipes.belongsTo(User, {
    foreignKey: 'user_id'
  });


module.exports = { User, SavedUserRecipes };
