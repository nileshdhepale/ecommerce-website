import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { Divider, makeStyles, Drawer } from "@material-ui/core";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { useContext } from "react";
import { Context } from "../context";
import Cart from "./Cart";

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

const settings = ["Profile", "Logout"];

export default function Header() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { state } = useContext(Context);

  console.log("-->", state);
  const { cart } = state;
  let itemCount = 0;

  for (const [key, value] of Object.entries(cart)) {
    itemCount = itemCount + cart[key].qty;
  }

  const toggleSlider = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    console.log("event.currentTarget", event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const sideList = () =>
    itemCount ? (
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
          <Button className="EmtyCartBtn" onClick={toggleSlider}>
            continue shopping
          </Button>
        </Typography>
      </Box>
    );

  return (
    <>
      <AppBar position="static">
        <Toolbar className="ParentBox">
          <Box className="ChildBox1">
            <Button className="speakerscolor" onClick={() => navigate("/")}>
              Boat-Store
            </Button>
          </Box>

          <Box className="ChildBox3">
            <IconButton className="ChildBox2" onClick={toggleSlider}>
              <span className="CartCount">{itemCount}</span>

              <LocalMallOutlinedIcon className="CartBagicon" />
            </IconButton>
            <Drawer open={open} anchor="right" onClose={toggleSlider}>
              {sideList()}
            </Drawer>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
