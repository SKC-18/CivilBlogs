import React from "react";

import { MainLayout } from "../../components/MainLayout.jsx";
import Hero from "./container/Hero.jsx";
import Article from "./container/Article.jsx";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <Article />
    </MainLayout>
  );
};

export default HomePage;
