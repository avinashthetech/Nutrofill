import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Navbar from "./component/Navbar";
import HeroSlider from "./component/HeroSlider";
import Products from "./component/Products";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

// Product Pages
import Atta from "./component/pages/Atta";
import Channa from "./component/pages/Channa";
import Mixed from "./component/pages/Mixed";
import Urad from "./component/pages/Urad";
import Kidney from "./component/pages/Kidney";
import BulkOrder from "./component/pages/BulkOrder";
import BansiRava from "./component/BansiRava";
import MoongDal from "./component/BansiRava";   // ✅ ADDED

function App() {
  return (
    <BrowserRouter>

      {/* Global SEO Tags */}
      <Helmet>
        <title>Nutrofill – Pure Atta, Daal & Grocery Products</title>
        <meta
          name="description"
          content="Nutrofill delivers pure Atta, Daal, Mixed Dal, Rava, and premium grocery products. Healthy, hygienic and high-quality food items."
        />
        <meta
          name="keywords"
          content="Nutrofill, Atta, Daal, Moong Dal, Channa, Urad, Mixed Dal, Rava, Grocery Products"
        />
        <meta name="author" content="Nutrofill Foods" />
      </Helmet>

      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Helmet>
                <title>Nutrofill – Healthy Atta & Daal Products</title>
                <meta
                  name="description"
                  content="Buy high-quality Atta, Dal, Mixed Dal, Rava & healthy food products from Nutrofill."
                />
              </Helmet>

              <HeroSlider />
              <Products />
              <About />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Product Pages */}
        <Route
          path="/atta"
          element={
            <>
              <Helmet>
                <title>Nutrofill Atta – 100% Pure Wheat Flour</title>
                <meta
                  name="description"
                  content="Nutrofill Atta is stone-ground, pure, and fresh for soft chapatis."
                />
              </Helmet>
              <Atta />
            </>
          }
        />

        <Route
          path="/urad"
          element={
            <>
              <Helmet>
                <title>Nutrofill Urad Dal – High Quality</title>
              </Helmet>
              <Urad />
            </>
          }
        />

        <Route
          path="/mixed"
          element={
            <>
              <Helmet>
                <title>Nutrofill Mixed Dal – Premium Blend Quality</title>
              </Helmet>
              <Mixed />
            </>
          }
        />

        <Route
          path="/kidney"
          element={
            <>
              <Helmet>
                <title>Nutrofill Kidney Beans – Premium Rajma</title>
              </Helmet>
              <Kidney />
            </>
          }
        />

        <Route
          path="/channa"
          element={
            <>
              <Helmet>
                <title>Nutrofill Channa Dal – Premium Quality Dal</title>
              </Helmet>
              <Channa />
            </>
          }
        />

        {/* ✅ Moong Dal Page Added */}
        <Route
          path="/moong"
          element={
            <>
              <Helmet>
                <title>Nutrofill Moong Dal – Protein-Rich Premium Dal</title>
                <meta
                  name="description"
                  content="Nutrofill Moong Dal is fresh, protein-rich and easy to digest. Perfect for daily cooking."
                />
              </Helmet>
              <MoongDal />
            </>
          }
        />

        <Route
          path="/bansi-rava"
          element={
            <>
              <Helmet>
                <title>Nutrofill Bansi Rava – Fresh Rava</title>
              </Helmet>
              <BansiRava />
            </>
          }
        />

        {/* Separate Pages */}
        <Route
          path="/about"
          element={
            <>
              <Helmet>
                <title>About Nutrofill – Our Products & Quality</title>
              </Helmet>
              <About />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <Helmet>
                <title>Contact Nutrofill – Get in Touch</title>
              </Helmet>
              <Contact />
            </>
          }
        />

        <Route
          path="/products"
          element={
            <>
              <Helmet>
                <title>Nutrofill Products – Atta, Daal, Rava</title>
              </Helmet>
              <Products />
            </>
          }
        />

        <Route
          path="/bulk-order"
          element={
            <>
              <Helmet>
                <title>Nutrofill Bulk Orders – Wholesale Purchase</title>
              </Helmet>
              <BulkOrder />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
