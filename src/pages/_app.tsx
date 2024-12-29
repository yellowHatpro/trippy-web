import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-[#dbecfb] dark:bg-[#013E6C]">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
