import React from "react";
import { MailIcon } from "@heroicons/react/solid";

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="container flex flex-col flex-wrap justify-center px-4 py-12 mx-auto text-center sm:flex-row">
        <div className="flex flex-col sm:flex-row">
          <div className="flex flex-col">
            <a
              className="mb-3 text-2xl hover:text-white"
              href="mailto:joshualokken@pm.me"
            >
              Email Me{" "}
              <span>
                <MailIcon className="inline-block w-10" />
              </span>
            </a>
            <h4 className="mb-4 text-2xl font-bold text-white">
              &copy; 2022 Joshua Lokken
            </h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
