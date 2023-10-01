import "./HomePageStyles.css";
import AtlanLogo from "../assets/AtlanLogo.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className='home__container'>
        <div className='home__heading-container'>
          <h1 className='home__heading'>QueryCraft: SQL Mastery Simplified{<br />}</h1>
          <h2 className='home__subheading'>
          Accelerate Your SQL Queries Like Never Before. 
          Experience the Joy of Effortless Query Writing.
          </h2>
          <Link to='/query'>
            <button className='home__button'>Hop In</button>
          </Link>
        </div>
      </div>
      <footer className='home__footer'>
        <p>
          Designed by {" "}
          <a
            href='https://atlan.com/'
            target='_blank'
            rel='noreferrer'
            aria-label='atlan-link'
          >
            <img src={AtlanLogo} alt='atlan' className='home__footer-logo' />
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
