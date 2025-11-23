import React from "react";
import emailjs from "emailjs-com";
import "./BulkOrder.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BulkOrder = ({ open, onClose }) => {
  if (!open) return null;

  const sendMail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j9knhcv",
        "template_gomj6na",
        e.target,
        "He6_S6S0xik3uL-ZH"
      )
      .then(() => {
        toast.success("Message Sent Successfully! 🎉");
        e.target.reset();
        setTimeout(() => onClose(), 1200);
      })
      .catch(() => {
        toast.error("Message Failed! Try again ❌");
      });
  };

  return (
    <>
      <div className="popup-overlay" role="dialog" aria-modal="true" aria-label="Bulk Order Enquiry">
        <div className="popup-container">

          <button className="close-btn" onClick={onClose} aria-label="Close Popup">×</button>

          <h2 className="popup-title">Bulk Order Enquiry</h2>

          <form className="popup-form" onSubmit={sendMail}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Email Address" required />
            <input type="tel" name="phone" placeholder="Phone Number" required />
            <input type="text" name="product" placeholder="Product Name" required />
            <input type="number" name="quantity" placeholder="Quantity (kg / bags)" required />
            <textarea name="message" placeholder="Message (optional)"></textarea>

            <button type="submit" className="submit-btn">Submit</button>
          </form>

        </div>
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
};

export default BulkOrder;
