import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header style={{ 
          backgroundColor: '#282c34', 
          padding: '20px', 
          color: 'white',
          marginBottom: '20px'
        }}>
          <h1>🍳 Recipe Sharing Application</h1>
          <nav style={{ marginTop: '15px' }}>
            <Link to="/" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>
              Home
            </Link>
            <Link to="/favorites" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>
              Favorites
            </Link>
            <Link to="/recommendations" style={{ color: 'white', textDecoration: 'none' }}>
              Recommendations
            </Link>
          </nav>
        </header>

        <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SearchBar />
                  <AddRecipeForm />
                  <RecipeList />
                </>
              }
            />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="/favorites" element={<FavoritesList />} />
            <Route path="/recommendations" element={<RecommendationsList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;