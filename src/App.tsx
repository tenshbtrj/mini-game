import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "@/components/pages/home/Home";
import { Clicker } from "@/components/pages/clicker/Clicker";
import { DailyMemo } from "@/components/pages/memo/DailyMemo";
import { Test } from "./components/pages/test/Test";
import LoginAuthenticator from "./LoginAuthenticator";
import { Login } from "./components/pages/login/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <LoginAuthenticator okRole={["admin"]}>
              <Home />
            </LoginAuthenticator>
          }
        />
        <Route
          path="/clicker"
          element={
            <LoginAuthenticator okRole={["admin"]}>
              <Clicker />
            </LoginAuthenticator>
          }
        />
        <Route
          path="/Memo"
          element={
            <LoginAuthenticator okRole={["admin"]}>
              <DailyMemo />
            </LoginAuthenticator>
          }
        />
        <Route
          path="/Test"
          element={
            <LoginAuthenticator okRole={["admin"]}>
              <Test />
            </LoginAuthenticator>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
