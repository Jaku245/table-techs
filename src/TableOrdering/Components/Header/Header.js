import "./Header.css";
import logoWhite from "../../../Assets/logo-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

function HeaderComponent() {

  const { pathname } = useLocation();

  return (
    <div className="order-header-bg">
      <div className="order-header-logo">
        {pathname !== "/order" && <FontAwesomeIcon icon={faArrowLeft} className="order-header-back-btn" />}
        <img src={logoWhite} className="order-header-logo-img" alt="order-header-logo" />
        <span className="order-header-text poppins-black">Table Techs</span>
      </div>
    </div>
  );
}

export default HeaderComponent;
