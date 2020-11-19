import Img1 from './images/beef_veges.jpg';
import Img2 from './images/chicken.jpg';
import Img3 from './images/chorizo.jpg';
import Img4 from './images/coffee.jpg';
import Img5 from './images/milk.jpg';
import Img6 from './images/samosa.jpg';
import Img7 from './images/sausage.jpg';

const item1Img = new Image();
item1Img.src = Img1;
item1Img.classList.add('food-image')

const item2Img = new Image();
item2Img.src = Img2;
item2Img.classList.add('food-image')

const item3Img = new Image();
item3Img.src = Img3;
item3Img.classList.add('food-image')

const item4Img = new Image();
item4Img.src = Img4;
item4Img.classList.add('food-image')

const item5Img = new Image();
item5Img.src = Img5;
item5Img.classList.add('food-image')

const item6Img = new Image();
item6Img.src = Img6;
item6Img.classList.add('food-image')

const item7Img = new Image();
item7Img.src = Img7;
item7Img.classList.add('food-image')


const menuItems = [
  {
    itemName: 'this',
    price: '$10',
    itemImg: item1Img
  },

  {
    itemName: 'this',
    price: '$10',
    itemImg: item2Img
  },
  
  {
    itemName: 'this',
    price: '$10',
    itemImg: item3Img
  },
  
  {
    itemName: 'this',
    price: '$10',
    itemImg: item4Img
  },
  
  {
    itemName: 'this',
    price: '$10',
    itemImg: item5Img
  },
  
  {
    itemName: 'this',
    price: '$10',
    itemImg: item6Img
  },
  
  {
    itemName: 'this',
    price: '$10',
    itemImg: item7Img
  },
]

export const menu = () => {
  const content = document.querySelector('.content');
  const div = document.createElement('div');
  div.classList.add('items-container');
  

  menuItems.forEach((item) => {  
    const item_container = document.createElement('div');
    item_container.classList.add('item');  

    const food_name = document.createElement('div');
    food_name.classList.add('food');
    food_name.innerHTML = item.itemName

    const price = document.createElement('div');
    price.classList.add('price');
    price.innerHTML = item.price

    item_container.appendChild(item.itemImg);
    item_container.appendChild(food_name);
    item_container.appendChild(price);

    div.appendChild(item_container);
  }); 

  content.appendChild(div);
  return content  
}