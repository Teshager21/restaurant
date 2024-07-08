import food1 from './assets/food1.jpg'
const menu=document.createElement('div');

const Card=(title,text,url)=>{
    const card=document.createElement('div');
    card.classList.add('card');
    const cardImage=document.createElement('img');
    cardImage.src=url;
    cardImage.classList.add('card-img');
     console.log(cardImage);
    const cardBody=document.createElement('div');
    cardBody.classList.add('card-body')
    const cardTitle=document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent=title;
    const cardText= document.createElement('p');
    cardText.textContent=text;
    cardText.classList.add('card-text');
    const cardButton=document.createElement('button');
    cardButton.textContent="Add";
    cardButton.classList.add('btn', 'btn-book','text-white','card-btn')
    cardBody.append(cardTitle,cardText,cardButton);
    card.append(cardImage,cardBody);;
    cardButton.classList.add('btn', 'btn-book','text-white','card-btn')
    cardBody.append(cardTitle,cardText,cardButton);
    card.append(cardImage,cardBody);
    return card;
}
const card1=Card('Delicious Food','What is going on in this world here is not clear not in any world',food1);
const card2=Card('Delicious Food','What is going on in this world here is not clear not in any world',food1);
const card3=Card('Delicious Food','What is going on in this world here is not clear not in any world',food1);
const card4=Card('Delicious Food','What is going on in this world here is not clear not in any world',food1);
const card5=Card('Delicious Food','What is going on in this world here is not clear not in any world',food1);
const card6=Card('Delicious Food','What is going on in this world here is not clear not in any world',food1);

menu.classList.add('menu');
menu.append(card1,card2,card3,card4,card5,card6);



export default menu;