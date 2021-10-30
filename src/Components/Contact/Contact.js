import React from "react";
import ContactIntro from "./Compo/ContactIntro";
import MainContact from "./Compo/MainContact";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact-banner text-center flex items-center justify-center">
        <h3 className="text-4xl text-white font-bold">Contact Us</h3>
      </section>
      <ContactIntro />
      <MainContact />
    </>
  );
};

export default Contact;
