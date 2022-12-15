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
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const settings = ["Profile", "Logout"];

export default function Header() {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    console.log("event.currentTarget", event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  //   const handleNavigate = () => {
  //     navigate("/earphones");
  //     // alert("hii");
  //   };

  return (
    <>
      <AppBar position="static">
        <Toolbar className="ParentBox">
          <Box className="ChildBox1">
            <Button
              className="speakerscolor"
              onClick={() => navigate("/speakers")}
            >
              Speakers
            </Button>

            <Button
              className="Earphonescolor"
              onClick={() => navigate("/earphones")}
            >
              Earphones
            </Button>

            <Button
              className="Watchescolor"
              onClick={() => navigate("/watches")}
            >
              Smart Watches
            </Button>
          </Box>
          <Box className="ChildBox2">
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
