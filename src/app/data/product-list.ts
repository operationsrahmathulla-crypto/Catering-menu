import { Product } from "./product";

export const PRODUCT_LIST: Product[] = [
  // Breads
  { id: 1, name: 'Parotta', image: 'assets/images/products-img/mango.jpeg', category: 'Catering', subcategory: 'Breads' },
  { id: 2, name: 'Arippathiri', image: 'assets/images/products-img/pineapple.jpeg', category: 'Catering', subcategory: 'Breads' },
  { id: 3, name: 'Chappathi', image: 'assets/images/products-img/passionfruit.jpeg', category: 'Catering', subcategory: 'Breads' },
  { id: 4, name: 'Veeshappam', image: 'assets/images/products-img/apple.jpeg', category: 'Catering', subcategory: 'Breads' },
  { id: 5, name: 'Appam', image: 'assets/images/products-img/guava.jpg', category: 'Catering', subcategory: 'Breads' },
  { id: 6, name: 'Idiyappam', image: 'assets/images/products-img/carrot.jpeg', category: 'Catering', subcategory: 'Breads' },
  { id: 7, name: 'Dosa', image: 'assets/images/products-img/beetroot.jpeg', category: 'Catering', subcategory: 'Breads' },
  { id: 8, name: 'Masala Dosa', image: 'assets/images/products-img/mintlime.webp', category: 'Catering', subcategory: 'Breads' },
  { id: 9, name: 'Chirattaputtu', image: 'assets/images/products-img/gingerlime.jpeg', category: 'Catering', subcategory: 'Breads' },
  { id: 10, name: 'Ghee Roast', image: 'assets/images/products-img/mixedfruits.webp', category: 'Catering', subcategory: 'Breads' },
  { id: 11, name: 'Oratty', image: 'assets/images/products-img/shamam.jpeg', category: 'Catering', subcategory: 'Breads' },
  { id: 12, name: 'Poori', image: 'assets/images/products-img/grape.jpeg', category: 'Catering', subcategory: 'Breads' },
  { id: 13, name: 'Battoori', image: 'assets/images/products-img/papaya.jpeg', category: 'Catering', subcategory: 'Breads' },
  { id: 14, name: 'Palappam', image: 'assets/images/products-img/mangopassion.jpeg', category: 'Catering', subcategory: 'Breads' },
  { id: 15, name: 'Romali Rotty', image: 'assets/images/products-img/mojito.jpeg', category: 'Catering', subcategory: 'Breads' },
  //chicken
   { id: 16, name: 'Chicken Roast', image: 'assets/images/products-img/chickenRoast.jpg', category: 'Catering', subcategory: 'Chicken' },
  { id: 17, name: 'Chicken Fry', image: 'assets/images/products-img/chickenFry.jpg', category: 'Catering', subcategory: 'Chicken' },
  { id: 18, name: 'Chicken Masala', image: 'assets/images/products-img/chickenmasala.jpg', category: 'Catering', subcategory: 'Chicken' },
  { id: 19, name: 'Chicken Chilli', image: 'assets/images/products-img/chickenChilly.jpg', category: 'Catering', subcategory: 'Chicken' },
  { id: 20, name: 'Chicken Stew', image: 'assets/images/products-img/chickenstew.jpg', category: 'Catering', subcategory: 'Chicken' },
  { id: 21, name: 'Chicken Chaps', image: 'assets/images/products-img/chickenchaps.jpg', category: 'Catering', subcategory: 'Chicken' },
  { id: 22, name: 'Chicken 65', image: 'assets/images/products-img/chicken-65.jpg', category: 'Catering', subcategory: 'Chicken' },
  { id: 23, name: 'Chicken Garlic', image: 'assets/images/products-img/Chicken-Garlic.jpg', category: 'Catering', subcategory: 'Chicken' },
  { id: 24, name: 'Chicken Pepper', image: 'assets/images/products-img/chickenpepper.webp', category: 'Catering', subcategory: 'Chicken' },
  { id: 25, name: 'Chicken Ginger', image: 'assets/images/products-img/ginger-chicken.jpg', category: 'Catering', subcategory: 'Chicken' },
  { id: 26, name: 'Chicken Kuruma', image: 'assets/images/products-img/Chicken-Korma.jpg', category: 'Catering', subcategory: 'Chicken' },
 
  // Rice items
  { id: 27, name: 'Chicken Biriyani', image: 'assets/images/products-img/fishfinger.webp', category: 'Catering', subcategory: 'Rice Items' },
  { id: 28, name: 'Mutton Biriyani', image: 'assets/images/products-img/chickenspring.jpeg', category: 'Catering', subcategory: 'Rice Items' },
  { id: 29, name: 'Beef Biriyani', image: 'assets/images/products-img/chickensamosa.jpeg', category: 'Catering', subcategory: 'Rice Items' },
  { id: 30, name: 'Fish Biriyani', image: 'assets/images/products-img/nuggets.jpeg', category: 'Catering', subcategory: 'Rice Items' },
  { id: 31, name: 'Thalassery Dum Biriyani', image: 'assets/images/products-img/chickenpops.jpeg', category: 'Catering', subcategory: 'Rice Items' },
  { id: 32, name: 'Fried Rice', image: 'assets/images/products-img/fishpop.jpeg', category: 'Catering', subcategory: 'Rice Items' },
  { id: 33, name: 'Chicken Rice', image: 'assets/images/products-img/potataopops.jpeg', category: 'Catering', subcategory: 'Rice Items' },
  { id: 34, name: 'Mutton Rice', image: 'assets/images/products-img/vegsamosa.jpeg', category: 'Catering', subcategory: 'Rice Items' },
  { id: 35, name: 'Mixed Fried Rice', image: 'assets/images/products-img/vegcutlet.jpeg', category: 'Catering', subcategory: 'Rice Items' },
  { id: 36, name: 'Vegetable Rice', image: 'assets/images/products-img/vegfinger.jpeg', category: 'Catering', subcategory: 'Rice Items' },
  { id: 37, name: 'Egg Fried Rice', image: 'assets/images/products-img/butterflyshrimps.jpg', category: 'Catering', subcategory: 'Rice Items' },
  { id: 38, name: 'Prawn Fried Rice', image: 'assets/images/products-img/lollipop.jpeg', category: 'Catering', subcategory: 'Rice Items' },
  { id: 39, name: 'Beef Fried Rice', image: 'assets/images/products-img/rings.jpeg', category: 'Catering', subcategory: 'Rice Items' },
  //vegetable
  { id: 40, name: 'Kuruma', image: 'assets/images/products-img/fishfinger.webp', category: 'Catering', subcategory: 'Vegetable' },
  { id: 41, name: 'Mixed Vegetable', image: 'assets/images/products-img/chickenspring.jpeg', category: 'Catering', subcategory: 'Vegetable' },
  { id: 42, name: 'Gopi Manjuri', image: 'assets/images/products-img/chickensamosa.jpeg', category: 'Catering', subcategory: 'Vegetable' },
  { id: 43, name: 'Cauliflower Chaps', image: 'assets/images/products-img/nuggets.jpeg', category: 'Catering', subcategory: 'Vegetable' },
  { id: 44, name: 'Vagatable Chaps', image: 'assets/images/products-img/chickenpops.jpeg', category: 'Catering', subcategory: 'Vegetable' },
  { id: 45, name: 'Stew', image: 'assets/images/products-img/fishpop.jpeg', category: 'Catering', subcategory: 'Vegetable' },
  { id: 46, name: 'Paneer Tikka', image: 'assets/images/products-img/potataopops.jpeg', category: 'Catering', subcategory: 'Vegetable' },
  { id: 47, name: 'Paneer Masala', image: 'assets/images/products-img/vegsamosa.jpeg', category: 'Catering', subcategory: 'Vegetable' },
  { id: 48, name: 'Palak Paneer', image: 'assets/images/products-img/vegcutlet.jpeg', category: 'Catering', subcategory: 'Vegetable' },
  { id: 49, name: 'Butter Paneer Masala', image: 'assets/images/products-img/vegfinger.jpeg', category: 'Catering', subcategory: 'Vegetable' },


  //beef
  { id: 50, name: 'Beef Curry', image: 'assets/images/products-img/fishfinger.webp', category: 'Catering', subcategory: 'Beef' },
  { id: 51, name: 'Beef Roast', image: 'assets/images/products-img/chickenspring.jpeg', category: 'Catering', subcategory: 'Beef' },
  { id: 52, name: 'Beef Masala', image: 'assets/images/products-img/chickensamosa.jpeg', category: 'Catering', subcategory: 'Beef' },
  { id: 53, name: 'Beef Stew', image: 'assets/images/products-img/nuggets.jpeg', category: 'Catering', subcategory: 'Beef' },
  { id: 54, name: 'Beef Chaps', image: 'assets/images/products-img/chickenpops.jpeg', category: 'Catering', subcategory: 'Beef' },
  { id: 55, name: 'Beef Kuruma', image: 'assets/images/products-img/fishpop.jpeg', category: 'Catering', subcategory: 'Beef' },
  { id: 56, name: 'Beef Fry', image: 'assets/images/products-img/potataopops.jpeg', category: 'Catering', subcategory: 'Beef' },
  { id: 57, name: 'Beef Chilly', image: 'assets/images/products-img/vegsamosa.jpeg', category: 'Catering', subcategory: 'Beef' },
  { id: 58, name: 'Beef Ulathiyath', image: 'assets/images/products-img/vegcutlet.jpeg', category: 'Catering', subcategory: 'Beef' },

  //fish
  { id:59, name: 'Fish Moly', image: 'assets/images/products-img/fishpop.jpeg', category: 'Catering', subcategory: 'Fish' },
  { id:60, name: 'Fish Pickle', image: 'assets/images/products-img/potataopops.jpeg', category: 'Catering', subcategory: 'Fish' },
  { id:61, name: 'Fish Curry', image: 'assets/images/products-img/vegsamosa.jpeg', category: 'Catering', subcategory: 'Fish' },
  { id:62, name: 'Fish Fry', image: 'assets/images/products-img/vegcutlet.jpeg', category: 'Catering', subcategory: 'Fish' },
  { id:63, name: 'Fish Chilly', image: 'assets/images/products-img/vegfinger.jpeg', category: 'Catering', subcategory: 'Fish' },
  { id:64, name: 'Fish Roast', image: 'assets/images/products-img/vegfinger.jpeg', category: 'Catering', subcategory: 'Fish' },
  { id:65, name: 'Fish Thoran', image: 'assets/images/products-img/vegfinger.jpeg', category: 'Catering', subcategory: 'Fish' },
  { id:66, name: 'Kappa', image: 'assets/images/products-img/vegfinger.jpeg', category: 'Catering', subcategory: 'Fish' },
  { id:67, name: 'Curry', image: 'assets/images/products-img/vegfinger.jpeg', category: 'Catering', subcategory: 'Fish' },



  //Salad
  { id: 68, name: 'Vegetable Salad', image: 'assets/images/products-img/unnakkaya.jpeg', category: 'Catering', subcategory: 'Salad' },
  { id: 69, name: 'Curd Salad', image: 'assets/images/products-img/carrotpolla.jpeg', category: 'Catering', subcategory: 'Salad' },
  { id: 70, name: 'Green Salad', image: 'assets/images/products-img/muttapolla.jpg', category: 'Catering', subcategory: 'Salad' },
  //thattukada
  { id: 71, name: 'Tea', image: 'assets/images/products-img/fishfinger.webp', category: 'Catering', subcategory: 'Thattukada' },
  { id: 72, name: 'Coffee', image: 'assets/images/products-img/chickenspring.jpeg', category: 'Catering', subcategory: 'Thattukada' },
  { id: 73, name: 'Black Tea', image: 'assets/images/products-img/chickensamosa.jpeg', category: 'Catering', subcategory: 'Thattukada' },
  { id: 74, name: 'Kappa', image: 'assets/images/products-img/nuggets.jpeg', category: 'Catering', subcategory: 'Thattukada' },
  { id: 75, name: 'Fish Curry', image: 'assets/images/products-img/chickenpops.jpeg', category: 'Catering', subcategory: 'Thattukada' },
  { id: 76, name: 'Pazhampori', image: 'assets/images/products-img/fishpop.jpeg', category: 'Catering', subcategory: 'Thattukada' },
  { id: 77, name: 'Kai Bajji', image: 'assets/images/products-img/potataopops.jpeg', category: 'Catering', subcategory: 'Thattukada' },
  { id: 78, name: 'Vada', image: 'assets/images/products-img/vegsamosa.jpeg', category: 'Catering', subcategory: 'Thattukada' },
  { id: 79, name: 'Unniyappam', image: 'assets/images/products-img/vegcutlet.jpeg', category: 'Catering', subcategory: 'Thattukada' },
  { id: 80, name: 'Halwa', image: 'assets/images/products-img/vegfinger.jpeg', category: 'Catering', subcategory: 'Thattukada' },
  { id: 81, name: 'Kinnathappam', image: 'assets/images/products-img/butterflyshrimps.jpg', category: 'Catering', subcategory: 'Thattukada' },
  { id: 82, name: 'Cake', image: 'assets/images/products-img/lollipop.jpeg', category: 'Catering', subcategory: 'Thattukada' },
  { id: 83, name: 'Lemon', image: 'assets/images/products-img/rings.jpeg', category: 'Catering', subcategory: 'Thattukada' },

  { id: 84, name: 'Mango', image: 'assets/images/products-img/fishfinger.webp', category: 'Catering', subcategory: 'Thattukada' },
  { id: 85, name: 'Salad', image: 'assets/images/products-img/chickenspring.jpeg', category: 'Catering', subcategory: 'Thattukada' },
  { id: 86, name: 'Pappad', image: 'assets/images/products-img/chickensamosa.jpeg', category: 'Catering', subcategory: 'Thattukada' },
  { id: 87, name: 'Banana', image: 'assets/images/products-img/nuggets.jpeg', category: 'Catering', subcategory: 'Thattukada' },
  { id: 88, name: 'Pineapple', image: 'assets/images/products-img/chickenpops.jpeg', category: 'Catering', subcategory: 'Thattukada' },
  { id: 89, name: 'Warm Jeera Water', image: 'assets/images/products-img/fishpop.jpeg', category: 'Catering', subcategory: 'Thattukada' },
  { id: 90, name: 'Mineral Water (300ml, 1L)', image: 'assets/images/products-img/potataopops.jpeg', category: 'Catering', subcategory: 'Thattukada' },


  //mutton
  { id: 91, name: 'Mutton Curry', image: 'assets/images/products-img/fishfinger.webp', category: 'Catering', subcategory: 'Mutton' },
  { id: 92, name: 'Mutton Roast', image: 'assets/images/products-img/chickenspring.jpeg', category: 'Catering', subcategory: 'Mutton' },
  { id: 93, name: 'Mutton Masala', image: 'assets/images/products-img/chickensamosa.jpeg', category: 'Catering', subcategory: 'Mutton' },
  { id: 94, name: 'Mutton Stew', image: 'assets/images/products-img/nuggets.jpeg', category: 'Catering', subcategory: 'Mutton' },
  { id: 95, name: 'Mutton Chilli', image: 'assets/images/products-img/chickenpops.jpeg', category: 'Catering', subcategory: 'Mutton' },
  { id: 96, name: 'Mutton Chaps', image: 'assets/images/products-img/fishpop.jpeg', category: 'Catering', subcategory: 'Mutton' },
  { id: 97, name: 'Mutton Kuruma', image: 'assets/images/products-img/potataopops.jpeg', category: 'Catering', subcategory: 'Mutton' },
  { id: 98, name: 'Mutton Fry', image: 'assets/images/products-img/vegsamosa.jpeg', category: 'Catering', subcategory: 'Mutton' },

  // ice cream
  { id: 100, name: '50,75,100ml', image: 'assets/images/products-img/carrotcake.jpeg', category: 'Catering', subcategory: 'Ice-cream' },
  { id: 101, name: 'Kasatta', image: 'assets/images/products-img/bananacake.jpeg', category: 'Catering', subcategory: 'Ice-cream' },
  { id: 102, name: 'Khulfi', image: 'assets/images/products-img/plumcake.jpeg', category: 'Catering', subcategory: 'Ice-cream' },
  { id: 103, name: 'Fruit Salad', image: 'assets/images/products-img/buttercake.jpg', category: 'Catering', subcategory: 'Ice-cream' },
  { id: 104, name: 'Bulk Flavour', image: 'assets/images/products-img/marblecake.jpeg', category: 'Catering', subcategory: 'Ice-cream' },
  { id: 105, name: 'Butter Skate', image: 'assets/images/products-img/honeycake.avif', category: 'Catering', subcategory: 'Ice-cream' },

  //Drinks
  { id: 106, name: 'Coco Cola', image: 'assets/images/products-img/fishfinger.webp', category: 'Catering', subcategory: 'Drinks' },
  { id: 107, name: '7Up', image: 'assets/images/products-img/chickenspring.jpeg', category: 'Catering', subcategory: 'Drinks' },
  { id: 108, name: 'MirInda', image: 'assets/images/products-img/chickensamosa.jpeg', category: 'Catering', subcategory: 'Drinks' },
  { id: 109, name: 'Pepsi', image: 'assets/images/products-img/nuggets.jpeg', category: 'Catering', subcategory: 'Drinks' },
  { id: 110, name: 'Soda', image: 'assets/images/products-img/chickenpops.jpeg', category: 'Catering', subcategory: 'Drinks' },
  { id: 111, name: 'Gulab Jam', image: 'assets/images/products-img/fishpop.jpeg', category: 'Catering', subcategory: 'Drinks' },
  { id: 112, name: 'Payasam', image: 'assets/images/products-img/potataopops.jpeg', category: 'Catering', subcategory: 'Drinks' },

  //Special items

  { id: 113, name: 'Mutton Soup', image: 'assets/images/products-img/vegfinger.jpeg', category: 'Catering', subcategory: 'Special Items' },
  { id: 114, name: 'Vegetable Soup', image: 'assets/images/products-img/vegfinger.jpeg', category: 'Catering', subcategory: 'Special Items' },
]
