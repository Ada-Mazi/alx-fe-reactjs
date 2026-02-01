import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;
    setLoading(true);
    setError(false);
    setUserData(null);
    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">GitHub User Search</h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-2">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Search
          </button>
        </div>
      </form>
      {loading && <div className="text-center text-gray-600">Loading...</div>}
      {error && <div className="text-center text-red-600">Looks like we cant find the user</div>}
      {userData && !loading && !error && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-4 mb-4">
            <img src={userData.avatar_url} alt={userData.login} className="w-20 h-20 rounded-full" />
            <div>
              <h2 className="text-2xl font-bold">{userData.name || userData.login}</h2>
              <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                @{userData.login}
              </a>
            </div>
          </div>
          {userData.bio && <p className="text-gray-700 mb-4">{userData.bio}</p>}
          <div className="flex gap-4 text-sm text-gray-600">
            <span>👥 {userData.followers} followers</span>
            <span>📦 {userData.public_repos} repos</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
