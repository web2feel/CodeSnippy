import Home from "./pages/Home";
import "remixicon/fonts/remixicon.css";
import toast, { Toaster } from "react-hot-toast";
import FileUpload from "./components/FileUpload/FileUpload";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && <FileUpload show={show} setShow={setShow} />}

      <Home />
    </>
  );
}

export default App;
