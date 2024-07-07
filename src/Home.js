
const content=document.getElementById('content');
const home= document.createElement('div');
const banner= document.createElement('div');
banner.textContent=("Where flavor comes to life");
banner.classList.add('text-white','banner');

home.appendChild(banner);
home.classList.add('home')

export default home;