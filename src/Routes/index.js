import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { routesConstant } from "./RoutesConstant";

import Articles from "../Pages/Articles/Index";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const AppRoutes = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path={routesConstant.Articles} element={<Articles />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRoutes;
