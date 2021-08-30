import React, {useState, useEffect, Fragment} from 'react'
import { getData } from '../../scripts/NetworkFunctions'
import { useParams } from 'react-router-dom'

const RecipePage = () => {
    const [recipe, setRecipe] = useState(null)
    const {drinkId} = useParams()
    useEffect(() => {
        const requestType = `lookup.php?i=${drinkId}`
        getData(requestType).then(res => setRecipe(res.drinks[0]))
    }, [])
    return (
        <div>
            {recipe ? 
                <Fragment>
                    <img src={recipe.strDrinkThumb} />
                    <div>{recipe.strDrink}</div>
                    {recipe.strIngredient1 ?
                    <div>
                        {recipe.strIngredient1} : {recipe.strMeasure1}
                    </div>
                    : null}
                    {recipe.strIngredient2 ?
                    <div>
                        {recipe.strIngredient2} : {recipe.strMeasure2}
                    </div>
                    : null}
                    {recipe.strIngredient3 ?
                    <div>
                        {recipe.strIngredient3} : {recipe.strMeasure3}
                    </div>
                    : null}
                    {recipe.strIngredient4 ?
                    <div>
                        {recipe.strIngredient4} : {recipe.strMeasure4}
                    </div>
                    : null}
                    {recipe.strIngredient5 ?
                    <div>
                        {recipe.strIngredient5} : {recipe.strMeasure5}
                    </div>
                    : null}
                    {recipe.strIngredient6 ?
                    <div>
                        {recipe.strIngredient6} : {recipe.strMeasure6}
                    </div>
                    : null}
                    {recipe.strIngredient7 ?
                    <div>
                        {recipe.strIngredient7} : {recipe.strMeasure7}
                    </div>
                    : null}
                    {recipe.strIngredient8 ?
                    <div>
                        {recipe.strIngredient8} : {recipe.strMeasure8}
                    </div>
                    : null}
                    {recipe.strIngredient9 ?
                    <div>
                        {recipe.strIngredient9} : {recipe.strMeasure9}
                    </div>
                    : null}
                    {recipe.strIngredient10 ?
                    <div>
                        {recipe.strIngredient10} : {recipe.strMeasure10}
                    </div>
                    : null}
                    {recipe.strIngredient11 ?
                    <div>
                        {recipe.strIngredient11} : {recipe.strMeasure11}
                    </div>
                    : null}
                    {recipe.strIngredient12 ?
                    <div>
                        {recipe.strIngredient12} : {recipe.strMeasure12}
                    </div>
                    : null}
                    {recipe.strIngredient13 ?
                    <div>
                        {recipe.strIngredient13} : {recipe.strMeasure13}
                    </div>
                    : null}
                    {recipe.strIngredient14 ?
                    <div>
                        {recipe.strIngredient14} : {recipe.strMeasure14}
                    </div>
                    : null}
                    {recipe.strIngredient15 ?
                    <div>
                        {recipe.strIngredient15} : {recipe.strMeasure15}
                    </div>
                    : null}
                </Fragment>
                : null
            }
        </div>
    )
}

export default RecipePage
