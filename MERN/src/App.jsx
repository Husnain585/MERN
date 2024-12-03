import { useState } from "react";
import Auth from "./Auth";
import Index from "./component";
import { Route, Routes } from "react-router-dom";
import Layout from "./component/Layout/layout";
import Sidebar from "./component/Layout/sidebar";

const App = () => {
  const [count, setCount] = useState(0); 
  return (
    <>
    <div className="flex flex-col justify-center items-center h-screen  w-full">
      {/* <Routes>
          <Route index element={<Auth />} />
          <Route path="index" element={<Index />} />
      </Routes>
       */}
      <Layout /> 
      
    </div>
    </>
  );
};

export default App;
