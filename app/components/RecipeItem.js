import React from "react";
import { ThemeConsumer } from '../contexts/theme'

const RecipeItem=(getRecipes)=>{
    console.log(getRecipes.data)
    return(
        <ThemeConsumer>
        {({ theme }) => (
        <div className={`card bg-${theme}`}>
            <h4 className='header-lg center-text'>
            {getRecipes.data.recipe.label}
            </h4>
            <img
            className='avatar'
            src={getRecipes.data.recipe.images.SMALL.url}
            alt={`Image for ${getRecipes.data.recipe}`}
            />
            
            <h4 className='center-text capital'>
              {getRecipes.data.recipe.cuisineType}
            </h4>
            
            <div className="info">
                
            <p className="ingredients">{getRecipes.data.recipe.ingredients}</p>
            </div>
            <div className="recipe">
            <h4 className='center-text capital'>{getRecipes.data.recipe.mealType}</h4>
               
            <a href={getRecipes.data.recipe.url}>Read more...</a>
                
            </div>
        </div>
        )}
        </ThemeConsumer>
    )
}

export default RecipeItem;
