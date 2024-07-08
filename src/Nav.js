'use strict'
const nav= document.createElement('nav');
const navBrand= document.createElement('a');
const navLinks= document.createElement('ul');
const home= document.createElement('button');
home.setAttribute('id','home');
const menu= document.createElement('button');
menu.setAttribute('id','menu');
const about= document.createElement('button');
about.setAttribute('id','about');
const contact= document.createElement('button');
contact.setAttribute('id','contact');
const reservation= document.createElement('button');
reservation.setAttribute('id','reservation');
navBrand.textContent="Gourmet"
home.textContent="Home";
menu.textContent="Menu";
about.textContent="About Us";
contact.textContent="Contact Us";
reservation.textContent="Book a Table";
home.classList.add('text-white','btn');
menu.classList.add('text-white','btn');
contact.classList.add('text-white','btn');
about.classList.add('text-white','btn');
navBrand.classList.add('text-white',"btn","nav-brand");
reservation.classList.add('text-white',"btn","btn-book");
navLinks.classList.add('nav-links')

nav.classList.add('navbar')
navLinks.append(home,menu,about,contact,reservation);
nav.append(navBrand,navLinks);
navLinks.addEventListener('mouseover',(e)=>{
    let navs= navLinks.children;
    for(let i=0;i<navs.length;i++) {
        navs[i].classList.remove('nav-links-hover');
    }
    e.target.classList.add('nav-links-hover');
})

export default nav;
