import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';  // ← CHANGED!

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p>
          Add some recipes to your favorites to get personalized recommendations!
        </p>
      ) : (
        <div style={{ display: 'grid', gap: '20px' }}>
          {recommendations.map((recipe) => (
            <div
              key={recipe.id}
              style={{
                border: '1px solid #ddd',
                padding: '15px',
                borderRadius: '8px',
                backgroundColor: '#e7f3ff',
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
      <button
        onClick={generateRecommendations}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Refresh Recommendations
      </button>
    </div>
  );
};

export default RecommendationsList;