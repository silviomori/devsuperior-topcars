import './styles.css';

const SearchBar = () => {
  return (
    <div className="base-card search-card">
      <div className="search-card-content">
        <input placeholder="Search Top Cars"></input>
        <button className="btn btn-primary">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
