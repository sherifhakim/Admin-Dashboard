import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Box, useTheme } from "@mui/material";
import Bar from "./Bar";
import Header from "../../components/Header";

const BarChart = () => {
  const theme = useTheme();
  return (
    <Box>
      <Header
        title={"Bar Chart"}
        subtitle={"The Minimum Wage In Germany, France and Spain (EUR/Month)"}
      />
      <Bar />
    </Box>
  );
};

export default BarChart;
