import React from "react";
import { Firm } from "../types";
import "../App.css";

import { DataGrid, GridRowParams } from "@mui/x-data-grid";
import { useTheme } from "@mui/material/styles";

function FirmTableDataGrid(firms: Firm[]) {
  const SERVER_URL = "http://localhost:3000";
  const columns = [
    { field: "firm_id", headerName: "Firm ID", width: 150 },
    { field: "firm_name", headerName: "Firm Name", width: 150 },
    { field: "firm_type", headerName: "Firm Type", width: 150 },
    {
      field: "date_added_human_readable",
      headerName: "Date Added",
      width: 150,
    },
    { field: "address", headerName: "Address", width: 150 },
  ];

  const navigateToIndividualFirm = (firm: Firm) => {
    window.location.href = `${SERVER_URL}/firms/${firm.firm_id}`;
  };

  const rows = firms.map((firm) => {
    return {
      id: firm.firm_id,
      firm_id: firm.firm_id,
      firm_name: firm.firm_name,
      firm_type: firm.firm_type,
      date_added_human_readable: firm.date_added_human_readable,
      address: firm.address,
    };
  });

  const onRowClick = (params: GridRowParams<Firm>) => {
    const firm = params.row as Firm;
    window.location.href = `${SERVER_URL}/firms/${firm.firm_id}`;
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} onRowClick={onRowClick} />
    </div>
  );
}

export default FirmTableDataGrid;
