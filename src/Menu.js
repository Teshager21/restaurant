import food1 from './assets/food1.jpg'
import food2 from './assets/food2.jpg'
import food3 from './assets/food3.jpg'
import food4 from './assets/food4.jpg'
import food5 from './assets/food5.jpg'

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
const card1=Card('Black Pepper Beef','Tender strips of steak, stir fried in a warming black pepper sauce with peppers and onions. A quick but luxurious dinner!',food1);
const card2=Card('Asian Steak and Peppers','This pepper steak stir fry is thinly sliced flank steak cooked with red and green bell peppers in a savory sauce. A quick and easy meal!',food2);
const card3=Card('Blackened Shrimp and Asparagus Skillet','These delicious blackened shrimp with asparagus are the perfect versatile and fast weeknight meal. Flavorful, juicy shrimp team up with crisp-tender a…',food3);
const card4=Card('Easy Grilled Thai Chicken Skewers','This Chicken Skewers recipe features grilled chicken marinated in ginger, garlic, coconut cream, and soy sauce for the best chicken skewers you’ve ever had!',food4);
const card5=Card('Delicious Food','What is going on in this world here is not clear not in any world',food5);
const card6=Card('Delicious Food','What is going on in this world here is not clear not in any world',food1);

menu.classList.add('menu');
menu.append(card1,card2,card3,card4,card5,card6);



export default menu;