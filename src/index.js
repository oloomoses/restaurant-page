import { loadHome } from './home.js';
import './style.css';
import { nav } from './navigation';


document.addEventListener('DOMContentLoaded', () => {
  loadHome();
  nav();
});

