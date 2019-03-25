import React from "react";

const RecipeItem = ({ recipe }) => (
  <div className="col-sm-3 mt-4">
    <div className="card">
      <a href={recipe.href} target="_blank">
        <img className="card-img-top img-fluid" src={recipe.thumbnail} alt="" />
        <div className="card-body">
          <h5 className="card-title">{recipe.title}</h5>
          <p className="card-text">
            <strong>Ingredients: </strong>
            {recipe.ingredients}
          </p>
        </div>
      </a>
    </div>
  </div>
);

export default RecipeItem;
