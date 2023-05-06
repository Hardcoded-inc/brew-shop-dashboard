import React from "react";
import {
  FiChevronDown,
  FiWifi,
  FiBluetooth,
  FiBattery,
  FiGithub,
  FiList,
} from "react-icons/fi";

const Header = () => {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());
  const [day, setDay] = React.useState(new Date().getDay());
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayShortcut = days[day];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="system-header">
      <div className="system-header__left">
        <span className="system-header__left--span">
          Applications <FiChevronDown />
        </span>
        <span className="system-header__left--span">
          Places <FiChevronDown />
        </span>
      </div>
      <div className="system-header__center">
        <p className="system-header__time">
          {dayShortcut}, {time}
        </p>
      </div>
      <div className="system-header__right">
        <FiWifi />
        <FiBluetooth />
        <FiBattery />

        <a
          className="system-header__right--span"
          href="https://owasp.org/Top10/"
          style={{ color: "white", textDecoration: "none" }}
          target="_blank"
        >
          <FiList />
          <span>OWASP&nbsp;TOP10</span>
        </a>

        <a
          className="system-header__right--span"
          href="https://github.com/Hardcoded-inc/brew-shop-platform"
          style={{ color: "white", textDecoration: "none" }}
          target="_blank"
        >
          <FiGithub />
          Source&nbsp;code
        </a>
      </div>
    </div>
  );
};

export default Header;
