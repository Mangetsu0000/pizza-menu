//webpack is module bundler experts the entry point to be called index.js
import React from "react";
import ReactDOM from "react-dom/client";
//import css file
import "./index.css";

//Pizza data
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

//App function component
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  // in line style is defined with a js object in JSX
  const style = { color: "red", fontSize: "55px", textTransform: "uppercase" };
  return (
    // <h1 style={style} className="header">
    //   Jo MAMA Pizza
    // </h1>
    <header className="header">
      <h1>Jo MAMA Pizza</h1>
    </header>
  );
}
function Menu() {
  //if we use pizzaData for the condition and it's enpty arry it is still a truthy value and the ul will be rendered. We use pizzaData.length to get a true or false value to make sure it deson't get rendered in case it is empty
  const pizzasNum = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {/* we pass the props into the child components like attributes */}
      {/* <Pizza
        name="Pizza Salamino"
        ingredients="Tomato, mozarella, and pepperoni"
        image="pizzas/salamino.jpg"
        //when you pass numbers pass it in js mode a.e price = {10}
        price={10}
      /> */}
      {/* conditional redndering with && operator */}
      {/* {pizzasNum > 0 && (
        <ul className="pizzas">
          {pizzaData.map((_pizza) => (
            //just pass a prop with the object iteration as a prop to child component
            <Pizza pizzaObj={_pizza} key={_pizza.name} />
          ))}
        </ul>
      )} */}
      {pizzasNum > 0 ? (
        <>
          <p>An Italian wanna be pizzaria, but no MamaMia </p>
          <ul className="pizzas">
            {pizzaData.map((_pizza) => (
              //just pass a prop with the object iteration as a prop to child component
              <Pizza pizzaObj={_pizza} key={_pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>"we ran out of pizza fam!"</p>
      )}
    </main>
  );
}

//Pizza function component
//props object is passed as a parameter of the child components function
function Pizza({ pizzaObj }) {
  //multiple returns only first one works obv. used to not display based on a condition
  // if (pizzaObj.soldOut) return null;
  return (
    <li className={!pizzaObj.soldOut ? "pizza" : "pizza sold-out"}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price + 3}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openingHour = 8;
  const closingHour = 22;
  const isOpen = hour >= openingHour && hour <= closingHour;
  // return React.createElement("footer", null, 'We"re serving yo MAMA!');
  return (
    <footer className="footer">
      {/* this is basically conditional redering ngIf
      {isOpen && (
        <div className="order">
          <p>{`${new Date().toLocaleTimeString()} We"re serving yo MAMA!`}</p>
        </div>
      )} */}
      {isOpen ? (
        <Order closingHour={closingHour} openingHour={closingHour} />
      ) : (
        <p>{`${new Date().toLocaleTimeString()} We closed G!`}</p>
      )}
    </footer> // to enter js mode {js shit here}
  );
}

function Order({ closingHour, openingHour }) {
  return (
    <div className="order">
      <p>
        We"re serving yo MAMA! from {openingHour}:00 till ${closingHour}:00
      </p>
    </div>
  );
}

//rendering App component into the div with id 'root' inside public/index.html
const root = ReactDOM.createRoot(document.getElementById("root"));
//wrap <App/> inside the <React.StrictMode/> componnet to enable strict mode
//NB: during dev it renders components twice to find bugs and react will check if outdated part of react API
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
