import React from "react";
import "../styles/App.css";
import Home from "../pages/Home";
import AppContext from '../contexts/AppContext'
import useGetUsers from "../hooks/useGetUsers";

const App = () => {
  const usersApi = useGetUsers();  
  return (
    <AppContext.Provider value={usersApi}>
    <div className="App">   
    <Home />      
    </div>
    </AppContext.Provider>
  );
}
export default App
