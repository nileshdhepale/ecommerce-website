import Layout from "./Layout";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Typography } from "@mui/material";
import { setItem, sliderItems } from "../data";
import { posterItem } from "../data";
import React from "react";

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
        <Typography variant="div" className="imgBodyParent">
          <Typography variant="div" className="imgBody">
            <Typography variant="div" className="threeItem">
              <Typography className="beats">Beats Solo Air</Typography>
              <Typography className="Summer">Summer Sale</Typography>
              <Typography variant="div" className="FINE">
                Headphone
              </Typography>
              <Button
                className="Buttoncss"
                variant="contained"
                onClick={() => gotoHeaderProduct(posterItem.id)}
              >
                Shop Now
              </Button>
            </Typography>

            <Typography variant="div" className="BoatHeadcssParent">
              <CardMedia
                component="img"
                height="440"
                className="BoatHeadcss"
                image={"/Photos/newhead.webp"}
                alt="green iguana"
              />
            </Typography>
          </Typography>
        </Typography>
        <Typography variant="div" className="allCards">
          {sliderItems.slice(0, 5).map((product) => (
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
        </Typography>
      </Layout>
    </>
  );
};

export default Home;
