import React, { useEffect } from "react";
import logo from "../../components/assets/images/logo.png";
import { Link } from "react-router-dom";

const Search = ({ CompareItem }) => {
  useEffect(() => {
    const handleScroll = () => {
      const search = document.querySelector(".search");
      if (search) {
        search.classList.toggle("active", window.scrollY > 100);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width ">
            <img src={logo} alt="" />
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search and hit enter..." />
            <span>All Category</span>
          </div>

          <div className="icon f_flex width">
            <i className="fa fa-user icon-circle"></i>
            <div className="compare">
              <Link to="/compare">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
