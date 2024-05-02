import { Route,Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/HomePage.jsx";
import ArticleDetailPage from "./pages/articleDetail/ArticleDetailPage.jsx";
import RegisterPage from "./pages/register/register.jsx"

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path="/" element={<HomePage />}/>
        <Route  path="/blog/:id" element={<ArticleDetailPage />}/>
        <Route  path="/register" element={<RegisterPage />}/>


      </Routes>
      
    </div>
  );
}

export default App;
