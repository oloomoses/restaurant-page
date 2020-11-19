import { loadHome } from './home.js';
import './style.css';
import { nav } from './navigation';
import { menu } from './menu.js';


document.addEventListener('DOMContentLoaded', () => {
  // loadHome();
  menu()
  nav();
});

