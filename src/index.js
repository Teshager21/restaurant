import './style.css'
import nav from './Nav';
import home from './Home';
import menu from './Menu';
console.log("hello webpack");

const content= document.querySelector('#content');

content.appendChild(nav)
content.appendChild(home);

const menuBtn=document.querySelector('#menu');
menuBtn.addEventListener('click',()=>{
    content.innerHTML='';
    content.append(nav);
    content.append(menu);
})

const homeBtn=document.querySelector('#home');
homeBtn.addEventListener('click',()=>{
    content.innerHTML='';
    content.append(nav);
    content.append(home);
})

