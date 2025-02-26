import images from "./image"; // Import all images from the images file

const categories = [
  { name: "All", key: "All", image: images.home },
  { name: "Men's Clothing", key: "men's clothing", image: images.men },
  { name: "Women's Clothing", key: "women's clothing", image: images.ladies },
  { name: "Dresses", key: "dresses", image: images.dress },
  { name: "Jewelry", key: "jewelery", image: images.luxe },
  { name: "Electronics", key: "electronics", image: images.design },
  { name: "Cabins", key: "cabins", image: images.cabins },
  { name: "Castles", key: "castles", image: images.castles },
  { name: "Campsites", key: "campers", image: images.campers },
  { name: "Lakeside", key: "lake", image: images.lake },
  { name: "Beaches", key: "bch", image: images.bch },
  { name: "Islands", key: "island", image: images.island },
];

export default categories;
