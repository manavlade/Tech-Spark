"use client"

import React from "react";
import linkedin from "../assets/linkd.svg";
import twitter from "../assets/twit.svg";
import instagram from "../assets/insta.svg";
import youtube from "../assets/yout.svg";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Instagram, LinkedinIcon, X, Youtube } from "lucide-react";

function Footer() {
    const router = useRouter();

    return (
        <footer className=" w-[90%] mx-auto text-black pt-8" id="footer">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap border-b border-[#ACA7FF]   justify-between ">
                    <div className="flex flex-col">
                        {/* Logo */}
                        <div className="flex items-center mb-4">
                            <img src="" className="w-52" />
                        </div>
                    </div>
                    {/* Download and Sign In */}
                    <div className="flex lg:space-x-12  items-center mb-6">
                     
                        <div className="flex space-x-4">
                            {/* <button
                className="bg-[#2E67F4] hover:bg-blue-700 focus-within:ring-4 focus-within:ring-blue-800  text-white font-montserrat font-[700] px-4 py-2 rounded-lg"
                onClick={handleDownloadClick}
              >
                Download App
              </button> */}
                            {/* <button className="border border-[#2E67F4] text-[#2E67F4] font-montserrat font-[700] px-4 py-2 rounded-full">
                Trade Online
              </button> */}
                        </div>
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-2  md:grid-cols-2 font-montserrat lg:grid-cols-4 lg:gap-8">
                    <div>
                        <h3 className="text-lg font-[600] mb-2">Company</h3>
                        <ul className="space-y-2 font-worksans font-[400]">
                            {/* <li>About Us</li> */}
                            <Link href="/privacy-policy" className="hover:text-blue-700">
                                <li>Privacy policy</li>
                            </Link>
                            <Link href="/terms-condition" className="hover:text-blue-700">
                                <li>Terms and Conditions</li>
                            </Link>
                            <Link href="/fairplay" className="hover:text-blue-700">
                                <li>Cookie Policy</li>
                            </Link>
                            <Link href="/refund-policy" className="hover:text-blue-700">
                                <li>Refund Policy</li>
                            </Link>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-[600] mb-2">Resources</h3>
                        <ul className="space-y-2 font-worksans font-[400]">
                            <li>Help Centre</li>
                            <li>Blog</li>
                            <li>Developer Docs</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-[600] mb-2">Careers</h3>
                        <ul className="space-y-2 font-worksans font-[400]">
                            <li>Open Roles</li>
                        </ul>
                    </div>
                    <div>
                        <Link href="/contact-us">
                            {" "}
                            <h3 className="text-lg  font-[600] mb-2 hover:text-blue-700">
                                Contact Us
                            </h3>
                        </Link>
                        <ul className="space-y-2 font-worksans  lg:w-full font-[400]">
                            <Link href="mailto:hello@techspringsolutions.com">
                                {" "}
                                <li>hello@techspringsolutions.com</li>
                            </Link>
                            <Link href="mailto:support@techspringsolutions.com">
                                <li className="break-words">support@techspringsolutions.com</li>
                            </Link>
                        </ul>
                    </div>
                </div>

                {/* About Section */}
                <div className="border-t flex flex-wrap justify-between w-full border-[#ACA7FF] mt-8 pt-4">
                    <div className="lg:w-[54vw] ">
                        <h3 className="text-lg  mb-2 font-semibold font-montserrat">
                            About TechSpring
                        </h3>
                        <p className="text-black font-[400] font-montserrat text-md  ">
                            TechSpring is a full-stack mobile app and game development studio dedicated to building digital experiences that matter. We help startups and enterprises turn bold ideas into high-performance apps and immersive games that scale. With a focus on innovation, design excellence, and reliable delivery, TechSpring is your trusted technology partner from concept to launch.
                        </p>
                    </div>
                    <div className=" flex flex-col xl:w-[25vw] ">
                        <h3 className="text-lg font-[600] mb-6 font-montserrat ">
                            Partners and sponsors
                        </h3>
                        <div className="flex space-x-4 xl:space-x-8 lg:space-x-4">
                            {/* Placeholder for icons */}
                            <img src="" />
                            <img src="" />
                            <img src="" />
                            <img src="" />
                            <img src="" />
                        </div>
                    </div>
                </div>

                {/* Disclaimer Section */}
                <div className="border-t flex border-[#ACA7FF] mt-8 pt-4">
                    <div className="w-full">
                        <div className="flex w-full justify-between">
                            <div className="w-[20vw]">
                                <h3 className="text-lg font-[600] text-[#262626] mb-2 font-montserrat">
                                    Disclaimer
                                </h3>
                            </div>
                            <div className="hidden lg:block xl:w-[40vw] h-[100%] ">
                                <div className="flex justify-center gap-5 items-center">
                                    {/* Placeholder for social media icons */}
                                    <div
                                        className="flex items-center space-x-2 cursor-pointer"
                                        onClick={() =>
                                            window.open(
                                                "https://www.linkedin.com/showcase/yoursay-app/about/",
                                                "_blank"
                                            )
                                        }
                                    >
                                       <LinkedinIcon/>
                                    </div>
                                    <div
                                        className="flex items-center space-x-2 cursor-pointer"
                                        onClick={() =>
                                            window.open("https://x.com/Yoursaylive", "_blank")
                                        }
                                    >
                                      <X/>
                                    </div>
                                    <div
                                        className="flex items-center space-x-2 cursor-pointer"
                                        onClick={() =>
                                            window.open(
                                                "https://www.instagram.com/yoursay.live/",
                                                "_blank"
                                            )
                                        }
                                    >
                                      <Instagram/>
                                    </div>
                                    <div
                                        className="flex items-center space-x-2 cursor-pointer"
                                        onClick={() =>
                                            window.open(
                                                "https://www.youtube.com/@yoursaylive/",
                                                "_blank"
                                            )
                                        }
                                    >
                                      <Youtube/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ul className="text-[#262626] space-y-2 w-full mb-2  font-montserrat">
                            <li>
                                All digital products developed by TechSpring are tailored to client requirements.  <br />End-user compliance with respective app store, platform, or regulatory guidelines is advised.
                            </li>
                            <li>
                                TechSpring assumes no liability for misuse or misrepresentation of delivered technology.
                            </li>
                        </ul>

                        <div className=" block md:block mt-2 lg:hidden ">
                            <div className="lg:flex lg:space-x-16 md:flex md:space-x-4 lg:justify-between ">
                                {/* Placeholder for social media icons */}
                                <div className="flex space-x-7 py-1 lg:space-x-0 ">
                                    <div className="flex items-center space-x-2">
                                        <img src={""} />
                                        <p className="font-worksans font-[600] ">Linkedin</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <img src={""} />
                                        <p className="font-worksans font-[600]">Twitter</p>
                                    </div>
                                </div>
                                <div className="flex space-x-4 pb-1 lg:space-x-0 ">
                                    <div className="flex items-center space-x-2">
                                        <img src={""} />
                                        <p className="font-worksans font-[600]">Instagram</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <img src={""} />
                                        <p className="font-worksans font-[600]">Youtube</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Media Icons */}
            </div>
            <div className="flex justify-center items-end font-montserrat text-xs md:text-sm lg:text-sm text-white bg-black">
                <p>Copyright TechSpring Technologies LLP, 2025. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
