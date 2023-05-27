import webGlobe from "../assets/web-globe.png";

function HomeBottom(){
    return(
        <div className="home-bottom">
            <img src={webGlobe} alt="web globe" className="home-bottom-img"/>
            <div className="home-bottom-text">
                <p>
                    <strong>

                Lorem ipsum dolor sit amet consectetur.
                    </strong>
                </p>
                <p>
                Lorem ipsum dolor sit amet consectetur.
                </p>
                <a href="#">
                <button className="btn btn-primary">Join the Waitlist</button>
            </a>
            </div>
        </div>
    )
}
export default HomeBottom;