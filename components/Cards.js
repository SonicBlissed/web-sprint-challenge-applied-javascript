// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
import axios from 'axios';
const entryPoint = document.querySelector('.card-container');
const articleArray = ["javascript", "bootstrap", "technology", "jquery", "node.js"];

function cardMaker(futureData){
    //elements
    const card = document.createElement('div');
    const headline = document.createElement('h2');
    const author = document.createElement('div');
    const imageContainer = document.createElement('div');
    const imageSRC = document.createElement('img');
    const name = document.createElement('span');
    //classes
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imageContainer.classList.add('imageContainer');
    imageSRC.classList.add('imageSRC');
    name.classList.add('name');
    //appends
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imageContainer);
    imageContainer.appendChild(imageSRC);
    author.appendChild(name);
    // entryPoint.appendChild(card);
    //contents
    headline.textContent = `Headline: ${futureData.data.articles}`;
    imageSRC.src = null;
    name.textContent = null;
    // event listeners
    // let cards = document.querySelector('.card-container');

    // cards.addEventListener('click', event => {
    // console.log();
// })
    return card;

}






axios
.get(`https://lambda-times-api.herokuapp.com/articles`)
.then((futureData) => {
    // console.log(futureData.data.articles.javascript[3]);
    console.log(futureData);
    const info = futureData.data.articles;
    info.forEach(info => {
        const card = cardMaker(`${info}`);
        entryPoint.append(card);

    });
    console.log(info);
    
})
.catch((err) => {
    debugger;
  })