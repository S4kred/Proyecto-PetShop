import { useState } from "react";
import LogSignUp from "./page/LogSignUp";
import { ToastContainer } from "react-toastify";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      {user ? (<h1>Estas logueado</h1>) : (<div><LogSignUp /></div>)}
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
    </div>
  );
}
