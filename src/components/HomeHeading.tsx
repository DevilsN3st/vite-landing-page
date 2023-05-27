import viteImg from "../assets/vite.svg";
import reactImg from "../assets/react_original_logo_icon_146374.png";
import webImg from "../assets/web-icon.png";
import nodeImg from "../assets/node-icon.png";
import tsImg from "../assets/pngwing.com(1).png";
import jsImg from "../assets/js-icon.png";
import viteImgBlack from "../assets/vite_logo_icon_249258.png";

function HomeHeading() {
  return (
    <>
      <div className="home-heading">
        <div className="home-heading-text">
          <h1>
            Everything Your Team Needs to know{" "}
            <span style={{ color: "#28A1FF" }}>Just a question away.</span>
          </h1>
          <a href="#">
            <button className="btn btn-primary">Join the Waitlist</button>
          </a>
        </div>
        <div className="home-heading-img">
          <div className="circle circle-rad1"></div>
          <div className="circle circle-rad2"></div>
          <div className="circle circle-rad3"></div>
          <div className="circle circle-rad4"></div>
          <div className="circle circle-rad5"></div>
          <img src={viteImg} alt="vite"  />
          <div className="arrangement top-left1" >
          <img src={reactImg} alt="react" />
          </div>
          <div className="arrangement top-left2">
          <img src={webImg} alt="web"  />
          </div>
          <div className="arrangement bottom-right">
          <img src={nodeImg} alt="node"  />
          </div>
          <div className="arrangement bottom-left">
          <img src = {tsImg} alt="ts" />
          </div>
          <div className="arrangement top-right">
          <img src = {jsImg} alt="js" />
          </div>
          <div className="arrangement top-center">
          <img src = {viteImgBlack} alt="js" />
          </div>
        </div>
      </div>
    </>
  );
}
export default HomeHeading;
