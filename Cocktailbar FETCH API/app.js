const API_ROOT = 'https://www.thecocktaildb.com/api/json/v1/1/';
const OUTPUT_CONTAINER = document.getElementById('drink-list');


document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    getCocktails();
  });

function getCocktails(type = "Alcoholic"){
    OUTPUT_CONTAINER.innerHTML = '';

    fetch(API_ROOT + 'filter.php?a=' + type)
        .then(response => 

            response.json()
        )
        .then(data => { 
            console.log(data)
            displayCocktailData(data.drinks);
        });

}

function displayCocktailData(drinks){
    drinks.forEach(drink => {
        const drinkCard = createCocktailHtmlElement(drink);
        
        //add event listener to card
        drinkCard.addEventListener('click', openDrinkDetail);

        OUTPUT_CONTAINER.appendChild(drinkCard);
    });
}

function createCocktailHtmlElement(drink){
    const cocktailCard = document.createElement('div');
    cocktailCard.classList.add('card');
    cocktailCard.dataset.drinkId = drink.idDrink;

    const titleElement = document.createElement('p');
    titleElement.innerText = drink.strDrink;

    cocktailCard.appendChild(titleElement);
    
    return cocktailCard;

}

function openDrinkDetail(){
    console.log('Cocktail clicked with id:' + this.dataset.drinkId);
    
    //get drink details
    fetch(API_ROOT + 'lookup.php?i=' + this.dataset.drinkId)
    .then(response => 
        response.json()
    )
    .then(data => { 
        setDrinkDetailData(data.drinks[0]);
    });
}


function setDrinkDetailData(drink){
    console.log(drink);

    document.getElementById('drink-name').innerText = drink.strDrink;
    document.getElementById('drink-category').innerText = drink.strCategory;
    document.getElementById('drink-alcoholic').innerText = drink.strAlcoholic;
    document.getElementById('drink-image').src = drink.strDrinkThumb;

    const drinkIngredientsElement = document.getElementById('drink-ingredients');
    drinkIngredientsElement.innerHTML = '';
    getIngrediendsWithMeasure(drink).forEach(ingredient => {
        let ingredientItem = document.createElement('li');
        ingredientItem.innerText = ingredient;
        drinkIngredientsElement.appendChild(ingredientItem);
    });

    document.getElementById('drink-instructions').innerText = drink.strInstructions;
    document.getElementById('drink-glass').innerText = drink.strGlass;

    document.getElementById('drink-detail').style.display = 'inline';
}


function getIngrediendsWithMeasure(drink){
    let ingredientsArray = [];

    Object.keys(drink).forEach(key => {
        if(key.startsWith('strIngredient') && drink[key] != null){
            ingredientsArray.push(drink[key]);
        }
    });

    console.log(ingredientsArray);
    return ingredientsArray;
}


document.getElementById('filter-button').addEventListener('click', getFilteredCocktails);

function getFilteredCocktails(){
    const filterValue = document.getElementById('filter-alcoholic').value;

    getCocktails(filterValue);
}