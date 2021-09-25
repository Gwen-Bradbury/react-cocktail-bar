import React, {useState} from 'react'
import './App.css';
import DrinkRecipeCard from './components/DrinkRecipeCard/DrinkRecipeCard';
import IngredientPicker from './components/IngredientsPicker/IngredientPicker';
import RecipeGetter from './components/RecipeGetter/RecipeGetter';

function App() {
  const [pickedIngredient, setPickedIngredient] = useState(null)
  const [recipes, setRecipes] = useState([])
  return (
    <div className="container">
      <div className="App">
        <div className ="Picker">
          <IngredientPicker pickIngredient = {setPickedIngredient} />
          <RecipeGetter ingredient = {pickedIngredient} storeRecipes = {setRecipes} />
        </div>
        <div className='drink-grid'>
          {recipes.map(recipe => (
            <DrinkRecipeCard drink = {recipe}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
