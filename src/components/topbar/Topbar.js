import "./topbar.scss";
import {Assignment} from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">

          <div className="itemContainer">
            <Assignment className="icon" />
            <span>Check out my <a className="resume" href ="https://drive.google.com/file/d/11Tb52BHbY_Jqd8SKa7awv1NLNprSMjcY/view?usp=sharing">resume</a></span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
