import "./intro.scss";

import Typical from 'react-typical'


export default function Intro() {


  return (
    <div className="home" id="home">
      <div className="left">
        <div className="imgContainer">
          <img src="https://drive.google.com/uc?export=view&id=115Yk3231VTvs2GRp1ErPMOh8yT166SJt" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Shivam Nanda</h1>
          <h3>
          <Typical
        steps={['Programmer', 1000, 'Developer', 1500,'Student',2000,'Chess Enthusiast',2500]}
        loop={Infinity}
        wrapper="p"
            />
          </h3>

        </div>
        <a href="#skills">
          <img src="https://static.vecteezy.com/system/resources/previews/006/827/566/non_2x/down-arrow-icon-sign-symbol-logo-vector.jpg" alt="" />
        </a>
        
      </div>
    </div>
  );
}
