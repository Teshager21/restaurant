'use strict'
const content=document.getElementById('content');
const nav= document.createElement('nav');
const navBrand= document.createElement('a');
const navLinks= document.createElement('ul');
const home= document.createElement('button').textContent="Home";
const menu= document.createElement('button');
const about= document.createElement('button');
const contact= document.createElement('button');
const reservation= document.createElement('button');

nav.appendChild(navBrand);
nav.appendChild(navLinks);
navLinks.appendChild(home);
navLinks.appendChild(menu);
navLinks.appendChild(about);
navLinks.appendChild(contact);
navLinks.appendChild(reservation);
