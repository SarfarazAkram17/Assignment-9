import React from 'react';
import { Link, NavLink } from 'react-router';
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
const Footer = () => {
    const links = (
        <>
          <NavLink className="my-1 mx-4 text-[1rem]" to="/">
            Home
          </NavLink>
          <NavLink className="my-1 mx-4 text-[1rem]" to="/success">
            Success
          </NavLink>
          <NavLink className="my-1 mx-4 text-[1rem]" to="/myProfile">
            Profile
          </NavLink>
        </>
      );
    return (
<footer className="footer footer-horizontal footer-center bg-gray-100 text-base-content rounded p-10">
  <nav className="grid grid-flow-col gap-4">
{links}
  </nav>
  <nav>
    <div className="grid grid-flow-col items-center gap-4">
<Link to='https://web.facebook.com/' target='_blank'><FaFacebook size={25} className='text-[#0866FF]' /></Link>
<Link to='https://x.com/' target='_blank'><BsTwitterX  size={22} /></Link>
<Link to='https://github.com/' target='_blank'><FaGithub size={25} /></Link>
<Link to='https://www.linkedin.com/' target='_blank'><FaLinkedin size={25} className='text-[#0A66C2]' /></Link>
    </div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by <span className='font-semibold'>JobTrack</span></p>
  </aside>
</footer>
    );
};

export default Footer;