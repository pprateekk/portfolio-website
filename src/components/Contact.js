import React, { useState } from "react";
import axios from "axios";
import githubimg from "../assets/icons/github.png";
import linkedin from "../assets/icons/link.png";
import email from "../assets/icons/email2.png";
import call from "../assets/icons/call.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://getform.io/f/1aa8f7a0-f1b0-43ea-8183-2ef7e669985e",
        formData
      );

      if (response.status === 200) {
        setFormData({ name: "", email: "", message: "" });
        window.alert("Your message has been sent!");
      } else {
        alert("There was an error sending your message.");
      }
    } catch (error) {
      console.error("Error sending the form data:", error);
      window.alert("There was an error sending your message.");
    }
  };

  return (
    <section
      id="contact"
      className="bg-neutral-200 text-black py-10 pb-10 mt-10"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-2 grid-flow-row px-40">
          {/* <div className=""></div> */}
          {/* <div className=""></div> */}
          <div className="">
            <h2 className="text-4xl font-julius font-semibold mb-10">
              Contact Me
            </h2>
            <div className="flex flex-wrap gap-5 font-playfair text-xl">
              <a
                href="mailto:pprateek@uoguelph.ca"
                className="opacity-100 hover:opacity-75 pb-2 "
              >
                <img src={email} alt="email" />
              </a>
              pprateek@uoguelph.ca
            </div>

            <div className="flex flex-wrap gap-5 font-playfair text-lg">
              <img src={call} alt="call icon"></img>
              &nbsp;(519)-731-3907
            </div>
            <div className="flex flex-wrap gap-5 pt-4">
              <a
                href="https://www.github.com/pprateekk"
                className="opacity-100 hover:opacity-75"
              >
                <img src={githubimg} alt="github" />
              </a>
              <a
                href="https://www.linkedin.com/in/p-prateek"
                className="opacity-100 hover:opacity-75"
              >
                <img src={linkedin} alt="linkedin" />
              </a>
            </div>
          </div>

          <div className="font-cormorant text-xl pt-5">
            <form onSubmit={handleFormSubmit}>
              {" "}
              {/* // action="https://getform.io/f/1aa8f7a0-f1b0-43ea-8183-2ef7e669985e"
              // method="POST" */}
              <div className="text-left grid grid-cols-1 pb-3">
                {/* <label>Name:</label> */}
                <input
                  className="text-black pl-2"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="text-left grid grid-cols-1 pb-3">
                {/* <label>Email:</label> */}
                <input
                  className="w-full text-black pl-2"
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="text-left grid grid-cols-1 pb-6">
                {/* <label>Message:</label> */}
                <textarea
                  className="w-full text-black pl-2"
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <button
                className="box-border hover:box-content h-8 w-20 border-2"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
