import { Meta, StoryObj } from "@storybook/react";
import DataTable from "./DataTable";
import { GridColDef } from "@mui/x-data-grid";

const meta: Meta<typeof DataTable> = {
  title: "Components/DataTable",
  component: DataTable,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DataTable>;

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "名前", width: 130 },
  { field: "age", headerName: "年齢", type: "number", width: 90 },
  { field: "department", headerName: "部署", width: 160 },
];

const defaultRows = [
  { id: 1, name: "山田太郎", age: 30, department: "営業部" },
  { id: 2, name: "佐藤花子", age: 25, department: "人事部" },
  { id: 3, name: "鈴木一郎", age: 35, department: "経理部" },
];

export const Default: Story = {
  args: {
    rows: defaultRows,
    columns: columns,
    paginationModel: { page: 0, pageSize: 5 },
  },
};
