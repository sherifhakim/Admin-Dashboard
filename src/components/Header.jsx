import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";

const Header = ({title,subtitle,isDashboard=false}) => {
  const theme = useTheme();
  return (
    
      <Box mb={isDashboard?2: 4}>
        <Typography
          variant="h5"
          color={theme.palette.info.light}
          fontWeight="bold"
        >
          {title}
        </Typography>
        <Typography variant="body1" color="">
          {subtitle}
        </Typography>
      </Box>
    
  );
};

export default Header;
