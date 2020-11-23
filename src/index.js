import loadHome from './home';
import './style.css';
import nav from './navigation';
import menu from './menu';
import contact from './contact';


document.addEventListener('DOMContentLoaded', () => {
  loadHome();
  nav();
});

document.addEventListener('click', (e) => {
  const content = document.querySelector('.content');
  if (e.target.classList.contains('home-nav')) {
    content.innerHTML = '';
    loadHome();
  } else if (e.target.classList.contains('menu-nav')) {
    content.innerHTML = '';
    menu();
  } else if (e.target.classList.contains('contact-nav')) {
    content.innerHTML = '';
    contact();
  }
});
