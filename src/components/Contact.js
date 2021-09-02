import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("#", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => {
        alert("Message sent.");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <div className="container flex flex-wrap px-5 py-10 mx-auto sm:flex-nowrap">
        <div className="relative flex items-end justify-start p-10 overflow-hidden bg-gray-900 rounded-lg lg:w-2/3 md:w-1/2 sm:mr-10">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.9)" }}
            src="https://www.google.com/maps/embed/v1/place?q=1624+4th+st+se+bemidji,+mn&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="relative flex flex-wrap py-6 bg-gray-900 rounded shadow-md">
            <div className="px-6 lg:w-1/2">
              <h2 className="text-xs font-semibold tracking-widest text-white title-font">
                ADDRESS
              </h2>
              <p className="mt-1">
                1624 4th St. SE <br />
                Bemidji, MN 56601
              </p>
            </div>
            <div className="px-6 mt-4 lg:w-1/2 lg:mt-0">
              <h2 className="text-xs font-semibold tracking-widest text-white title-font">
                EMAIL
              </h2>
              <a
                href="mailto:joshualokken@pm.me"
                className="leading-relaxed text-indigo-400"
              >
                joshualokken@pm.me
              </a>
              <h2 className="mt-4 text-xs font-semibold tracking-widest text-white title-font">
                PHONE
              </h2>
              <p className="leading-relaxed">218-368-3712</p>
            </div>
          </div>
        </div>
        <form
          name="contact"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="flex flex-col w-full mt-8 lg:w-1/3 md:w-1/2 md:ml-auto md:py-8 md:mt-0"
        >
          <h2 className="mb-1 text-3xl font-medium text-white sm:text-4xl title-font">
            Hire Me
          </h2>
          <p className="mb-5 leading-relaxed">
            I would love to work with your development team!
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="text-sm leading-7 text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="w-full px-3 py-1 text-base leading-8 text-gray-100 transition-colors duration-200 ease-in-out bg-gray-800 border border-gray-700 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="text-sm leading-7 text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full px-3 py-1 text-base leading-8 text-gray-100 transition-colors duration-200 ease-in-out bg-gray-800 border border-gray-700 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="text-sm leading-7 text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              className="w-full px-3 py-1 text-base leading-8 text-gray-100 transition-colors duration-200 ease-in-out bg-gray-800 border border-gray-700 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
