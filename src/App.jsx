import { useState, useEffect } from "react";
// import Loader from "./components/Loader/Loader";
// import Home from "./components/Home/Home";
import Loader from "./pages/Loader/Loader"
import Home from "./pages/Home/Home"

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Loader /> : <Home />}
    </>
  );
}
