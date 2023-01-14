import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { Sidebar } from "../components/Sidebar";

const Home = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRadius: "1px solid #e3e3e3",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2023 VideoVault
        </Typography>
      </Box>
    </Stack>
  );
};

export default Home;
