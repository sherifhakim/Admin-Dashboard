import { Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "../../pages/pie/Pie";
import React from "react";
import Bar from "../../pages/bar/Bar";
import Geo from "../../pages/geography/geo";

const Row3 = () => {
  const theme = useTheme();
  return (
    <Stack gap={1.5} direction={"row"} flexWrap={"wrap"} mt={2}>
      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "28%" }}>
        <Typography
          sx={{ padding: "30px 30px 0 30px", fontWeight: "600" }}
          variant="h6"
          color={theme.palette.secondary.main}
        >
          Campaign
        </Typography>

        <Pie isDashboard={true} />
        <Typography sx={{ mt: "15px" }} variant="h6" align="center">
          $48,352 revenue generated
        </Typography>
        <Typography px={0.7} pb={3} variant="body2" align="center">
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>
      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "33%" }}>
        <Typography
          sx={{ padding: "30px 30px 0 30px", fontWeight: "600" }}
          variant="h6"
          color={theme.palette.secondary.main}
        >
          Sales Quantity
        </Typography>
        <Bar isDashboard={true}  />
      </Paper>
      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "33%" }}>
        <Geo isDashboard={true} />
        </Paper>
    </Stack>
  );
};

export default Row3;
