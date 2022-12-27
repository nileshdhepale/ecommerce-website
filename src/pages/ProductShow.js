import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Drawer,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Layout from "../components/Layout";
import { getItem, sliderItems } from "../data";
import Rating from "@mui/material/Rating";
import { useContext } from "react";
import { Context } from "../context";
import Draw from "../components/Draw";

const ProductShow = () => {
  const [value, setValue] = React.useState(4);
  const [name, setName] = useState();

  const { dispatch } = useContext(Context);
  const [open, setOpen] = React.useState(false);

  let num = getItem();
  let data;

  const toggleSlider = () => {
    setOpen(!open);
    dispatch({ type: "ADD_TO_CART", payload: data });
  };

  const gotoProduct = (id) => {
    setName(id);
  };

  return (
    <>
      <Layout>
        {sliderItems.map((n) => {
          if (name != undefined) {
            if (n.id == name) {
              data = n;
            }
          } else {
            if (n.id == num) {
              data = n;
            }
          }
        })}

        <Typography className="productBoth" variant="div">
          <Typography className="Producut1Card" variant="div">
            <Card className="productFirstcard" sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={data.img}
                  alt="green iguana"
                />
              </CardActionArea>
            </Card>
          </Typography>

          <Typography className="productShowDiv" variant="div">
            <Typography
              className="productTitleDiv"
              variant="body2"
              color="text.primary"
            >
              {data.title}
            </Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <Typography variant="body1" color="text.primary">
              <h3 style={{ margin: "0", marginTop: "20px" }}>Details:</h3>
              {data.desc}
            </Typography>
            <Typography style={{ marginTop: "20px" }} variant="h5" color="red">
              ₹{data.price}
            </Typography>
            <Typography className="productTwobutton">
              <Button
                className="Addtocartbtn"
                variant="outlined"
                onClick={() => {
                  dispatch({ type: "ADD_TO_CART", payload: data });
                }}
              >
                Add To Cart
              </Button>
              <Button
                className="buynowbtn"
                variant="contained"
                onClick={toggleSlider}
              >
                Buy Now
              </Button>
              <Drawer open={open} anchor="right" onClose={toggleSlider}>
                {<Draw toggleSlider={toggleSlider} />}
              </Drawer>
            </Typography>
          </Typography>
        </Typography>

        <Typography
          className="youmayalsolike"
          variant="div"
          color="text.primary"
        >
          You may also like
        </Typography>
        <Typography className="marquee">
          <Typography className="ProductallCards track">
            {sliderItems.slice(5, 10).map((product) => (
              <Typography onClick={() => gotoProduct(product.id)}>
                <Typography className="ProductRowcard">
                  <Card className="Productcardpadding" sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="250"
                        image={product.img}
                        alt="green iguana"
                      />
                    </CardActionArea>
                  </Card>
                  <Typography
                    className="Titlecss"
                    variant="body2"
                    color="text.primary"
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    className="pricecss"
                    variant="body2"
                    color="text.primary"
                  >
                    ₹{product.price}
                  </Typography>
                </Typography>
              </Typography>
            ))}
          </Typography>
        </Typography>
      </Layout>
    </>
  );
};

export default ProductShow;
