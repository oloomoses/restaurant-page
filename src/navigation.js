const nav = () => {
  const div = document.createElement('div');
  div.classList.add('navbar');

  const home = document.createElement('nav');
  home.classList.add('nav-item', 'home-nav');
  home.innerHTML = 'Home';

  const menu = document.createElement('nav');
  menu.classList.add('nav-item', 'menu-nav');
  menu.innerHTML = 'Menu';

  const contact = document.createElement('nav');
  contact.classList.add('nav-item', 'contact-nav');
  contact.innerHTML = 'Contact Us';

  div.appendChild(home);
  div.appendChild(menu);
  div.appendChild(contact);


  const content = document.querySelector('.content');
  const body = document.querySelector('body');

  return body.insertBefore(div, content);
};

export { nav as default };