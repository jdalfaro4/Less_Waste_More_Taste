const router = require('express').Router();
const { SavedUserRecipes } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newSavedUserRecipes = await SavedUserRecipes.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newSavedUserRecipes);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const SavedUserRecipesData = await SavedUserRecipes.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!SavedUserRecipesData) {
      res.status(404).json({ message: 'No SavedUserRecipes found with this id!' });
      return;
    }

    res.status(200).json(SavedUserRecipesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
