import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { NextUIProvider } from "@nextui-org/react";
import Header from "@/components/landingV2/Header";
import Footer from "@/components/landingV2/Footer";
import AuthProvider from "@/components/auth/AuthContext";
import { Providers } from "./providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Krutrim",
  description: "AI Workloads with krutrim cloud.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="app/favicon.ico" />
        <meta
          name="viewport"
          content="height=device-height, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <title>Krutrim - India&#39;s own AI</title>
        <meta
          name="description"
          content="Scale your computational capabilities and experience the GPU services like never before"
        />
        <meta property="og:url" content="https://cloud.olakrutrim.com" />
        <meta
          property="og:image"
          content="https://olakrutrim.com/wp-content/uploads/2023/12/Krutrim-fevicon.png"
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CS9041Z6EB"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CS9041Z6EB');
          `,
          }}
        />
      <script dangerouslySetInnerHTML=
        {
          { __html: `
            var moeDataCenter = "dc_3";  
            var moeAppID = "WAY71GBZKJDZ9548UJKHRBNR_DEBUG";  
           
            !function(e,n,i,t,a,r,o,d){
              if(!moeDataCenter||!moeDataCenter.match(/^dc_[0-9]+$/gm)){
                  return console.error("Data center has not been passed correctly. Please follow the SDK installation instruction carefully.");
              }
              else{
                  console.log("Moenage is initialized and working!!")
              }
              var s=e[a]=e[a]||[];if(s.invoked=0,s.initialised>0||s.invoked>0)return console.error("MoEngage Web SDK initialised multiple times. Please integrate the Web SDK only once!"),!1;e.moengage_object=a;var l={},g=function n(i){return function(){for(var n=arguments.length,t=Array(n),a=0;a<n;a++)t[a]=arguments[a];(e.moengage_q=e.moengage_q||[]).push({f:i,a:t})}},u=["track_event","add_user_attribute","add_first_name","add_last_name","add_email","add_mobile","add_user_name","add_gender","add_birthday","destroy_session","add_unique_user_id","update_unique_user_id","moe_events","call_web_push","track","location_type_attribute"],m={onsite:["getData","registerCallback"]};for(var c in u)l[u[c]]=g(u[c]);for(var v in m)for(var f in m[v])null==l[v]&&(l[v]={}),l[v][m[v][f]]=g(v+"."+m[v][f]);r=n.createElement(i),o=n.getElementsByTagName("head")[0],r.async=1,r.src=t,o.appendChild(r),e.moe=e.moe||function(){return(s.invoked=s.invoked+1,s.invoked>1)?(console.error("MoEngage Web SDK initialised multiple times. Please integrate the Web SDK only once!"),!1):(d=arguments.length<=0?void 0:arguments[0],l)},r.addEventListener("load",function(){if(d)return e[a]=e.moe(d),e[a].initialised=e[a].initialised+1||1,!0}),r.addEventListener("error",function(){return console.error("Moengage Web SDK loading failed."),!1})
          }
         
          (window,document,"script","https://cdn.moengage.com/release/"+moeDataCenter+"/moe_webSdk.min.latest.js","Moengage");
           
          Moengage = moe({
            app_id: moeAppID,
            debug_logs: 1. // Dont make this 0. We shall test it in Test env only
          });
          if(Moengage!==null){
            console.log("MoEngage SDK is initialized");
          }
          else{
            console.log("MoEngage SDK Failed to  initialize");
          }

          `, 
          }
        }
      />
        
        
      </head>

      <body className={poppins.className}>
        <Providers>
          <NextUIProvider>
            <AuthProvider>
              <Header />
              <Toaster />
              {children}
              <Footer />
            </AuthProvider>
          </NextUIProvider>
        </Providers>
      </body>
    </html>
  );
}
