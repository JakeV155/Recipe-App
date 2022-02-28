import 'regenerator-runtime/runtime'
import Loading from './Loading'
import Tooltip from './Tooltip'
import Recipe from './Recipe';
import React, { useEffect, useState } from 'react'






const RecipeApp = () => {
  const [ recipes , setRecipes ] = useState([]);
  const [ search, setSearch ] = useState('');
  const [ query , setQuery ] = useState('');
  const [ loading , setLoading ] = useState(false)

  const id = '2d6f101f'
  const key = 'd2f1da4362e009d3013b1d73846b3186'
  const apiCall = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${id}&app_key=${key}&imageSize=SMALL&random=true`
  const burger = `https://api.edamam.com/api/recipes/v2?type=public&q=burger&app_id=${id}&app_key=${key}&random=true`
  const sandwich = `https://api.edamam.com/api/recipes/v2?type=public&q=sandwich&app_id=${id}&app_key=${key}&random=true`
  const ramen = `https://api.edamam.com/api/recipes/v2?type=public&q=ramen&app_id=${id}&app_key=${key}&random=true`
  const pizza = `https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=${id}&app_key=${key}&random=true`



useEffect( async () => {
  getRecipes()
}, [query]);


const getRecipes = async () => {
  const response = await fetch(apiCall);
  const data = await response.json();
  setLoading(true)
  setRecipes(data.hits);
  console.log(data.hits)
};

const getBurger = async () => {
  const response = await fetch(burger);
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits)
};

const getSandwich = async () => {
  const response = await fetch(sandwich);
  const data = await response.json();
  setRecipes(data.hits);
};

const getRamen = async () => {
  const response = await fetch(ramen);
  const data = await response.json();
  setRecipes(data.hits);
};

const getPizza = async () => {
  const response = await fetch(pizza);
  const data = await response.json();
  setRecipes(data.hits);
};

const updateSearch = e => {
  setSearch(e.target.value);
}

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch('')
}



  return (
    <div className="App">
      <h1 className='flex-center marginAdjust'>
        <Tooltip text='Click me for ramen'>
        <div className='btn-clear' onClick={getRamen}>🍜{'\u00A0'}{'\u00A0'}</div>
        </Tooltip>        
        <Tooltip text='Click me for sandwiches'>
        <div className='btn-clear' onClick={getSandwich}>🥪{'\u00A0'}{'\u00A0'}</div>
        </Tooltip>Search A Recipe If You Dare<Tooltip text='Click me for burgers'><div className='btn-clear' 
        onClick={getBurger}>{'\u00A0'}{'\u00A0'}🍔</div></Tooltip>
        <Tooltip text='Click me for pizza'>
        <div className='btn-clear' onClick={getPizza}>{'\u00A0'}{'\u00A0'}🍕</div>
        </Tooltip>  
      </h1>
      <h6 className='flex-center'>*Results are randomized*</h6>
      <form className='flex-center' onSubmit={getSearch}>
        <input className='searchBar' type='text' value={search} onChange={updateSearch} placeholder='Enter a ingredient or dish'/>
        <button className='btn-clear nav-link searchButton' type='submit' >
          Search
        </button>
        <div className='space'></div>
      </form>
      {loading ? getRecipes : <Loading/>}
      <div className="grid space-around">
      {recipes.map(getRecipe => (
        <Recipe
        query={query}
        title={getRecipe.recipe.label}
        image={getRecipe.recipe.images.SMALL.url}
        region={getRecipe.recipe.cuisineType}
        type={getRecipe.recipe.mealType}
        key={getRecipe.recipe.uri}
        ingredients={getRecipe.recipe.ingredients}
        readMore={getRecipe.recipe.url}
        />
      ))}
      </div>
    </div>
  );
}

export default RecipeApp;
