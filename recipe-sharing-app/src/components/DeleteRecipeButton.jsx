import { useNavigate } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this recipe? This action cannot be undone.'
    );

    if (confirmDelete) {
      deleteRecipe(recipeId);
      alert('Recipe deleted successfully!');
      navigate('/');
    }
  };

  return (
    <button
      onClick={handleDelete}
      style={{
        padding: '10px 20px',
        backgroundColor: '#dc3545',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
      }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;