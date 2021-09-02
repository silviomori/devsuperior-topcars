import './styles.css';
import CarHeaderSvg from 'assets/images/car-header.svg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card main-card bg-primary">
        <div className="main-card-img">
          <img src={CarHeaderSvg} alt="Product Name" />
        </div>
        <div className="main-card-content">
          <h1>The perfect car for you</h1>
          <p>Discover our cars and take another step to make your dreams come true</p>
        </div>
      </div>
      <div className="base-card action-card">
        <Link to="/catalog">
          <button className="btn btn-primary">Check catalog</button>
        </Link>
        <p>Start browsing now</p>
      </div>
    </div>
  );
};

export default Home;
