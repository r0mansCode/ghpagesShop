import "./Footer.css";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="navigation">
        <NavLink className="footerLink" to="/home">
          Par Mums
        </NavLink>
        <NavLink className="footerLink" to="/">
          Veikals
        </NavLink>
        <NavLink className="footerLink" to="/contacts">
          Kontakti
        </NavLink>
      </div>
      <div className="footerSubContainer">
        <div>Seko mums:::</div>
        <FaFacebookF className="footerIcon" />
        <FaInstagram className="footerIcon" />
        <FaYoutube className="footerIcon" />
      </div>
    </div>
  );
};
