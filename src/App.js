// import logo from './logo.svg';
import './App.css';
import Nav from "./navbar";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { products } from "./Products"
// import DisplayProducts from "./displayProducts"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 'def',
      listNum: '',
      products: products,
    };
  }

  onIncrement = (addvalue) => {
    if (addvalue.value < 10) {
      const updatedValue = addvalue.value++;
      this.setState({ updatedValue });
    }
  };
  onDecrement = (decvalue) => {
    if (decvalue.value > 0) {
      const updatedValue = decvalue.value--;
      this.setState({ updatedValue });
    }
  };
  myFunction = (listNum, val) => {
    listNum.sort((a, b) => {
      if (val === 'Normal') {
        return a.id - b.id;
      } else if (val === 'Lowest') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    this.setState({ val });
  };

  // const [cartItems, setCartItems] = useState([]);

  render() {
    return (
      {},
      (
        <div className="App">
          <Nav
            totalValue={this.state.products
              .map((prod) => prod.value)
              .reduce((acc, curr, index) => acc + curr, 0)}
            prods={this.state.products}
            onIncrement={this.onIncrement}
            onDecrement={this.onDecrement}
            myFunction={this.myFunction}
          />
          {/* <DisplayProducts products={this.state.products} onIncrement={this.onIncrement}
            onDecrement={this.onDecrement} /> */}
        </div>
      )
    );
  }
}

export default App;
