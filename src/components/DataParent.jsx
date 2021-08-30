import React, { useEffect, useState } from 'react'
import { getData } from '../scripts/NetworkFunctions'

const DataParent = () => {
    const [ingredientsData, setIngredientsData] = useState(null)
    useEffect(() => {
        const requestType = 'list.php?i=list'
        getData(requestType).then(res => setIngredientsData(res))
    }, [])

    const [catData, setCatData] = useState(null)
    useEffect(() => {
        const requestType = 'list.php?c=list'
        getData(requestType).then(res => setCatData(res))
    }, [])

        return (
            <div>
                {/* {listData?.drinks?.map (drink => <div>{drink?.strIngredient1}</div>)} */}
                {catData?.drinks?.map (drink => <div>{drink?.strCategory}</div>)}
            </div>
        )
    }
export default DataParent