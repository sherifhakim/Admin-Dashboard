import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import React from "react";
import { columns, rows } from "./Data";

const Invoices = () => {
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>

<Header title={"INVOICES"} subtitle={"List of Invoices Balances"} />

      <DataGrid
        checkboxSelection
        slots={{
          toolbar: GridToolbar,
        }}
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
};

export default Invoices;
