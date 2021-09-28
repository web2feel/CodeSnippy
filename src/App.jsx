import Home from "./pages/Home";
import "remixicon/fonts/remixicon.css";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const fetchData = () => {
    return new Promise((resolve, reject) => {
      fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  };
  useEffect(() => {
    const myPromise = fetchData();
    console.log(myPromise);
    toast.promise(
      myPromise,
      {
        loading: "Loading",
        success: (data) => `Successfully saved ${data.name}`,
        error: (err) => `This just happened: ${err.toString()}`,
      },
      {
        style: {
          minWidth: "250px",
          paddingBottom:"140px"
        },
        success: {
          duration: 5000,
          icon: "🔥",
        },
        position:"bottom-right"
      }
    );
  });
  return (
    <>
      <div>
        <Toaster />
      </div>
      <Home />
    </>
  );
}

export default App;
