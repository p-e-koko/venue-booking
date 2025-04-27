import { observer } from "@legendapp/state/react";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

const App = observer(function App({ Component, pageProps }: AppProps) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }


  return <Component {...pageProps} />;
});

export default App;