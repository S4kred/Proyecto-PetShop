import { ToastContainer } from "react-toastify";
import Routing from "./routes/Routing";

export default function App() {
    console.log(import.meta.env.VITE_BACKEND_URL)

  return (
    
    <>
      <Routing />
      <ToastContainer 
      position="top-right" 
      autoClose={5000} 
      hideProgressBar 
      newestOnTop={false} 
      closeOnClick 
      rtl={false} 
      pauseOnVisibilityChange 
      draggable 
      pauseOnHover 
      /> 
    </>
  );
}
