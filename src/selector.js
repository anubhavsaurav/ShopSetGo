
import chickenKyiv from '@groceristar/recipes-methods'
import groceristar from '@groceristar/fetch-grocery-list'

function getGroceryById( id ) {
  return groceristar.getGroceryById(id);
}

function getFullGrocery( name ) {
  return groceristar.getGroceryByNameWithDepAndIngKey(name);
  // return groceristar.getGroceryByNameWithDepAndIng(name);
}

function getGroceryCollection(){
  return groceristar.getGroceryShowcase();
}

function getAllGrocery(){
  return groceristar.getAllGrocery();
}

// @TODO move out to fetch plugin?
function getGroceryDataFromId(id){

  // console.log(getGroceryById(id));
  let grocery     = getGroceryById(id)[0];
  let groceryName = grocery.name;
  let groceryWithDepAndIng = getFullGrocery(groceryName);

  return {
    'name': groceryName,
    'items': groceryWithDepAndIng
  };
}


//----------

function getRandomRecipe(){
  return chickenKyiv.getRandomRecipe()
}

function getFirstFiveRecipes(){
  return chickenKyiv.getFirstFiveRecipes();
}


function getShowcaseFiveRecipes(){
  return chickenKyiv.getShowcaseFiveRecipes();
}


function getFiveRandomIngredients(){
  return chickenKyiv.getFiveRandomIngredients();
}

//@TODO i don't like this name too
function getRecipeChickenKyivById(id) {
  return chickenKyiv.getRecipe()[id];
}

function getRecipes() {
  return chickenKyiv.getRecipe();
}

export {
  getGroceryById,
  getFullGrocery,
  getGroceryDataFromId,
  getGroceryCollection,
  getAllGrocery,


  getRandomRecipe,
  getFirstFiveRecipes,
  getFiveRandomIngredients,
  getRecipeChickenKyivById,
  getShowcaseFiveRecipes,
  getRecipes,


}
