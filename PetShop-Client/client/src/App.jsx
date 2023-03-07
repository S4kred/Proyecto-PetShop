import { useState } from "react";
import LogSignUp from "./page/LogSignUp";
import { ToastContainer } from "react-toastify";
import Routing from "./routes/Routing";
import { Button } from "react-bootstrap";

export default function App() {
  const [user, setUser] = useState(true);

  const lInlOut = () => {
    setUser(!user);
  }

  return (
    <>
    <div>
      <Button onClick={lInlOut}> Loguear y Desloguear </Button>
      {user ? (<Routing />) : (<div><LogSignUp /></div>)}
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
    </>
  );
}
