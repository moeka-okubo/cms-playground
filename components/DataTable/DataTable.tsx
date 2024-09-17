import { Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { jaJP } from "@mui/x-data-grid/locales";
import { memo, ReactNode } from "react";

type Props = {
  rows: Record<string, string | number | null | ReactNode>[];
  columns: GridColDef[];
  // pagination系不要であれば削除する
  paginationModel: { page: number; pageSize: number };
};

const DataTable = (props: Props) => {
  const { rows, columns } = props;
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
