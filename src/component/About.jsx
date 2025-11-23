import React from "react";
import { motion } from "framer-motion";
import "./About.css";

import aboutMain from "../assets/wheatField.jpg";
import wheatField from "../assets/farmerImage.jpg";
import farmerImage from "../assets/arhaar.png";
import productImage from "../assets/banner.jpg";

import { Helmet } from "react-helmet-async";   // ⭐ SEO Import

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const zoomIn = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <>
      {/* ⭐ ABOUT PAGE SEO */}
      <Helmet>
        <title>About Nutrofill Agritech | Premium Atta, Dal & Healthy Food Products</title>
        <meta
          name="description"
          content="Nutrofill Agritech is a trusted Indian brand offering premium Atta, pulses, grains, spices and daily food essentials. Established in 2019, committed to purity, quality and farmer empowerment."
        />
        <meta
          name="keywords"
          content="About Nutrofill, Nutrofill Agritech, MP Sharbati Atta, premium atta brand India, healthy food products, pulses and grains"
        />

        <link rel="canonical" href="https://www.nutrofill.com/about" />

        {/* Open Graph */}
        <meta property="og:title" content="Nutrofill Agritech – Pure and Premium Food Products" />
        <meta
          property="og:description"
          content="India’s trusted premium food brand delivering 100% pure Atta, Dal & Essentials directly from farmers."
        />
        <meta property="og:image" content={aboutMain} />
        <meta property="og:url" content="https://www.nutrofill.com/about" />
        <meta property="og:type" content="business.business" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* ⭐ Google Business & Organization Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Nutrofill Agritech Private Limited",
            "url": "https://www.nutrofill.com",
            "logo": "https://www.nutrofill.com/logo.webp",
            "description": "Nutrofill Agritech delivers high-quality Atta, pulses and food essentials across India.",
            "foundingYear": "2019",
            "sameAs": [
              "https://www.instagram.com/nutrofill/",
              "https://www.facebook.com/nutrofill/",
              "https://twitter.com/nutrofill",
              "https://www.youtube.com/nutrofill"
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "JP Nagar",
              "addressLocality": "Bengaluru",
              "addressRegion": "Karnataka",
              "postalCode": "560078",
              "addressCountry": "IN"
            }
          }
          `}
        </script>
      </Helmet>

      {/* ==== ABOUT PAGE UI ==== */}
      <section className="about-section">

        {/* Hero */}
        <motion.div
          className="about-hero"
          style={{ backgroundImage: `url(${aboutMain})` }}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="overlay"></div>
          <motion.div className="about-hero-content" variants={fadeUp}>
            <h1>
              Nutrofill Agritech Private Limited <span>™</span>
            </h1>
            <p className="about-tagline">Made with Love — Made in India</p>
          </motion.div>
        </motion.div>

        <div className="about-container">

          {/* About */}
          <motion.div className="about-header" initial="hidden" whileInView="visible" variants={fadeUp}>
            <motion.div className="about-left" variants={zoomIn}>
              <img src={wheatField} alt="Nutrofill Wheat Field" />
            </motion.div>

            <motion.div className="about-right" variants={fadeUp}>
              <h2>About Us</h2>
              <p>
                Nutrofill Agritech Private Limited is an Indian home–grown brand committed to delivering 
                fresh, nutritious and premium quality food products to Indian kitchens.
              </p>
              <p>
                Established in 2019, Nutrofill specializes in premium Atta (Wheat Flour), pulses, spices, 
                salt, ready-to-cook mixes and everyday essentials. Every grain is carefully sourced from 
                trusted farmers and processed with industry-leading hygiene standards to ensure purity,
                authenticity and freshness in every pack.
              </p>
              <p>
                At Nutrofill, we believe in purity, tradition and the rich flavours of Indian agriculture.
              </p>
            </motion.div>
          </motion.div>

          {/* Promise */}
          <motion.div className="about-promise" initial="hidden" whileInView="visible" variants={fadeUp}>
            <motion.div className="promise-text" variants={fadeUp}>
              <h2>The Nutrofill Promise</h2>
              <p>Hand-picked grains sourced from trusted farmers.</p>
              <p>Stone-ground slow processing for natural nutrition retention.</p>
              <p>100% MP Sharbati wheat used in our premium Atta.</p>
            </motion.div>

            <motion.img src={farmerImage} alt="Nutrofill Farmer" variants={zoomIn} />
          </motion.div>

          {/* Why Choose */}
          <motion.div className="about-choose" initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2>Why Choose Nutrofill Pure Premium Atta?</h2>
            <div className="choose-grid">
              <motion.img src={productImage} alt="Nutrofill Product" variants={zoomIn} />
              <motion.ul variants={fadeUp}>
                <li>✔ 100% MP Sharbati wheat</li>
                <li>✔ Rich in protein & fibre</li>
                <li>✔ Soft & fluffy rotis with natural aroma</li>
                <li>✔ Stone-ground for maximum nutrition</li>
              </motion.ul>
            </div>
          </motion.div>

          {/* Nutrition */}
          <motion.div className="about-nutrition" initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2>Nutrition Facts (Per 100g)</h2>
            <ul>
              <li>Calories: 364</li>
              <li>Total Fat: 1g</li>
              <li>Protein: 10g</li>
              <li>Iron: 25% DV</li>
              <li>Magnesium: 5% DV</li>
            </ul>
            <p>*Based on a 2,000-calorie daily diet.</p>
          </motion.div>

          {/* Distributor */}
          <motion.div className="about-distributor" initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2>Distributorship Opportunity</h2>
            <p>Join our growing network and bring Nutrofill products to your region.</p>
          </motion.div>

          {/* Offices */}
          <motion.div className="about-offices" initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2>Our Offices</h2>
            <ul>
              <li>Head Office: Bengaluru, Karnataka</li>
              <li>Branch Office: Prayagraj, Uttar Pradesh</li>
              <li>Branch Office: Ballia, Uttar Pradesh</li>
            </ul>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default About;
