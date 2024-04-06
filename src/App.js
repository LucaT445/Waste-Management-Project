import './App.css';
import React, { useState } from 'react';
import SearchBar from './SearchBar'; 
import wasteData from './wasteData.json'; 

function App() {
  const [disposalMethod, setDisposalMethod] = useState('');

  const handleSearch = (searchTerm) => {
    const result = wasteData.find((data) => data.item.toLowerCase() === searchTerm.toLowerCase());
    setDisposalMethod(result ? result.method : "No disposal method found.");
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* You can remove the logo and other starter code that came with create-react-app */}
        <SearchBar onSearch={handleSearch} />
        <p>{disposalMethod}</p>
      </header>
    </div>
  );
}

export default App;

