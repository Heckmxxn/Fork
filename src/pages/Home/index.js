import React, { useEffect, useState } from 'react';

import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import { RecipeContainer, RecipePicture } from './styled';

export default function Receitas() {
  const [recipes, setRecipes] = useState([]);
  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('api/search?q=pizza');
      setRecipes(response.data.recipes);
    }
    getData();
  }, []);
  return (
    <Container>
      <h1>Recipes</h1>
      {recipes.map((recipe) => {
        <div key={String(recipe.title)}>{recipe.title}</div>;
      })}
    </Container>
  );
}
