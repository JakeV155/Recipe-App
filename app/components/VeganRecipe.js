import 'regenerator-runtime/runtime'
import Loading from './Loading'
import Tooltip from './Tooltip'
import React, { useEffect, useState } from 'react'





const VeganRecipe = () => {
  const [ recipes , setVeganRecipes ] = useState([]);
  const [ search, setVeganSearch ] = useState('');
  const [ query , setVeganQuery ] = useState('')
  const [ loading , setLoading ] = useState(false)

  const id = '2d6f101f'
  const key = 'd2f1da4362e009d3013b1d73846b3186'
  const veganApiCall = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${id}&app_key=${key}&health=vegan&random=true`
  const burger = `https://api.edamam.com/api/recipes/v2?type=public&q=burger&app_id=${id}&app_key=${key}&health=vegan&random=true`
  const sandwich = `https://api.edamam.com/api/recipes/v2?type=public&q=sandwich&app_id=${id}&app_key=${key}&health=vegan&random=true`
  const ramen = `https://api.edamam.com/api/recipes/v2?type=public&q=ramen&app_id=${id}&app_key=${key}&health=vegan&random=true`
  const pizza = `https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=${id}&app_key=${key}&health=vegan&random=true`


useEffect( async () => {
  getVeganRecipes()
}, [query]);

const getVeganRecipes = async () => {
  const response = await fetch(veganApiCall);
  const data = await response.json();
  setVeganRecipes(data.hits);
  setLoading(true)
  console.log(data.hits)
};

const getVeganBurger = async () => {
  const response = await fetch(burger);
  const data = await response.json();
  setVeganRecipes(data.hits);
  console.log(data.hits)
};

const getVeganSandwich = async () => {
  const response = await fetch(sandwich);
  const data = await response.json();
  setVeganRecipes(data.hits);
  console.log(data.hits)
};

const getVeganRamen = async () => {
  const response = await fetch(ramen);
  const data = await response.json();
  setVeganRecipes(data.hits);
};

const getVeganPizza = async () => {
  const response = await fetch(pizza);
  const data = await response.json();
  setVeganRecipes(data.hits);
  console.log(data.hits)
};


const updateVeganSearch = e => {
  setVeganSearch(e.target.value);
}

const getSearch = e => {
  e.preventDefault();
  setVeganQuery(search);
  setVeganSearch('')
}



  return (
    <div className="App">
      <h1 className='flex-center marginAdjust'>
        <Tooltip text='Vegan ramen?!'>
        <div className='btn-clear' onClick={getVeganRamen}>🍜{'\u00A0'}{'\u00A0'}</div>
        </Tooltip>    
        <Tooltip text='Vegan sandwiches?!'>
        <div className='btn-clear' onClick={getVeganSandwich}>🥪{'\u00A0'}{'\u00A0'}</div>
        </Tooltip>Search Vegan Recipes<Tooltip text='Vegan burgers?!'><div className='btn-clear' 
        onClick={getVeganBurger}>{'\u00A0'}{'\u00A0'}🍔</div></Tooltip>
        <Tooltip text='Vegan pizza?!'>
        <div className='btn-clear' onClick={getVeganPizza}>{'\u00A0'}{'\u00A0'}🍕</div>
        </Tooltip>
      </h1>
      <h6 className='flex-center'>*Results are randomized*</h6>
      <form className='flex-center' onSubmit={getSearch}>
        <input className='searchBar' type='text' value={search} onChange={updateVeganSearch} placeholder='Enter a ingredient or dish'/>
        <button className='btn-clear nav-link searchButton' type='submit' >
          Search
        </button>
        <div className='space'></div>
      </form>
      {loading ? getVeganRecipes : <Loading/>}
      <div className="grid space-around">
      {recipes.map(getRecipe => (
        <VeganCards
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

export default VeganRecipe;
