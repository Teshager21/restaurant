import './style.css'
import nav from './Nav';
import home from './Home'
// import home from './assets/home.jpg'
// import hero from './assets/hero.jpg'
console.log("hello webpack")

const content= document.querySelector('#content');

content.appendChild(nav)
content.appendChild(home);
 
// console.log(nav)
// const title= document.createElement('h1')

// title.textContent="Hello Webpack";
// title.classList.add('text-white');

// content.appendChild(title);

