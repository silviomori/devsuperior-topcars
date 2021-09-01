import './styles.css';
import ProductPng from 'assets/images/car-card.png';

const ProductCard = () => {
  return (
    <div className="base-card product-card">
      <div className="product-card-img">
        <img src={ProductPng} alt="Product Name" />
      </div>
      <div className="product-card-description">
        <h1>Audi Supra TT</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
      </div>
      <div className="product-card-action">
        <button className="btn btn-primary">
          <h1>Buy</h1>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
