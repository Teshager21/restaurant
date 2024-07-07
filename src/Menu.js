import food1 from './assets/food1.jpg'
const menu=document.createElement('div');
const card=document.createElement('div');
card.classList.add('card');
const cardImage=document.createElement('img');
cardImage.src=food1;
cardImage.classList.add('card-img');
 console.log(cardImage);
const cardBody=document.createElement('div');
cardBody.classList.add('card-body')
const cardTitle=document.createElement('h5');
cardTitle.classList.add('card-title');
cardTitle.textContent='Delicious Food';
const cardText= document.createElement('p');
cardText.textContent='What is going on in this world here is not clear not in any world';
cardText.classList.add('card-text');
const cardButton=document.createElement('button');
cardButton.textContent="Add";
cardButton.classList.add('btn', 'btn-book','text-white','card-btn')


cardBody.append(cardTitle,cardText,cardButton);
card.append(cardImage,cardBody);
menu.append(card);
menu.classList.add('menu');

export default menu;