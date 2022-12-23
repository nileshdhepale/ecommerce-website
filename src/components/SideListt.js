// import React from "react";

// import Box from "@mui/material/Box";

// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";

// import { Divider, makeStyles } from "@material-ui/core";

// import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

// import { useContext } from "react";
// import { Context } from "../context";
// import Cart from "./Cart";
// import SideList from "./SideListt";

// const useStyles = makeStyles((theme) => ({
//   menuSliderContainer: {
//     width: 610,
//     height: "100%",
//   },
//   BoxmenuSliderContainer: {
//     width: 610,
//     height: "100%",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   listItem: {
//     color: "tan",
//   },
// }));

// const SideListt = () => {
//   const classes = useStyles();
//   const { state } = useContext(Context);
//   const [open, setOpen] = React.useState(false);

//   console.log("-->", state);
//   const { cart } = state;

//   let itemCount = 0;

//   for (const [key, value] of Object.entries(cart)) {
//     itemCount = itemCount + cart[key].qty;
//   }
//   const toggleSlider = () => {
//     setOpen(!open);
//   };
//   return (
//     <>
//       {itemCount ? (
//         <Box className={classes.menuSliderContainer} component="div">
//           <Divider />
//           <Cart />
//         </Box>
//       ) : (
//         <Box className={classes.BoxmenuSliderContainer}>
//           <Typography variant="div" className="EmtyCartParent">
//             <Typography variant="div" className="">
//               <LocalMallOutlinedIcon className="HeaderCartIcon" />
//             </Typography>
//             <Typography variant="h5" className="">
//               {" "}
//               Your shopping bag is empty{" "}
//             </Typography>
//             <Button className="EmtyCartBtn" onClick={toggleSlider}>
//               continue shopping
//             </Button>
//           </Typography>
//         </Box>
//       )}
//       ;
//     </>
//   );
// };

// export default SideListt;
