'use strict'
const nav= document.createElement('nav');
const navBrand= document.createElement('a');
const navLinks= document.createElement('ul');
const home= document.createElement('button');
const menu= document.createElement('button');
const about= document.createElement('button');
const contact= document.createElement('button');
const reservation= document.createElement('button');
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

nav.appendChild(navBrand);
nav.classList.add('navbar')
navLinks.appendChild(home);
navLinks.appendChild(menu);
navLinks.appendChild(about);
navLinks.appendChild(contact);
navLinks.appendChild(reservation);
nav.appendChild(navLinks);
navLinks.addEventListener('mouseover',(e)=>{
    // e.target.classList.add('nav-links-hovered');
    let navs= navLinks.children;
    for(let i=0;i<navs.length;i++) {
        navs[i].classList.remove('nav-links-hover');
    }
    e.target.classList.add('nav-links-hover');
})

export default nav;
