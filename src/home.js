export const loadHome = () => {
  const content = document.querySelector('.content');
  const h1 = document.createElement('h1');
  h1.classList.add('header');
  h1.innerHTML = 'Welcome to our restaurant';
  const coverImg = document.createElement('img');
  coverImg.setAttribute('src', '../src/restaurant.jpg');
  coverImg.classList.add('coverImg');
  const homeParagraph = document.createElement('p');
  homeParagraph.classList.add('home-p');
  homeParagraph.innerHTML = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, deleniti dolores!<br>
  Veritatis aliquid doloremque libero corrupti illo incidunt magnam reprehenderit architecto.<br>
  Quo, vitae quos quam dolorum expedita rerum accusantium veritatis?`

  content.appendChild(h1);
  content.appendChild(coverImg);
  content.appendChild(homeParagraph);
  return content;
}