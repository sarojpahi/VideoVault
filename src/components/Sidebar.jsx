import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../Utility/constants";

export const Sidebar = () => {
  const category = "New";
  return (
    <Stack
      direction={"row"}
      sx={{
        overflow: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((item) => (
        <button
          className="category-btn"
          style={{
            background: item.name === category && "#fc1503",
            color: "white",
          }}
          key={item.name}
        >
          <span style={{ color: item.name === category ? "white" : "red" }}>
            {item.icon}
          </span>
          <span>{item.name}</span>
        </button>
      ))}
    </Stack>
  );
};
