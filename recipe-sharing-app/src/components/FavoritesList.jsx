import { Link } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);

  const favoriteRecipes = favorites
    .map((id) => recipes.find((recipe) => recipe.id === id))
    .filter((recipe) => recipe !== undefined);

  return (
    <div style={{ padding: '20px' }}>
      <h2>My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>
          You haven't added any favorites yet. Browse recipes and add them to
          your favorites!
        </p>
      ) : (
        <div style={{ display: 'grid', gap: '20px' }}>
          {favoriteRecipes.map((recipe) => (
            <div
              key={recipe.id}
              style={{
                border: '1px solid #ddd',
                padding: '15px',
                borderRadius: '8px',
                backgroundColor: '#fffbea',
              }}
            >
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <Link
                to={`/recipe/${recipe.id}`}
                style={{
                  color: '#007bff',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                }}
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesList;