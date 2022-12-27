import React from "react";
import Cart from "./Cart";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { Divider, makeStyles, Drawer } from "@material-ui/core";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { useContext } from "react";
import { Context } from "../context";

const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 610,
    height: "100%",
  },
  BoxmenuSliderContainer: {
    width: 610,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  listItem: {
    color: "tan",
  },
}));

const Draw = ({ toggleSlider }) => {
  const classes = useStyles();

  const { state } = useContext(Context);

  console.log("-->", state);
  const { cart } = state;
  console.log("cart", cart);
  let itemCount = 0;

  for (const [key, value] of Object.entries(cart)) {
    itemCount = itemCount + cart[key].qty;
  }

  const shoppingHandler = () => {
    toggleSlider(false);
  };

  return (
    <>
      {itemCount ? (
        <Box className={classes.menuSliderContainer} component="div">
          <Divider />
          <Cart />
        </Box>
      ) : (
        <Box className={classes.BoxmenuSliderContainer}>
          <Typography variant="div" className="EmtyCartParent">
            <Typography variant="div" className="">
              <LocalMallOutlinedIcon className="HeaderCartIcon" />
            </Typography>
            <Typography variant="h5" className="">
              {" "}
              Your shopping bag is empty{" "}
            </Typography>
            <Button className="EmtyCartBtn" onClick={shoppingHandler}>
              continue shopping
            </Button>
            {/* <Drawer open={open} anchor="right" onClose={toggleSlider}></Drawer> */}
          </Typography>
        </Box>
      )}
    </>
  );
};

export default Draw;
