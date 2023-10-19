"use client";

import { Footer } from "flowbite-react";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsDribbble,
} from "react-icons/bs";

export default function MainFooter() {
  return (
    <div className=" bg-[#14100C] text-white py-7 md:py-20">
      <div className="container mx-auto">
        <Footer className="shadow-none bg-transparent" container>
          <div className="w-full">
            <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-10 md:mb-0">Barber Shop</h1>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 text-white">
                <div>
                  <Footer.Title title="about"  className="text-white"/>
                  <Footer.LinkGroup col>
                    <Footer.Link href="#" className="text-white">Facebook</Footer.Link>
                    <Footer.Link href="#" className="text-white">Instargram</Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div>
                  <Footer.Title title="Follow us" className="text-white"/>
                  <Footer.LinkGroup col>
                    <Footer.Link className="text-white" href="#">Github</Footer.Link>
                    <Footer.Link className="text-white" href="#">Discord</Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div>
                  <Footer.Title className="text-white" title="Legal" />
                  <Footer.LinkGroup col>
                    <Footer.Link className="text-white" href="#">Privacy Policy</Footer.Link>
                    <Footer.Link className="text-white" href="#">Terms & Conditions</Footer.Link>
                  </Footer.LinkGroup>
                </div>
              </div>
            </div>
            <Footer.Divider />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
              <Footer.Copyright className="text-primaryColor" by="Barber Shop™" href="#" year={2023} />
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                <Footer.Icon className="text-white" href="#" icon={BsFacebook} />
                <Footer.Icon className="text-white" href="#" icon={BsInstagram} />
                <Footer.Icon className="text-white" href="#" icon={BsTwitter} />
                <Footer.Icon className="text-white" href="#" icon={BsGithub} />
                <Footer.Icon className="text-white" href="#" icon={BsDribbble} />
              </div>
            </div>
          </div>
        </Footer>
      </div>
    </div>
  );
}
