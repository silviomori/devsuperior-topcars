import ProductCard from 'components/ProductCard';
import SearchBar from 'components/SearchBar';

const Catalog = () => {
  return (
    <div className="my-4 container">
      <div className="row">
        <div className="col=sm=12">
          <SearchBar />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-lg-4 col-xxl-3">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xxl-3">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xxl-3">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xxl-3">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xxl-3">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xxl-3">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xxl-3">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xxl-3">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xxl-3">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xxl-3">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
