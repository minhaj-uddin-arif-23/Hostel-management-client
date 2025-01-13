import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { GrRestaurant } from "react-icons/gr";
import { Link } from "react-router-dom";
import whastapp from "../assets/ww.svg";
export default function Footer() {
  return (
    <div>
      <footer className="footer md:p-24  p-10">
        <nav>{/* add next */}</nav>
        <nav>
          <h6 className="text-xl">Services</h6>
          <a className="link link-hover hover:text-yellow-400">Branding</a>
          <a className="link link-hover hover:text-yellow-400">Design</a>
          <a className="link link-hover hover:text-yellow-400">Marketing</a>
          <a className="link link-hover hover:text-yellow-400">Advertisement</a>
        </nav>
        <nav>
          <h6 className="text-xl">Company</h6>
          <a className="link link-hover hover:text-yellow-400">About us</a>
          <a className="link link-hover hover:text-yellow-400">Contact</a>
          <a className="link link-hover hover:text-yellow-400">Jobs</a>
          <a className="link link-hover hover:text-yellow-400">Press kit</a>
        </nav>
        <nav>
          <h6 className="text-xl">Explore</h6>
          <a className="link link-hover hover:text-yellow-400">Features</a>
          <a className="link link-hover hover:text-yellow-400">Enterprise</a>
          <a className="link link-hover hover:text-yellow-400">Security</a>
          <a className="link link-hover hover:text-yellow-400">Pricing</a>
        </nav>
        <nav>
          <h6 className="text-xl">Apps</h6>
          <a className="link link-hover hover:text-yellow-400">Mac</a>
          <a className="link link-hover hover:text-yellow-400">Windows</a>
          <a className="link link-hover hover:text-yellow-400">iPhone</a>
          <a className="link link-hover hover:text-yellow-400">Android</a>
        </nav>
        <form>
          <h6 className="text-2xl">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered join-item"
              />
              <Link>
                <button className="btn btn-warning join-item">Subscribe</button>
              </Link>
            </div>
            <nav>
              <div className=" flex gap-4 mt-3">
                <a>
                  <a href="#" className="text-sky-400 hover:text-white">
                    <FaTwitter size={24} />
                  </a>
                </a>
                <a>
                  <a
                    href="https://youtube.com/@arifuddinm?si=22UL4wQGvb0vFJFT"
                    className="text-red-500 hover:text-white"
                  >
                    <FaYoutube size={24} />
                  </a>
                </a>
                <a>
                  <a href="#" className="text-pink-500 hover:text-white">
                    <FaInstagram size={24} />
                  </a>
                </a>
                <a href="#" className="text-blue-600 hover:text-white">
                  <FaFacebookF size={24} />
                </a>
                <a href="#" className="text-blue-600 hover:text-white">
                  <img
                    src={whastapp}
                    alt=""
                    title="01306291550"
                    className="w-6 text-green-400 "
                  />
                </a>
              </div>
              <div className=" mt-3 space-y-2">
                <p className="text-md font-semibold">Mobile: +880-157185975</p>
                <p className="font-semibold text-md">Email: uarif@gmail.com</p>
              </div>
            </nav>
          </fieldset>
        </form>
        {/* add something */}
        <nav>{/* add next */}</nav>
      </footer>
      <div className="divider w-11/12 mx-auto"></div>
      <footer className="footer footer-center text-base-content p-2">
        <footer className="footer footer-center   p-4">
          <aside>
            {/* <GrRestaurant className=" text-5xl" /> */}
            <p className="font-bold">
              ArifFoodi Industries Ltd.
              <br />
              Providing reliable tech since 2024
            </p>
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
          </aside>
          <nav>
            <div className="grid grid-flow-col gap-4">
              <a>
                <a href="#" className="text-sky-400 hover:text-white">
                  <FaTwitter size={24} />
                </a>
              </a>
              <a>
                <a href="#" className="text-red-500 hover:text-white">
                  <FaYoutube size={24} />
                </a>
              </a>
              <a>
                <a href="#" className="text-pink-500 hover:text-white">
                  <FaInstagram size={24} />
                </a>
              </a>
              <a href="#" className="text-blue-600 hover:text-white">
                <FaFacebookF size={24} />
              </a>
            </div>
            <button id="scrollToTopBtn" class="scroll-to-top">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M18.364 16.95l-6.364-6.364-6.364 6.364-1.414-1.414 7.778-7.778 7.778 7.778z" />
              </svg>
            </button>
          </nav>
        </footer>
      </footer>
    </div>
  );
}
