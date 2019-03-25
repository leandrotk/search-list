import React, { useState } from "react";
import Navbar from "./Navbar";
import RecipeItem from "./RecipeItem";
import recipesData from "../sample_data/recipes.json";

const App = props => {
  const [state, setState] = useState({ searchString: "" });
  const [recipes] = useState(recipesData.results);

  const getSearchString = value => setState({ searchString: value });

  const hasRecipeTitleSearchStringMatch = recipe =>
    recipe.title.toLowerCase().includes(state.searchString.toLowerCase());

  const hasRecipeIngredientsSearchStringMatch = recipe =>
    recipe.ingredients.toLowerCase().includes(state.searchString.toLowerCase());

  const notSearching = () => "" === state.searchString;

  const bySearchString = recipe =>
    hasRecipeTitleSearchStringMatch(recipe) ||
    hasRecipeIngredientsSearchStringMatch(recipe) ||
    notSearching();

  const buildRecipeItem = recipes =>
    recipes
      .filter(recipe => bySearchString(recipe))
      .map((recipe, index) => <RecipeItem key={index} recipe={recipe} />);

  return (
    <div className="App">
      <Navbar getSearchString={getSearchString} value={state.searchString} />
      <div className="container mt-10">
        <div className="row">{buildRecipeItem(recipes)}</div>
      </div>
      <div>aqui: {state.searchString}</div>
    </div>
  );
};

export default App;
