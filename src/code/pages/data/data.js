import akara from "./assets/foodIamges/akara.jpeg"
import moimoi from "./assets/foodIamges/moimoi.jpeg"
import yamEgg from "./assets/foodIamges/yameggsauce.jpg"
import omlet from "./assets/foodIamges/omlet.jpeg"
import cereal from "./assets/foodIamges/custard and akara.jpeg"
import jollof from "./assets/foodIamges/jollof (1).jpg"
import meat from "./assets/foodIamges/1 (1).jpg"
import assorted from "./assets/foodIamges/assorted meat.jpeg"
import asun from "./assets/foodIamges/asun made with goat meat.jpg"
import asun2 from "./assets/foodIamges/Asun.jpeg"
import chickenDrumsticks from "./assets/foodIamges/chicken drumsticks.jpeg"
import chickenSuya from "./assets/foodIamges/Chicken-Suya.jpg"
import meatbals from "./assets/foodIamges/meatballs.jpeg"
import meatsauce from "./assets/foodIamges/meatsauce.jpeg"
import asun1 from "./assets/foodIamges/asun101 (1).jpg"
import berbecue from "./assets/foodIamges/berbecue chicken.jpeg"
import chickedsauce from "./assets/foodIamges/chicken curry sauce.jpg"
import crayfish from "./assets/foodIamges/crayfish.jpeg"
import crayfishsauce from "./assets/foodIamges/crayfishsauce.jpeg"
import fish from "./assets/foodIamges/fish.jpeg"
import friedchicken from "./assets/foodIamges/firiedchicked.jpeg"
import eggsource from "./assets/foodIamges/eggSource.jpeg"
import friedRice from "./assets/foodIamges/friedrice.jpg"
import coconutrice from "./assets/foodIamges/coconut rice.jpeg"
import chinese from "./assets/foodIamges/chinese rice.jpeg"
import crispyfriedyam from "./assets/foodIamges/crispy fried yam.jpeg"
import yamarita from "./assets/foodIamges/yamarita.jpeg"
import potatoes from "./assets/foodIamges/crispypotatoes.jpeg"
import asaro from "./assets/foodIamges/Yam pottage with assorted meat.jpg"
import efforiro from "./assets/foodIamges/Efo riro.jpg"
import egusi from "./assets/foodIamges/Egusi.jpg"
import banga from "./assets/foodIamges/bangasoup.jpeg"
import ewedugbegiri from "./assets/foodIamges/ewedugbegiri.jpeg"
import ogbono from "./assets/foodIamges/ogbona soup.jpg"
import afang from "./assets/foodIamges/afang1.jpg"
import Okro from "./assets/foodIamges/okro soup.jpeg"
import bitterleaf from "./assets/foodIamges/bitterleaf.jpg"
import curysauce from "./assets/foodIamges/chicken curry sauce.jpg"
import eggsauce from "./assets/foodIamges/eggSource.jpeg"
import goat from "./assets/foodIamges/goat meat peppersoup.jpg"
import catfish from "./assets/foodIamges/cat fish peppersoup.jpg"
import peperedfish from "./assets/foodIamges/peppered fish.jpg"
import snail from "./assets/foodIamges/peppered snail.jpeg"
import nkwobi from "./assets/foodIamges/nkwobi.jpg"
import barbecue from "./assets/foodIamges/Chicken-Suya.jpg"
import turkey from "./assets/foodIamges/4.jpg"
import pomo from "./assets/foodIamges/pepperedpomo.jpeg"
import spagveggi from "./assets/foodIamges/spagwithveggi.jpeg"
import spagbeef from "./assets/foodIamges/spag with shredded beef.jpeg"
import spagballs from "./assets/foodIamges/spag with meatballs.jpeg"
import plantain from "./assets/foodIamges/plantain.jpeg"
import meatpie from "./assets/foodIamges/meatpie.jpeg"
import chickenpie from "./assets/foodIamges/chicken pie.jpeg"
import sausage from "./assets/foodIamges/springrolls.jpeg"
import pufpuf from "./assets/foodIamges/purfpurf.jpeg"
import chinchin from "./assets/foodIamges/chinchin.jpeg"
import cakes from "./assets/foodIamges/cake.jpeg"

export const menus = [
  {
    type: "Breakfast",
    disc: `Our breakfast collections is a list
          of varieties of lite foods,
         that gets you started on a new day.`,
    info: [
      {
        index: 0,
        title: "Akara",
        src: akara,
      },
      {
        index: 1,
        title: "Moi Moi",
        src: moimoi,
      },
      {
        index: 3,
        title: "Yam and egg sauce",
        src: yamEgg,
      },
      {
        index: 4,
        title: "Omelet",
        src: omlet,
      },
      {
        index: 4,
        title: "Cereal",
        src: cereal,
      },
    ],
  },
  {
    type: "Rice Meals",
    disc: `Rice is one of the most common staple foods in Nigeria.
           Prepared in a variety of ways`,
    alt: "rice meal",
    info: [
      {
        index: 0,
        title: "Jolof Rice",
        src: jollof,
      },
      {
        index: 1,
        title: "Fried Rice",
        src: friedRice,
      },
      {
        index: 2,
        title: "Coconout Rice",
        src: coconutrice,
      },
      {
        index: 3,
        title: "Chinese rice ",
        src: chinese,
      },
    ],
  },
  {
    type: "Yam Meals",
    disc: `Yam is used to make very fast and easy recipes.
          This is why it is a popular staple 
        and you are sure to find it in every pantry.
         `,
    alt: "yam meal",
    info: [
      {
        index: 0,
        title: "Boiled yam",
        src: yamEgg,
      },
      {
        index: 1,
        title: "Crispy Fried yam",
        src: crispyfriedyam,
      },
      {
        index: 2,
        title: "Yamarita",
        src: yamarita,
      },
      {
        index: 3,
        title: "Wedges potatoes",
        src: potatoes,
      },
      {
        index: 4,
        title: "Yam pottage [ASARO]",
        src: asaro,
      },
    ],
  },
  {
    type: "Soup",
    disc: `There are varieties of soup in Nigeria,
           with different kinds of textures.
    `,
    alt: "yam meal",
    info: [
      {
        index: 0,
        title: "Eforiro{spinach soup] ",
        src: efforiro,
      },
      {
        index: 1,
        title: "Egusi soup [melon soup] ",
        src: egusi,
      },
      {
        index: 2,
        title: "Banga [palm nuts extracts] ",
        src: banga,
      },
      {
        index: 3,
        title: "Ewedu and gbegiri",
        src: ewedugbegiri,
      },
      {
        index: 4,
        title: "Ogbono soup (Draw Soup)",
        src: ogbono,
      },
      {
        index: 5,
        title: "Afang",
        src: afang,
      },
      {
        index: 6,
        title: "Okro",
        src: Okro,
      },
      {
        index: 7,
        title: "Bitter Leaf",
        src: bitterleaf,
      },
    ],
  },
  {
    type: "Sauce",
    disc: `Nigerian sauce are combination of spice and other valuable ingredent`,
    alt: "sauce",
    info: [
      {
        index: 0,
        title: "Curry sauce",
        src: curysauce,
      },
      {
        index: 1,
        title: "Egg sauce",
        src: eggsauce,
      },
      {
        index: 2,
        title: "Meatballs sauce",
        src: meatbals,
      },
    ],
  },
  {
    type: "Hot Spot Special",
    disc: `Varietes of special hot soup`,
    alt: "sauce",
    info: [
      {
        index: 0,
        title: "Goat Peppersoup",
        src: goat,
      },
      {
        index: 1,
        title: "Catfish Pepersoup",
        src: catfish,
      },
      {
        index: 2,
        title: "Tilapia Paper Mixed",
        src: peperedfish,
      },
      {
        index: 3,
        title: "Peppered snail",
        src: snail,
      },
      {
        index: 4,
        title: "Assorted meat pepper",
        src: assorted,
      },
      {
        index: 5,
        title: "Chicken Mixed pepper",
        src: chickenDrumsticks,
      },
      {
        index: 6,
        title: "Asun",
        src: asun,
      },
      {
        index: 7,
        title: "Nkwobi",
        src: nkwobi,
      },
      {
        index: 8,
        title: "Barbecue chicken",
        src: barbecue,
      },
      {
        index: 9,
        title: "Peppered turkey",
        src: turkey,
      },
      {
        index: 10,
        title: "Peppered pomo",
        src: pomo,
      },
    ],
  },
  {
    type: "SPAGETTI [PASTA]",
    disc: `Varietes of special spagetti pasta`,
    alt: "pasta",
    info: [
      {
        index: 0,
        title: "Stir fry pasta with vegetables",
        src: spagveggi,
      },
      {
        index: 1,
        title: "Spaghetti with shredded beef",
        src: spagbeef,
      },
      {
        index: 1,
        title: "Spaghetti with shredded beef",
        src: spagballs,
      },
    ],
  },
  {
    type: "Sides",
    disc: `Varietes of special fast chop`,
    alt: "side",
    info: [
      {
        index: 0,
        title: "Plantain",
        src: plantain,
      },
      {
        index: 1,
        title: "Moimoi Moimoin",
        src: moimoi,
      },
    ],
  },
  {
    type: "Swallow",
    disc: `Nigerian swallows refer generally to foods that are wholly swallowed in Nigeria.`,
    alt: "swallow",
    info: [
      {
        index: 0,
        title: "Amala",
        src: plantain,
      },
      {
        index: 1,
        title: "Eba",
        src: moimoi,
      },
      {
        index: 2,
        title: "Semolina",
        src: moimoi,
      },
      {
        index: 3,
        title: "Wheat",
        src: moimoi,
      },
      {
        index: 3,
        title: "Pounded Yam",
        src: moimoi,
      },
      {
        index: 3,
        title: "Fufu",
        src: moimoi,
      },
    ],
  },
  {
    type: "Snacks",
    disc: `Healthy snacks on this list for everyone.`,
    alt: "snack",
    info: [
      {
        index: 0,
        title: "Meat Pie",
        src: meatpie,
      },
      {
        index: 1,
        title: "Chicken pie",
        src: chickenpie,
      },
      {
        index: 2,
        title: "Sausage rolls",
        src: sausage,
      },
      {
        index: 3,
        title: "Pufpuf",
        src: pufpuf,
      },
      {
        index: 4,
        title: "Chin Chin",
        src: chinchin,
      },
      {
        index: 5,
        title: "Cakes",
        src: cakes,
      },
    ],
  },
]

export const tileData = {
  meatData: [
    {
      img: meat,
      title: "Meat Garnished with perper",
      author: "1",
    },
    {
      img: assorted,
      title: "Assorted meat",
      author: "1",
    },
    {
      img: asun,
      title: "Spicy Roasted meat",
      author: "2",
    },
    {
      img: asun2,
      title: "Spicy Roasted Goat meat",
      author: "3",
    },
    {
      img: chickenDrumsticks,
      title: "Chicken Drumsticks",
      author: "4",
    },
    {
      img: chickenSuya,
      title: "Chicken suyo",
      author: "5",
    },
    {
      img: meatbals,
      title: "Meat and Spice",
      author: "6",
    },
    {
      img: meatsauce,
      title: "Spicy Roasted meat",
      author: "7",
    },
    {
      img: asun1,
      title: "Spicy sauced meat",
      author: "8",
    },
    {
      img: fish,
      title: "Spicy fish",
      author: "9",
    },
    {
      img: friedchicken,
      title: "Spicy fried chicken",
      author: "9",
    },
  ],
  shrinpData: [
    {
      img: eggsource,
      title: "Egg source",
      author: "0",
    },
    {
      img: berbecue,
      title: "Berbecue",
      author: "1",
    },
    {
      img: chickedsauce,
      title: "Chicken cury sauce",
      author: "2",
    },
    {
      img: crayfish,
      title: "Cray fish sauce",
      author: "3",
    },
    {
      img: crayfishsauce,
      title: "cray fish spiced",
      author: "4",
    },
    {
      title: "Fish sauce [titus fish ]",
      author: "5",
    },
    {
      title: "Ofada sauce [made from red bell pepper]",
      author: "6",
    },
    {
      title: "Ayamase sauce [green]",
      author: "7",
    },
    {
      title: "Prawn in chili sauce ",
      author: "8",
    },
    {
      title: "Chicken casserole",
      author: "9",
    },
    {
      title: "Shredded beef sauce with vegetables",
      author: "10",
    },
    {
      title: "Shredded chicken sauce with vegetables",
      author: "11",
    },
    {
      title: "Fish sauce with vegetables",
      author: "12",
    },

    {
      title: "Sweet n sour meal with a choice of protein",
      author: "13",
    },
  ],
}
