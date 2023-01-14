import { Box } from "@mui/system";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Channel, Home, Search, Video } from "./Pages";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ background: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:id" element={<Video />} />
          <Route path="/channel/:id" element={<Channel />} />
          <Route path="/search/:term" element={<Search />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
