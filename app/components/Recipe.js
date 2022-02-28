import React from "react";
import { ThemeConsumer } from "../contexts/theme";


const Recipe = ({title, region, image, type, ingredients, readMore, query}) => {
    return(
        <ThemeConsumer>
        {({ theme }) => (        
        <div className={`card bg-${theme} `}>
            <img 
            className='avatar'
            src={image}
            alt={`Image for ${title}`}/> 
            <h1 className='header-lg center-text'>{title}</h1>
            <h3 className='center-text capital'>{region}</h3> 
            <div className="information">
                <ol>
                    {ingredients.map(ingredient => (
                        <li>{ingredient.text}</li>
                    ))}
                </ol>
            <h4 className='center-text capital'>{type}</h4>
            <div className='center-text'>
            <a href={readMore} target="_blank">Read more...</a>
            </div>
            </div>
        </div>
        )}
        </ThemeConsumer>
    );
}

export default Recipe;