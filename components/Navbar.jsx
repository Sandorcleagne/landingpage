"use client";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div className="main">
        <div className="outerNav">
          <div className="nav">
            <div className="rightNav">
              <Image
                src={
                  "https://nuts.themerex.net/wp-content/uploads/2023/02/logo-inverse-retina.png"
                }
                alt="img"
                height={45}
                width={145}
              />
              <div className="nav-items">
                <div className="nav-item">Home</div>
                <div className="nav-item">Pages</div>
                <div className="nav-item">Blog</div>
                <div className="nav-item">Store</div>
                <div className="nav-item">Contact</div>
              </div>
            </div>
            <div className="leftNav">
              <button>Login </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
