/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = `Cassie Escujuri`;
let currentYear = `2024`;
let profilePicture = `images/me.jpg`;

/* Step 3 - Element Variables */
const nameElement = document.getElementById(`name`);
const foodElement = document.getElementById(`food`);
const yearElement = document.querySelector(`#year`);
const imageElement = document.querySelector(`img`);

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.txtContent = `${currentYear}`;
imageElement.setAttribute(`src`, profilePicture);
imageElement.setAttribute(`alt`, `Profile image of ${fullName}`);

/* Step 5 - Array */
let favoriteFood = [`Sushi`, ` Tacos`, ` Peanut Butter`];
foodElement.innerText = `${favoriteFood}`;
let newFood = ` Wasabi Peas`;
favoriteFood.push(newFood);
foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.shift();
foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.pop();
foodElement.innerHTML += `<br>${favoriteFood}`;