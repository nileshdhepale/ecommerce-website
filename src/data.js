export const posterItem = {
  id: 1,
  img: "https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-9tmqs91gpd72tk5bgpdmujruk4-20190304155829.Medi.jpeg",
  title: "Headphone",
  desc: "A second pair of headphones.",
  Price: "f5fafd",
};

export const sliderItems = [
  {
    id: 1,
    img: "/Photos/newhead.webp",
    title: "Headphone",
    desc: "A second pair of headphones.",
    price: "5000",
  },
  {
    id: 2,
    img: "/Photos/smartwatch2.webp",
    title: "Smartwatch",
    desc: "Cool smartwatch",
    price: "4000",
  },
  {
    id: 3,
    img: "/Photos/speaker2.webp",
    title: "Speaker",
    desc: "Boat bluetooth speakers",
    price: "6000",
  },
  {
    id: 4,
    img: "/Photos/boatRockerz.webp",
    title: "Boat Rockerz pro",
    desc: "Immerse in the amazing sound",
    price: "2550",
  },
  {
    id: 5,
    img: "/Photos/earbuds.webp",
    title: "Airbuds",
    desc: "Use these while working out",
    price: "4500",
  },
  {
    id: 6,
    img: "/Photos/Airpods-148.webp",
    title: "Headphone",
    desc: "A second pair of headphones.",
    price: "5000",
  },
  {
    id: 7,
    img: "/Photos/Earphone.webp",
    title: "Smartwatch",
    desc: "Cool smartwatch",
    price: "4000",
  },
  {
    id: 8,
    img: "/Photos/Rockerz-headphone.webp",
    title: "Speaker",
    desc: "Boat bluetooth speakers",
    price: "6000",
  },
  {
    id: 9,
    img: "/Photos/boatRockerz.webp",
    title: "Boat Rockerz pro",
    desc: "Immerse in the amazing sound",
    price: "2550",
  },
  {
    id: 10,
    img: "/Photos/stone-Speaker.webp",
    title: "Airbuds",
    desc: "Use these while working out",
    price: "4500",
  },
];

var demoitem = 0;

export const setItem = (id) => {
  demoitem = id;
};

export const getItem = () => {
  return demoitem;
};
