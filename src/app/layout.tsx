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
import { headers } from "next/headers";
import { Configs } from "./Config";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Property",
  description: "Select your dream house from us",
  icons: {
    icon: './favicon.ico'
  }
};

const fetchData = async () => {
  const headerList = headers();
  const pathname = headerList.get("x-current-path");
  console.log("Pathname", pathname);
  const url = Configs.BaseCMSUrl + "/layoutservice/" + Configs.WebsiteId + "/page/en-US/?apiKey=" + Configs.ApiKey;
  console.log("Url", url);
  const response =  await fetch(url + "&route=" + (pathname === "/" ? "/home": pathname), { headers: {"content-type": "application/json"}, next: { revalidate: 100 }});  
  const json = await response.json();  
  return json;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const response = await fetchData();
  console.log("response", response);
  let sharedComponents: any;
  let components: any;
  let blocks: Array<any> = new Array<any>();
  let error = "";

  if(response){
    sharedComponents = response?.sharedPage?.components;
    components = response?.page?.components;
    if(response?.error){
      error = response.error;
    }

    if(components){
      for (const [key, value] of Object.entries<any>(components)) {
        const componentName = key;
        const name = value?.name;
        const isPublished = value?.isPublished;
        blocks.push({component: componentName, name, value, isPublished});
      }
    }
  }

  return (
    <html lang="en">
      <Head>
        <Link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"></Link>
      </Head>
      <body data-new-gr-c-s-check-loaded="14.1184.0" data-gr-ext-installed>
        <Header components={sharedComponents?.Header}></Header>
        
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
        <Footer components={sharedComponents?.Footer}></Footer>
      </body>
    </html>
  );
}
