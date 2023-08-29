import "./header.scss";
import {
  arrowDownIcon,
  calender2Icon,
  logoIcon,
  logo_sec_arrow,
  messageQAIcon,
  notificationIcon,
  userProfile,
} from "../../constant";
import { SearchInput } from "../input/SearchInput";

export default function Header({ clname, open, setOpen }) {
  return (
    <header className={clname}>
      <div className="lt">
        <div className="lg_wrap">
          <span>
            <img src={logoIcon} alt="logo" />
          </span>
          <strong style={{ display: open && "none" }}>Project M.</strong>

          <div onClick={() => setOpen(!open)} className="ar_nv">
            <img src={logo_sec_arrow} alt="logo" />
          </div>
        </div>
      </div>
      <div className="rt">
        <SearchInput />
        <div className="header_menu">
          <span className="tab">
            <img src={calender2Icon} alt="calender" />
          </span>
          <span className="tab">
            <img src={messageQAIcon} alt="calender" />
          </span>
          <span className="tab">
            <img src={notificationIcon} alt="calender" />
          </span>
          <div className="user_details">
            <div>
              <h4>Anima Agrawal</h4>
              <p>U.P, India</p>
            </div>
            <span className="userImg">
              <img src={userProfile} alt="" />
            </span>
            <img src={arrowDownIcon} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}
