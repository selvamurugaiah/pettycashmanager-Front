import { useEffect, useState } from "react";
import { useGlobalContext } from "./Context/useContext";
import { Routes, Route, useNavigate } from "react-router-dom"
import Login from "./components/Login/Login";
import DashboardLogin from "./components/Login/Dashboard";
import Header from "./components/Login/Header";
import RegisterPage from "./components/Login/Register";
import PasswordResetPage from "./components/Login/PasswordReset";
import ForgotPasswordPage from "./components/Login/ForgotPassword";
import { Box, CircularProgress } from "@mui/material";
import ErrorPage from "./components/Login/Error";



function App() {

  const [data, setData] = useState(false);

  const { logindata, setLoginData } = useGlobalContext


  const history = useNavigate();

  const DashboardValid = async () => {
    let token = localStorage.getItem("usersdatatoken");

    const res = await fetch("https://password-reset-11vu.onrender.com/validuser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
    });

    const data = await res.json();

    if (data.status == 401 || !data) {
      console.log("user not valid");
    } else {
      console.log("user verify");
      setLoginData(data)
      history("/dash");
    }
  }

  useEffect(() => {
    setTimeout(()=>{
      DashboardValid();
      setData(true)
    },2000)

  }, [])

  return (
    <>
      {
        data ? (
          <>
            <Header/>

            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/dash" element={<DashboardLogin />} />
              <Route path="/password-reset" element={<PasswordResetPage/>} />
              <Route path="/forgotpassword/:id/:token" element={<ForgotPasswordPage/>} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </>

        ) : <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
          Loading... &nbsp;
          <CircularProgress/>
        </Box>
      }


    </>
  );
}

export default App;

