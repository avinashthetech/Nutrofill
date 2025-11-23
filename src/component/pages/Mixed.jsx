import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Mixed.css";
import mixedImg from "../../assets/MixedPacket.png";
import bannerImg from "../../assets/banner.jpg";
import Footer from "../Footer";
import { Helmet } from "react-helmet-async";  // ⭐ SEO Import

const Mixed = () => {
  const [packSize, setPackSize] = useState("500g");
  const [showNutrition, setShowNutrition] = useState(false);

  const nutritionData = [
    { label: "Energy (kcal)", value: "350" },
    { label: "Protein (g)", value: "22" },
    { label: "Carbohydrates (g)", value: "60" },
    { label: "Dietary Fibre (g)", value: "12" },
    { label: "Total Fat (g)", value: "1.8" },
    { label: "Iron (mg)", value: "4.5" },
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
      {/* ⭐ PRODUCT SEO */}
      <Helmet>
        <title>Mixed Dal | High Protein 5 Pulse Blend | Nutrofill</title>

        <meta
          name="description"
          content="Nutrofill Mixed Dal is a blend of moong, masoor, urad, chana & arhar dal, offering high protein, fiber & minerals. Ideal for healthy daily meals."
        />
        <meta
          name="keywords"
          content="Mixed Dal, 5 dal mix, Nutrofill Mixed Dal, protein dal mix, high protein pulses, best dal blend, healthy dal"
        />

        <link rel="canonical" href="https://www.nutrofill.com/products/mixed-dal" />

        {/* Open Graph */}
        <meta property="og:title" content="Nutrofill Mixed Dal – Premium 5 Pulse Blend" />
        <meta
          property="og:description"
          content="A powerhouse of nutrition with 5 protein-rich dals: moong, masoor, urad, chana & arhar."
        />
        <meta property="og:image" content={mixedImg} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://www.nutrofill.com/products/mixed-dal" />

        {/* Twitter Preview */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nutrofill Mixed Dal – Healthy 5 Dal Blend" />
        <meta name="twitter:image" content={mixedImg} />

        {/* ⭐ Structured Product Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Nutrofill Mixed Dal",
              "image": "${mixedImg}",
              "description": "Premium Mixed Dal blend of moong, masoor, urad, chana and arhar. High protein, fiber and essential nutrients.",
              "brand": { "@type": "Brand", "name": "Nutrofill" },
              "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "INR",
                "lowPrice": "65",
                "highPrice": "390",
                "availability": "https://schema.org/InStock",
                "url": "https://www.nutrofill.com/products/mixed-dal"
              }
            }
          `}
        </script>
      </Helmet>

      <motion.div className="bansi-page" initial="hidden" animate="visible" variants={fadeUp}>
        <motion.div className="bansi-container" variants={fadeUp}>

          {/* Product Image */}
          <motion.div className="bansi-image" variants={zoomIn}>
            <img src={mixedImg} alt="Nutrofill Mixed Dal High Protein 5 Dal Blend" />
          </motion.div>

          {/* Product Info */}
          <motion.div className="bansi-info" variants={fadeUp}>
            <motion.h1 className="bansi-title" variants={fadeUp}>
              Mixed Dal
            </motion.h1>

            <motion.p className="bansi-desc" variants={fadeUp}>
              Nutrofill Mixed Dal is a perfect combination of high-quality pulses like moong, masoor,
              urad, chana, and arhar. This balanced blend offers a powerhouse of protein, fiber,
              and essential nutrients — ideal for delicious and nutritious meals for the entire family.
            </motion.p>

            {/* Pack Sizes */}
            <div className="bansi-pack">
              <h3>Available Pack Sizes:</h3>
              <div className="pack-buttons">
                {["500g", "1kg", "5kg"].map((size) => (
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

            {/* Nutrition Section */}
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

export default Mixed;
