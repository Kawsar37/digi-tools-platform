import React from "react";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="bg-[#101727] text-white">
      <div className="container flex gap-12 pt-20 sm:pt-30 pb-15 border-b border-gray-400/30 flex-wrap">
        <div>
          <h1 className="font-semibold text-4xl md:text-5xl mb-3">DigiTools</h1>
          <p className="text-gray-400">
            Premium digital tools for creators, professionals, and businesses.{" "}
            <br />
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        <div className="space-y-3">
          <h6 className="text-xl">Product</h6>
          <ul className="text-gray-400 space-y-3">
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div>
          <h6 className="text-xl mb-3">Company</h6>
          <ul className="text-gray-400 space-y-3">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div>
          <h6 className="text-xl mb-3">Resources</h6>
          <ul className="text-gray-400 space-y-3">
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h6 className="text-xl mb-3">Social Links</h6>
          <ul className="text-neutral! flex gap-3">
            <li className="h-10 w-10 bg-white rounded-full text-2xl flex justify-center items-center">
              <a>
                <RiInstagramFill />
              </a>
            </li>
            <li className="h-10 w-10 bg-white rounded-full text-2xl flex justify-center items-center">
              <a>
                <BiLogoFacebookSquare />
              </a>
            </li>
            <li className="h-10 w-10 bg-white rounded-full text-2xl flex justify-center items-center">
              <a>
                <FaXTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-gray-600 text-sm flex justify-between container py-8 flex-wrap-reverse">
        <p className="mt-2 sm:mt-0">© 2026 Digitools. All rights reserved.</p>
        <div className="flex gap-6">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies</p>
        </div>
      </div>
    </footer>
  );
}
