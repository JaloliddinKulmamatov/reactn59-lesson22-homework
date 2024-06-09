import loadingImg from './assets/loading.svg';
import callIcon from './assets/icons8-call-50.png';
import arrowDownIcon from './assets/icons8-arrow-down-50.png';
import searchIcon from './assets/icons8-search-50.png';
import accountIcon from './assets/icons8-account-32.png';
import cartIcon from './assets/icons8-cart-64.png';
import { useEffect, useState } from 'react';

function App() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count,setCount] = useState(0)

  const API__URL = "https://fakestoreapi.com/products";

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(API__URL);
        const data = await response.json();
        setProduct(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="body">
      {loading && (
          <div class="loadingio-spinner-double-ring-2by998twmg8 loading" ><div class="ldio-yzaezf3dcmj">
          <div></div>
          <div></div>
          <div><div></div></div>
          <div><div></div></div>
          </div></div>
      )}
      <header>
        <nav>
          <div className="container navbar">
            <ul>
              <span>
                <li>
                  <img src={callIcon} alt="Call" />
                  <p>+ 4904-049-950</p>
                </li>
                <li></li>
              </span>
              <span>
                <li>
                  <p>Get 50% off on the Selected items |</p>
                  <p className="nav__p2">Shop now</p>
                </li>
              </span>
              <span className="nav__list">
                <li>
                  <img src={arrowDownIcon} alt="Language" />
                  <p>English</p>
                </li>
                <li>
                  <img src={arrowDownIcon} alt="Location" />
                  <p>Location</p>
                </li>
              </span>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <div className="container">
          <div className="main">
            <div className="main__top">
              <span>
                <h1>LOGO</h1>
              </span>
              <span className="last__span">
                <p>Categories</p>
                <img src={arrowDownIcon} alt="Categories" />
                <p>What's new</p>
                <p>Sales</p>
                <p>Help</p>
              </span>
              <span>
                <form>
                  <input type="text" placeholder="Search Product" />
                  <img src={searchIcon} alt="Search" />
                </form>
                <span>
                  <img src={accountIcon} alt="Account" />
                  <p>Account</p>
                </span>
                <span>
                  <img  src={cartIcon} alt="Cart" />
                  <p>Cart {count}</p>
                </span>
              </span>
            </div>
          </div>
          <div className="main__mid">
            <div className="mid__start">
              <span>
                <p>Headphone Type</p>
                <img src={arrowDownIcon} alt="Headphone Type" />
              </span>
              <span>
                <p>Price</p>
                <img src={arrowDownIcon} alt="Price" />
              </span>
              <span>
                <p>Material</p>
                <img src={arrowDownIcon} alt="Material" />
              </span>
              <span>
                <p>Color</p>
                <img src={arrowDownIcon} alt="Color" />
              </span>
              <span>
                <p>All Filters</p>
              </span>
            </div>
            <span className="white_span">
              <p>Sort by</p>
              <img src={arrowDownIcon} alt="Sort by" />
            </span>
          </div>
          <div className="main__end">
            <div className="main__end__title">
              <h2>Headphones For You!</h2>
            </div>
            <div className="cards">
              {product.map((p) => (
                <div key={p.id} className="wrapper__card">
                  <div className="wrapper__card__top">
                    <img src={p.image} alt="abc" />
                  </div>
                  <div className="wrapper__card__button">
                    <h3>{p.title}</h3>
                    <p className="description">{p.description}</p>
                    <p className="rating">Rating: {p.rating.rate}</p>
                    <p className="rating">Count: {p.rating.count}</p>
                    <span>
                      <p className="price">${p.price}</p>
                    </span>
                    <button  onClick={ () => setCount(count + 1) } className='addCart'>Add to cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
