import "./header.css";
import logo from "../../Assets/logo-orange.png";

function HeaderComponent() {
  return (
    <div className="header-bg">
      <div className="header-logo">
        <img src={logo} className="header-logo-img" alt="header-logo" />
        <span className="header-logo-text poppins-black">Table Techs</span>
      </div>
      <div className="header-navigation">
        <span className="header-navigation-text poppins-regular">Pricing</span>
        <span className="header-navigation-text poppins-regular">About Us</span>
        <span className="header-navigation-text poppins-regular">Contact</span>
      </div>
      <div className="header-btn">
        <span className="header-btn-text poppins-regular">Get Started</span>
      </div>
    </div>
  );
}

export default HeaderComponent;
