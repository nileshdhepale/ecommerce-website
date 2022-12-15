// import poster from "./Photos/Boat Head.png";
//import poster from "./Photos/";

export const posterItem = {
  id: 1,
  img: "https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-9tmqs91gpd72tk5bgpdmujruk4-20190304155829.Medi.jpeg",
  title: "Headphone",
  desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
  Price: "f5fafd",
};

export const sliderItems = [
  {
    id: 1,
    img: "/Photos/newhead.webp",
    title: "Headphone",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    price: "5000",
  },
  {
    id: 2,
    img: "/Photos/smartwatch2.webp",
    title: "Smartwatch",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
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
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    price: "2550",
  },
  {
    id: 5,
    img: "/Photos/earbuds.webp",
    title: "Airbuds",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
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
