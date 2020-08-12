import React from 'react';
import './App.css';
import CategoriesContainer from './containers/CategoriesContainer';
import CategoryInput from './components/CategoryInput';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h2>Create Category</h2>
        <CategoriesContainer/>
      
    </div>
  );
}

export default App;
