const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsArray = [];

ingredients.forEach(function(ingredient) {
  const ingredientMarkup = document.createElement("li");
  ingredientMarkup.textContent = `${ingredient}`;
  ingredientMarkup.classList.add("item");
  ingredientsArray.push(ingredientMarkup);
})

const ingredientsList = document.querySelector("#ingredients");
  ingredientsList.append(...ingredientsArray);
