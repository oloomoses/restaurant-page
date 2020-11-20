import { loadHome } from './home.js';
import './style.css';
import { nav } from './navigation';
import { menu } from './menu.js'
import { contact } from './contact.js';


document.addEventListener('DOMContentLoaded', () => {
  loadHome();
  nav();
});

document.addEventListener('click', (e) => {
  let content = document.querySelector('.content');
  if(e.target.classList.contains('home-nav')){
    content.innerHTML = '';
    loadHome();
  }else if(e.target.classList.contains('menu-nav')){
    content.innerHTML = '';
    menu();
  }else if(e.target.classList.contains('contact-nav')){
    content.innerHTML = '';
    contact();
  }

});

