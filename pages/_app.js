import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Loading from "../components/loading/loading";

import { magic } from "../lib/magic-client";

import "../styles/globals.css";

/*
Here we can add thing before the components gets rendered
*/

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const handleLoggedIn = async () => {
  //     const isLoggedIn = await magic.user.isLoggedIn();
  //     if (isLoggedIn) {
  //       // route to /
  //       router.push("/");
  //     } else {
  //       // route to /login
  //       router.push("/login");
  //     }
  //   };
  //   handleLoggedIn();
  // }, []);

  useEffect(() => {
    const handleComplete = () => {
      setIsLoading(false);
      console.log("handleComplete");
    };
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return isLoading ? <Loading /> : <Component {...pageProps} />;
}

export default MyApp;
