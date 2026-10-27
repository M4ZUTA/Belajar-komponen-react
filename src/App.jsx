import React, { useState } from "react";
import Login from "@/Pages/Auth/Login/Login";
import AdminLayout from "@/Pages/Admin/AdminLayout";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return <AdminLayout onLogout={() => setIsLoggedIn(false)} />;
  }

  return <Login onLogin={() => setIsLoggedIn(true)} />;
};

export default App;
