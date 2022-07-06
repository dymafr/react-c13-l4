import React from 'react';
import { useFetchData } from './hooks/useFetchData';

function App() {
  const {
    data: recipes,
    isLoading,
    error,
  } = useFetchData('https://restapi.fr/api/recipes');

  return (
    <div
      className="d-flex flex-row justify-content-center align-items-center"
      style={{ backgroundColor: '#fefefe', height: '100vh', width: '100%' }}
    >
      {isLoading ? (
        <p>Chargement ....</p>
      ) : (
        <ul>
          {recipes.map((r) => (
            <li key={r._id}>{r.title}</li>
          ))}
        </ul>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;
