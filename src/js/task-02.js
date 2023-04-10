const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(function(ingredient) {
  const ingredientMarkup = document.createElement("li");
  ingredientMarkup.textContent = `${ingredient}`;
  ingredientMarkup.classList.add("item");
  console.log(ingredientMarkup);
  const ingredientsList = document.querySelector("#ingredients");
  ingredientsList.appendChild(ingredientMarkup);
})
