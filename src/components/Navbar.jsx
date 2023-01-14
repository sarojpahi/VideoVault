import { Stack } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../Utility/constants";
import { SearchBar } from "./SearchBar";
export const Navbar = () => (
  <Stack
    direction={"row"}
    alignItems="center"
    p="2"
    sx={{
      position: "sticky",
      justifyContent: "space-between",
      background: "#000",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="Logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
);
