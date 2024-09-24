import { GridColDef } from "@mui/x-data-grid";
import { DataTable, DefaultButton } from "@/components";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import Image from "next/image";

const paginationModel = { page: 0, pageSize: 5 };

const rows: Record<string, string | number | null | ReactNode>[] = [
  {
    id: 1,
    lastName: "田中",
    firstName: "太郎",
    kana: "カナテスト テストテストタロウ",
    image: "/001.jpg",
  },
  {
    id: 2,
    lastName: "鈴木",
    firstName: "一郎",
    kana: "カナテスト テストテストタロウ",
    image: "/002.jpg",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    kana: "タロウカナテスト テストテストタロウ",
    image: "/003.jpg",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    kana: "カナテスト テストテストタロウ",
    image: "/004.jpg",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    kana: "カナテスト テストテストタロウ",
    image: "/005.jpg",
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: null,
    kana: "テスト テストテストタロウ",
    image: "/006.jpg",
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    kana: "カナテスト テストテストタロウ",
    image: "/007.jpg",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    kana: "カナテスト テストテストタロウ",
    image: "/008.jpg",
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    kana: "アアアアカナテスト テストテストタロウ",
    image: "/009.jpg",
  },
];

const Users = () => {
  const router = useRouter();

  const DetailButton = ({ id }) => {
    return (
      <DefaultButton text="詳細" onClick={() => router.push(`/user/${id}`)} />
    );
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "社員番号", type: "number", width: 100 },
    {
      field: "name",
      headerName: "社員名",
      description: "ソートは「昇順」「降順」「ソート解除」でぐるぐる回ってる", // ←これ、多分要らんから削除してね
      valueGetter: (_, row) => `${row.lastName || ""} ${row.firstName || ""}`, // APIから名字と名前バラバラで来たらこうしてくっつける
      flex: 1, // こうしたら固定値じゃなくて可変になる
    },
    {
      field: "kana",
      headerName: "社員名カナ",
      flex: 1,
    },
    {
      field: "image",
      headerName: "写真",
      width: 150,
      sortable: false,
      filterable: false,
      hideable: false, // 「列を非表示」を消したかったらこれ入れる(「列管理」の消し方は分からんかったです...)
      renderCell: (params) => (
        <Image
          src={params.value}
          alt=""
          width={100}
          height={50}
          style={{ objectFit: "contain" }}
        />
      ),
    },
    {
      field: "detail",
      headerName: "ソートできない列の例",
      description: "ここに説明文が出せる",
      sortable: false,
      width: 150, // ヘッダー見せるために長くしてるけどもうちょっと短くていいはず
      renderCell: (params) => <DetailButton id={params.row.id} />,
    },
  ];

  return (
    <>
      <h1>社員一覧</h1>
      <DefaultButton text="社員追加" onClick={() => router.push("/user/add")} />
      <div style={{ marginTop: 8 }}>
        <DataTable
          rows={rows}
          columns={columns}
          paginationModel={paginationModel}
        />
      </div>
    </>
  );
};

export default Users;
