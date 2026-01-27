import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === parseInt(id))
  );

  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorite = favorites.includes(parseInt(id));

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFavorite(parseInt(id));
    } else {
      addFavorite(parseInt(id));
    }
  };

  if (!recipe) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Recipe Not Found</h2>
        <button
          onClick={() => navigate('/')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <button
        onClick={() => navigate('/')}
        style={{
          padding: '8px 16px',
          marginBottom: '20px',
          backgroundColor: '#6c757d',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        ← Back to Recipes
      </button>

      <div
        style={{
          border: '1px solid #ddd',
          padding: '20px',
          borderRadius: '8px',
          backgroundColor: '#fff',
        }}
      >
        <h1>{recipe.title}</h1>
        <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
          {recipe.description}
        </p>

        <button
          onClick={handleFavoriteToggle}
          style={{
            padding: '10px 20px',
            marginTop: '15px',
            backgroundColor: isFavorite ? '#ffc107' : '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          {isFavorite ? '★ Remove from Favorites' : '☆ Add to Favorites'}
        </button>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h2>Edit Recipe</h2>
        <EditRecipeForm recipe={recipe} />
      </div>

      <div style={{ marginTop: '30px' }}>
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>
    </div>
  );
};

export default RecipeDetails;