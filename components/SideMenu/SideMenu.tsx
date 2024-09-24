import { useRouter } from "next/router";
import { memo } from "react";

const SideMenu = () => {
  const router = useRouter();

  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        height: "100vh",
        backgroundColor: "#009A62",
        color: "#f0f9f1",
      }}
    >
      <div
        style={{
          padding: "16px 40px",
          borderBottom: "1px solid #f0f9f1",
          cursor: "pointer",
          fontSize: "18px",
          fontWeight: "700",
        }}
        onClick={() => router.push("/users")}
      >
        社員一覧
      </div>
      <div
        style={{
          padding: "16px 40px",
          borderBottom: "1px solid #f0f9f1",
          cursor: "pointer",
          fontSize: "18px",
          fontWeight: "700",
        }}
      >
        位置情報設定
      </div>
      <div
        style={{
          padding: "16px 40px",
          borderBottom: "1px solid #f0f9f1",
          cursor: "pointer",
          fontSize: "18px",
          fontWeight: "700",
        }}
      >
        ブース設定
      </div>
      <div
        style={{
          padding: "16px 40px",
          borderBottom: "1px solid #f0f9f1",
          cursor: "pointer",
          fontSize: "18px",
          fontWeight: "700",
        }}
      >
        社員図鑑設定
      </div>
      <div
        style={{
          padding: "16px 40px",
          borderBottom: "1px solid #f0f9f1",
          cursor: "pointer",
          fontSize: "18px",
          fontWeight: "700",
        }}
        onClick={() => router.push("/users")}
      >
        ユーザー一覧
      </div>
    </div>
  );
};

export default memo(SideMenu);
