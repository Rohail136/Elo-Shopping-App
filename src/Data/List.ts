import Rohail from '../assets/NewArrivalList/Rohail.jpeg'
import MenPolo from '../assets/NewArrivalList/MenPolo.jpg'
import MenShirt from '../assets/NewArrivalList/MenShirt.jpg'
import MenJacket from '../assets/NewArrivalList/MenJacket.jpg'
import WomenKurti from '../assets/NewArrivalList/WomenKurti.jpg'
import WomenSuit from '../assets/NewArrivalList/WomenSuit.jpg'
import WomenDress from '../assets/NewArrivalList/WomenDress.jpg'
import KidsRomper from '../assets/NewArrivalList/KidsRomper.jpeg'
import KidsTop from '../assets/NewArrivalList/KidsTop.jpg'
import KidsBottom from '../assets/NewArrivalList/KidsBottom.jpg'

export type List = { 
  id : string;
  title : string;
  Image : any ;
}

export const Lists : List [] =  [
  {id : '1', title : 'Men Polo ' , Image : MenPolo},
  {id : '2', title : 'Men Shirts' , Image : MenShirt},
  {id : '3', title : 'Men Jackets' , Image : MenJacket},
  {id : '4', title : 'Women Kurti' , Image : WomenKurti},
  {id : '5', title : 'Women Suits' , Image : WomenSuit},
  {id : '6', title : 'Women Dresses' , Image : WomenDress},
  {id : '7', title : 'Kids Rompers', Image : KidsRomper},
  {id : '8', title : 'Kids Tops' , Image : KidsTop},
  {id : '9', title : 'Kids Bottoms' , Image : KidsBottom},
]
