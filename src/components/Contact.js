import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="mb-8">
      <h1 className="font-press-start-2P mb-8 text-red-600 text-xl md:text-3xl">
        Get In Touch.
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-start">
        <img
          src="/contact.gif"
          alt="contact_gif"
          className="w-96 hidden md:block"
        />
        <div className="md:ml-16 font-press-start-2P text-xs">
          <p className="mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <form className="my-10">
            <h2 className="font-press-start-2P my-8">Message Me:</h2>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="text-xs outline-none border-b-2 border-b-red-600 pb-1 w-full mb-8"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="text-xs outline-none border-b-2 border-b-red-600 pb-1 w-full mb-8"
            />
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Enter Your Message"
              className="text-xs outline-none border-2 border-red-600 p-2 w-full mb-8"
            ></textarea>
            <button
              type="submit"
              className="bg-red-600 text-white px-8 py-2 rounded-lg hover:scale-110 transition-all"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
