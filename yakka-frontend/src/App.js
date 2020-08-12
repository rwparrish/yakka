import React from 'react';
import './App.css';
import CategoriesContainer from './containers/CategoriesContainer';
import CategoryInput from './components/CategoryInput';

function App() {
  return (
    <div className="App">
      <h2>Create Category</h2>
        <CategoryInput/>
      <CategoriesContainer/>
      
    </div>
  );
}

export default App;
