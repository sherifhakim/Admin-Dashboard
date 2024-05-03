import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { Box, useTheme } from "@mui/material";
import Pie from "./Pie";
import Header from "../../components/Header";


const PieChart = () => {
  return (
    <Box>
      <Header title={"Pie Chart"} subtitle={"Simple Pie Chart"} />

      <Pie />
    </Box>
  );
};

export default PieChart;
