import React from "react";
import { Footer, Label, TextInput } from "flowbite-react";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import logo from "../assets/logo.png";

const MyFooter = () => {
  return (
    <footer className="bg-neutralBlack text-white">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto py-12">
        <div className="grid w-full justify-between gap-8 sm:flex sm:items-start sm:justify-between md:flex md:grid-cols-1">
          <div className="mt-2">
            <a
              href=""
              className="text-2xl font-semibold flex items-center space-x-3"
            >
              <img
                src={logo}
                alt=""
                className="w-10 inline-block items-center"
              />
              <span>Zero One Consultants</span>
            </a>
            <div className="my-8">
              <p className="mb-1"> Zero One Accountants & Consultants</p>
              <p>Registered Office Address: Imtiaz House, 15 Holborn Drive, Manchester M8 8US</p>
            </div>

            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-start text-white">
              <a href="#" className="transition-transform duration-300 hover:scale-110">
                <BsFacebook className="text-white text-2xl" />
              </a>
              <a href="#" className="transition-transform duration-300 hover:scale-110">
                <BsInstagram className="text-white text-2xl" />
              </a>
              <a href="#" className="transition-transform duration-300 hover:scale-110">
                <BsTwitter className="text-white text-2xl" />
              </a>
              <a href="#" className="transition-transform duration-300 hover:scale-110">
                <BsGithub className="text-white text-2xl" />
              </a>
            </div>
          </div>
          <div className="md:w-2/3 grid grid-cols-2 gap-8 items-start sm:mt-4 sm:grid-cols-3 sm:gap-6 text-white">
            <div>
              <Footer.Title title="Financial Accountants" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-white">Pay As You Earn</Footer.Link>
                <Footer.Link href="#" className="text-white">Value Added Tax</Footer.Link>
                <Footer.Link href="#" className="text-white">Working For Yourself</Footer.Link>
                <Footer.Link href="#" className="text-white">Corporation Tax</Footer.Link>
                <Footer.Link href="#" className="text-white">Dividends</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Business Management" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-white">Business Structure</Footer.Link>
                <Footer.Link href="#" className="text-white">Dividends</Footer.Link>
                <Footer.Link href="#" className="text-white">Company Formation</Footer.Link>
                <Footer.Link href="#" className="text-white">Restoring A Company</Footer.Link>
                <Footer.Link href="#" className="text-white">ID Requirement</Footer.Link>
                <Footer.Link href="#" className="text-white">New Client</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Trusted Management" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-white">Trusted Management Services</Footer.Link>
                <Footer.Link href="#" className="text-white">Privacy Policy</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-600" />
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Zero One Accountants & Consultants. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;