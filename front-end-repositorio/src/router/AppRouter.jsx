
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";



const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
            <Route path="/homeStart/" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
