import React, {useState} from 'react';
import { render } from 'react-dom';
import './App.css';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';
const PAGE_LOGIN = 'login'

function App() {

  const[Cart, setCart] = useState([]);
  const[page, setPage] = useState(PAGE_PRODUCTS);
  const[login, setLogin] = useState(PAGE_LOGIN);
  

  const [product] = useState([
    {
      name:'Laptop',
      cost:'£299.99',
      image:'https://brain-images-ssl.cdn.dixons.com/4/2/10199624/u_10199624.jpg'
    },

    {
      name:'PC Mouse',
      cost:'£15.00',
      image:'https://media.4rgos.it/s/Argos/9213513_R_SET?w=270&h=270&qlt=75&fmt=webp'
    },
    {
      name:'PC Keyboard',
      cost:'£80.00',
      image:'https://i.pcmag.com/imagery/reviews/03IEAmirU1dayDyI0jwMNnP-4.1569475096.fit_scale.size_1182x667.jpg'
    }
  ]);

  const addToCart = (product) => {
    setCart([...Cart, {...product}]);
  }

  const removeFromCart = (productToRemove) =>{
    setCart(Cart.filter(product => product !== productToRemove));
  }

  const navigateTo = (nextPage)=>{
    setPage(nextPage);
  }
  
  const renderProducts = () => (
    <>
    <h1>Products</h1>
        <div className="products">
          {product.map((product, idx) => (
            <div className="product" key={idx}>
              <h3>{product.name}</h3>
              <h4>{product.cost}</h4>
              <img src={product.image} alt={product.name}/>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
      </div>
      </>
  )

  const renderCart = () => (
    <>
    <h1>Cart</h1>
        <div className="cart">
          {Cart.map((product, idx) => (
            <div className="product" key={idx}>
              <h3>{product.name}</h3>
              <h4>{product.cost}</h4>
              <img src={product.image} alt={product.name}/>
              <button onClick={() => removeFromCart(product)}>Remove</button>
            </div>
          ))}
      </div>
    </>
  )

  const renderLogin = () => (
    <>
    <h1>Login</h1>
    <div className="login">
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login</title>
        <link rel="stylesheet" href="login-page.css" />
        <main id="main-holder">
          <h1 id="login-header">Login</h1>
          <div id="login-error-msg-holder">
            <p id="login-error-msg">Invalid username <span id="error-msg-second-line">and/or password</span></p>
          </div>
          <form id="login-form">
            <input type="text" name="username" id="username-field" className="login-form-field" placeholder="Username" />
            <input type="password" name="password" id="password-field" className="login-form-field" placeholder="Password" />
            <input type="submit" defaultValue="Login" id="login-form-submit" />
          </form>
        </main>
      </div>
    </>
  )

  return (
    <div className="App">
      <header>
        <button onClick={() => navigateTo(PAGE_CART)}>Go to Cart({Cart.length})</button>

        <button onClick={() => navigateTo(PAGE_PRODUCTS)}>View Products</button>

        <button onClick={() => navigateTo(PAGE_LOGIN)}>Login</button>
      </header>
      {page === PAGE_PRODUCTS && renderProducts()}
      {page === PAGE_CART && renderCart()}
      {page === PAGE_LOGIN && renderLogin()}
    </div>
  );
}

export default App;
