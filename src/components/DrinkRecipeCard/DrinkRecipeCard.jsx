import React from 'react'
import Styles from './DrinkRecipeCard.module.css';
// idDrink: "14588"
// strDrink: "151 Florida Bushwacker"
// strDrinkThumb:
const DrinkRecipeCard = ({drink}) => {
    return (
        <div className={Styles.main}>
            <img className={Styles.img} src={drink.strDrinkThumb} />
            <a href={`/#/recipe/${drink.idDrink}`}>
                <div className={Styles.title}>{drink.strDrink}</div>
            </a>
        </div>
    )
}

export default DrinkRecipeCard
