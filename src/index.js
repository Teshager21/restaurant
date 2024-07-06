import './style.css'
import hero from './assets/hero.jpg'
console.log("hello webpack");

const myHero= new Image();
myHero.src=hero;
document.body.appendChild(myHero);