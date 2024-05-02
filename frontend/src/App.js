import { Route,Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/HomePage.jsx";
import ArticleDetailPage from "./pages/articleDetail/ArticleDetailPage.jsx";
import RegisterPage from "./pages/register/register.jsx"
import LoginPage from "./pages/login/login.jsx";
import ProfilePage from "./pages/profile/ProfilePage.jsx";

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path="/" element={<HomePage />}/>
        <Route  path="/blog/:id" element={<ArticleDetailPage />}/>
        <Route  path="/register" element={<RegisterPage />}/>
        <Route  path="/login" element={<LoginPage />}/>

        <Route  path="/profile" element={<ProfilePage />}/>




      </Routes>
      
    </div>
  );
}

export default App;
