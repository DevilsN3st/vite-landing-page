import viteSvg from '../assets/vite.svg';

function Navbar() {

    return(
        <div className="navbar">
            <img src={viteSvg} alt="vite logo" className="navbar-logo"/>
            <ul className="navbar-ul">
                <li className="nav-element">Features</li>
                <li className="nav-element">Testimonials</li>
                <li className="nav-element">FAQs</li>
            </ul>
            <a href="#">
                <button className="btn btn-primary">Join the Waitlist</button>
            </a>
        </div>
    )

}

export default Navbar   