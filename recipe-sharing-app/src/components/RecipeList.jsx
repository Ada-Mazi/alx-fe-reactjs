import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  useEffect(() => {
    filterRecipes();
  }, [searchTerm, recipes, filterRecipes]);

  const displayRecipes = searchTerm ? filteredRecipes : recipes;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Recipe List</h2>
      {displayRecipes.length === 0 ? (
        <p>No recipes found. Add some recipes to get started!</p>
      ) : (
        <div style={{ display: 'grid', gap: '20px' }}>
          {displayRecipes.map((recipe) => (
            <div
              key={recipe.id}
              style={{
                border: '1px solid #ddd',
                padding: '15px',
                borderRadius: '8px',
                backgroundColor: '#f9f9f9',
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

export default RecipeList;