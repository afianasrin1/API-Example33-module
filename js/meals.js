const loadMeals = (search) => {
  //   fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
  //   fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
  const url = ` https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};
const displayMeals = (meals) => {
  const mealContainer = document.getElementById("meal-container");
  mealContainer.innerHTML = ``; //empty korar janno website
  meals.forEach((meal) => {
    console.log(meal);
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("col");
    mealDiv.innerHTML = `
    <div onclick="loadMealDetail(${meal.idMeal})" class="card">
              <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">
                ${meal.strInstructions.slice(0 - 200)}
                </p>
              </div>
            </div>
    `;
    mealContainer.appendChild(mealDiv);
  });
};
const searchFood = () => {
  const searchfield = document.getElementById("search-field");
  const searchText = searchfield.value;
  loadMeals(searchText);
  searchfield.value = "";
};

//  kono ekta pic e click korle alada vabe details dekhabe ekhan theke start
const loadMealDetail = (idMeal) => {
  // console.log("get details of id", idMeal);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMealDetail(data.meals[0]));
};

const displayMealDetail = (meal) => {
  const detailContainer = document.getElementById("detail-Container");
  detailContainer.innerHTML = ``; //empty korar janno website
  const mealDiv = document.createElement("div");
  mealDiv.classList.add("cart");
  mealDiv.innerHTML = `
  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">  ${meal.strInstructions.slice(0 - 50)}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
 `;
  detailContainer.appendChild(mealDiv);
};
loadMeals("");
