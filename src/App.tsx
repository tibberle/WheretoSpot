import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import TextStyles from "./styles/text";
import PageOutline from "./styles/PageOutline";
import BusinessPage from "./pages/business";
import CustomerPage from "./pages/customer";
import AddNewSpotPage from "./pages/business/add-a-new-spot";
import AboutPage from "./pages/about";
import CategoryPage from "./pages/customer/category";
import DahabGuidePage from "./pages/customer/dahab-guide";

const App: React.FC = () => {
  return (
    <Router basename="/WheretoSpot">
      <PageOutline />
      <GlobalStyles />
      <TextStyles />
      <Routes>
        <Route path="/business" element={<BusinessPage />} />
        <Route path="/customer" element={<CustomerPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/business/add-a-new-spot" element={<AddNewSpotPage />} />
        <Route path="/customer/category" element={<CategoryPage />} />
        <Route path="/customer/dahab-guide" element={<DahabGuidePage />} />
      </Routes>
    </Router>
  );
};

export default App;
