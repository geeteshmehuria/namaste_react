import { Link } from "react-router-dom";
import { useOnlineStatus } from "../../utils/app-data";
const Header = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between shadow-md p-3">
      <div className="flex">
        <img
          src="https://c7.alamy.com/comp/2DH2W1H/restaurant-food-icon-concept-logo-vector-design-concept-2DH2W1H.jpg"
          alt="logo"
          width={50}
          className="rounded-lg"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex gap-4">
          <li>{onlineStatus ? "🟢" : "🔴"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/offers">Offers</Link></li>
          <li><Link to="/help">Help</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
