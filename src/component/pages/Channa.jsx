import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Channa.css";
import channaImg from "../../assets/Channapacket.png";
import bannerImg from "../../assets/banner.jpg";
import Footer from "../Footer";
import { Helmet } from "react-helmet-async";  // ⭐ SEO IMPORT

const Channa = () => {
  const [packSize, setPackSize] = useState("500gm");
  const [showNutrition, setShowNutrition] = useState(false);

  const nutritionData = [
    { label: "Energy (kcal)", value: "360" },
    { label: "Protein (g)", value: "19" },
    { label: "Carbohydrates (g)", value: "60" },
    { label: "Dietary Fibre (g)", value: "12" },
    { label: "Total Fat (g)", value: "5" },
    { label: "Iron (mg)", value: "4.5" }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <>
      {/* ⭐ SEO FOR PRODUCT PAGE */}
      <Helmet>
        <title>Chana Dal | Premium Unpolished Bengal Gram | Nutrofill</title>

        <meta
          name="description"
          content="Nutrofill Chana Dal is unpolished, rich in protein, fiber and nutrients. Perfect for dals, soups, snacks, and Indian recipes. Available in 500gm, 1kg, and 5kg pack sizes."
        />
        <meta
          name="keywords"
          content="Chana Dal, Bengal Gram Dal, Unpolished Dal, Nutrofill Chana Dal, High Protein Dal, Buy chana dal online, Premium pulses"
        />

        <link rel="canonical" href="https://www.nutrofill.com/products/chana-dal" />

        {/* Open Graph */}
        <meta property="og:title" content="Nutrofill Chana Dal – Premium Unpolished Bengal Gram" />
        <meta
          property="og:description"
          content="Packed with protein & fiber. Perfect for healthy Indian meals."
        />
        <meta property="og:image" content={channaImg} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://www.nutrofill.com/products/chana-dal" />

        {/* Twitter share */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nutrofill Chana Dal – Pure & Unpolished" />
        <meta name="twitter:image" content={channaImg} />

        {/* ⭐ Product Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Nutrofill Chana Dal",
              "image": "${channaImg}",
              "description": "Premium Unpolished Chana Dal rich in protein, fiber and essential nutrients. Ideal for dals, soups, and snacks.",
              "brand": { "@type": "Brand", "name": "Nutrofill" },
              "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "INR",
                "lowPrice": "70",
                "highPrice": "360",
                "availability": "https://schema.org/InStock",
                "url": "https://www.nutrofill.com/products/chana-dal"
              }
            }
          `}
        </script>
      </Helmet>

      <motion.div className="bansi-page" initial="hidden" animate="visible" variants={fadeUp}>
        <motion.div className="bansi-container" variants={fadeUp}>
          {/* Product Image */}
          <motion.div className="bansi-image" variants={zoomIn}>
            <img src={channaImg} alt="Nutrofill Chana Dal Premium Unpolished" />
          </motion.div>

          {/* Product Info */}
          <motion.div className="bansi-info" variants={fadeUp}>
            <motion.h1 className="bansi-title" variants={fadeUp}>
              Chana Dal
            </motion.h1>

            <motion.p className="bansi-desc" variants={fadeUp}>
              Chana Dal, also known as Bengal Gram Dal, is packed with protein, fiber, and essential nutrients. 
              Perfect for making delicious dals, soups, and snacks. Our Chana Dal is unpolished, retaining its
              natural taste and nutritional value. It supports heart health, aids digestion, and provides lasting energy.
            </motion.p>

            {/* Pack Sizes */}
            <div className="bansi-pack">
              <h3>Available Pack Sizes:</h3>
              <div className="pack-buttons">
                {["500gm", "1kg", "5kg"].map((size) => (
                  <motion.button
                    key={size}
                    className={`pack-btn ${packSize === size ? "active" : ""}`}
                    onClick={() => setPackSize(size)}
                    whileTap={{ scale: 0.9 }}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Nutrition */}
            <div className="bansi-nutrition">
              <motion.h3
                className="nutrition-toggle"
                onClick={() => setShowNutrition(!showNutrition)}
                whileHover={{ scale: 1.02 }}
              >
                🍽️ Nutritional Information per 100gm (Click to {showNutrition ? "Hide" : "View"})
              </motion.h3>

              <motion.div
                className={`nutrition-grid-wrapper ${showNutrition ? "show" : ""}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: showNutrition ? "auto" : 0,
                  opacity: showNutrition ? 1 : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="nutrition-grid">
                  {nutritionData.map((item) => (
                    <motion.div
                      key={item.label}
                      className="nutrition-box"
                      variants={fadeUp}
                      whileHover={{ scale: 1.05 }}
                    >
                      <p className="nutrition-value">{item.value}</p>
                      <p className="nutrition-label">{item.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Banner */}
        <motion.div className="banner" variants={zoomIn} initial="hidden" whileInView="visible">
          <img src={bannerImg} alt="Nutrofill Banner" />
        </motion.div>
      </motion.div>

      <Footer />
    </>
  );
};

export default Channa;
