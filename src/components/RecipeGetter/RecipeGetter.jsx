import React, { useState } from 'react'
import IngredientPicker from './../IngredientsPicker/IngredientPicker';
import { getData } from '../../scripts/NetworkFunctions';

const RecipeGetter = ({ingredient, storeRecipes}) => {
    const handleRequestRecipe = (e) => {
        e.preventDefault()
        const requestType = `filter.php?i=${ingredient}`
        getData(requestType).then(res => storeRecipes(res.drinks))
    }
    return (
        <div>
            {ingredient ? 
            <button onClick={handleRequestRecipe}>Get Recipe!</button>
            : <button disabled>Get Recipe!</button>
            }
        </div>
    )
}

export default RecipeGetter
