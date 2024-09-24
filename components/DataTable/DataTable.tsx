import { Paper } from "@mui/material";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { jaJP } from "@mui/x-data-grid/locales";
import { memo } from "react";

type Props = {
  rows: GridRowsProp;
  columns: GridColDef[];
  // pagination系不要であれば削除する
  paginationModel?: { page: number; pageSize: number };
};

const DataTable = ({ rows, columns, paginationModel }: Props) => {
  return (
    <Paper sx={{ width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        isRowSelectable={() => false}
        // initialState={{ pagination: { paginationModel } }}
        // pageSizeOptions={[5, 10]}
        sx={{ border: 0 }}
        localeText={jaJP.components.MuiDataGrid.defaultProps.localeText}
      />
    </Paper>
  );
};

export default memo(DataTable);
