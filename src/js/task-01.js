const items = document.querySelectorAll(".item");
const numberOfCategories = items.length;
console.log(`Number of categories: ${numberOfCategories}`);

items.forEach(function(item) {
   const category = item.firstElementChild;
   console.log(`Category: ${category.textContent}`);
   const categoryElements = item.children[1];
   const numberOfCatEl = categoryElements.children.length;
   console.log(`Elements: ${numberOfCatEl}`);
 })