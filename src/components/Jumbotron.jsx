import iPhone from "../assets/images/iphone-14.jpg";
import HoldingIphone from "../assets/images/iphone-hand.png";

const Jumbotron = ({ handleLearnMore }) => {
  return (
    <div className="jumbotron-section wrapper">
        <h2 className="title">New</h2>
        <img src={iPhone} alt="iPhone 14 pro" className="logo" />
        <p className="text">Big and bigger</p>
        <span className="description">
          from $41.62/mo. for 24 mo. or $999 before trade-in
        </span>
        <ul className="links">
          <li>
            <button className="button">Buy</button>
          </li>
          <li>
            <a className="link" onClick={handleLearnMore}>
              Learn more
            </a>
          </li>
        </ul>
        <img src={HoldingIphone} alt="holdingIphone" className="iphone-img" />
    </div>
  );
};

export default Jumbotron;
