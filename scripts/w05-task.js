/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
const templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    h3.innerText = temple.templeName;
    const image = document.createElement("image");
    image.src = temple.imageUrl;
    image.alt = temple.location;
    article.appendChild(h3);
    article.appendChild(image);
    templesElement.appendChild(article);
    })
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    const data = await response.json();
    templeList = data;
}

/* reset Function */


/* filterTemples Function */


getTemples();

/* Event Listener */
