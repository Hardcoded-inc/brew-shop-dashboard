import React from "react";
import {
  FiTrash2,
  FiChevronDown,
  FiWifi,
  FiBluetooth,
  FiBattery,
  FiGithub
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
        <span className="system-header__right--span">
          Clean&nbsp;session <FiTrash2 />
        </span>
        <span className="system-header__right--span">
          Source&nbsp;code <FiGithub />
        </span>
      </div>
    </div>
  );
};

export default Header;
