import React, { useState, useEffect } from "react";
import "./heroSlider.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import hero1 from "../assets/poster-1.png";
import hero2 from "../assets/poster-2.png";
import hero3 from "../assets/img-hero.webp";
import { Helmet } from "react-helmet-async";   // ⭐ SEO Import

const slides = [
  {
    image: hero1,
    title: "The Nutrofill Promise",
    text: "Hand-picked ingredients, careful processing, and untouched packaging ensuring superior quality.",
  },
  {
    image: hero2,
    title: "Nourishing Every Home",
    text: "Delivering natural goodness and rich nutrition to your family’s meals.",
  },
  {
    image: hero3,
    title: "From Nature to You",
    text: "Pure, wholesome, and responsibly sourced — that’s the Nutrofill way.",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <>
      {/* ⭐ SEO TAGS */}
      <Helmet>
        <title>Nutrofill – Pure Atta, Daal & Grains | Shudh Premium Quality</title>

        <meta
          name="description"
          content="Nutrofill offers premium quality Atta, Dal, Pulses & Grains. Processed with hygiene & sourced responsibly for natural nutrition. Order bulk or retail."
        />
        <meta
          name="keywords"
          content="Nutrofill, Atta, Dal, Pulses, Best Atta Brand, Sharbati Wheat, Buy Dal Online, Pure Grains, Bulk Order"
        />

        <link rel="canonical" href="https://www.nutrofill.com/" />

        {/* Open Graph Social Preview */}
        <meta property="og:title" content="Nutrofill – Pure Atta, Dal & Grains" />
        <meta
          property="og:description"
          content="Natural, healthy and chemical-free premium grains directly from farmers to your home."
        />
        <meta property="og:image" content={hero3} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nutrofill.com/" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nutrofill — Shudh Premium" />
        <meta name="twitter:image" content={hero3} />
      </Helmet>

      <section className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="overlay"></div>
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.text}</p>
              <a href="products" className="hero-btn">Click to Explore</a>
            </div>
          </div>
        ))}

        <button className="arrow left" onClick={prevSlide}>
          <FaArrowLeft />
        </button>
        <button className="arrow right" onClick={nextSlide}>
          <FaArrowRight />
        </button>

        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={index === current ? "dot active" : "dot"}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </section>
    </>
  );
};

export default HeroSlider;
