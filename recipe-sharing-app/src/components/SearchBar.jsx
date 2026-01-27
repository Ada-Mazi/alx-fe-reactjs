import useRecipeStore from '../store/recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          padding: '12px 20px',
          fontSize: '16px',
          borderRadius: '4px',
          border: '1px solid #ddd',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      />
      {searchTerm && (
        <p style={{ marginTop: '10px', color: '#666' }}>
          Searching for: <strong>{searchTerm}</strong>
        </p>
      )}
    </div>
  );
};

export default SearchBar;