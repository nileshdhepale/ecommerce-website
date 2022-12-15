import Layout from "./Layout";
// import PhotoHead from "../Photos/Boat Head.png";
// import Logo from "../Photos/logo.png";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Typography } from "@mui/material";
import { setItem, sliderItems } from "../data";
import { posterItem } from "../data";
// import Photo from "../Photos/new head.webp";
import { useState } from "react";
// import ProductShow from "../pages/ProductShow";
//import poster from "../Photos/Boat Head.png";

const Home = () => {
  const navigate = useNavigate();

  const gotoProduct = (id) => {
    setItem(id);
    navigate("/product");
  };

  const gotoHeaderProduct = (id) => {
    console.log("ksjhdf", id);
    setItem(id);
    navigate("/product");
  };

  return (
    <>
      <Layout>
        <div className="imgBodyParent">
          <div className="imgBody">
            <Typography className="threeItem">
              <Typography variant="h5" className="beats">
                Beats Solo Air
              </Typography>
              <Typography variant="h3" className="Summer">
                Summer Sale
              </Typography>
              <Typography className="FINE">FINE</Typography>

              <Button
                className="Buttoncss"
                variant="contained"
                onClick={() => gotoHeaderProduct(posterItem.id)}
              >
                Shop Now
              </Button>
            </Typography>
            <img
              className="BoatHeadcss"
              src={"/Photos/newhead.webp"}
              alt="Boat head img"
            />
          </div>
        </div>
        <div className="allCards">
          {sliderItems.map((product) => (
            <Typography
              className="Rowcard"
              onClick={() => gotoProduct(product.id)}
            >
              <Card className="cardpadding" sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    // height="140"
                    image={product.img}
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card>
              <Typography
                className="Titlecss"
                variant="body1"
                color="text.primary"
              >
                {product.title}
              </Typography>
              <Typography
                className="pricecss"
                variant="body1"
                color="text.primary"
              >
                ₹{product.price}
              </Typography>
            </Typography>
          ))}
        </div>
        {/* <ProductShow hdr={hdr} /> */}
      </Layout>
    </>
  );
};

export default Home;
