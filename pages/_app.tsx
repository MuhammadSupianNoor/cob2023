import "@/styles/utilities.css";
import "@/styles/homepage.css";
import "@/styles/detail.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { AuthContextProvider } from "@/context/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import {useRouter} from "next/router";

const noAuthRequired = ["/", "/login", "/signup"];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <>
      <AuthContextProvider>
        <Head>
          {/* boostrap css */}
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
            crossOrigin="anonymous"
          />

          {/* google font */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />

          {/* AOS Animation */}
          <link
            href="https://unpkg.com/aos@2.3.1/dist/aos.css"
            rel="stylesheet"
          />

          {/* call js boostrap */}
        </Head>

        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
          crossOrigin="anonymous"
        ></Script>
        {noAuthRequired.includes(router.pathname) ? (
          <Component {...pageProps} />
        ) : (
          <ProtectedRoute>
            <Component {...pageProps} />
          </ProtectedRoute>
        )}
      </AuthContextProvider>
    </>
  );
}
