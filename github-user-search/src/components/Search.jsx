import { useState } from 'react';
import { fetchUserData, searchUsers } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchMode, setSearchMode] = useState('basic');

  const handleBasicSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;
    setLoading(true);
    setError(false);
    setUserData(null);
    setSearchResults([]);
    try {
      const data = await fetchUserData(username);
      setUserData(data);
      setSearchMode('basic');
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleAdvancedSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim() && !location.trim() && !minRepos) return;
    setLoading(true);
    setError(false);
    setUserData(null);
    setSearchResults([]);
    try {
      const data = await searchUsers({ username, location, minRepos });
      setSearchResults(data.items || []);
      setSearchMode('advanced');
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">GitHub User Search</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Basic Search</h2>
        <form onSubmit={handleBasicSubmit}>
          <div className="flex gap-2">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter GitHub username"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium">
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Advanced Search</h2>
        <form onSubmit={handleAdvancedSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location (e.g., London)"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              value={minRepos}
              onChange={(e) => setMinRepos(e.target.value)}
              placeholder="Min Repositories"
              min="0"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button type="submit" className="w-full px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium">
            Advanced Search
          </button>
        </form>
      </div>

      {loading && <div className="text-center text-gray-600 py-8">Loading...</div>}
      {error && <div className="text-center text-red-600 py-8 bg-red-50 rounded-lg">Looks like we cant find the user</div>}

      {userData && searchMode === 'basic' && !loading && !error && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-4 mb-4">
            <img src={userData.avatar_url} alt={userData.login} className="w-20 h-20 rounded-full border-2 border-gray-200" />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{userData.name || userData.login}</h2>
              <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                @{userData.login}
              </a>
            </div>
          </div>
          {userData.bio && <p className="text-gray-700 mb-4">{userData.bio}</p>}
          {userData.location && <p className="text-gray-600 mb-2">📍 {userData.location}</p>}
          <div className="flex gap-4 text-sm text-gray-600">
            <span>👥 {userData.followers} followers</span>
            <span>📦 {userData.public_repos} repos</span>
          </div>
        </div>
      )}

      {searchResults.length > 0 && searchMode === 'advanced' && !loading && !error && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Found {searchResults.length} users</h2>
          {searchResults.map((user) => (
            <div key={user.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full border-2 border-gray-200" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">{user.login}</h3>
                  <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-sm">
                    View Profile →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {searchResults.length === 0 && searchMode === 'advanced' && !loading && !error && (
        <div className="text-center text-gray-600 py-8 bg-gray-50 rounded-lg">
          No users found matching your criteria
        </div>
      )}
    </div>
  );
}

export default Search;
