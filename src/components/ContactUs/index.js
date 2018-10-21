import React from "react";

const ContactUs = () => (
  <form className="mx-auto max-w-lg mb-8 py-4 px-10 border shadow bg-white">
    <p className="leading-loose mb-8">We just need a few details from you.</p>

    <label className="block font-bold mb-2 text-xs uppercase" htmlFor="name">Your name</label>
    <input
      className="appearance-none block bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
      id="name"
      type="text"
      placeholder=""
    />

    <label className="block font-bold mb-2 text-xs uppercase" htmlFor="contact">How can we reach you?</label>
    <input
      className="appearance-none block bg-grey-lighter mb-2 p-3 rounded-md text-grey-darker w-full"
      id="contact"
      type="text"
      placeholder=""
    />
    <p className="text-xs mb-6 italic">An email address or phone number will do.</p>

    <label className="block font-bold mb-2 text-xs uppercase" htmlFor="message">How can we help you?</label>
    <textarea
      className="appearance-none bg-grey-lighter mb-2 p-3 rounded-md text-grey-darker w-full"
      placeholder=""
      rows="8"
    />
    <p className="text-xs mb-6 italic">Don't be shy.  Be as brief or as detailed as you'd like.</p>

    <div className="flex">
      <button className="flex-1 border-b-8 border border-red-lighter rounded shadow px-6 py-3 text-lg text-grey-darkest hover:shadow-md no-underline font-semibold">Send Message</button>
    </div>
  </form>
);

export default ContactUs;
