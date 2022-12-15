import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import React from "react";
import Layout from "../components/Layout";
import { getItem, sliderItems, posterItem } from "../data";

const ProductShow = (props) => {
  let num = getItem();
  let data;

  return (
    <>
      <Layout>
        {sliderItems.map((n) => {
          if (n.id == num) {
            data = n;
          }
        })}

        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={data.img}
              alt="green iguana"
            />
          </CardActionArea>
        </Card>

        <Typography variant="body2" color="text.primary">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.primary">
          You may also like
        </Typography>
        <div className="allCards">
          {sliderItems.map((product) => (
            <Typography>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.img}
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card>
              <Typography variant="body2" color="text.primary">
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.primary">
                {product.price}
              </Typography>
            </Typography>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default ProductShow;
