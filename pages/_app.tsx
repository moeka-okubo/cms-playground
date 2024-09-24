import { SideMenu } from "@/components";
import "@/styles/globals.css";
import "@/styles/mui.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", overflow: "hidden" }}
    >
      <SideMenu />
      <main
        style={{
          flex: 1,
          minHeight: "100vh",
          backgroundColor: "#f0f9f1",
          marginLeft: "190px",
          padding: "40px",
          overflowY: "auto",
        }}
      >
        <Component {...pageProps} />
      </main>
    </div>
  );
}
