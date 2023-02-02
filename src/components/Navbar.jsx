import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <Box
      sx={{
        display: { flex: 1, xs: "none", md: "block" },

        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginLeft: "1rem",
        // paddingLeft: "0px",
        color: "whitesmoke",
        fontWeight: "bold",
        fontSize: "3rem",
      }}
    >
      PixelPlay
    </Box>
    <SearchBar />
  </Stack>
);

export default Navbar;
