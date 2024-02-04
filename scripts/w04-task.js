/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Cassie Escujuri",
    photo: "images/me.jpg",
    favoriteFoods: [
        "Peanut Butter",
        "Tacos",
        "Sushi",
        "Wasabi Peas",
        "Tiramisu"
    ],
    hobbies: [
        "Bicycling",
        "Writing",
        "Reading",
        "Running",
        "Weight-Lifting"
    ],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Provo, UT",
        length: "3 months"
    },
    {
        place: "Boise, ID",
        length: "5 years"
    },
    {
        place: "Rexburg, ID",
        length: "6 years"
    },
    {
        place: "Aberdeen, ID",
        length: "7 years"
    },
    {
        place: "Tremonton, UT",
        length: "2 years"
    },
    {
        place: "New Plymouth, ID",
        length: "2 years"
    },
    {
        place: "Vale, OR",
        length: "2 years"
    },
    {
        place: "San Dimas, CA",
        length: "6 years"
    },
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo;
document.querySelector("#photo").alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach (food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach (hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach (place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    document.querySelector("#places-lived").appendChild(dt);
    let dd = document.createElement("dd");
    dd.textContent = place.length;
    document.querySelector("#places-lived").appendChild(dd);
});