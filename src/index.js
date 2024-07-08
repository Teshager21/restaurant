import './style.css'
import nav from './Nav';
import home from './Home';
import menu from './Menu';
import background from './assets/home.jpg';

const content= document.querySelector('#content');

content.appendChild(nav)
content.appendChild(home);

const menuBtn=document.querySelector('#menu');
menuBtn.addEventListener('click',()=>{
    content.innerHTML='';
    content.append(nav);
    content.append(menu);
    document.body.style.background='none';
    // document.body.style.backgroundColor='black';
})

const homeBtn=document.querySelector('#home');
homeBtn.addEventListener('click',()=>{
    content.innerHTML='';
    content.append(nav);
    content.append(home);

    document.body.style.background=`url(${background})`;
    document.body.style.backgroundRepeat='no-repeat';
    document.body.style.backgroundSize='cover';
})

const reservationBtn=document.querySelector('#reservation');
reservationBtn.addEventListener('click',()=>{
    content.innerHTML='';
    content.append(nav);
    document.body.style.background='none';
})

const contactBtn=document.querySelector('#contact');
contactBtn.addEventListener('click',()=>{
    content.innerHTML='';
    content.append(nav);
    document.body.style.background='none';
})

const aboutBtn=document.querySelector('#about');
aboutBtn.addEventListener('click',()=>{
    content.innerHTML='';
    content.append(nav);
    document.body.style.background='none';
})



