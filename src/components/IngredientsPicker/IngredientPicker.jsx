import React, { useEffect, useState } from 'react'
import { getData } from '../../scripts/NetworkFunctions'

const IngredientPicker = ({pickIngredient}) => {
    const [ingredientsData, setIngredientsData] = useState(null)
    useEffect(() => {
        const requestType = 'list.php?i=list'
        getData(requestType).then(res => setIngredientsData(res))
    }, [])

    const handleSelectChange = (e) => {
        const ingredient = e.target.value
        pickIngredient(ingredient)
    }

    return (
        <div>
            <select onChange={handleSelectChange}> 
                <option>-Pick Your Poison-</option>
                {ingredientsData?.drinks?.map (drink => <option>{drink?.strIngredient1}</option>)}
            </select>
        </div>
    )
}

export default IngredientPicker
