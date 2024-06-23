import type { Metadata } from "next";
import { Inter } from "next/font/google";


import "./assets/css/bootstrap.min.css"
import "./assets/css/font-awesome.min.css"
import "./assets/css/owl.carousel.min.css"
import "./assets/css/jquery-ui.min.css"
import "./assets/css/slicknav.min.css"
import "./assets/css/flaticon.css"
import "./assets/css/style.css"
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import ComponentFactory from "./ComponentFactory";
import { Header } from "./components/Header";
import Footer from "./components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Property",
  description: "Select your dream house from us",
  icons: {
    icon: './favicon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  let blocks: Array<any> = new Array<any>();
  let error = "";
  return (
    <html lang="en">
      <Head>
        <Link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"></Link>
      </Head>
      <body data-new-gr-c-s-check-loaded="14.1184.0" data-gr-ext-installed>
        <Header></Header>
        {
          blocks && blocks.map((block: any) => ComponentFactory(block))
        }

        {error !== null || error !== undefined ? error: null}

        {children}
        <Script strategy="afterInteractive" src="js/jquery-3.3.1.min.js"></Script>
        <Script strategy="afterInteractive" src="js/bootstrap.min.js"></Script>
        <Script strategy="afterInteractive" src="js/jquery.nice-select.min.js"></Script>
        <Script strategy="afterInteractive" src="js/owl.carousel.min.js"></Script>
        <Script strategy="afterInteractive" src="js/jquery-ui.min.js"></Script>
        <Script strategy="afterInteractive" src="js/jquery.slicknav.js"></Script>
        <Script strategy="afterInteractive" src="js/main.js"></Script>
        <Footer></Footer>
      </body>
    </html>
  );
}
