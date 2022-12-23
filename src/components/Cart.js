import {
  Button,
  ButtonGroup,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../context";
import CancelIcon from "@mui/icons-material/Cancel";

const Cart = () => {
  const { state, dispatch } = useContext(Context);
  const { cart } = state;
  let total = 0;

  for (const [key, value] of Object.entries(cart)) {
    total = total + cart[key].price * cart[key].qty;
  }
  return (
    <>
      <Typography variant="div" className="cartMain">
        {Object.entries(cart).map(([key, value]) => {
          return (
            <Typography variant="div" className="cartDiv">
              <Card className="CartImg" sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={cart[key].img}
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card>

              <Typography variant="div" className="CartDtls">
                <Typography variant="div" className="TitlePrice">
                  <Typography className="CartTitle" variant="h5">
                    {cart[key].title}
                  </Typography>
                  <Typography className="CartPrice">
                    ₹ {cart[key].price}
                  </Typography>
                </Typography>

                <Typography className="CartIncRemove">
                  <Typography className="CartQty">
                    <ButtonGroup
                      size="small"
                      aria-label="small outlined button group"
                    >
                      <Button
                        onClick={() => {
                          dispatch({
                            type: "DECREMENT_IN_CART",
                            payload: cart[key],
                          });
                        }}
                      >
                        -
                      </Button>{" "}
                      <Button>{cart[key].qty}</Button>
                      <Button
                        onClick={() => {
                          dispatch({
                            type: "INCREMENT_IN_CART",
                            payload: cart[key],
                          });
                        }}
                      >
                        +
                      </Button>
                    </ButtonGroup>
                  </Typography>

                  <Typography variant="div" className="CartItemRmv">
                    <Button
                      type="button"
                      className=""
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: cart[key],
                        });
                      }}
                    >
                      <CancelIcon className="cancelbtn" />
                    </Button>
                  </Typography>
                </Typography>
              </Typography>
            </Typography>
          );
        })}
        <Typography variant="div" className="checkoutCss">
          <Typography variant="div" className="Subtotal">
            <Typography variant="h5">Subtotal:</Typography>
            <Typography variant="h5">₹{total}</Typography>
          </Typography>

          <Button className="CheckoutBtn">Checkout</Button>
        </Typography>
      </Typography>
    </>
  );
};

export default Cart;
