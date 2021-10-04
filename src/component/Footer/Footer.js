import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div class="mt-5 pt-5 pb-5 footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 col-xs-12 about-company">
            <h2>EDx.edu</h2>
            <p class="pr-5 text-white-50">
              Online yellow-shapeTutorial From Top Instructor. Meet
              university,and cultural institutions, who'll share their
              experience.{" "}
            </p>
            <p>
              <a href="#facebook">
                <i class="fa fa-facebook-square mr-1"></i>
              </a>
              <a href="#linkedin">
                <i class="fa fa-linkedin-square"></i>
              </a>
            </p>
          </div>
          <div class="col-lg-3 col-xs-12 links">
            <h4 class="mt-lg-0 mt-sm-3">Links</h4>
            <ul class="m-0 p-0">
              <li>
                <Link to="/home" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="nav-link">
                  Service
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/teachers" className="nav-link">
                  Teacher
                </Link>
              </li>
            </ul>
          </div>
          <div class="col-lg-4 col-xs-12 location">
            <h4 class="mt-lg-0 mt-sm-4">Location</h4>
            <p>22, Dhaka, Bangladesh</p>
            <p class="mb-0">
              <i class="fa fa-phone mr-3"></i>(541) 754-3010
            </p>
            <p>
              <i class="fa fa-envelope-o mr-3"></i>info@hsdf.com
            </p>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col copyright">
            <p class="">
              <small class="text-white-50">© 2019. All Rights Reserved.</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
