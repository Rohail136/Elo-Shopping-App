import kidsDress from '../assets/Home Flatlist/KidsDress.jpg'
import MenPoloShirt from '../assets/Home Flatlist/MenPoloShirt.jpg'
import WomenDress from '../assets/Home Flatlist/WomenDress.jpg'
import WomenKurti from '../assets/Home Flatlist/WomenKurti.jpg'
import MenShirt from '../assets/Home Flatlist/MenShirt.jpeg'
import PoloShirt1 from '../assets/Home Flatlist/PoloShirt1.jpg'
import MenPoloShirt2 from '../assets/Home Flatlist/MenPoloShirt2.jpeg'

export type Product = {
  id : string,
  title : string;
  Price : number;
  rating : number;
  stars : string;
  Image : any;
  category : string; 
}

export const products: Product [] = [
  { id: '1', title: 'Men Polo Shirts', Price : 1200, rating: 4.5, stars : '⭐⭐⭐⭐⭐', Image: MenPoloShirt2, category : 'Men'},
  { id: '2', title: 'Women Dress',  Price : 4200, rating: 3.5, stars : '⭐⭐⭐', Image: WomenDress, category : 'Women' },
  { id: '3', title: 'Women Kurti',  Price : 3500, rating: 5.5, stars : '⭐⭐⭐⭐⭐', Image: WomenKurti, category : 'Women' },
  { id: '4', title: 'Kids Dress',   Price : 2000, rating: 2.5, stars : '⭐⭐', Image: kidsDress, category : 'Kids' },
  { id: '5', title: 'Men Shirt',   Price : 1500,  rating: 3.0, stars : '⭐⭐⭐', Image: MenShirt, category : 'Men' },
]