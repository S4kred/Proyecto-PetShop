import { ToastContainer } from "react-toastify";
import Routing from "./routes/Routing";


export default function App() {
    

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
