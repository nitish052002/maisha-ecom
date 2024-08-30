import React from "react";
import brandLogo from "../../assets/logo.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./footer.css";
function Footer() {
  return (
    <footer className="px-10 p-20">
      <div className="flex justify-between  items-center md:items-start flex-col md:flex-row">
        <div className="logo mb-5 md:mb-0">
          <img src={brandLogo} alt="" />
        </div>
        <div className="nav_container flex justify-between gap-10 items-center md:p-0 md:pe-20">
           

          <nav className="md:ps-10 p-0">
            <span className="font-bold text-base mb-10">Solutions</span>
            <ul>
              <li className="py-3">Marketing</li>
              <li className="py-3">Anylitics</li>
              <li className="py-3">Commerce</li>
              <li className="py-3">Insights</li>
            </ul>
          </nav>

          <nav className="md:ps-10 p-0">
            <span className="font-bold text-base mb-10">Company</span>
            <ul>
              <li className="py-3">About</li>
              <li className="py-3">Blog</li>
              <li className="py-3">Jobs</li>
              <li className="py-3">Press</li>
            </ul>
          </nav>

          <nav>
            <span className="font-bold text-base mb-10">Legal</span>
            <ul>
              <li className="py-3">Claim</li>
              <li className="py-3">Privacy</li>
              <li className="py-3">Guides</li>
              <li className="py-3">Terms</li>
            </ul>
          </nav>
        </div>
      </div>
        <hr />
      <div className="flex justify-between py-10  md:flex-row flex-col">
        <div >
          <p className="p-1 font-bold">Subscribe to our Newsletter</p>
          <p className="p-1">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
        </div>
        <div>
          <div className="flex py-3">
            <div className="px-5 py-2 bg-white   rounded-md   flex items-center bg-slate-100	border-2 me-5 ">
              <input
                type="text"
                placeholder="Enter your email"
                name="search"
              />
            </div>
            
            <div className="subscribe-btn text-white rounded-md py-2 px-5">
                <button className="font-bold">Subscribe</button>
              </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex items-center justify-between py-10 md:flex-row flex-col">
        <div className="p-3">© 2020 Your Company, Inc. All rights reserved.</div>
        <div className="p-3 flex justify-between gap-4">
          <span>
            <InstagramIcon />
          </span>
          <span>
            <FacebookOutlinedIcon />
          </span>
          <span>
            <XIcon />
          </span>
          <span>
            <YouTubeIcon />
          </span>
          <span>
            <PinterestIcon />
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
