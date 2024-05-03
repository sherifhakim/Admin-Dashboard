import { Box } from "@mui/material";
import Header from "../../components/Header";
import React from "react";
import Line from "./Line";

const LineChart = () => {
  return (
    <Box>
      <Header title={"Line Chart"} subtitle={"Simple line Chart"} />

      <Line />
    </Box>
  );
};

export default LineChart;
