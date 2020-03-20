import React, { Component } from "react";
import Products from "../components/shop/products";
import Basket from "../components/shop/basket";
import Filter from "../components/shop/filter";

import "./styles.css";
class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterdProducts: [],
      products: [],
      filter_framework: "",
      filter_language: "",
      filter_price_range: [100, 3000],
      filter_sort: "",
      filter_numOfOrders: "",
      filter_work_time: [10, 5000],
      filter_operating_system: "",
      cartItems: []
    };
  }
  componentWillMount() {
    console.log("did_mount");
    fetch("http://localhost:8000/products")
      .then(res => res.json())
      .then(data =>
        this.setState({
          products: data,
          filterdProducts: data
        })
      )
      .catch(err => {
        console.log(err);
      })
      .finally(console.log("finished"));
    if (localStorage.getItem("cartItems")) {
      this.setState({
        cartItems: JSON.parse(localStorage.getItem("cartItems"))
      });
    }
  }

  hendelResetListOfProducts = () => {
    this.setState({
      filterdProducts: this.state.products,
      filter_framework: "",
      filter_language: "",
      filter_price_range: [100, 3000],
      filter_sort: "",
      filter_numOfOrders: "",
      filter_work_time: [10, 5000],
      filter_operating_system: ""
    });
  };
  handelChangeFramework = event => {
    this.setState({
      filter_framework: event.target.value
    });
    console.log("Framework: ", event.target.value);
    if (event.target.value !== "") {
      this.filterProductsByFramework();
    }
  };
  handelChangeLanguage = event => {
    this.setState({
      filter_language: event.target.value
    });
    console.log("language: ", event.target.value);
    if (event.target.value !== "") {
      this.filterProductsByLanguage();
    }
  };

  handelChangeNumOfOrders = event => {
    this.setState({
      filter_numOfOrders: event.target.value
    });
    if (event.target.value !== "") {
      this.sortProductsNumOfOrders();
    }
  };
  handelChangeWorkTime = (event, new_value) => {
    this.setState({
      filter_work_time: new_value
    });
    if (event.target.value !== "") {
      this.filterProductsByWorkTime();
    }
  };
  handelChangeOperationSystem = event => {
    this.setState({ filter_operating_system: event.target.value });
    if (event.target.value !== "") {
      this.filterProductsByOperationSystem();
    }
  };
  handelChangeSortPrice = event => {
    this.setState({
      filter_sort: event.target.value
    });
    if (event.target.value !== "") {
      this.sortProductsPrice();
    }
  };
  handleChangePriceRange = (event, new_value) => {
    this.setState({
      filter_price_range: new_value
    });
    if (event.target.value !== "") {
      this.filterProductsByPriceRange();
    }
  };

  sortProductsPrice = () => {
    this.setState(state => {
      if (state.filter_sort !== "") {
        state.filterdProducts.sort((a, b) =>
          state.filter_sort === "Lowest to highest"
            ? a.price > b.price
              ? 1
              : -1
            : a.price < b.price
            ? 1
            : -1
        );
      } else {
        state.filterdProducts.sort((a, b) => (a.id < b.id ? 1 : -1));
      }
    });
  };

  sortProductsNumOfOrders = () => {
    this.setState(state => {
      if (state.filter_numOfOrders !== "") {
        state.filterdProducts.sort((a, b) =>
          state.filter_numOfOrders === "Lowest to highest"
            ? a.numOfOrders > b.numOfOrders
              ? 1
              : -1
            : a.numOfOrders < b.numOfOrders
            ? 1
            : -1
        );
      } else {
        state.filterdProducts.sort((a, b) => (a.id < b.id ? 1 : -1));
      }
    });
  };

  filterProductsByLanguage = () => {
    const currentLanguage = this.state.filter_language;
    let newFilteredList = this.state.products.filter(product =>
      product.language.localeCompare(currentLanguage)
    );

    console.log("filtered list language", newFilteredList);
    this.setState({
      filterdProducts: newFilteredList
    });
  };
  filterProductsByWorkTime = () => {
    const higher = this.state.filter_work_time[1];
    const lower = this.state.filter_work_time[0];

    const newFilteredList = this.state.products.filter(product => {
      return product.work_time <= higher && product.work_time >= lower;
    });

    this.setState({
      filterdProducts: newFilteredList
    });
  };
  filterProductsByOperationSystem = () => {
    const currentOperationSystem = this.state.filter_operating_system;
    const newFilteredList = this.state.products.filter(product =>
      product.operating_system.localeCompare(currentOperationSystem)
    );

    this.setState({
      filterdProducts: newFilteredList
    });
  };
  filterProductsByFramework = () => {
    const currentFramework = this.state.filter_framework;
    const newFilteredList = this.state.products.filter(product =>
      product.framework.localeCompare(currentFramework)
    );

    this.setState({
      filterdProducts: newFilteredList
    });
  };
  filterProductsByPriceRange = () => {
    const lower = this.state.filter_price_range[0];
    const higher = this.state.filter_price_range[1];
    const newFilteredList = this.state.products.filter(product => {
      return product.price >= lower && product.price <= higher;
    });

    this.setState({
      filterdProducts: newFilteredList
    });
  };
  handelRemoveFromBasket = (event, item) => {
    let cartItems = this.state.cartItems;
    if (item.count > 1) {
      cartItems.forEach(elm => {
        if (item.id === elm.id) {
          elm.count -= 1;
        }
      });
    } else if (item.count === 1) {
      //remove the olt item
      cartItems = cartItems.filter(obj => obj.id !== item.id);
    }

    //save the new list
    this.setState({
      cartItems: cartItems
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  handelAddToCart = product => {
    this.setState(state => {
      const cartItems = state.cartItems;
      let productIsAlreadyIn = false;
      cartItems.forEach(item => {
        console.log("item", item);

        if (item.id === product.id) {
          productIsAlreadyIn = true;
          item.count++;
        }
      });
      if (!productIsAlreadyIn) {
        cartItems.push({ ...product, count: 1 });
        console.log("cartItems", cartItems);
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return cartItems;
    });
    //alert(`${product.title} add to cart successfully.`);
  };

  render() {
    return (
      <div className="container-shop">
        <h1 className="shop-headline">Choose your product</h1>
        <Filter
          count={this.state.filterdProducts.length}
          framework={this.state.filter_framework}
          language={this.state.filter_language}
          price_range={this.state.filter_price_range}
          sort={this.state.filter_sort}
          numOfOrders={this.state.filter_numOfOrders}
          work_time={this.state.filter_work_time}
          operating_system={this.state.filter_operating_system}
          handelChangeFramework={this.handelChangeFramework}
          handelChangeLanguage={this.handelChangeLanguage}
          handleChangePriceRange={this.handleChangePriceRange}
          handelChangeSortPrice={this.handelChangeSortPrice}
          handelChangeNumOfOrders={this.handelChangeNumOfOrders}
          handelChangeWorkTime={this.handelChangeWorkTime}
          handelChangeOperationSystem={this.handelChangeOperationSystem}
          hendelResetListOfProducts={this.hendelResetListOfProducts}
        />
        <hr />
        <div className="row">
          <div className="col">
            <Products
              products={this.state.filterdProducts}
              handelAddToCart={this.handelAddToCart}
            />
          </div>
          <div className="col-md-2">
            <Basket
              cartItems={this.state.cartItems}
              handelRemoveFromBasket={this.handelRemoveFromBasket}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Shop;
