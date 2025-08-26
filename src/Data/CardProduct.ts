import MenShirtCard from '../assets/MenCard/MenShirtCard.jpeg'
import MenPoloCard from '../assets/MenCard/MenPoloCard.jpg'
import MenDenimCard from '../assets/MenCard/MenDenimCard.jpg'
import MenCobarCard from '../assets/MenCard/MenCoberCard.jpg'

export type Card = {
  id : string;
  title : string,
  price : Number;
  rating : number;
  stars : string;
  Image : any;
  category : string;

}

export const Cards : Card[] = [
  { id : '1', title : 'Men Shirt Casual', price : 1800, rating: 3.9, stars : '⭐⭐⭐⭐', Image: MenShirtCard, category: 'Men'},
  { id : '2', title : 'Men Polo Shirt ', price : 2800, rating: 4.9, stars : '⭐⭐⭐⭐⭐', Image: MenPoloCard, category: 'Men'},
  { id : '3', title : 'Men Denim Shirt', price : 3000, rating: 3.9, stars : '⭐⭐⭐⭐', Image: MenDenimCard, category: 'Men'},
  { id : '4', title : 'Men Cubar Coller Shirt', price : 3500, rating: 3.9, stars : '⭐⭐⭐⭐', Image: MenCobarCard , category: 'Men'},
]